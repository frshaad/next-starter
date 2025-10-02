"use client";

import { ArrowLeft, HelpCircle, Home, Search } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-background via-muted/10 to-muted/30">
      <div className="max-w-lg space-y-8 p-8 text-center">
        {/* 404 Animation */}
        <div className="relative">
          <div className="select-none font-bold text-8xl text-muted-foreground/30">
            404
          </div>

          {/* Floating search icon */}
          <div className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 transform">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-primary/20 bg-primary/10 dark:bg-primary/20">
              <Search className="h-8 w-8 animate-pulse text-primary" />
            </div>
          </div>

          {/* Decorative elements */}
          <div className="-top-4 absolute left-8 h-4 w-4 animate-bounce rounded-full bg-primary/60" />
          <div
            className="-bottom-2 absolute right-12 h-3 w-3 animate-bounce rounded-full bg-primary/40"
            style={{ animationDelay: "0.3s" }}
          />
          <div
            className="-right-2 absolute top-8 h-2 w-2 animate-bounce rounded-full bg-primary/50"
            style={{ animationDelay: "0.6s" }}
          />
        </div>

        {/* Content */}
        <div className="space-y-4">
          <h1 className="font-bold text-3xl text-foreground">Page Not Found</h1>
          <p className="text-muted-foreground leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved. Let&apos;s get you back on track!
          </p>
        </div>

        {/* Suggestions */}
        <div className="space-y-3 rounded-lg border border-border/50 bg-card/60 p-6 backdrop-blur-sm">
          <div className="flex items-center gap-3 text-muted-foreground text-sm">
            <HelpCircle className="h-4 w-4 text-primary" />
            <span>Try checking the URL for typos</span>
          </div>
          <div className="flex items-center gap-3 text-muted-foreground text-sm">
            <Search className="h-4 w-4 text-primary" />
            <span>Use the search function to find what you need</span>
          </div>
          <div className="flex items-center gap-3 text-muted-foreground text-sm">
            <Home className="h-4 w-4 text-primary" />
            <span>Start fresh from the homepage</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <Button
            className="flex items-center gap-2"
            onClick={() => router.back()}
            variant="outline"
          >
            <ArrowLeft className="h-4 w-4" />
            Go Back
          </Button>

          <Button asChild className="flex items-center gap-2">
            <Link href="/">
              <Home className="h-4 w-4" />
              Go Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
