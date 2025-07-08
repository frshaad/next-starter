'use client'

import Link from 'next/link'
import { AlertTriangle, Home, RefreshCw } from 'lucide-react'
import { Button } from '@/components/ui/button'

type ErrorProps = {
  error: { digest?: string } & Error
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-red-50 to-orange-50">
      <div className="max-w-md space-y-6 p-8 text-center">
        {/* Animated Error Icon */}
        <div className="relative">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-red-100">
            <AlertTriangle className="h-12 w-12 animate-pulse text-red-500" />
          </div>

          {/* Floating particles effect */}
          <div className="absolute -top-2 -right-2 h-3 w-3 animate-bounce rounded-full bg-red-300"></div>
          <div
            className="absolute -bottom-1 -left-3 h-2 w-2 animate-bounce rounded-full bg-orange-300"
            style={{ animationDelay: '0.5s' }}
          ></div>
          <div
            className="absolute top-1 -left-4 h-1.5 w-1.5 animate-bounce rounded-full bg-red-400"
            style={{ animationDelay: '1s' }}
          ></div>
        </div>

        {/* Error Content */}
        <div className="space-y-5">
          <h1 className="text-2xl font-bold text-gray-900">
            Oops! Something went wrong
          </h1>
          <p className="leading-relaxed text-gray-600">
            We encountered an unexpected error.
          </p>

          {/* Error details in development */}
          {process.env.NODE_ENV === 'development' && (
            <details className="mt-4 rounded-lg bg-gray-100 p-3 text-left">
              <summary className="cursor-pointer text-sm font-medium text-gray-700">
                Error Details
              </summary>
              <pre className="mt-2 overflow-auto text-xs text-gray-600">
                {error.message}
              </pre>
            </details>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <Button
            onClick={reset}
            variant="destructive"
            className="flex items-center gap-2"
          >
            <RefreshCw className="h-4 w-4" />
            Try Again
          </Button>

          <Button className="flex items-center gap-2" asChild>
            <Link href="/">
              <Home className="h-4 w-4" />
              Go Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
