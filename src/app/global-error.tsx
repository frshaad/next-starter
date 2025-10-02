"use client";

import { AlertCircle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

type GlobalErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function GlobalError({ reset }: GlobalErrorProps) {
  return (
    // biome-ignore lint/a11y/useHtmlLang: This is a valid use case.
    <html>
      <body className="dark">
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-background to-muted">
          <div className="max-w-md space-y-6 p-8 text-center">
            {/* Critical Error Icon */}
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-destructive/30 bg-destructive/10 dark:bg-destructive/20">
              <AlertCircle className="h-10 w-10 animate-pulse text-destructive" />
            </div>

            {/* Error Content */}
            <div className="space-y-3">
              <h1 className="font-bold text-2xl text-foreground">
                Critical Error
              </h1>
              <p className="text-muted-foreground leading-relaxed">
                Something went seriously wrong. Please try refreshing the page.
              </p>
            </div>

            {/* Action Button */}
            <Button
              className="flex items-center gap-2"
              onClick={reset}
              variant="destructive"
            >
              <RefreshCw className="h-4 w-4" />
              Try Again
            </Button>
          </div>
        </div>
      </body>
    </html>
  );
}
