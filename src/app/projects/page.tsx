import type { Metadata } from "next";

import { ProjectIndex } from "@/components/project-index";
import { QuoteCard, SiteFooter } from "@/components/quote-card";
import { PROJECTS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <>
      <div className="page-head">
        <h1>Projects</h1>
      </div>
      <ProjectIndex projects={PROJECTS} />
      <QuoteCard />
      <SiteFooter left={`${PROJECTS.length} listed`} right="github.com/shubhook" />
    </>
  );
}
