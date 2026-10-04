"use client";

import { Link, useTransitionRouter } from "next-view-transitions";
import * as React from "react";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Drawer, DrawerContent, DrawerTitle } from "@/components/ui/drawer";
import { useMediaQuery } from "@/hooks/use-media-query";
import { PROJECTS } from "@/lib/content";
import type { PostMeta } from "@/lib/posts";

function hits(query: string, allPosts: PostMeta[]) {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const posts = allPosts
    .filter(
      (post) =>
        post.title.toLowerCase().includes(q) ||
        post.description.toLowerCase().includes(q),
    )
    .map((post) => ({
      href: `/blog/${post.slug}`,
      kicker: "Post",
      title: post.title,
      dek: post.dateLabel,
    }));
  const projects = PROJECTS.filter(
    (project) =>
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

type Hit = ReturnType<typeof hits>[number];

type Platform = "mac" | "linux" | "other";

function detectPlatform(): Platform {
  const nav = navigator as Navigator & { userAgentData?: { platform?: string } };
  const name = (nav.userAgentData?.platform || navigator.platform || navigator.userAgent).toLowerCase();
  if (name.includes("mac") || /iphone|ipad/.test(name)) return "mac";
  if (name.includes("linux") || name.includes("x11")) return "linux";
  return "other";
}

const MODIFIER_LABEL: Record<Platform, string> = { mac: "⌘", linux: "Super ", other: "Ctrl " };

function usePlatform() {
  return React.useSyncExternalStore(
    () => () => {},
    detectPlatform,
    () => "other" as Platform,
  );
}

function SearchResults({
  query,
  items,
  platform,
  onPick,
}: {
  query: string;
  items: Hit[];
  platform: Platform;
  onPick: () => void;
}) {
  if (!query.trim()) return null;
  if (items.length === 0) {
    return <p className="mt-4 text-sm text-[var(--muted)]">Nothing matches.</p>;
  }
  return (
    <div className="mt-3 flex flex-col">
      {items.map((item, index) => (
        <Link key={item.href + item.title} href={item.href} className="search-hit" onClick={onPick}>
          <span className="kicker">{item.kicker}</span>
          <span className="text-[14px] font-medium">{item.title}</span>
          <span className="text-[13px] text-[var(--muted)]">{item.dek}</span>
          {index < 9 ? (
            <kbd className="hit-key" aria-label={`Shortcut ${MODIFIER_LABEL[platform]}${index + 1}`}>
              {MODIFIER_LABEL[platform]}
              {index + 1}
            </kbd>
          ) : null}
        </Link>
      ))}
    </div>
  );
}

export default function SearchPanel({
  posts,
  onClose,
}: {
  posts: PostMeta[];
  onClose: () => void;
}) {
  const [query, setQuery] = React.useState("");
  const wide = useMediaQuery("(min-width: 640px)");
  const platform = usePlatform();
  const router = useTransitionRouter();
  const items = React.useMemo(() => hits(query, posts), [query, posts]);

  React.useEffect(() => {
    function onKey(event: KeyboardEvent) {
      const modifier = platform === "mac" ? event.metaKey : event.metaKey || event.ctrlKey;
      const digit = /^Digit([1-9])$/.exec(event.code);
      if (!modifier || !digit || event.altKey || event.shiftKey) return;
      event.preventDefault();
      event.stopPropagation();
      const item = items[Number(digit[1]) - 1];
      if (!item) return;
      onClose();
      router.push(item.href);
    }
    window.addEventListener("keydown", onKey, { capture: true });
    return () => window.removeEventListener("keydown", onKey, { capture: true });
  }, [items, platform, router, onClose]);

  const onOpenChange = (next: boolean) => {
    if (!next) onClose();
  };

  const body = (
    <>
      <input
        className="search-input mt-3"
        placeholder="Posts, projects"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        autoFocus
      />
      <SearchResults query={query} items={items} platform={platform} onPick={onClose} />
    </>
  );

  return wide ? (
    <Dialog open onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogTitle>Search</DialogTitle>
        {body}
      </DialogContent>
    </Dialog>
  ) : (
    <Drawer open onOpenChange={onOpenChange}>
      <DrawerContent>
        <DrawerTitle>Search</DrawerTitle>
        {body}
      </DrawerContent>
    </Drawer>
  );
}
