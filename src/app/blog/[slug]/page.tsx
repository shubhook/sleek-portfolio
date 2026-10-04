import { ArrowLeft, Calendar } from "lucide-react";
import type { Metadata } from "next";
import { Link } from "next-view-transitions";
import { notFound } from "next/navigation";

import { PageShell } from "@/components/page-shell";
import { QuoteCard, SiteFooter } from "@/components/quote-card";
import { ReadMore } from "@/components/search-dialog";
import { SiteHeader } from "@/components/site-header";
import { getNextPost, getPost, POSTS } from "@/lib/content";
import { postSlugSchema } from "@/lib/schemas";
import { SITE } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const parsed = postSlugSchema.safeParse(slug);
  if (!parsed.success) return { title: "Post" };
  const post = getPost(parsed.data);
  return { title: post?.title ?? "Post" };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const parsed = postSlugSchema.safeParse(slug);
  if (!parsed.success) notFound();
  const post = getPost(parsed.data);
  if (!post) notFound();
  const next = getNextPost(post.slug);
  const beforeQuote = post.quote ? post.body.slice(0, 2) : post.body;
  const afterQuote = post.quote ? post.body.slice(2) : [];

  return (
    <PageShell>
      <SiteHeader />
      <div className="page-head">
        <Link className="btn soft" href="/blog">
          <ArrowLeft size={14} /> Blog
        </Link>
        <h1 style={{ marginTop: 24 }}>{post.title}</h1>
      </div>
      <article className="article">
        <div className="byline">
          <span className="date">
            <Calendar size={12} /> {post.dateLabel}
          </span>
          {post.tags.map((tag) => (
            <span className="chip" key={tag}>
              {tag}
            </span>
          ))}
          <span>{post.minutes} min</span>
        </div>
        {beforeQuote.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        {post.quote ? <div className="quote">{post.quote}</div> : null}
        {afterQuote.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </article>
      {next ? (
        <section className="section">
          <h2>Next</h2>
          <Link className="card" href={`/blog/${next.slug}`}>
            <div>
              <h3>{next.title}</h3>
              <p className="dek">{next.dek}</p>
            </div>
            <ReadMore />
          </Link>
        </section>
      ) : null}
      <QuoteCard />
      <SiteFooter left={post.dateLabel} right={SITE.email} />
    </PageShell>
  );
}
