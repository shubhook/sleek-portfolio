import { getContributions, type ContributionDay } from "@/lib/github";
import { SITE } from "@/lib/site";

const CELL = 10;
const GAP = 3;
const STEP = CELL + GAP;
// Narrow screens show only the most recent weeks, newest at the right edge.
const RECENT_WEEKS = 20;

function label(day: ContributionDay) {
  const when = new Date(`${day.date}T00:00:00Z`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
  if (day.count === 0) return `No contributions on ${when}`;
  return `${day.count} contribution${day.count === 1 ? "" : "s"} on ${when}`;
}

export async function Heatmap() {
  const data = await getContributions();
  if (!data) {
    return (
      <p className="heat-caption">
        GitHub did not answer. <a href={SITE.github}>See the profile</a>.
      </p>
    );
  }

  const { weeks, total } = data;
  const summary = `${total.toLocaleString("en-US")} contribution${total === 1 ? "" : "s"} in the last year`;

  return (
    <>
      <p className="heat-count">{summary}</p>
      <div className="heat">
        <Grid weeks={weeks} className="heat-full" label={summary} />
        <Grid
          weeks={weeks.slice(-RECENT_WEEKS)}
          className="heat-recent"
          label={`Contributions in the last ${RECENT_WEEKS} weeks`}
        />
      </div>
    </>
  );
}

function Grid({
  weeks,
  className,
  label: ariaLabel,
}: {
  weeks: ContributionDay[][];
  className: string;
  label: string;
}) {
  const width = weeks.length * STEP - GAP;
  const height = 7 * STEP - GAP;

  return (
    <svg className={className} viewBox={`0 0 ${width} ${height}`} role="img" aria-label={ariaLabel}>
      {weeks.map((week, i) =>
        week.map((day) => {
          const row = new Date(`${day.date}T00:00:00Z`).getUTCDay();
          return (
            <rect
              key={day.date}
              x={i * STEP}
              y={row * STEP}
              width={CELL}
              height={CELL}
              rx={3}
              className={`heat-l${day.level}`}
            >
              <title>{label(day)}</title>
            </rect>
          );
        }),
      )}
    </svg>
  );
}
