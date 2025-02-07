import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export function ModuleCardSkeleton() {
  return (
    <Card className="overflow-hidden rounded-lg border border-white/10 bg-white/5 backdrop-blur-md backdrop-filter">
      <CardHeader className="p-5">
        <div className="flex items-center justify-between">
          <Skeleton className="h-6 w-24 bg-white/10" />
          <div className="flex items-center space-x-2">
            <Skeleton className="h-4 w-32 bg-white/10" />
            <Skeleton className="h-8 w-8 rounded-md bg-white/10" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-5">
        <Skeleton className="h-16 w-full bg-white/10 mb-4" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-3/4 bg-white/10" />
          <Skeleton className="h-4 w-1/2 bg-white/10" />
        </div>
      </CardContent>
      <CardFooter className="border-t border-white/10 p-0">
        <div className="flex w-full">
          <Skeleton className="h-12 w-1/2 bg-white/10" />
          <Skeleton className="h-12 w-1/2 bg-white/10" />
        </div>
      </CardFooter>
    </Card>
  )
}

