"use client";

import { ReactLenis } from "lenis/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.08, duration: 1.1 }}>
      {children}
    </ReactLenis>
  );
}
