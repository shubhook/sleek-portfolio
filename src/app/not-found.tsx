import { Link } from "next-view-transitions";

import { PageShell } from "@/components/page-shell";
import { SiteHeader } from "@/components/site-header";

export default function NotFound() {
  return (
    <PageShell>
      <SiteHeader />
      <div className="page-head">
        <h1>Missing</h1>
        <p>That page is not here.</p>
      </div>
      <div className="cta">
        <Link className="btn solid" href="/">
          Home
        </Link>
      </div>
    </PageShell>
  );
}
