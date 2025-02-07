"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"
import { motion } from "framer-motion"

interface ModuleCardProps {
  name: string
  mkey: string
  hash: string
  timestamp: string
  description: string
}

export function ModuleCard({ name, mkey, hash, timestamp, description }: ModuleCardProps) {
  const [copied, setCopied] = useState(false)
  

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(mkey)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  const truncateDescription = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text
    return text.slice(0, maxLength) + "..."
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      className="overflow-hidden rounded-lg border border-white/10 bg-white/5 backdrop-blur-md backdrop-filter transition-all duration-300 hover:bg-violet-300/10"
    >
      <div className="p-5">
        <div className="mb-4 flex items-center justify-between">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.2 }}
            className="rounded bg-blue-500/20 px-2 py-1 text-xs font-medium text-blue-400"
          >
            {name}
          </motion.span>
          <div className="flex items-center space-x-2 max-w-[60%]">
            <span className="font-mono text-sm text-gray-300 truncate">{mkey}</span>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={copyToClipboard}
              className="flex-shrink-0 rounded-md border border-white/10 bg-white/10 p-1.5 text-gray-400 hover:bg-white/20 hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors duration-200"
              aria-label="Copy agent ID"
            >
              {copied ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
            </motion.button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.2 }}
          className="mb-4 rounded-md border border-white/10 bg-white/5 p-4"
        >
          <div className="flex items-center font-mono text-sm">
            <span className="mr-2 text-blue-400">$</span>
            <span className="text-gray-300" title={description}>
              {truncateDescription(description, 40)}
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.2 }}
          className="mb-4 flex items-center space-x-2 font-mono text-sm"
        >
          <span className="text-gray-500">#</span>
          <span className="text-gray-400">Hash:</span>
          <span className="text-blue-400 truncate" title={hash}>
            {hash.slice(0, 10)}
            {hash.length > 10 && "..."}
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.2 }}
          className="mb-4 flex items-center space-x-2 font-mono text-sm"
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
            className="text-gray-400"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          <span className="text-gray-400">Time:</span>
          <span className="text-gray-300">{timestamp}</span>
        </motion.div>
      </div>

      <div className="flex border-t border-white/10">
        <motion.button
          whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
          className="flex flex-1 items-center justify-center bg-white/5 py-3 text-sm font-medium text-gray-300 transition-colors duration-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
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
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
          Code
        </motion.button>
        <motion.button
          whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
          className="flex flex-1 items-center justify-center bg-white/5 py-3 text-sm font-medium text-gray-300 transition-colors duration-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
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
            <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34" />
            <polygon points="18 2 22 6 12 16 8 16 8 12 18 2" />
          </svg>
          API
        </motion.button>
      </div>
    </motion.div>
  )
}

