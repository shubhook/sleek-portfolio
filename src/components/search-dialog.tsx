"use client";

import { ArrowRight } from "lucide-react";
import { MagnifyingGlass } from "@phosphor-icons/react";
import dynamic from "next/dynamic";
import * as React from "react";

import type { PostMeta } from "@/lib/posts";

const loadPanel = () => import("@/components/search-panel");
const SearchPanel = dynamic(loadPanel, { ssr: false });

export function SearchButton({ posts }: { posts: PostMeta[] }) {
  const [open, setOpen] = React.useState(false);
  const close = React.useCallback(() => setOpen(false), []);

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

  React.useEffect(() => {
    const id = window.requestIdleCallback?.(() => void loadPanel(), { timeout: 4000 });
    return () => {
      if (id !== undefined) window.cancelIdleCallback(id);
    };
  }, []);

  return (
    <>
      <button
        type="button"
        className="search"
        onClick={() => setOpen(true)}
        onPointerEnter={() => void loadPanel()}
        onFocus={() => void loadPanel()}
      >
        <MagnifyingGlass size={14} />
        <kbd>⌘K</kbd>
      </button>
      {open ? <SearchPanel posts={posts} onClose={close} /> : null}
    </>
  );
}

export function ReadMore() {
  return (
    <span className="go">
      Read more <ArrowRight size={14} />
    </span>
  );
}
