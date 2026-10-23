"use client";

import Image from "next/image";
import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";

import { SearchButton } from "@/components/search-dialog";
import { ThemeToggle } from "@/components/theme-toggle";
import type { PostMeta } from "@/lib/posts";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/projects", label: "Projects" },
] as const;

export function SiteHeader({ posts }: { posts: PostMeta[] }) {
  const pathname = usePathname();
  const home = pathname === "/";
  const isOn = (href: string) => (href === "/" ? home : pathname.startsWith(href));

  return (
    <header className={cn("site-header", home && "home")}>
      {!home ? (
        <Link className="brand" href="/" aria-label="Home">
          <Image
            className="brand-photo"
            src="/avatar.jpg"
            alt=""
            width={28}
            height={28}
            loading="eager"
          />
        </Link>
      ) : null}
      <nav className="nav">
        {NAV.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(isOn(item.href) && "on", item.href === "/" && "nav-home")}
          >
            {item.label}
          </Link>
        ))}
        <a href={SITE.resume} target="_blank" rel="noreferrer">
          Resume
        </a>
      </nav>
      <div className="tools">
        <SearchButton posts={posts} />
        <ThemeToggle />
      </div>
    </header>
  );
}
