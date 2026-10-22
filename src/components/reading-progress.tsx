"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

// 0 when the top of the article reaches the top of the screen, 1 when its end reaches the bottom.
function measure(article: HTMLElement) {
  const rect = article.getBoundingClientRect();
  const view = window.innerHeight;
  const scrollable = rect.height - view;
  const progress = scrollable <= 0 ? 1 : Math.min(1, Math.max(0, -rect.top / scrollable));
  const inside = rect.top < 0 && rect.bottom > view * 0.5;
  return { progress, inside };
}

export function ReadingProgress({ selector = ".article" }: { selector?: string }) {
  const [state, setState] = React.useState({ progress: 0, inside: false });

  React.useEffect(() => {
    const article = document.querySelector<HTMLElement>(selector);
    if (!article) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      setState(measure(article));
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [selector]);

  const percent = Math.round(state.progress * 100);

  return (
    <div
      className={cn("reading", state.inside && "shown")}
      role="progressbar"
      aria-label="Reading progress"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={percent}
      aria-hidden={!state.inside}
    >
      <span className="reading-pill">
        <span className="reading-track">
          <span className="reading-fill" style={{ transform: `scaleX(${state.progress})` }} />
        </span>
        <span className="reading-label">{percent}%</span>
      </span>
    </div>
  );
}
