import { SITE } from "@/lib/site";

// PRs to repos owned by these accounts are not outside contributions.
export const EXCLUDED_OWNERS = ["shubhook", "shiphook"];

// Entries are "owner/repo" for a whole repo or "owner/repo#123" for one PR. Case does not matter.
export const HIDDEN: string[] = [];

// Pinned entries are listed first, in this order. The rest follow, newest first.
export const PINNED: string[] = [];

const REVALIDATE = 6 * 60 * 60;

export type PullRequest = {
  url: string;
  title: string;
  number: number;
  owner: string;
  repo: string;
  status: "merged" | "open";
  date: string;
};

type SearchItem = {
  html_url: string;
  title: string;
  number: number;
  state: "open" | "closed";
  draft?: boolean;
  created_at: string;
  repository_url: string;
  pull_request?: { merged_at: string | null };
};

function matches(list: string[], repo: string, number: number) {
  const keys = [repo, `${repo}#${number}`].map((key) => key.toLowerCase());
  return list.findIndex((entry) => keys.includes(entry.toLowerCase()));
}

function toPullRequest(item: SearchItem): PullRequest | null {
  const [owner, repo] = item.repository_url.split("/").slice(-2);
  if (!owner || !repo) return null;
  if (EXCLUDED_OWNERS.some((name) => name.toLowerCase() === owner.toLowerCase())) return null;

  const mergedAt = item.pull_request?.merged_at;
  if (mergedAt) {
    return { url: item.html_url, title: item.title, number: item.number, owner, repo, status: "merged", date: mergedAt };
  }
  // Drafts are not under review yet, and closed without merging means rejected.
  if (item.state !== "open" || item.draft) return null;
  return { url: item.html_url, title: item.title, number: item.number, owner, repo, status: "open", date: item.created_at };
}

export async function getPullRequests(
  user: string = SITE.githubHandle,
): Promise<PullRequest[] | null> {
  const query = ["is:pr", `author:${user}`, ...EXCLUDED_OWNERS.map((owner) => `-user:${owner}`)].join(" ");
  const headers: HeadersInit = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  };
  if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;

  const res = await fetch(
    `https://api.github.com/search/issues?q=${encodeURIComponent(query)}&sort=created&order=desc&per_page=100`,
    { headers, next: { revalidate: REVALIDATE }, signal: AbortSignal.timeout(5000) },
  ).catch(() => null);
  if (!res?.ok) return null;
  const data = (await res.json().catch(() => null)) as { items?: SearchItem[] } | null;
  if (!Array.isArray(data?.items)) return null;

  const prs = data.items
    .map(toPullRequest)
    .filter((pr): pr is PullRequest => pr !== null)
    .filter((pr) => matches(HIDDEN, `${pr.owner}/${pr.repo}`, pr.number) === -1);

  const rank = (pr: PullRequest) => {
    const index = matches(PINNED, `${pr.owner}/${pr.repo}`, pr.number);
    return index === -1 ? PINNED.length : index;
  };
  return prs.sort((a, b) => rank(a) - rank(b) || b.date.localeCompare(a.date));
}
