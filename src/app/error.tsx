'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: { digest?: string } & Error
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex size-full items-center justify-center">
      <h2>Error ❌</h2>
      <p>Something went wrong!</p>
      <button type="button" className="w-full" onClick={() => reset()}>
        Try again
      </button>
    </div>
  )
}
