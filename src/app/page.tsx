import {
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
  XLogo,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { siBuymeacoffee } from "simple-icons";
import { Link } from "next-view-transitions";

import { EmailReveal } from "@/components/email-reveal";
import { Heatmap } from "@/components/heatmap";
import { OpenSource } from "@/components/open-source";
import { QuoteCard, SiteFooter } from "@/components/quote-card";
import { ReadMore } from "@/components/search-dialog";
import { WORK } from "@/lib/content";
import { getPosts } from "@/lib/posts";
import { SITE } from "@/lib/site";

// Anvil from Material Design Icons (Apache 2.0).
function Anvil() {
  return (
    <svg className="anvil" viewBox="0 0 24 24" width={18} height={18} role="img" aria-label="In development">
      <title>In development</title>
      <path d="M9 5v5c4.03 2.47-.56 4.97-3 6v3h15v-3c-6.41-2.73-3.53-7 1-8V5zM2 6c.81 2.13 2.42 3.5 5 4V6z" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <>
      <div className="hero">
        <Image className="avatar" src="/avatar.jpg" alt="" width={72} height={72} loading="eager" />
        <div>
          <h1>Shubham Khakha</h1>
          <p className="role">
            I write software · <EmailReveal email={SITE.email} />
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
        <a className="btn coffee" href={SITE.buyMeACoffee} target="_blank" rel="noreferrer">
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
                {job.building ? <Anvil /> : null}
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
            <ReadMore />
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
      <SiteFooter left="© 2026 Shubham Khakha" right={SITE.githubHandle} />
    </>
  );
}
