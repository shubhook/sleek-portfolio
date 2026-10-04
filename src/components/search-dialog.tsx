"use client";

import { ArrowRight, Calendar } from "lucide-react";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { Link } from "next-view-transitions";
import * as React from "react";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Drawer, DrawerContent, DrawerTitle } from "@/components/ui/drawer";
import { useMediaQuery } from "@/hooks/use-media-query";
import { POSTS, PROJECTS } from "@/lib/content";

function hits(query: string) {
  const q = query.trim().toLowerCase();
  const posts = POSTS.filter(
    (post) =>
      !q ||
      post.title.toLowerCase().includes(q) ||
      post.dek.toLowerCase().includes(q),
  ).map((post) => ({
    href: `/blog/${post.slug}`,
    kicker: "Post",
    title: post.title,
    dek: post.dateLabel,
  }));
  const projects = PROJECTS.filter(
    (project) =>
      !q ||
      project.name.toLowerCase().includes(q) ||
      project.dek.toLowerCase().includes(q),
  ).map((project) => ({
    href: "/projects",
    kicker: "Project",
    title: project.name,
    dek: project.dek,
  }));
  return [...posts, ...projects];
}

function SearchResults({
  query,
  onPick,
}: {
  query: string;
  onPick: () => void;
}) {
  const items = hits(query);
  if (items.length === 0) {
    return <p className="mt-4 text-sm text-[var(--muted)]">Nothing matches.</p>;
  }
  return (
    <div className="mt-3 flex flex-col">
      {items.map((item) => (
        <Link key={item.href + item.title} href={item.href} className="search-hit" onClick={onPick}>
          <span className="kicker">{item.kicker}</span>
          <span className="text-[14px] font-medium">{item.title}</span>
          <span className="text-[13px] text-[var(--muted)]">{item.dek}</span>
        </Link>
      ))}
    </div>
  );
}

export function SearchButton() {
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const wide = useMediaQuery("(min-width: 640px)");

  React.useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((value) => !value);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  function setOpenAndReset(next: boolean) {
    setOpen(next);
    if (!next) setQuery("");
  }

  const body = (
    <>
      <input
        className="search-input mt-3"
        placeholder="Posts, projects"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        autoFocus
      />
        <SearchResults query={query} onPick={() => setOpenAndReset(false)} />
    </>
  );

  return (
    <>
      <button type="button" className="search" onClick={() => setOpenAndReset(true)}>
        <MagnifyingGlass size={14} />
        <kbd>⌘K</kbd>
      </button>
      {wide ? (
        <Dialog open={open} onOpenChange={setOpenAndReset}>
          <DialogContent>
            <DialogTitle>Search</DialogTitle>
            {body}
          </DialogContent>
        </Dialog>
      ) : (
        <Drawer open={open} onOpenChange={setOpenAndReset}>
          <DrawerContent>
            <DrawerTitle>Search</DrawerTitle>
            {body}
          </DrawerContent>
        </Drawer>
      )}
    </>
  );
}

export function PostMeta({
  dateLabel,
  tags,
}: {
  dateLabel: string;
  tags?: string[];
}) {
  return (
    <div className="meta">
      {tags?.map((tag) => (
        <span key={tag} className="chip">
          {tag}
        </span>
      ))}
      <span className="date">
        <Calendar size={12} /> {dateLabel}
      </span>
    </div>
  );
}

export function ReadMore() {
  return (
    <span className="go">
      Read more <ArrowRight size={14} />
    </span>
  );
}
