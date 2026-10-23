import {
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
  XLogo,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { siBuymeacoffee } from "simple-icons";
import { Link } from "next-view-transitions";

import { Heatmap } from "@/components/heatmap";
import { OpenSource } from "@/components/open-source";
import { QuoteCard, SiteFooter } from "@/components/quote-card";
import { WORK } from "@/lib/content";
import { getPosts } from "@/lib/posts";
import { SITE } from "@/lib/site";

export default function HomePage() {
  return (
    <main className="home-page">
      <div className="hero">
        <Image className="avatar" src="/avatar.jpg" alt="" width={72} height={72} loading="eager" />
        <div>
          <h1>Shubham Khakha</h1>
          <p className="role">
            I write software
          </p>
        </div>
      </div>
      <p className="lede">
        I build things until I understand them. {"I still don't share food."}
      </p>
      <ul className="facts">
        <li>
          <strong>Helm</strong> is a Rust code editor for macOS. Agents write the code
          and I review every PR.
        </li>
        <li>
          <strong>Milo</strong> runs AI teammates on your own machine, each with its own
          memory and a computer it can use.
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
        <a className="btn" href={SITE.buyMeACoffee} target="_blank" rel="noreferrer">
          <svg width={14} height={14} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d={siBuymeacoffee.path} />
          </svg>{" "}
          Buy me a coffee
        </a>
      </div>
      <section className="section">
        <h2>Work</h2>
        {WORK.map((job) => (
          <a
            className="job"
            key={job.org}
            href={job.liveUrl ?? job.codeUrl}
            target="_blank"
            rel="noreferrer"
          >
            <div>
              <div className="org">
                <span className="org-name">{job.org}</span>
                <span className="ext" aria-hidden>
                  ↗
                </span>
              </div>
              <div className="roleline">{job.role}</div>
            </div>
            <div className="when">{job.when}</div>
          </a>
        ))}
        <div className="more">
          <Link className="btn soft" href="/projects">
            Show all projects
          </Link>
        </div>
      </section>
      <section className="section">
        <h2>Writing</h2>
        {getPosts().slice(0, 3).map((post) => (
          <Link className="card" href={`/blog/${post.slug}`} key={post.slug}>
            <div>
              <h3>{post.title}</h3>
              <p className="dek">{post.description}</p>
            </div>
          </Link>
        ))}
        <div className="more">
          <Link className="btn soft" href="/blog">
            Show all posts
          </Link>
        </div>
      </section>
      <OpenSource />
      <section className="section">
        <h2>GitHub</h2>
        <Heatmap />
      </section>
      <QuoteCard />
      <SiteFooter
        left="© 2026 Shubham Khakha"
        right={
          <a href={SITE.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        }
      />
    </main>
  );
}
