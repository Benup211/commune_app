"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { X } from "lucide-react"

interface AddNewModuleDialogProps {
  isOpen: boolean
  onClose: () => void
  onCreateModule: (module: NewModule) => void
}

interface NewModule {
  name: string
  url: string
  codeLocation: string
  network: string
  description: string
  tags: string[]
}

interface FormErrors {
  name?: string
  url?: string
  description?: string
  tags?: string
}

export function AddNewModuleDialog({ isOpen, onClose, onCreateModule }: AddNewModuleDialogProps) {
  const [name, setName] = useState("")
  const [url, setUrl] = useState("")
  const [codeLocation, setCodeLocation] = useState("")
  const [network, setNetwork] = useState("commune")
  const [description, setDescription] = useState("")
  const [tags, setTags] = useState<string[]>([])
  const [currentTag, setCurrentTag] = useState("")
  const [errors, setErrors] = useState<FormErrors>({})

  const handleAddTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && currentTag.trim() !== "") {
      e.preventDefault()
      setTags([...tags, currentTag.trim()])
      setCurrentTag("")
    }
  }

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove))
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}
    if (!name.trim()) {
      newErrors.name = "Name is required"
    }
    if (!url.trim()) {
      newErrors.url = "URL is required"
    }
    if (!description.trim()) {
      newErrors.description = "Description is required"
    }
    if (tags.length === 0) {
      newErrors.tags = "At least one tag is required"
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleCreate = () => {
    if (validateForm()) {
      const newModule: NewModule = {
        name,
        url,
        codeLocation,
        network,
        description,
        tags,
      }
      onCreateModule(newModule)
      resetForm()
      onClose()
    }
  }

  const resetForm = () => {
    setName("")
    setUrl("")
    setCodeLocation("")
    setNetwork("commune")
    setDescription("")
    setTags([])
    setCurrentTag("")
    setErrors({})
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] w-[95vw] max-h-[90vh] overflow-y-auto bg-white/5 border border-white/10 backdrop-blur-xl backdrop-filter text-white p-6">
        <DialogHeader>
          <DialogTitle>Add New Module</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="name" className="text-sm font-medium text-gray-200">
              Name
            </Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-white/5 border-white/10 text-white"
              required
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="url" className="text-sm font-medium text-gray-200">
              URL
            </Label>
            <Input
              id="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="bg-white/5 border-white/10 text-white"
              required
            />
            {errors.url && <p className="text-red-500 text-xs mt-1">{errors.url}</p>}
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="codeLocation" className="text-sm font-medium text-gray-200">
              Code Location
            </Label>
            <Input
              id="codeLocation"
              value={codeLocation}
              onChange={(e) => setCodeLocation(e.target.value)}
              className="bg-white/5 border-white/10 text-white"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="network" className="text-sm font-medium text-gray-200">
              Network
            </Label>
            <Input
              id="network"
              value={network}
              onChange={(e) => setNetwork(e.target.value)}
              className="bg-white/5 border-white/10 text-white"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="description" className="text-sm font-medium text-gray-200">
              Description
            </Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="bg-white/5 border-white/10 text-white"
              required
            />
            {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description}</p>}
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="tags" className="text-sm font-medium text-gray-200">
              Tags
            </Label>
            <div className="flex flex-col gap-2">
              <Input
                id="tags"
                value={currentTag}
                onChange={(e) => setCurrentTag(e.target.value)}
                onKeyDown={handleAddTag}
                placeholder="Press Enter to add tag"
                className="bg-white/5 border-white/10 text-white"
              />
              <div className="flex flex-wrap gap-2 mt-2">
                {tags.map((tag, index) => (
                  <div key={index} className="flex items-center bg-blue-500 text-white px-2 py-1 rounded text-sm">
                    {tag}
                    <button
                      onClick={() => handleRemoveTag(tag)}
                      className="ml-2 text-white hover:text-red-300 transition-colors"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                ))}
              </div>
              {errors.tags && <p className="text-red-500 text-xs mt-1">{errors.tags}</p>}
            </div>
          </div>
        </div>
        <DialogFooter className="gap-2 sm:gap-0">
          <Button
            variant="outline"
            onClick={onClose}
            className="border-white/10 bg-white/5 text-white hover:bg-white/10"
          >
            Cancel
          </Button>
          <Button onClick={handleCreate} className="bg-blue-500 text-white hover:bg-blue-600">
            Create
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

