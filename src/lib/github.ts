import { SITE } from "@/lib/site";

export type ContributionDay = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
};

export type Contributions = {
  total: number;
  weeks: ContributionDay[][];
};

const DAY = /<td[^>]*data-date="(\d{4}-\d{2}-\d{2})"[^>]*>/g;
const TIP = /<tool-tip[^>]*for="([^"]+)"[^>]*>([^<]*)<\/tool-tip>/g;

function attr(tag: string, name: string) {
  return tag.match(new RegExp(`${name}="([^"]*)"`))?.[1];
}

export async function getContributions(
  user: string = SITE.githubHandle,
): Promise<Contributions | null> {
  const res = await fetch(`https://github.com/users/${user}/contributions`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) return null;
  const html = await res.text();

  const counts = new Map<string, number>();
  for (const [, id, text] of html.matchAll(TIP)) {
    const n = text.match(/^(\d[\d,]*) contribution/)?.[1];
    counts.set(id, n ? Number(n.replace(/,/g, "")) : 0);
  }

  const days: ContributionDay[] = [];
  for (const [tag, date] of html.matchAll(DAY)) {
    const id = attr(tag, "id") ?? "";
    const level = Number(attr(tag, "data-level") ?? 0) as ContributionDay["level"];
    days.push({ date, level, count: counts.get(id) ?? 0 });
  }
  if (days.length === 0) return null;

  days.sort((a, b) => a.date.localeCompare(b.date));

  const weeks: ContributionDay[][] = [];
  for (const day of days) {
    const weekday = new Date(`${day.date}T00:00:00Z`).getUTCDay();
    if (weeks.length === 0 || weekday === 0) weeks.push([]);
    weeks[weeks.length - 1].push(day);
  }

  const heading = html.match(/js-contribution-activity-description[^>]*>\s*([\d,]+)\s*contribution/);
  const total = heading
    ? Number(heading[1].replace(/,/g, ""))
    : days.reduce((sum, day) => sum + day.count, 0);

  return { total, weeks };
}
