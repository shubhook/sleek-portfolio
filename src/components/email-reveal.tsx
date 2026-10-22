"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

// The name part stays blurred until the first click. After that the link opens mail as usual.
export function EmailReveal({ email }: { email: string }) {
  const [shown, setShown] = React.useState(false);
  const at = email.indexOf("@");

  return (
    <a
      className="email"
      href={`mailto:${email}`}
      aria-label={shown ? undefined : "Show email address"}
      onClick={(event) => {
        if (shown) return;
        event.preventDefault();
        setShown(true);
      }}
    >
      <span className={cn("email-user", !shown && "hidden-text")} aria-hidden={!shown}>
        {email.slice(0, at)}
      </span>
      {email.slice(at)}
    </a>
  );
}
