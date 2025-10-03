import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import Posts from "@/components/posts";
import { getQueryClient } from "@/lib/get-query-client";
import { postsOptions } from "@/lib/queries/posts/options";

export default function Home() {
  const queryClient = getQueryClient();

  queryClient.prefetchQuery(postsOptions.list());

  return (
    <main className="flex gap-5">
      <section>
        <h2>Posts</h2>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <Posts />
        </HydrationBoundary>
      </section>
    </main>
  );
}
