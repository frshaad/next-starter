import { z } from 'zod/v4'

import { createEnv } from './shared'

export const clientEnv = createEnv({
  schema: {
    NEXT_PUBLIC_API_URL: z.string().url(),
  },
  isServer: false,
})
