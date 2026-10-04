import { ArrowLeft, Calendar } from "lucide-react";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Link } from "next-view-transitions";
import { notFound } from "next/navigation";

import { QuoteCard, SiteFooter } from "@/components/quote-card";
import { ReadMore } from "@/components/search-dialog";
import { getNextPost, getPost, getPosts } from "@/lib/posts";
import { postSlugSchema } from "@/lib/schemas";
import { SITE } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const parsed = postSlugSchema.safeParse(slug);
  const post = parsed.success ? getPost(parsed.data) : undefined;
  if (!post) return { title: "Post" };
  return { title: post.title, description: post.description };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const parsed = postSlugSchema.safeParse(slug);
  if (!parsed.success) notFound();
  const post = getPost(parsed.data);
  if (!post) notFound();
  const next = getNextPost(post.slug);

  return (
    <>
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
          <span>{post.minutes} min</span>
          {post.tags.map((tag) => (
            <Link className="tag" href={`/blog?tag=${encodeURIComponent(tag)}`} key={tag}>
              #{tag}
            </Link>
          ))}
        </div>
        <MDXRemote source={post.content} />
      </article>
      {next ? (
        <section className="section">
          <h2>Next</h2>
          <Link className="card" href={`/blog/${next.slug}`}>
            <div>
              <h3>{next.title}</h3>
              <p className="dek">{next.description}</p>
            </div>
            <ReadMore />
          </Link>
        </section>
      ) : null}
      <QuoteCard />
      <SiteFooter left={post.dateLabel} right={SITE.email} />
    </>
  );
}
