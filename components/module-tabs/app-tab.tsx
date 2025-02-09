import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

export function AppTab() {
  const appImageUrl = "/placeholder.svg"
  const appDescription =
    "This is a placeholder description for the agent's application. It provides an overview of the app's functionality and purpose."

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-white">Application Details</h2>
        <p className="text-sm text-gray-400">View and interact with the module application.</p>
      </div>

      <Separator className="bg-white/10" />

      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <Avatar className="w-16 h-16">
            <AvatarImage src={appImageUrl} alt="App Icon" />
            <AvatarFallback>APP</AvatarFallback>
          </Avatar>
          <div>
            <Label className="text-sm font-medium text-gray-200">App Icon</Label>
          </div>
        </div>

        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-200">Description</Label>
          <p className="text-sm text-gray-300">{appDescription}</p>
        </div>
      </div>

      <Separator className="bg-white/10" />

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white">App Preview</h3>
        <div className="aspect-video w-full overflow-hidden rounded-lg border border-white/10">
          <iframe
            src="https://bettertherapy.ai/"
            className="w-full h-full"
            style={{ minHeight: "400px" }}
            title="Agent Application Preview"
          />
        </div>
      </div>
    </div>
  )
}

