import type { Metadata } from "next";

import { PageShell } from "@/components/page-shell";
import { ProjectIndex } from "@/components/project-index";
import { QuoteCard, SiteFooter } from "@/components/quote-card";
import { SiteHeader } from "@/components/site-header";
import { PROJECTS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <PageShell>
      <SiteHeader />
      <div className="page-head">
        <h1>Projects</h1>
        <p>Shipped, still learning, and one that died in public.</p>
      </div>
      <ProjectIndex />
      <QuoteCard />
      <SiteFooter left={`${PROJECTS.length} listed`} right="github.com/shubhook" />
    </PageShell>
  );
}
