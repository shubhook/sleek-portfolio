import { Calendar } from "lucide-react";
import { Link } from "next-view-transitions";

import type { PostMeta } from "@/lib/posts";

// One post in a list. The whole row is the link, and the title underlines on hover.
export function PostRow({ post, meta = false }: { post: PostMeta; meta?: boolean }) {
  return (
    <Link className="card post-row" href={`/blog/${post.slug}`}>
      <div>
        <h3>{post.title}</h3>
        <p className="dek">{post.description}</p>
        {meta ? (
          <div className="meta">
            <span className="date">
              <Calendar size={12} /> {post.dateLabel}
            </span>
            <span>{post.minutes} min</span>
            {post.tags.map((tag) => (
              <span className="tag" key={tag}>
                #{tag}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </Link>
  );
}
