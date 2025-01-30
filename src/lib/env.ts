import { z } from 'zod';
import './env-config';

const envSchema = z.object({});

const env = envSchema.parse(process.env);
export default env;
