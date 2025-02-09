import { Skeleton } from "@/components/ui/skeleton"
import { WalletConnect } from "@/components/wallet/wallet-connect"
import { Card, CardContent } from "@/components/ui/card"
export default function ModuleDetailSkeleton() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#03040B]">
      <div className="w-full md:w-16 flex md:flex-col justify-between items-center border-b md:border-b-0 md:border-r border-white/10 bg-white/5 backdrop-blur-xl backdrop-filter p-4">
        <div>
          <span className="text-xl font-bold text-white">
            A<span className="text-blue-400">DB</span>
          </span>
        </div>
        <div className="flex items-center justify-center">
          <WalletConnect />
        </div>
      </div>

      <div className="w-full md:w-[400px] border-b md:border-b-0 md:border-r border-white/10 bg-white/5 backdrop-blur-xl backdrop-filter p-6">
        <div className="space-y-6">
          <Skeleton className="h-4 w-24 bg-white/5" />
          <div className="space-y-4">
            <Skeleton className="h-8 w-48 bg-white/5" />
            <Skeleton className="h-4 w-full bg-white/5" />
            <Skeleton className="h-4 w-3/4 bg-white/5" />
          </div>
          <Card className="border-white/10 bg-white/5">
            <CardContent className="space-y-4 p-6">
              <div className="space-y-4">
                <Skeleton className="h-20 w-full bg-white/5" />
                <Skeleton className="h-20 w-full bg-white/5" />
              </div>
            </CardContent>
          </Card>
          <div className="flex gap-3">
            <Skeleton className="h-10 flex-1 bg-white/5" />
            <Skeleton className="h-10 flex-1 bg-white/5" />
            <Skeleton className="h-10 w-10 bg-white/5" />
          </div>
        </div>
      </div>

      <div className="flex-1 bg-[#0D1117] backdrop-blur-xl backdrop-filter">
        <div className="h-16 border-b border-white/10">
          <div className="flex gap-2 p-4">
            <Skeleton className="h-8 w-20 bg-white/5" />
            <Skeleton className="h-8 w-20 bg-white/5" />
            <Skeleton className="h-8 w-20 bg-white/5" />
          </div>
        </div>
        <div className="p-6">
          <Skeleton className="h-[calc(100vh-theme(spacing.32))] w-full bg-white/5" />
        </div>
      </div>
    </div>
  )
}
