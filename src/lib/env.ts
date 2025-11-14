import z from 'zod';

const nodeEnv = z
  .union([z.literal('development'), z.literal('production'), z.literal('test')])
  .default('development');

const envSchema = z.object({
  NODE_ENV: nodeEnv,
});

const env = envSchema.parse(process.env);

export default env;
