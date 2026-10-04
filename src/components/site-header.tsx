"use client";

import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";

import { SearchButton } from "@/components/search-dialog";
import { ThemeToggle } from "@/components/theme-toggle";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/projects", label: "Projects" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const home = pathname === "/";
  const active = home
    ? "home"
    : pathname.startsWith("/blog")
      ? "blog"
      : pathname.startsWith("/projects")
        ? "projects"
        : "";

  return (
    <header className={cn("site-header", home && "home")}>
      {!home ? (
        <Link className="brand" href="/">
          sk
        </Link>
      ) : null}
      <nav className="nav">
        {NAV.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              (item.label === "Home" && active === "home") ||
                (item.label === "Blog" && active === "blog") ||
                (item.label === "Projects" && active === "projects")
                ? "on"
                : undefined,
            )}
          >
            {item.label}
          </Link>
        ))}
        <a href={SITE.resume} target="_blank" rel="noreferrer">
          Resume
        </a>
      </nav>
      <div className="tools">
        <SearchButton />
        <ThemeToggle />
      </div>
    </header>
  );
}
