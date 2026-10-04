import type { Metadata } from "next";
import { Suspense } from "react";

import { BlogIndex, BlogList } from "@/components/blog-index";
import { QuoteCard, SiteFooter } from "@/components/quote-card";
import { getPosts, getTags } from "@/lib/posts";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog",
};

export default function BlogPage() {
  const posts = getPosts();
  const tags = getTags(posts);
  return (
    <>
      <div className="page-head">
        <h1>Blog</h1>
        <p className="subtle">Notes from building things.</p>
      </div>
      <Suspense fallback={<BlogList posts={posts} tags={tags} active={null} />}>
        <BlogIndex posts={posts} tags={tags} />
      </Suspense>
      <QuoteCard />
      <SiteFooter
        left={`${posts.length} ${posts.length === 1 ? "post" : "posts"}`}
        right={SITE.email}
      />
    </>
  );
}
