import { getContributions, type ContributionDay } from "@/lib/github";
import { SITE } from "@/lib/site";

const CELL = 10;
const GAP = 3;
const STEP = CELL + GAP;

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
  const width = weeks.length * STEP - GAP;
  const height = 7 * STEP - GAP;

  return (
    <div className="heat">
      <svg viewBox={`0 0 ${width} ${height}`} role="img" aria-label={`${total} contributions in the last year`}>
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
    </div>
  );
}
