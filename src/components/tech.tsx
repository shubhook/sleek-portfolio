import { PlugsConnected } from "@phosphor-icons/react/dist/ssr";
import {
  siBun,
  siDocker,
  siExpress,
  siGooglegemini,
  siNodedotjs,
  siPostgresql,
  siPrisma,
  siRadixui,
  siReact,
  siRedis,
  siTailwindcss,
  siTypescript,
  siVite,
  siVitest,
  siZod,
  type SimpleIcon,
} from "simple-icons";

import { TECH_NAME, type TechKey } from "@/lib/tech";

const ICONS: Record<Exclude<TechKey, "websocket">, SimpleIcon> = {
  typescript: siTypescript,
  react: siReact,
  tailwind: siTailwindcss,
  vite: siVite,
  bun: siBun,
  node: siNodedotjs,
  express: siExpress,
  postgres: siPostgresql,
  prisma: siPrisma,
  redis: siRedis,
  gemini: siGooglegemini,
  zod: siZod,
  radix: siRadixui,
  docker: siDocker,
  vitest: siVitest,
};

export function TechIcon({ tech, size = 16 }: { tech: TechKey; size?: number }) {
  if (tech === "websocket") return <PlugsConnected size={size} weight="bold" aria-hidden />;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d={ICONS[tech].path} />
    </svg>
  );
}

export function TechRow({ stack, limit }: { stack: TechKey[]; limit?: number }) {
  const shown = limit ? stack.slice(0, limit) : stack;
  const rest = stack.length - shown.length;
  return (
    <ul className="techs" aria-label="Stack">
      {shown.map((tech) => (
        <li className="tech" key={tech} title={TECH_NAME[tech]}>
          <TechIcon tech={tech} />
          <span className="sr-only">{TECH_NAME[tech]}</span>
        </li>
      ))}
      {rest > 0 ? (
        <li className="tech tech-more" title={stack.slice(shown.length).map((t) => TECH_NAME[t]).join(", ")}>
          +{rest}
        </li>
      ) : null}
    </ul>
  );
}

export function TechList({ stack }: { stack: TechKey[] }) {
  return (
    <ul className="tech-list">
      {stack.map((tech) => (
        <li key={tech}>
          <TechIcon tech={tech} size={12} />
          {TECH_NAME[tech]}
        </li>
      ))}
    </ul>
  );
}
