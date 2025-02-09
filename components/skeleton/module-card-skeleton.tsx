import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export function ModuleCardSkeleton() {
  return (
    <Card className="overflow-hidden border-white/10 bg-white/5 backdrop-blur-md backdrop-filter">
      <CardContent className="p-5 flex flex-col h-[360px]">
        {/* Header with image and name */}
        <div className="mb-4 flex items-center space-x-3">
          <Skeleton className="h-10 w-10 rounded-lg bg-white/10" />
          <div className="flex-1">
            <Skeleton className="h-6 w-24 bg-white/10" />
          </div>
        </div>

        {/* Description area */}
        <div className="mb-4 rounded-md border border-white/10 bg-white/5 p-4 h-[80px]">
          <div className="flex space-x-2">
            <Skeleton className="h-4 w-4 bg-white/10 flex-shrink-0" />
            <div className="flex-1 space-y-2">
              <Skeleton className="h-4 w-full bg-white/10" />
              <Skeleton className="h-4 w-3/4 bg-white/10" />
            </div>
          </div>
        </div>

        {/* Details section */}
        <div className="space-y-4 font-mono text-sm flex-1">
          {/* Key row */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 flex-1">
              <Skeleton className="h-4 w-4 bg-white/10" />
              <Skeleton className="h-4 w-8 bg-white/10" />
              <Skeleton className="h-4 w-24 bg-white/10" />
            </div>
            <Skeleton className="h-8 w-8 rounded-md bg-white/10 ml-2" />
          </div>

          {/* Hash row */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 flex-1">
              <Skeleton className="h-4 w-4 bg-white/10" />
              <Skeleton className="h-4 w-8 bg-white/10" />
              <Skeleton className="h-4 w-24 bg-white/10" />
            </div>
            <Skeleton className="h-8 w-8 rounded-md bg-white/10 ml-2" />
          </div>

          {/* Network row */}
          <div className="flex items-center space-x-2">
            <Skeleton className="h-4 w-4 bg-white/10" />
            <Skeleton className="h-4 w-16 bg-white/10" />
            <Skeleton className="h-4 w-20 bg-white/10" />
          </div>

          {/* Time row */}
          <div className="flex items-center space-x-2">
            <Skeleton className="h-4 w-4 bg-white/10" />
            <Skeleton className="h-4 w-10 bg-white/10" />
            <Skeleton className="h-4 w-32 bg-white/10" />
          </div>
        </div>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2 h-[40px]">
          <Skeleton className="h-6 w-16 bg-white/10 rounded-full" />
          <Skeleton className="h-6 w-20 bg-white/10 rounded-full" />
          <Skeleton className="h-6 w-14 bg-white/10 rounded-full" />
        </div>
      </CardContent>

      <CardFooter className="grid grid-cols-3 border-t border-white/10 p-0">
        <div className="flex h-12 items-center justify-center border-r border-white/10">
          <Skeleton className="h-4 w-16 bg-white/10" />
        </div>
        <div className="flex h-12 items-center justify-center border-r border-white/10">
          <Skeleton className="h-4 w-16 bg-white/10" />
        </div>
        <div className="flex h-12 items-center justify-center">
          <Skeleton className="h-4 w-16 bg-white/10" />
        </div>
      </CardFooter>
    </Card>
  )
}

