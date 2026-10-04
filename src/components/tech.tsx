import type { ReactNode } from "react";

import type { PreviewKind, TechKey } from "@/lib/content";

const TECH: Record<TechKey, ReactNode> = {
  ts: (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden>
      <rect width="16" height="16" rx="2" fill="#3178C6" />
      <text x="8" y="12" textAnchor="middle" fontSize="7" fontWeight="700" fontFamily="system-ui" fill="#fff">
        TS
      </text>
    </svg>
  ),
  react: (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden>
      <circle cx="8" cy="8" r="2" fill="#149ECA" />
      <ellipse cx="8" cy="8" rx="7" ry="3" fill="none" stroke="#149ECA" strokeWidth="1.2" />
      <ellipse cx="8" cy="8" rx="7" ry="3" fill="none" stroke="#149ECA" strokeWidth="1.2" transform="rotate(60 8 8)" />
      <ellipse cx="8" cy="8" rx="7" ry="3" fill="none" stroke="#149ECA" strokeWidth="1.2" transform="rotate(-60 8 8)" />
    </svg>
  ),
  pg: (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden>
      <ellipse cx="8" cy="9" rx="5" ry="6" fill="#336791" />
      <circle cx="6.2" cy="7" r="1" fill="#fff" />
    </svg>
  ),
  redis: (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden>
      <rect x="2" y="4" width="12" height="3" rx="1" fill="#DC382D" />
      <rect x="3" y="8" width="10" height="2.2" rx="1" fill="#A41E11" />
      <rect x="4" y="11" width="8" height="2" rx="1" fill="#DC382D" />
    </svg>
  ),
  py: (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden>
      <path d="M8 2c2.5 0 3 .5 3 2.5V6H6.5C4.5 6 4 6.8 4 8.5S4.5 11 6.5 11H7V9h5.5c2 0 2.5-.8 2.5-2.5S14.5 4 12.5 4H11V3.5C11 2 10 2 8 2z" fill="#3776AB" />
      <circle cx="6.8" cy="4.2" r=".7" fill="#FFD43B" />
      <path d="M8 14c-2.5 0-3-.5-3-2.5V10h4.5c2 0 2.5-.8 2.5-2.5S11.5 5 9.5 5H9v2H3.5C1.5 7 1 7.8 1 9.5S1.5 12 3.5 12H5v.5C5 14 6 14 8 14z" fill="#FFD43B" />
      <circle cx="9.2" cy="11.8" r=".7" fill="#3776AB" />
    </svg>
  ),
  node: (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden>
      <polygon points="8,1 14.5,4.5 14.5,11.5 8,15 1.5,11.5 1.5,4.5" fill="#5FA04F" />
    </svg>
  ),
  go: (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden>
      <text x="8" y="12" textAnchor="middle" fontSize="8" fontWeight="700" fontFamily="system-ui" fill="#00ADD8">
        Go
      </text>
    </svg>
  ),
  ws: (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden>
      <path d="M3 8h3l1.5 4L10 4l1.5 4H13" fill="none" stroke="#111" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  ),
  llm: (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden>
      <rect x="3" y="3" width="10" height="10" rx="3" fill="#7C5CFC" />
    </svg>
  ),
  ext: (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden>
      <circle cx="8" cy="8" r="6" fill="#EA4335" />
      <circle cx="8" cy="8" r="2.4" fill="#fff" />
    </svg>
  ),
  nse: (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden>
      <polyline points="2,12 6,7 9,10 14,4" fill="none" stroke="#F7931A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  web: (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden>
      <polygon points="2,2 3.2,14 8,15.5 12.8,14 14,2" fill="#E34F26" />
      <path d="M8 3.2h4.4l-.9 9.2L8 13.6V3.2z" fill="#F06529" />
    </svg>
  ),
  cursor: (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden>
      <circle cx="8" cy="8" r="6.5" fill="#111" />
      <circle cx="8" cy="8" r="3" fill="#fff" />
    </svg>
  ),
};

export function TechRow({ tags }: { tags: TechKey[] }) {
  return (
    <div className="techs">
      {tags.map((key) => (
        <span className="tech" key={key}>
          {TECH[key]}
        </span>
      ))}
    </div>
  );
}

