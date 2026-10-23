import type { ReactNode } from "react";

export function QuoteCard() {
  return (
    <div className="qcard">
      <p>
        {
          '"The layout can still be tight. The buttons can still be good. The sentences have to come from a person who has actually been in the room."'
        }
      </p>
      <div className="attr">a note to myself</div>
    </div>
  );
}

export function SiteFooter({ left, right }: { left: ReactNode; right: ReactNode }) {
  return (
    <footer className="foot">
      <span>{left}</span>
      <span>{right}</span>
    </footer>
  );
}
