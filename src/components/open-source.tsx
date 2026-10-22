import { GitMergeIcon, GitPullRequestIcon } from "@primer/octicons-react";
import Image from "next/image";

import { getPullRequests, type PullRequest } from "@/lib/open-source";
import { SITE } from "@/lib/site";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

function StatusIcon({ status }: { status: PullRequest["status"] }) {
  return status === "merged" ? (
    <GitMergeIcon className="pr-icon merged" size={16} aria-label="Merged pull request" />
  ) : (
    <GitPullRequestIcon className="pr-icon open" size={16} aria-label="Open pull request" />
  );
}

export async function OpenSource() {
  const prs = await getPullRequests();
  if (prs?.length === 0) return null;

  return (
    <section className="section">
      <h2>Open source</h2>
      {prs ? (
        prs.map((pr) => (
          <div className="pr" key={pr.url}>
            <StatusIcon status={pr.status} />
            <div className="pr-main">
              <a className="pr-title" href={pr.url} target="_blank" rel="noreferrer">
                {pr.title}
              </a>
              <div className="pr-repo">
                <Image
                  src={`https://avatars.githubusercontent.com/${pr.owner}?size=40`}
                  alt=""
                  width={16}
                  height={16}
                  unoptimized
                />
                <a href={`https://github.com/${pr.owner}/${pr.repo}`} target="_blank" rel="noreferrer">
                  {pr.owner}/{pr.repo}
                </a>
                <span>#{pr.number}</span>
              </div>
            </div>
            <div className="when">
              {pr.status === "merged" ? "Merged" : "Opened"} {formatDate(pr.date)}
            </div>
          </div>
        ))
      ) : (
        <p className="heat-caption">
          GitHub did not answer.{" "}
          <a href={`https://github.com/search?q=is%3Apr+author%3A${SITE.githubHandle}&type=pullrequests`}>
            See the pull requests
          </a>
          .
        </p>
      )}
    </section>
  );
}