export function PreviewSvg({ kind }: { kind: PreviewKind }) {
  const ink = "var(--ink)";
  const line = "var(--line)";
  const paper = "var(--paper)";
  const acc = "var(--accent)";
  const ok = "var(--ok)";
  const bg = "var(--bg)";

  if (kind === "chat") {
    return (
      <svg className="preview" viewBox="0 0 320 128" preserveAspectRatio="xMidYMid slice" aria-hidden>
        <rect width="320" height="128" fill={bg} />
        <rect x="12" y="14" width="140" height="22" rx="11" fill={paper} stroke={line} />
        <rect x="168" y="42" width="140" height="22" rx="11" fill={ink} />
        <rect x="12" y="70" width="110" height="22" rx="11" fill={paper} stroke={line} />
        <circle cx="28" cy="110" r="6" fill={ok} />
        <rect x="42" y="104" width="80" height="12" rx="6" fill={line} />
      </svg>
    );
  }
  if (kind === "cards") {
    return (
      <svg className="preview" viewBox="0 0 320 128" preserveAspectRatio="xMidYMid slice" aria-hidden>
        <rect width="320" height="128" fill={bg} />
        <rect x="14" y="16" width="90" height="96" rx="10" fill={paper} stroke={line} />
        <rect x="24" y="28" width="70" height="8" rx="4" fill={ink} />
        <rect x="24" y="44" width="54" height="6" rx="3" fill={line} />
        <rect x="115" y="16" width="90" height="96" rx="10" fill={paper} stroke={line} />
        <rect x="125" y="28" width="70" height="8" rx="4" fill={ink} />
        <rect x="216" y="16" width="90" height="96" rx="10" fill={acc} />
      </svg>
    );
  }
  if (kind === "chart") {
    return (
      <svg className="preview" viewBox="0 0 320 128" preserveAspectRatio="xMidYMid slice" aria-hidden>
        <rect width="320" height="128" fill={bg} />
        <polyline points="16,96 56,72 96,80 136,40 176,52 216,28 256,36 304,18" fill="none" stroke={acc} strokeWidth="3" strokeLinejoin="round" />
        <line x1="16" y1="110" x2="304" y2="110" stroke={line} />
      </svg>
    );
  }
  if (kind === "bars") {
    return (
      <svg className="preview" viewBox="0 0 320 128" preserveAspectRatio="xMidYMid slice" aria-hidden>
        <rect width="320" height="128" fill={bg} />
        <rect x="24" y="28" width="200" height="14" rx="7" fill={line} />
        <rect x="24" y="28" width="150" height="14" rx="7" fill={acc} />
        <rect x="24" y="56" width="200" height="14" rx="7" fill={line} />
        <rect x="24" y="56" width="90" height="14" rx="7" fill={ok} />
        <rect x="24" y="84" width="200" height="14" rx="7" fill={line} />
        <rect x="24" y="84" width="170" height="14" rx="7" fill={ink} />
      </svg>
    );
  }
  if (kind === "notes") {
    return (
      <svg className="preview" viewBox="0 0 320 128" preserveAspectRatio="xMidYMid slice" aria-hidden>
        <rect width="320" height="128" fill={bg} />
        <rect x="20" y="16" width="280" height="96" rx="10" fill={paper} stroke={line} />
        <rect x="36" y="32" width="160" height="8" rx="4" fill={ink} />
        <rect x="36" y="50" width="240" height="6" rx="3" fill={line} />
        <rect x="36" y="66" width="210" height="6" rx="3" fill={line} />
        <rect x="36" y="82" width="180" height="6" rx="3" fill={line} />
      </svg>
    );
  }
  return (
    <svg className="preview" viewBox="0 0 320 128" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <rect width="320" height="128" fill={bg} />
      <rect x="40" y="24" width="70" height="80" rx="8" fill={paper} stroke={line} />
      <rect x="124" y="24" width="70" height="80" rx="8" fill={line} />
      <rect x="208" y="24" width="70" height="80" rx="8" fill={paper} stroke={line} />
    </svg>
  );
}
