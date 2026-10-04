import { Link } from "next-view-transitions";

export default function NotFound() {
  return (
    <>
      <div className="page-head">
        <h1>Missing</h1>
        <p>That page is not here.</p>
      </div>
      <div className="cta">
        <Link className="btn solid" href="/">
          Home
        </Link>
      </div>
    </>
  );
}
