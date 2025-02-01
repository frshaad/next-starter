import { z } from 'zod';

export const envSchema = z.object({
  AUTH_SECRET: z.string(),
  AUTH_GOOGLE_ID: z.string(),
  AUTH_GOOGLE_SECRET: z.string(),
});

export type Env = z.infer<typeof envSchema>;
