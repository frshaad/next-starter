import { createEnv } from './shared'

import z from 'zod'

export const clientEnv = createEnv({
  schema: {
    NEXT_PUBLIC_API_URL: z.string().url(),
  },
  isServer: false,
})
