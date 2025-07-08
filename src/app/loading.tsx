export default function Loading() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <div className="relative">
        {/* Outer circle */}
        <div className="h-12 w-12 rounded-full border-2 border-gray-200"></div>

        {/* Spinning gradient arc */}
        <div className="absolute top-0 left-0 h-12 w-12">
          <div className="h-12 w-12 animate-spin rounded-full border-t-2 border-blue-500"></div>
        </div>

        {/* Optional loading text */}
        <div className="mt-4 text-center text-sm font-medium text-gray-500">
          Loading...
        </div>
      </div>
    </div>
  )
}
