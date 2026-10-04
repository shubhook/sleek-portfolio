export type TechKey =
  | "ts"
  | "react"
  | "pg"
  | "redis"
  | "py"
  | "node"
  | "go"
  | "ws"
  | "llm"
  | "ext"
  | "nse"
  | "web"
  | "cursor";

export type PreviewKind = "chat" | "cards" | "chart" | "bars" | "notes" | "gallery";

export type PostTag = "building" | "agents" | "notes" | "writing";

export type Post = {
  slug: string;
  title: string;
  dek: string;
  tags: PostTag[];
  date: string;
  dateLabel: string;
  minutes: number;
  body: string[];
  quote?: string;
};

export type Project = {
  slug: string;
  name: string;
  status: string;
  statusKind: "ok" | "accent" | "warn" | "dead" | "";
  dek: string;
  tags: TechKey[];
  code: boolean;
  live: boolean;
  preview: PreviewKind;
  filter: "live" | "learning" | "dead" | "shipped";
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
  {
    org: "InvestRight",
    role: "NSE / BSE analysis bot",
    when: "2026",
    now: false,
  },
] as const;

export const POSTS: Post[] = [
  {
    slug: "i-asked-an-agent-to-write-my-site",
    title: "I asked an agent to write my site. Then I deleted it.",
    dek: "The copy was smooth, interchangeable, and sounded like nobody.",
    tags: ["agents", "writing"],
    date: "2026-10-04",
    dateLabel: "Oct 4, 2026",
    minutes: 6,
    body: [
      "It wrote a hero that could sit on anyone's domain. Passionate about crafting digital experiences. Full stack, of course. A list of skills in little rounded boxes. I sounded employable and imaginary.",
      "The tell is not the vocabulary. It is the missing specific. There is no websocket that failed at 1am. No repo named artify that I am still a bit ashamed of. No opinion about food.",
      "So I threw the draft out and wrote this instead. If an agent helps me ship Huddle faster, fine. If it writes the about section, I will delete that too.",
    ],
    quote:
      "The layout can still be tight. The buttons can still be good. The sentences have to come from a person who has actually been in the room.",
  },
  {
    slug: "websockets-make-more-sense",
    title: "Websockets make more sense when the room is empty",
    dek: "Huddle started as how does this protocol work, then became a chat app so the bugs had somewhere to live.",
    tags: ["building"],
    date: "2026-06-05",
    dateLabel: "Jun 5, 2026",
    minutes: 5,
    body: [
      "I did not sit down to ship a chat app. I sat down because the websocket handshake kept looking like magic in other people's READMEs, and I wanted it to fail in a terminal I owned.",
      "Huddle is the room that grew around that. Presence, Postgres, Redis. When nobody else is in it, you can actually see the protocol.",
    ],
  },
  {
    slug: "stop-generating-the-same-project",
    title: "Stop generating the same project",
    dek: "SkillSync exists because build a todo app is not a stack. Matching ideas to what you already know is the job.",
    tags: ["building"],
    date: "2025-08-08",
    dateLabel: "Aug 8, 2025",
    minutes: 4,
    body: [
      "Every generator wants to hand you a todo app. I got tired of that. SkillSync matches a project idea to a stack you already have, so the first week is not spent relearning CRUD.",
      "If the idea only works as a generic list with a database, it is not an idea yet.",
    ],
  },
  {
    slug: "claude-usage-locally",
    title: "Claude usage, locally, because I don't trust dashboards",
    dek: "claude-meter never leaves the machine. Their UI still doesn't show context per chat.",
    tags: ["agents"],
    date: "2026-09-06",
    dateLabel: "Sep 6, 2026",
    minutes: 4,
    body: [
      "The official UI hid the one number I needed: context left in this chat. So I tracked it on-device. Nothing leaves the machine.",
      "I still do not want a dashboard that is nicer than the truth.",
    ],
  },
  {
    slug: "the-startup-that-failed-miserably",
    title: "The startup that failed miserably",
    dek: "Artify. First draft. Public, because hiding it would be worse.",
    tags: ["notes"],
    date: "2025-03-11",
    dateLabel: "Mar 11, 2025",
    minutes: 4,
    body: [
      "Artify is still on GitHub. I am not going to write a post-mortem that sounds like a TED talk. It was a first draft of a company and it died.",
      "Leaving it public is the part I can still do correctly.",
    ],
  },
  {
    slug: "notes-from-an-allocator",
    title: "Notes from an allocator I am not finished with",
    dek: "Learning memory the slow way. Write it, watch it leak, then read the chapter I skipped.",
    tags: ["notes"],
    date: "2026-01-12",
    dateLabel: "Jan 12, 2026",
    minutes: 5,
    body: [
      "I am learning allocators by writing one badly, watching it leak, then going back to the chapter I skipped.",
      "The notes are for me. If they help you, fine. I am not finished.",
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    slug: "huddle",
    name: "Huddle",
    status: "now",
    statusKind: "ok",
    dek: "A live team chat I built to understand websockets.",
    tags: ["ts", "pg", "redis", "ws"],
    code: true,
    live: false,
    preview: "chat",
    filter: "shipped",
  },
  {
    slug: "skillsync",
    name: "SkillSync",
    status: "live",
    statusKind: "accent",
    dek: "Project ideas matched to a stack, not another CRUD app.",
    tags: ["ts", "react", "llm"],
    code: true,
    live: true,
    preview: "cards",
    filter: "live",
  },
  {
    slug: "investright",
    name: "InvestRight",
    status: "bot",
    statusKind: "warn",
    dek: "Autonomous analysis for NSE and BSE. Python.",
    tags: ["py", "nse"],
    code: true,
    live: false,
    preview: "chart",
    filter: "shipped",
  },
  {
    slug: "claude-meter",
    name: "claude-meter",
    status: "live",
    statusKind: "accent",
    dek: "Tracks Claude context on-device. Nothing leaves the machine.",
    tags: ["ext", "ts"],
    code: true,
    live: true,
    preview: "bars",
    filter: "live",
  },
  {
    slug: "marginal",
    name: "marginal",
    status: "notes",
    statusKind: "",
    dek: "Personal notes. Written when every other notes app felt like a product.",
    tags: ["ts", "react"],
    code: true,
    live: false,
    preview: "notes",
    filter: "learning",
  },
  {
    slug: "artify",
    name: "Artify",
    status: "dead",
    statusKind: "dead",
    dek: "First draft of a startup that failed miserably. Left public.",
    tags: ["web", "react"],
    code: true,
    live: false,
    preview: "gallery",
    filter: "dead",
  },
];

export function getPost(slug: string) {
  return POSTS.find((post) => post.slug === slug);
}

export function getNextPost(slug: string) {
  const index = POSTS.findIndex((post) => post.slug === slug);
  if (index < 0 || index >= POSTS.length - 1) return undefined;
  return POSTS[index + 1];
}
