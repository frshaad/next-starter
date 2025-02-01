import { z } from 'zod';

export const envSchema = z.object({
  // Next-Auth environment variables
  AUTH_SECRET: z.string(),
  AUTH_GOOGLE_ID: z.string(),
  AUTH_GOOGLE_SECRET: z.string(),
  AUTH_DRIZZLE_URL: z.string(),
});

export type Env = z.infer<typeof envSchema>;
