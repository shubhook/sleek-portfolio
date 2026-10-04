"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { useReducedMotion } from "motion/react";
import { usePathname } from "next/navigation";
import { useEffect, type ReactNode } from "react";

function ScrollReset() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    lenis?.scrollTo(0, { immediate: true });
    window.scrollTo(0, 0);
  }, [pathname, lenis]);

  return null;
}

export function Providers({ children }: { children: ReactNode }) {
  const reduced = useReducedMotion();
  return (
    <ReactLenis root options={{ lerp: 0.08, duration: 1.1, smoothWheel: !reduced }}>
      <ScrollReset />
      {children}
    </ReactLenis>
  );
}
