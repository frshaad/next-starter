import { z } from 'zod';

export const envSchema = z.object({
  AUTH_SECRET: z.string(),
});

export type Env = z.infer<typeof envSchema>;
