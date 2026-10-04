import type { StaticImageData } from "next/image";

import huddlePreview from "@/assets/projects/huddle.png";
import skillsyncPreview from "@/assets/projects/skillsync.png";
import { SITE } from "@/lib/site";
import type { TechKey } from "@/lib/tech";

export type Project = {
  slug: string;
  name: string;
  status: string;
  statusKind: "ok" | "accent" | "warn" | "dead" | "";
  dek: string;
  about: string;
  highlights: string[];
  stack: TechKey[];
  codeUrl: string;
  liveUrl?: string;
  previewImage: StaticImageData;
};

export const WORK = [
  {
    org: "Huddle",
    role: "Live team chat",
    when: "2026",
    now: true,
  },
  {
    org: "SkillSync",
    role: "Project ideas matched to a stack",
    when: "2025 to 2026",
    now: false,
  },
] as const;

export const PROJECTS: Project[] = [
  {
    slug: "huddle",
    name: "Huddle",
    status: "now",
    statusKind: "ok",
    dek: "A live team chat I built to understand websockets.",
    about: "A team chat where messages show up the moment they are sent.",
    highlights: [
      "Workspaces, channels, and invite links",
      "Messages travel over WebSockets and are acked on send",
      "Reconnects on its own and fills in what it missed",
      "Redis pub/sub keeps several API processes in sync",
      "Email or GitHub sign-in, revoked server-side on logout",
    ],
    stack: ["typescript", "bun", "express", "websocket", "postgres", "redis"],
    codeUrl: SITE.huddleRepo,
    previewImage: huddlePreview,
  },
  {
    slug: "skillsync",
    name: "SkillSync",
    status: "live",
    statusKind: "accent",
    dek: "Project ideas matched to a stack, not another CRUD app.",
    about: "Pick your stack and get project ideas that actually use it.",
    highlights: [
      "Stack picker with 48 technologies",
      "Ideas tuned to your level, time, and goal",
      "More like this, easier, or harder on any idea",
      "Bookmarks with Markdown export",
      "Shareable links that reproduce the same results",
    ],
    stack: ["typescript", "react", "vite", "tailwind", "express", "gemini"],
    codeUrl: SITE.skillsyncRepo,
    liveUrl: SITE.skillsyncLive,
    previewImage: skillsyncPreview,
  },
];
