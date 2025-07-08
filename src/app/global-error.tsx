'use client'

import { AlertCircle, RefreshCw } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface GlobalErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function GlobalError({ reset }: GlobalErrorProps) {
  return (
    <html>
      <body className="dark">
        <div className="from-background to-muted flex min-h-screen items-center justify-center bg-gradient-to-br">
          <div className="max-w-md space-y-6 p-8 text-center">
            {/* Critical Error Icon */}
            <div className="bg-destructive/10 dark:bg-destructive/20 border-destructive/30 mx-auto flex h-20 w-20 items-center justify-center rounded-full border">
              <AlertCircle className="text-destructive h-10 w-10 animate-pulse" />
            </div>

            {/* Error Content */}
            <div className="space-y-3">
              <h1 className="text-foreground text-2xl font-bold">
                Critical Error
              </h1>
              <p className="text-muted-foreground leading-relaxed">
                Something went seriously wrong. Please try refreshing the page.
              </p>
            </div>

            {/* Action Button */}
            <Button
              className="flex items-center gap-2"
              variant="destructive"
              onClick={reset}
            >
              <RefreshCw className="h-4 w-4" />
              Try Again
            </Button>
          </div>
        </div>
      </body>
    </html>
  )
}
