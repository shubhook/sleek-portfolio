export type TechKey =
  | "typescript"
  | "react"
  | "tailwind"
  | "vite"
  | "bun"
  | "node"
  | "express"
  | "websocket"
  | "postgres"
  | "prisma"
  | "redis"
  | "gemini"
  | "zod"
  | "radix"
  | "docker"
  | "vitest";

type Signals = { deps: Set<string>; files: Set<string> };

const has = (deps: Set<string>, ...names: string[]) => names.some((name) => deps.has(name));
const hasPrefix = (deps: Set<string>, prefix: string) =>
  [...deps].some((name) => name.startsWith(prefix));

export const TECH: { key: TechKey; name: string; detect: (s: Signals) => boolean }[] = [
  { key: "typescript", name: "TypeScript", detect: ({ deps }) => has(deps, "typescript") || hasPrefix(deps, "@types/") },
  { key: "react", name: "React", detect: ({ deps }) => has(deps, "react") },
  { key: "tailwind", name: "Tailwind CSS", detect: ({ deps }) => has(deps, "tailwindcss") },
  { key: "vite", name: "Vite", detect: ({ deps }) => has(deps, "vite") },
  { key: "bun", name: "Bun", detect: ({ deps }) => has(deps, "@types/bun", "bun-types", "bun-plugin-tailwind") },
  {
    key: "node",
    name: "Node.js",
    detect: ({ deps }) =>
      has(deps, "ts-node", "@types/node", "tsx") && !has(deps, "@types/bun", "bun-types"),
  },
  { key: "express", name: "Express", detect: ({ deps }) => has(deps, "express") },
  { key: "websocket", name: "WebSockets", detect: ({ deps }) => has(deps, "ws", "socket.io") },
  { key: "postgres", name: "PostgreSQL", detect: ({ deps }) => has(deps, "pg", "postgres", "@prisma/adapter-pg") },
  { key: "prisma", name: "Prisma", detect: ({ deps }) => has(deps, "prisma", "@prisma/client") },
  { key: "redis", name: "Redis", detect: ({ deps }) => has(deps, "redis", "ioredis") },
  { key: "gemini", name: "Gemini", detect: ({ deps }) => has(deps, "@google/genai", "@google/generative-ai") },
  { key: "zod", name: "Zod", detect: ({ deps }) => has(deps, "zod") },
  { key: "radix", name: "Radix UI", detect: ({ deps }) => hasPrefix(deps, "@radix-ui/") },
  {
    key: "docker",
    name: "Docker",
    detect: ({ files }) => has(files, "Dockerfile", "docker-compose.yml", "compose.yaml"),
  },
  { key: "vitest", name: "Vitest", detect: ({ deps }) => has(deps, "vitest") },
];

export const TECH_NAME = Object.fromEntries(TECH.map((t) => [t.key, t.name])) as Record<TechKey, string>;

export function detectStack(signals: Signals): TechKey[] {
  return TECH.filter((tech) => tech.detect(signals)).map((tech) => tech.key);
}
