export const queryConfig = {
  default: {
    staleTime: 60_000, // 1 min
    gcTime: 300_000, // 5 mins
  },
  posts: {
    staleTime: 30_000, // 30 secs
    gcTime: 300_000, // 5 mins
  },
  post: {
    staleTime: 180_000, // 3 min
    gcTime: 300_000, // 5 mins
  },
};
