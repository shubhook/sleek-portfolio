"use client";

import { ArrowUpRight, X } from "@phosphor-icons/react";
import { useLenis } from "lenis/react";
import { AnimatePresence, LazyMotion, m, MotionConfig, useIsPresent } from "motion/react";
import { getImageProps } from "next/image";
import * as React from "react";

import { Anvil } from "@/components/anvil";
import { TechList, TechRow } from "@/components/tech";
import type { Project } from "@/lib/content";
import type { TechKey } from "@/lib/tech";
import { cn } from "@/lib/utils";

const SPRING = { type: "spring", stiffness: 520, damping: 40, mass: 0.8 } as const;
const SHRINK = { type: "tween", duration: 0.1, ease: [0.4, 0, 0.2, 1] } as const;

type Props = {
  projects: Project[];
};

// Where the pointer was when a panel closed. Pointer and click events carry it; Escape does not.
type At = { clientX: number; clientY: number };

const loadFeatures = () => import("@/components/motion-features").then((mod) => mod.default);

// One size for the card and the expanded panel, so opening reuses the file already loaded.
function previewProps(project: Project, eager = false) {
  const { props } = getImageProps({
    src: project.previewImage,
    alt: "",
    sizes: "(max-width: 540px) 100vw, 500px",
    loading: eager ? "eager" : "lazy",
  });
  const { src, srcSet, sizes, width, height, loading, decoding, alt } = props;
  return { src, srcSet, sizes, width, height, loading, decoding, alt };
}

function Links({ project }: { project: Project }) {
  return (
    <div className="pcard-links">
      {project.liveUrl ? (
        <a
          className="btn accent"
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          onClick={(event) => event.stopPropagation()}
        >
          Live <ArrowUpRight size={13} weight="bold" />
        </a>
      ) : null}
      <a
        className="btn soft"
        href={project.codeUrl}
        target="_blank"
        rel="noreferrer"
        onClick={(event) => event.stopPropagation()}
      >
        Code <ArrowUpRight size={13} weight="bold" />
      </a>
    </div>
  );
}

function Expanded({
  project,
  stack,
  peek,
  origin,
  onClose,
  onPin,
}: {
  project: Project;
  stack: TechKey[];
  peek: boolean;
  origin: DOMRect | null;
  onClose: (at?: At) => void;
  onPin: () => void;
}) {
  const closeRef = React.useRef<HTMLButtonElement>(null);
  const present = useIsPresent();

  React.useEffect(() => {
    if (!peek) closeRef.current?.focus({ preventScroll: true });
  }, [peek]);

  React.useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      className="pcard-stage"
      style={present ? undefined : { pointerEvents: "none" }}
      onClick={onClose}
      onPointerMove={(event) => {
        if (!peek || event.pointerType !== "mouse" || event.target !== event.currentTarget) return;
        const overOrigin =
          origin &&
          event.clientX >= origin.left &&
          event.clientX <= origin.right &&
          event.clientY >= origin.top &&
          event.clientY <= origin.bottom;
        if (!overOrigin) onClose(event);
      }}
    >
      <m.article
        onPointerDown={() => {
          if (peek) onPin();
        }}
        layoutId={`pcard-${project.slug}`}
        layoutCrossfade={false}
        className="pcard pcard-open"
        style={{ borderRadius: 20 }}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`pcard-title-${project.slug}`}
        onClick={(event) => event.stopPropagation()}
        onPointerLeave={(event) => {
          if (peek && event.pointerType === "mouse") onClose(event);
        }}
      >
        <button
          ref={closeRef}
          type="button"
          className="pcard-close"
          onClick={onClose}
          aria-label="Close"
        >
          <X size={14} weight="bold" />
        </button>
        <m.div className="pcard-scroll" layoutScroll data-lenis-prevent>
          <m.img
            layoutId={`pcard-img-${project.slug}`}
            layoutCrossfade={false}
            className="preview"
            {...previewProps(project, true)}
            style={{ borderRadius: 12 }}
          />
          <div className="body">
            <m.h3
              layoutId={`pcard-title-${project.slug}`}
              layoutCrossfade={false}
              id={`pcard-title-${project.slug}`}
            >
              <span className="pcard-name">
                {project.name}
                {project.inDevelopment ? <Anvil /> : null}
              </span>{" "}
              <span className={cn("chip", project.statusKind)}>{project.status}</span>
            </m.h3>
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.12 } }}
              exit={{ opacity: 0, transition: { duration: 0.06 } }}
            >
              <p className="about">{project.about}</p>
              <ul className="highlights">
                {project.highlights.slice(0, 5).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="label">Stack</p>
              <TechList stack={stack} />
              <Links project={project} />
            </m.div>
          </div>
        </m.div>
      </m.article>
    </div>
  );
}

