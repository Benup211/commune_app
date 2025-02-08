"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Check, Copy, Code, ExternalLink } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface ModuleCardProps {
  name: string
  mkey: string
  hash: string
  timestamp: string
  description: string
}

export function ModuleCard({ name, mkey, hash, timestamp, description }: ModuleCardProps) {
  const router = useRouter()
  const [copied, setCopied] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const copyToClipboard = async (e: React.MouseEvent) => {
    e.stopPropagation()
    try {
      await navigator.clipboard.writeText(mkey)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  const navigateToModule = () => {
    router.push(`/module/${encodeURIComponent(name.toLowerCase())}`)
  }

  const handleCodeClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    router.push(`/module/${encodeURIComponent(name.toLowerCase())}?tab=code`)
  }

  const handleApiClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    router.push(`/module/${encodeURIComponent(name.toLowerCase())}?tab=api`)
  }

  const handleAppClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    router.push(`/module/${encodeURIComponent(name.toLowerCase())}?tab=app`)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card
        className="group relative overflow-hidden border-white/10 bg-white/5 backdrop-blur-md backdrop-filter transition-all duration-300 hover:bg-white/10 cursor-pointer"
        onClick={navigateToModule}
      >
        <CardContent className="p-5">
          <div className="mb-4 flex items-center justify-between">
            <Badge variant="outline" className="bg-blue-500/10 text-blue-400 border-blue-500/20 font-medium">
              {name}
            </Badge>
            <div className="flex items-center space-x-2">
              <code className="font-mono text-sm text-gray-300 truncate max-w-[120px]">{mkey}</code>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={copyToClipboard}
                      className="h-8 w-8 rounded-md hover:bg-[#30363D] transition-all duration-200"
                    >
                      <AnimatePresence>
                        {copied ? (
                          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                            <Check className="h-4 w-4 text-green-400" />
                          </motion.span>
                        ) : (
                          <Copy className="h-4 w-4 text-gray-400" />
                        )}
                      </AnimatePresence>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Copy module id</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>

          <div className="mb-4 rounded-md border border-white/10 bg-white/5 p-4">
            <div className="flex items-center font-mono text-sm">
              <span className="mr-2 text-blue-400">$</span>
              <span className="text-gray-300">{description}</span>
            </div>
          </div>

          <div className="space-y-2 font-mono text-sm">
            <div className="flex items-center space-x-2">
              <span className="text-gray-500">#</span>
              <span className="text-gray-400">Hash:</span>
              <span className="text-blue-400 truncate">{hash}</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-400"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <span className="text-gray-400">Time:</span>
              <span className="text-gray-300">{timestamp}</span>
            </div>
          </div>
        </CardContent>

        <CardFooter className="grid grid-cols-3 border-t border-white/10 p-0">
          <Button
            variant="ghost"
            onClick={handleCodeClick}
            className="flex h-12 items-center justify-center space-x-2 rounded-none border-r border-white/10 text-sm font-medium text-gray-300 transition-colors hover:bg-white/10 hover:text-white"
          >
            <Code className="h-4 w-4" />
            <span>Code</span>
          </Button>
          <Button
            variant="ghost"
            onClick={handleApiClick}
            className="flex h-12 items-center justify-center space-x-2 rounded-none border-r border-white/10 text-sm font-medium text-gray-300 transition-colors hover:bg-white/10 hover:text-white"
          >
            <ExternalLink className="h-4 w-4" />
            <span>API</span>
          </Button>
          <Button
            variant="ghost"
            onClick={handleAppClick}
            className="flex h-12 items-center justify-center space-x-2 rounded-none text-sm font-medium text-gray-300 transition-colors hover:bg-white/10 hover:text-white"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
              <line x1="8" y1="21" x2="16" y2="21" />
              <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
            <span>App</span>
          </Button>
        </CardFooter>

        <motion.div
          initial={false}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"
        />
      </Card>
    </motion.div>
  )
}

