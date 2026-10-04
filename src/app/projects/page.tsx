import type { Metadata } from "next";

import { ProjectIndex } from "@/components/project-index";
import { QuoteCard, SiteFooter } from "@/components/quote-card";
import { PROJECTS } from "@/lib/content";
import { getStacks } from "@/lib/repo-stack";

export const metadata: Metadata = {
  title: "Projects",
};

export default async function ProjectsPage() {
  const stacks = await getStacks(PROJECTS);
  return (
    <>
      <div className="page-head">
        <h1>Projects</h1>
      </div>
      <ProjectIndex projects={PROJECTS} stacks={stacks} />
      <QuoteCard />
      <SiteFooter left={`${PROJECTS.length} listed`} right="github.com/shubhook" />
    </>
  );
}
