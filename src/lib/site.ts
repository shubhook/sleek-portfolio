function siteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  return "http://localhost:3000";
}

export const SITE = {
  name: "Shubham Khakha",
  email: "khakhashubham@gmail.com",
  github: "https://github.com/shubhook",
  githubHandle: "shubhook",
  twitter: "https://x.com/khakha_x",
  linkedin: "https://www.linkedin.com/in/shubham-khakha/",
  buyMeACoffee: "https://buymeacoffee.com/khakha_",
  resume: "https://drive.google.com/file/d/1w1IkEKSGNM2adiIW4-t81JbhPeFBevcr/view?usp=sharing",
  url: siteUrl(),
  huddleRepo: "https://github.com/shubhook/huddle",
  huddleLive: "https://chatonhuddle.vercel.app",
  skillsyncRepo: "https://github.com/shubhook/skillsync.ai",
  skillsyncLive: "https://aiskillsync.vercel.app",
} as const;
