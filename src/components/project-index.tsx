"use client";

import { GithubLogo } from "@phosphor-icons/react";
import * as React from "react";

import { ProjectCard } from "@/components/project-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PROJECTS } from "@/lib/content";
import { projectFilterSchema, type ProjectFilter } from "@/lib/schemas";
import { SITE } from "@/lib/site";

const FILTERS: { value: ProjectFilter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "live", label: "Live" },
  { value: "learning", label: "Learning" },
  { value: "dead", label: "Dead" },
];

function count(value: ProjectFilter) {
  if (value === "all") return PROJECTS.length;
  return PROJECTS.filter((project) => project.filter === value).length;
}

function filtered(value: ProjectFilter) {
  if (value === "all") return PROJECTS;
  return PROJECTS.filter((project) => project.filter === value);
}

export function ProjectIndex() {
  const [filter, setFilter] = React.useState<ProjectFilter>("all");
  const projects = filtered(filter);

  return (
    <>
      <div className="toolbar">
        <Tabs
          value={filter}
          onValueChange={(value) => {
            const parsed = projectFilterSchema.safeParse(value);
            if (parsed.success) setFilter(parsed.data);
          }}
        >
          <TabsList>
            {FILTERS.map((item) => (
              <TabsTrigger key={item.value} value={item.value}>
                {item.label} <span className="n">{count(item.value)}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          {FILTERS.map((item) => (
            <TabsContent key={item.value} value={item.value} className="hidden" />
          ))}
        </Tabs>
        <a className="btn soft" href={SITE.github} target="_blank" rel="noreferrer">
          <GithubLogo size={14} /> GitHub
        </a>
      </div>
      <div className="pgrid">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </>
  );
}
