"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { postsOptions } from "@/lib/queries/posts/options";

export default function Posts() {
  const { data: posts } = useSuspenseQuery(postsOptions.list());

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          {post.id}. {post.title}
        </li>
      ))}
    </ul>
  );
}
