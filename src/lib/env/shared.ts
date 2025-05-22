import { type ZodRawShape, z } from 'zod/v4'

type CreateEnvOptions<T extends ZodRawShape> = {
  schema: T
  isServer: boolean
}

export function createEnv<T extends ZodRawShape>({
  schema,
  isServer,
}: CreateEnvOptions<T>) {
  const schemaObject = z.object(schema)
  const rawEnv: Record<string, string | undefined> = {}

  for (const key of Object.keys(schema)) {
    rawEnv[key] = process.env[key]
  }

  const parsed = schemaObject.safeParse(rawEnv)

  if (!parsed.success) {
    const formatted = z.treeifyError(parsed.error)
    console.error(
      `❌ Invalid ${isServer ? 'server' : 'client'} environment variables:`,
      formatted,
    )
    if (process.env.NODE_ENV === 'production' || isServer) {
      throw new Error(
        `Missing or invalid ${isServer ? 'server' : 'client'} environment variables`,
      )
    }
  }

  return parsed.success ? parsed.data : ({} as z.infer<typeof schemaObject>)
}

// Node Environment
export const nodeEnv = process.env.NODE_ENV

export const isDev = nodeEnv === 'development'
export const isProd = nodeEnv === 'production'
export const isTest = nodeEnv === 'test'
