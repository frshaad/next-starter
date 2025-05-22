import { z } from 'zod/v4'

import { createEnv } from './shared'

export const serverEnv = createEnv({
  schema: {
    DATABASE_URL: z.string().url(),
    SECRET_KEY: z.string().nonempty(),
  },
  isServer: true,
})
