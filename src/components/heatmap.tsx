"use client";

import { HEATMAP } from "@/lib/heatmap";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const LEVELS = [
  "var(--heat-0)",
  "var(--heat-1)",
  "var(--heat-2)",
  "var(--heat-3)",
  "var(--heat-4)",
] as const;

export function Heatmap() {
  return (
    <Carousel opts={{ dragFree: true, containScroll: "trimSnaps" }} className="mt-3">
      <CarouselContent>
        <CarouselItem className="basis-auto">
          <div className="heat" aria-hidden>
            {HEATMAP.map((col, week) => (
              <div className="col" key={week}>
                {col.map((level, day) => (
                  <i key={day} style={{ background: LEVELS[level] }} />
                ))}
              </div>
            ))}
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}
