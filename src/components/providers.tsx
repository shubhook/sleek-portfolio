"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import { useEffect, type ReactNode } from "react";

import { useMediaQuery } from "@/hooks/use-media-query";

function ScrollReset() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    lenis?.scrollTo(0, { immediate: true });
    window.scrollTo(0, 0);
  }, [pathname, lenis]);

  return null;
}

function ViewTransitionGuard() {
  useEffect(() => {
    if (!("startViewTransition" in document)) return;
    const original = document.startViewTransition;
    document.startViewTransition = (...args: Parameters<Document["startViewTransition"]>) => {
      const transition = original.apply(document, args);
      // The browser skips transitions in hidden tabs and rejects these; the DOM update still runs.
      const ignore = () => {};
      transition.ready.catch(ignore);
      transition.finished.catch(ignore);
      transition.updateCallbackDone.catch(ignore);
      return transition;
    };
    return () => {
      document.startViewTransition = original;
    };
  }, []);

  return null;
}

export function Providers({ children }: { children: ReactNode }) {
  const reduced = useMediaQuery("(prefers-reduced-motion: reduce)");
  return (
    <ReactLenis root options={{ lerp: 0.08, duration: 1.1, smoothWheel: !reduced }}>
      <ViewTransitionGuard />
      <ScrollReset />
      {children}
    </ReactLenis>
  );
}
