import { PreviewSvg, TechRow } from "@/components/tech";
import type { Project } from "@/lib/content";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

export function ProjectCard({ project }: { project: Project }) {
  const chip = cn("chip", project.statusKind);
  return (
    <article className="pcard">
      <PreviewSvg kind={project.preview} />
      <div className="body">
        <h3>
          {project.name} <span className={chip}>{project.status}</span>
        </h3>
        <p>{project.dek}</p>
        <TechRow tags={project.tags} />
        <div className="mt-3 flex gap-2">
          {project.live ? (
            <a className="btn accent" href={SITE.github} target="_blank" rel="noreferrer">
              Live
            </a>
          ) : null}
          {project.code ? (
            <a className="btn soft" href={SITE.github} target="_blank" rel="noreferrer">
              Code
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
