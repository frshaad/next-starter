import { loadEnvConfig } from '@next/env';
import { z } from 'zod';

const projectDirectory = process.cwd();
loadEnvConfig(projectDirectory);

const environmentSchema = z.object({
  NODE_ENV: z.enum(['development', 'production']),
});

function validateEnvironment(): z.infer<typeof environmentSchema> {
  // eslint-disable-next-line n/no-process-env
  const parsed = environmentSchema.safeParse(process.env);

  if (!parsed.success) {
    console.error(
      '❌ Invalid environment variables:',
      parsed.error.flatten().fieldErrors,
    );
    throw new Error('Invalid environment variables');
  }

  return parsed.data;
}

const env = validateEnvironment();

export { env, validateEnvironment };
