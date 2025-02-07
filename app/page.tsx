"use client"

import { useState, useMemo, useEffect, useRef } from "react"
import { HubNavbar } from "@/components/navbar/hub-navbar"
import { SearchInput } from "@/components/search/search-input"
import { ModuleCard } from "@/components/module/module-card"
import { ModuleCardSkeleton } from "@/components/skeleton/module-card-skeleton"
import { ModulePagination } from "@/components/pagination/module-pagination"
import { Footer } from "@/components/footer/hub-footer"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { motion } from "framer-motion"
import { useModuleStore } from "@/store/module-state"


const ITEMS_PER_PAGE = 12

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const { fetchModules, modules,loadingModules } = useModuleStore();

  const hasFetched = useRef(false)

  useEffect(() => {
    if (!hasFetched.current) {
      const fetchData = async () => {
        try {
          setIsLoading(true);
          await fetchModules();
        } catch (err) {
          console.error(err);
        } finally {
          setIsLoading(false);
          hasFetched.current = true;
        }
      }
      fetchData()
    }
  }, [fetchModules])

  const filteredModules = useMemo(() => {
    return modules.filter((module) => module.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }, [searchTerm, modules])

  const totalPages = Math.ceil(filteredModules.length / ITEMS_PER_PAGE)
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE
  const currentItems = filteredModules.slice(indexOfFirstItem, indexOfLastItem)

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  const handleSearch = (value: string) => {
    setSearchTerm(value)
    setCurrentPage(1)
  }
  return (
    <div className="min-h-screen flex flex-col bg-[#03040B] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <HubNavbar onSearch={handleSearch} />

      <main className="flex-grow container mx-auto px-4 py-8">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-xl font-bold mb-4 text-white"
        >
          Welcome to Hub
        </motion.h1>
        <motion.p
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-muted-foreground text-sm mb-4"
        >
          A fully open source protocol for developers to create, connect and share machine learning modules.
        </motion.p>
        <div className="md:hidden mb-6 flex items-center space-x-2">
          <div className="flex-1">
            <SearchInput onSearch={handleSearch} />
          </div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-white/10 bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-colors duration-200"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Add New Model</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {isLoading
            ? Array.from({ length: ITEMS_PER_PAGE }).map((_, index) => <ModuleCardSkeleton key={index} />)
            : currentItems.map((module, index) => (
              <ModuleCard
                key={index}
                name={module.name}
                mkey={module.key}
                hash={module.hash}
                timestamp={module.time.toString()}
                description={module?.description || "No description"}
              />
            ))}
        </motion.div>

        {!isLoading && filteredModules.length > ITEMS_PER_PAGE && (
          <ModulePagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        )}

        {!isLoading && !loadingModules && filteredModules.length === 0 && (
          <div className="text-center text-gray-400 mt-8">No modules founds.</div>
        )}

      </main>

      <Footer />
    </div>
  )
}