export function ProjectIndex({ projects }: Props) {
  const [active, setActive] = React.useState<string | null>(null);
  const [peek, setPeek] = React.useState(false);
  const [origin, setOrigin] = React.useState<DOMRect | null>(null);
  const [returning, setReturning] = React.useState<string | null>(null);
  const activeRef = React.useRef<string | null>(null);
  const peekRef = React.useRef(false);
  const originRef = React.useRef<DOMRect | null>(null);
  const pointer = React.useRef<At | null>(null);
  // A peek closed while the pointer is still over its card stays shut until the pointer leaves that card.
  const suppressed = React.useRef<string | null>(null);
  const refocus = React.useRef<string | null>(null);
  const triggers = React.useRef(new Map<string, HTMLButtonElement>());
  const lenis = useLenis();
  const open = projects.find((project) => project.slug === active);

  React.useEffect(() => {
    function onMove(event: PointerEvent) {
      pointer.current = { clientX: event.clientX, clientY: event.clientY };
    }
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  React.useEffect(() => {
    if (!open) return;
    lenis?.stop();
    const root = document.documentElement;
    root.style.overflow = "hidden";
    return () => {
      lenis?.start();
      root.style.overflow = "";
    };
  }, [open, lenis]);

  const close = React.useCallback((at?: At) => {
    const slug = activeRef.current;
    if (!slug) return;
    activeRef.current = null;
    setActive(null);
    setReturning(slug);
    if (peekRef.current) {
      // The panel covers the card, so the card's pointerleave has usually fired already.
      // Suppressing after the pointer has left would block the next hover with nothing to clear it.
      const rect = originRef.current;
      const point = at ?? pointer.current;
      const overCard =
        rect &&
        point &&
        point.clientX >= rect.left &&
        point.clientX <= rect.right &&
        point.clientY >= rect.top &&
        point.clientY <= rect.bottom;
      suppressed.current = overCard ? slug : null;
    } else {
      refocus.current = slug;
    }
  }, []);

  // The grid card stays hidden while its panel is open, and focus() on a hidden element does
  // nothing. Return focus once the card is shown again.
  React.useEffect(() => {
    const slug = refocus.current;
    if (active || !slug) return;
    refocus.current = null;
    const id = requestAnimationFrame(() => triggers.current.get(slug)?.focus({ preventScroll: true }));
    return () => cancelAnimationFrame(id);
  }, [active]);

  const openWith = (slug: string, asPeek: boolean) => {
    activeRef.current = slug;
    peekRef.current = asPeek;
    setPeek(asPeek);
    setActive(slug);
  };

  const pin = React.useCallback(() => {
    peekRef.current = false;
    setPeek(false);
  }, []);

  function onCardEnter(event: React.PointerEvent<HTMLElement>, slug: string) {
    if (event.pointerType !== "mouse" || activeRef.current || suppressed.current === slug) return;
    if (!window.matchMedia("(hover: hover)").matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    originRef.current = rect;
    setOrigin(rect);
    openWith(slug, true);
  }

  function onCardLeave(slug: string) {
    if (suppressed.current === slug) suppressed.current = null;
  }

  return (
    <LazyMotion features={loadFeatures} strict>
      <MotionConfig transition={returning ? SHRINK : SPRING} reducedMotion="user">
        <div className="pgrid">
          {projects.map((project, index) => (
            <m.article
              key={project.slug}
              layoutId={`pcard-${project.slug}`}
              layoutCrossfade={false}
              className="pcard"
              style={{ borderRadius: 16, zIndex: returning === project.slug ? 30 : undefined }}
              onLayoutAnimationComplete={() =>
                setReturning((slug) => (slug === project.slug ? null : slug))
              }
              onClick={() => openWith(project.slug, false)}
              onPointerEnter={(event) => onCardEnter(event, project.slug)}
              onPointerMove={(event) => onCardEnter(event, project.slug)}
              onPointerLeave={() => onCardLeave(project.slug)}
            >
              <button
                type="button"
                className="pcard-trigger"
                aria-haspopup="dialog"
                aria-label={`Open ${project.name} details`}
                ref={(node) => {
                  if (node) triggers.current.set(project.slug, node);
                  else triggers.current.delete(project.slug);
                }}
              />
              <m.img
                layoutId={`pcard-img-${project.slug}`}
                layoutCrossfade={false}
                className="preview"
                {...previewProps(project, index < 2)}
                style={{ borderRadius: 10 }}
              />
              <div className="body">
                <m.h3 layoutId={`pcard-title-${project.slug}`} layoutCrossfade={false}>
                  <span className="pcard-name">
                    {project.name}
                    {project.inDevelopment ? <Anvil /> : null}
                  </span>{" "}
                  <span className={cn("chip", project.statusKind)}>{project.status}</span>
                </m.h3>
                <p>{project.dek}</p>
                <TechRow stack={project.stack} limit={6} />
                <Links project={project} />
              </div>
            </m.article>
          ))}
        </div>
        {open ? <div className="pcard-backdrop" /> : null}
        <AnimatePresence>
          {open ? (
            <Expanded
              key={open.slug}
              project={open}
              stack={open.stack}
              peek={peek}
              origin={origin}
              onClose={close}
              onPin={pin}
            />
          ) : null}
        </AnimatePresence>
      </MotionConfig>
    </LazyMotion>
  );
}
