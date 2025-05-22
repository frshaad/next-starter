import { createEnv } from './shared'

import z from 'zod'

export const serverEnv = createEnv({
  schema: {
    DATABASE_URL: z.string().url(),
    SECRET_KEY: z.string().nonempty(),
  },
  isServer: true,
})
