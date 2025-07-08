export default function Loading() {
  return (
    <div className="bg-background flex min-h-[50vh] items-center justify-center">
      <div className="relative">
        {/* Outer circle */}
        <div className="border-border h-12 w-12 rounded-full border-2" />

        {/* Spinning gradient arc */}
        <div className="absolute top-0 left-0 h-12 w-12">
          <div className="border-primary h-12 w-12 animate-spin rounded-full border-t-2" />
        </div>

        {/* Optional loading text */}
        <div className="text-muted-foreground mt-4 text-center text-sm font-medium">
          Loading...
        </div>
      </div>
    </div>
  )
}
