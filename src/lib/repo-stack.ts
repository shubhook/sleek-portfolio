import { z } from "zod";

import type { Project } from "@/lib/content";
import { detectStack, type TechKey } from "@/lib/tech";

const manifestSchema = z.object({
  dependencies: z.record(z.string(), z.string()).optional(),
  devDependencies: z.record(z.string(), z.string()).optional(),
});

const PROBES = ["Dockerfile", "docker-compose.yml", "compose.yaml"];

function raw(repo: string, file: string) {
  return `https://raw.githubusercontent.com/${repo}/HEAD/${file}`;
}

async function readManifest(repo: string, file: string): Promise<string[]> {
  const res = await fetch(raw(repo, file), { next: { revalidate: 3600 } });
  if (!res.ok) return [];
  const parsed = manifestSchema.safeParse(await res.json().catch(() => null));
  if (!parsed.success) return [];
  return [
    ...Object.keys(parsed.data.dependencies ?? {}),
    ...Object.keys(parsed.data.devDependencies ?? {}),
  ];
}

async function exists(repo: string, file: string) {
  const res = await fetch(raw(repo, file), { method: "HEAD", next: { revalidate: 3600 } });
  return res.ok;
}

export async function getRepoStack(project: Project): Promise<TechKey[]> {
  try {
    const [deps, files] = await Promise.all([
      Promise.all(project.manifests.map((file) => readManifest(project.repo, file))),
      Promise.all(PROBES.map(async (file) => ((await exists(project.repo, file)) ? file : null))),
    ]);
    const stack = detectStack({
      deps: new Set(deps.flat()),
      files: new Set(files.filter((file): file is string => file !== null)),
    });
    return stack.length > 0 ? stack : project.fallbackStack;
  } catch {
    return project.fallbackStack;
  }
}

export async function getStacks(projects: Project[]) {
  const stacks = await Promise.all(projects.map(getRepoStack));
  return Object.fromEntries(projects.map((p, i) => [p.slug, stacks[i]])) as Record<string, TechKey[]>;
}
