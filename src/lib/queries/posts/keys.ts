import type { Post } from "@/types/post";

export const postsKeys = {
  all: ["posts"] as const,
  list: () => [...postsKeys.all, "list"] as const,
  detail: (id: Post["id"]) => [...postsKeys.all, "detail", id] as const,
};
