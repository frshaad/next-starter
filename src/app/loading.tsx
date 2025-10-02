export default function Loading() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center bg-background">
      <div className="relative">
        {/* Outer circle */}
        <div className="h-12 w-12 rounded-full border-2 border-border" />

        {/* Spinning gradient arc */}
        <div className="absolute top-0 left-0 h-12 w-12">
          <div className="h-12 w-12 animate-spin rounded-full border-primary border-t-2" />
        </div>

        {/* Optional loading text */}
        <div className="mt-4 text-center font-medium text-muted-foreground text-sm">
          Loading...
        </div>
      </div>
    </div>
  );
}
