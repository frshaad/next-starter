import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

import env from '@/lib/env';

const queryClient = postgres(env.DATABASE_URL);
const db = drizzle({ client: queryClient });
export default db;
