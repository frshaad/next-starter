'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft, HelpCircle, Home, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  const router = useRouter()

  return (
    <div className="from-background via-muted/10 to-muted/30 flex min-h-screen items-center justify-center bg-gradient-to-br">
      <div className="max-w-lg space-y-8 p-8 text-center">
        {/* 404 Animation */}
        <div className="relative">
          <div className="text-muted-foreground/30 text-8xl font-bold select-none">
            404
          </div>

          {/* Floating search icon */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
            <div className="bg-primary/10 dark:bg-primary/20 border-primary/20 flex h-16 w-16 items-center justify-center rounded-full border">
              <Search className="text-primary h-8 w-8 animate-pulse" />
            </div>
          </div>

          {/* Decorative elements */}
          <div className="bg-primary/60 absolute -top-4 left-8 h-4 w-4 animate-bounce rounded-full" />
          <div
            className="bg-primary/40 absolute right-12 -bottom-2 h-3 w-3 animate-bounce rounded-full"
            style={{ animationDelay: '0.3s' }}
          />
          <div
            className="bg-primary/50 absolute top-8 -right-2 h-2 w-2 animate-bounce rounded-full"
            style={{ animationDelay: '0.6s' }}
          />
        </div>

        {/* Content */}
        <div className="space-y-4">
          <h1 className="text-foreground text-3xl font-bold">Page Not Found</h1>
          <p className="text-muted-foreground leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved. Let&apos;s get you back on track!
          </p>
        </div>

        {/* Suggestions */}
        <div className="bg-card/60 border-border/50 space-y-3 rounded-lg border p-6 backdrop-blur-sm">
          <div className="text-muted-foreground flex items-center gap-3 text-sm">
            <HelpCircle className="text-primary h-4 w-4" />
            <span>Try checking the URL for typos</span>
          </div>
          <div className="text-muted-foreground flex items-center gap-3 text-sm">
            <Search className="text-primary h-4 w-4" />
            <span>Use the search function to find what you need</span>
          </div>
          <div className="text-muted-foreground flex items-center gap-3 text-sm">
            <Home className="text-primary h-4 w-4" />
            <span>Start fresh from the homepage</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <Button
            className="flex items-center gap-2"
            variant="outline"
            onClick={() => router.back()}
          >
            <ArrowLeft className="h-4 w-4" />
            Go Back
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
