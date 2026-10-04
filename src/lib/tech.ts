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

export const TECH_NAME: Record<TechKey, string> = {
  typescript: "TypeScript",
  react: "React",
  tailwind: "Tailwind CSS",
  vite: "Vite",
  bun: "Bun",
  node: "Node.js",
  express: "Express",
  websocket: "WebSockets",
  postgres: "PostgreSQL",
  prisma: "Prisma",
  redis: "Redis",
  gemini: "Gemini",
  zod: "Zod",
  radix: "Radix UI",
  docker: "Docker",
  vitest: "Vitest",
};
