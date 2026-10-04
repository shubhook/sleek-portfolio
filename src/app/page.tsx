import {
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
  XLogo,
} from "@phosphor-icons/react/dist/ssr";
import { Link } from "next-view-transitions";

import { Heatmap } from "@/components/heatmap";
import { PageShell } from "@/components/page-shell";
import { QuoteCard, SiteFooter } from "@/components/quote-card";
import { ReadMore } from "@/components/search-dialog";
import { SiteHeader } from "@/components/site-header";
import { POSTS, WORK } from "@/lib/content";
import { SITE } from "@/lib/site";

export default function HomePage() {
  return (
    <PageShell>
      <SiteHeader />
      <div className="hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="avatar" src="/avatar.jpg" alt="" width={72} height={72} />
        <Link className="brand" href="/">
          sk
        </Link>
        <div>
          <h1>Shubham Khakha</h1>
          <p className="role">
            I write software · <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </p>
        </div>
      </div>
      <p className="lede">
        I build things until I understand them. {"I still don't share food."}
      </p>
      <ul className="facts">
        <li>
          On <strong>Huddle</strong>, a live team chat I started because I wanted a
          websocket to fail in my own terminal.
        </li>
        <li>
          <strong>SkillSync</strong> matches project ideas to a stack. The generated
          todo app was getting old.
        </li>
        <li>
          <strong>Artify</strong> died in public. The repo is still there.
        </li>
      </ul>
      <div className="cta">
        <a className="btn solid" href={`mailto:${SITE.email}`}>
          <EnvelopeSimple size={14} /> Send an email
        </a>
        <a className="btn" href={SITE.github} target="_blank" rel="noreferrer">
          <GithubLogo size={14} /> GitHub
        </a>
        <a className="btn" href={SITE.twitter} target="_blank" rel="noreferrer">
          <XLogo size={14} /> Twitter
        </a>
        <a className="btn" href={SITE.linkedin} target="_blank" rel="noreferrer">
          <LinkedinLogo size={14} /> LinkedIn
        </a>
      </div>
      <section className="section">
        <h2>Work</h2>
        {WORK.map((job) => (
          <div className="job" key={job.org}>
            <div>
              <div className="org">
                {job.org}
                {job.now ? <span className="chip ok">now</span> : null}
              </div>
              <div className="roleline">{job.role}</div>
            </div>
            <div className="when">{job.when}</div>
          </div>
        ))}
        <div className="more">
          <Link className="btn soft" href="/projects">
            Show all projects
          </Link>
        </div>
      </section>
      <section className="section">
        <h2>Writing</h2>
        {POSTS.slice(0, 3).map((post) => (
          <Link className="card" href={`/blog/${post.slug}`} key={post.slug}>
            <div>
              <h3>{post.title}</h3>
              <p className="dek">{post.dek}</p>
            </div>
            <ReadMore />
          </Link>
        ))}
        <div className="more">
          <Link className="btn soft" href="/blog">
            Show all posts
          </Link>
        </div>
      </section>
      <section className="section">
        <h2>GitHub</h2>
        <Heatmap />
      </section>
      <QuoteCard />
      <SiteFooter left="© 2026 Shubham Khakha" right={SITE.githubHandle} />
    </PageShell>
  );
}
