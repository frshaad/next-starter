import { blogClient } from "@/lib/axios";
import type { Post } from "@/types/post";

export async function fetchPost(postId: Post["id"]): Promise<Post> {
  const response = await blogClient.get<Post>(`/post/${postId}`);
  return response.data;
}

export async function fetchAllPosts(): Promise<Post[]> {
  const response = await blogClient.get<Post[]>("/posts");
  return response.data;
}
