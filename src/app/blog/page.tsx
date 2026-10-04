import type { Metadata } from "next";

import { BlogIndex } from "@/components/blog-index";
import { PageShell } from "@/components/page-shell";
import { QuoteCard, SiteFooter } from "@/components/quote-card";
import { SiteHeader } from "@/components/site-header";
import { POSTS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog",
};

export default function BlogPage() {
  return (
    <PageShell>
      <SiteHeader />
      <div className="page-head">
        <h1>Blog</h1>
        <p>
          Notes on building, agents, and the parts that only stick after I implement
          them badly once.
        </p>
      </div>
      <BlogIndex />
      <QuoteCard />
      <SiteFooter left={`${POSTS.length} posts`} right="khakha.dev" />
    </PageShell>
  );
}
