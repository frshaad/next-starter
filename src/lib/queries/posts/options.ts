import { queryOptions } from "@tanstack/react-query";
import { queryConfig } from "@/lib/config/query-config";
import type { Post } from "@/types/post";
import { fetchAllPosts, fetchPost } from "./fetchers";
import { postsKeys } from "./keys";

export const postsOptions = {
  list: () =>
    queryOptions({
      queryKey: postsKeys.list(),
      queryFn: fetchAllPosts,
      staleTime: queryConfig.posts.staleTime,
      gcTime: queryConfig.posts.gcTime,
    }),

  detail: (id: Post["id"]) =>
    queryOptions({
      queryKey: postsKeys.detail(id),
      queryFn: () => fetchPost(id),
      staleTime: queryConfig.post.staleTime,
      gcTime: queryConfig.post.gcTime,
    }),
};
