export function QuoteCard() {
  return (
    <div className="qcard">
      <span className="mark">{'"'}</span>
      <svg
        className="doodle"
        width="28"
        height="18"
        viewBox="0 0 28 18"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
        aria-hidden
      >
        <path d="M4 11c2-5 6-7 10-6 3 .6 5 3 8 2 2-.4 3 1 3 2 0 3-4 6-10 6S3 14 4 11z" />
        <circle cx="10" cy="9" r="0.8" fill="currentColor" />
        <path d="M20 7c2-2 5-2 6 0" />
      </svg>
      <p>
        {
          '"The layout can still be tight. The buttons can still be good. The sentences have to come from a person who has actually been in the room."'
        }
      </p>
      <div className="attr">a note to myself</div>
    </div>
  );
}

export function SiteFooter({ left, right }: { left: string; right: string }) {
  return (
    <footer className="foot">
      <span>{left}</span>
      <span>{right}</span>
    </footer>
  );
}
