import { useState } from "react"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { 
  ChevronLeft, 
  ChevronRight, 
  ChevronsLeft, 
  ChevronsRight,
  Database,
  Users,
  FileText,
  Activity,
  Search,
  Filter
} from "lucide-react"

export default function PaginationShowCase() {
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const [nervCurrentPage, setNervCurrentPage] = useState(1)
  const [pilotCurrentPage, setPilotCurrentPage] = useState(1)
  const [missionCurrentPage, setMissionCurrentPage] = useState(1)

  const totalItems = 250
  const totalPages = Math.ceil(totalItems / itemsPerPage)

  // Sample data for demonstrations
  const nervSystems = Array.from({ length: 47 }, (_, i) => ({
    id: i + 1,
    name: `MAGI System ${String.fromCharCode(65 + (i % 3))}`,
    status: i % 4 === 0 ? "Critical" : i % 3 === 0 ? "Warning" : "Operational",
    load: Math.floor(Math.random() * 100),
  }))

  const pilots = Array.from({ length: 23 }, (_, i) => ({
    id: i + 1,
    name: `Pilot ${i + 1}`,
    syncRatio: Math.floor(Math.random() * 100),
    status: i % 5 === 0 ? "Standby" : i % 3 === 0 ? "Training" : "Active",
  }))

  const missions = Array.from({ length: 156 }, (_, i) => ({
    id: i + 1,
    name: `Operation ${String.fromCharCode(65 + (i % 26))}${String.fromCharCode(65 + ((i + 1) % 26))}`,
    date: new Date(Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000).toLocaleDateString(),
    status: i % 4 === 0 ? "Completed" : i % 3 === 0 ? "Failed" : "Success",
  }))

  const renderPaginationRange = (current: number, total: number) => {
    const delta = 2
    const range = []
    const rangeWithDots = []

    for (let i = Math.max(2, current - delta); i <= Math.min(total - 1, current + delta); i++) {
      range.push(i)
    }

    if (current - delta > 2) {
      rangeWithDots.push(1, "...")
    } else {
      rangeWithDots.push(1)
    }

    rangeWithDots.push(...range)

    if (current + delta < total - 1) {
      rangeWithDots.push("...", total)
    } else {
      rangeWithDots.push(total)
    }

    return rangeWithDots
  }

  return (
    <div className="space-y-8 p-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Pagination Component</h1>
        <p className="text-muted-foreground">
          Navigate through large datasets with pagination controls.
        </p>
      </div>

      {/* Basic Pagination */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ChevronRight className="h-5 w-5" />
            Basic Pagination
          </CardTitle>
          <CardDescription>
            Simple pagination with previous, next, and page numbers.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems} results
            </p>
            <div className="flex items-center gap-2">
              <span className="text-sm">Items per page:</span>
              <Select value={itemsPerPage.toString()} onValueChange={(value) => {
                setItemsPerPage(Number(value))
                setCurrentPage(1)
              }}>
                <SelectTrigger className="w-20">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="5">5</SelectItem>
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="20">20</SelectItem>
                  <SelectItem value="50">50</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault()
                    if (currentPage > 1) setCurrentPage(currentPage - 1)
                  }}
                  className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                />
              </PaginationItem>
              
              {renderPaginationRange(currentPage, totalPages).map((page, index) => (
                <PaginationItem key={index}>
                  {page === "..." ? (
                    <PaginationEllipsis />
                  ) : (
                    <PaginationLink
                      href="#"
                      onClick={(e) => {
                        e.preventDefault()
                        setCurrentPage(page as number)
                      }}
                      isActive={currentPage === page}
                    >
                      {page}
                    </PaginationLink>
                  )}
                </PaginationItem>
              ))}
              
              <PaginationItem>
                <PaginationNext 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault()
                    if (currentPage < totalPages) setCurrentPage(currentPage + 1)
                  }}
                  className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </CardContent>
      </Card>

      {/* NERV Command Interface */}
      <Card className="border-orange-200 dark:border-orange-800">
        <CardHeader className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950 dark:to-red-950">
          <CardTitle className="py-3 flex items-center gap-2 text-orange-700 dark:text-orange-300">
            <Database className="h-5 w-5" />
            NERV System Database
          </CardTitle>
          <CardDescription className="p-1">
            MAGI System monitoring and control interface.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4">
            {nervSystems.slice((nervCurrentPage - 1) * 5, nervCurrentPage * 5).map((system) => (
              <div key={system.id} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <div>
                    <div className="font-medium">{system.name}</div>
                    <div className="text-sm text-muted-foreground">Load: {system.load}%</div>
                  </div>
                </div>
                <Badge variant={
                  system.status === "Critical" ? "destructive" : 
                  system.status === "Warning" ? "secondary" : "default"
                }>
                  {system.status}
                </Badge>
              </div>
            ))}
          </div>
          
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setNervCurrentPage(1)}
                  disabled={nervCurrentPage === 1}
                >
                  <ChevronsLeft className="h-4 w-4" />
                </Button>
              </PaginationItem>
              <PaginationItem>
                <PaginationPrevious 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault()
                    if (nervCurrentPage > 1) setNervCurrentPage(nervCurrentPage - 1)
                  }}
                  className={nervCurrentPage === 1 ? "pointer-events-none opacity-50" : ""}
                />
              </PaginationItem>
              
              {Array.from({ length: Math.min(5, Math.ceil(nervSystems.length / 5)) }, (_, i) => i + 1).map((page) => (
                <PaginationItem key={page}>
                  <PaginationLink
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      setNervCurrentPage(page)
                    }}
                    isActive={nervCurrentPage === page}
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              ))}
              
              <PaginationItem>
                <PaginationNext 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault()
                    if (nervCurrentPage < Math.ceil(nervSystems.length / 5)) setNervCurrentPage(nervCurrentPage + 1)
                  }}
                  className={nervCurrentPage === Math.ceil(nervSystems.length / 5) ? "pointer-events-none opacity-50" : ""}
                />
              </PaginationItem>
              <PaginationItem>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setNervCurrentPage(Math.ceil(nervSystems.length / 5))}
                  disabled={nervCurrentPage === Math.ceil(nervSystems.length / 5)}
                >
                  <ChevronsRight className="h-4 w-4" />
                </Button>
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </CardContent>
      </Card>

      {/* Pilot Database */}
      <Card className="border-blue-200 dark:border-blue-800">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950">
          <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
            <Users className="h-5 w-5" />
            Pilot Database
          </CardTitle>
          <CardDescription>
            Eva pilot synchronization and status monitoring.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-4 mb-4">
            <Button variant="outline" size="sm">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <div className="ml-auto text-sm text-muted-foreground">
              {pilots.length} pilots total
            </div>
          </div>
          
          <div className="grid gap-3">
            {pilots.slice((pilotCurrentPage - 1) * 6, pilotCurrentPage * 6).map((pilot) => (
              <div key={pilot.id} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                    {pilot.name.split(' ')[1]}
                  </div>
                  <div>
                    <div className="font-medium">{pilot.name}</div>
                    <div className="text-sm text-muted-foreground">Sync: {pilot.syncRatio}%</div>
                  </div>
                </div>
                <Badge variant={
                  pilot.status === "Active" ? "default" : 
                  pilot.status === "Training" ? "secondary" : "outline"
                }>
                  {pilot.status}
                </Badge>
              </div>
            ))}
          </div>
          
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault()
                    if (pilotCurrentPage > 1) setPilotCurrentPage(pilotCurrentPage - 1)
                  }}
                  className={pilotCurrentPage === 1 ? "pointer-events-none opacity-50" : ""}
                />
              </PaginationItem>
              
              {Array.from({ length: Math.ceil(pilots.length / 6) }, (_, i) => i + 1).map((page) => (
                <PaginationItem key={page}>
                  <PaginationLink
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      setPilotCurrentPage(page)
                    }}
                    isActive={pilotCurrentPage === page}
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              ))}
              
              <PaginationItem>
                <PaginationNext 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault()
                    if (pilotCurrentPage < Math.ceil(pilots.length / 6)) setPilotCurrentPage(pilotCurrentPage + 1)
                  }}
                  className={pilotCurrentPage === Math.ceil(pilots.length / 6) ? "pointer-events-none opacity-50" : ""}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </CardContent>
      </Card>

      {/* Mission Archive */}
      <Card className="border-green-200 dark:border-green-800">
        <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950">
          <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-300">
            <FileText className="h-5 w-5" />
            Mission Archive
          </CardTitle>
          <CardDescription>
            Historical operation records and analysis.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-2">
            {missions.slice((missionCurrentPage - 1) * 8, missionCurrentPage * 8).map((mission) => (
              <div key={mission.id} className="flex items-center justify-between p-2 border rounded">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-100 dark:bg-green-900 rounded flex items-center justify-center">
                    <Activity className="h-3 w-3 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <div className="font-medium text-sm">{mission.name}</div>
                    <div className="text-xs text-muted-foreground">{mission.date}</div>
                  </div>
                </div>
                <Badge 
                  variant={mission.status === "Success" ? "default" : mission.status === "Failed" ? "destructive" : "secondary"}
                  className="text-xs"
                >
                  {mission.status}
                </Badge>
              </div>
            ))}
          </div>
          
          <div className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              Page {missionCurrentPage} of {Math.ceil(missions.length / 8)}
            </div>
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious 
                    href="#" 
                    onClick={(e) => {
                      e.preventDefault()
                      if (missionCurrentPage > 1) setMissionCurrentPage(missionCurrentPage - 1)
                    }}
                    className={missionCurrentPage === 1 ? "pointer-events-none opacity-50" : ""}
                  />
                </PaginationItem>
                
                <PaginationItem>
                  <PaginationLink
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      setMissionCurrentPage(missionCurrentPage)
                    }}
                    isActive={true}
                  >
                    {missionCurrentPage}
                  </PaginationLink>
                </PaginationItem>
                
                <PaginationItem>
                  <PaginationNext 
                    href="#" 
                    onClick={(e) => {
                      e.preventDefault()
                      if (missionCurrentPage < Math.ceil(missions.length / 8)) setMissionCurrentPage(missionCurrentPage + 1)
                    }}
                    className={missionCurrentPage === Math.ceil(missions.length / 8) ? "pointer-events-none opacity-50" : ""}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </CardContent>
      </Card>

      {/* Compact Pagination Examples */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Compact Pagination</CardTitle>
            <CardDescription>Minimal pagination for small spaces.</CardDescription>
          </CardHeader>
          <CardContent>
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Simple Navigation</CardTitle>
            <CardDescription>Previous/Next only navigation.</CardDescription>
          </CardHeader>
          <CardContent>
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <span className="px-4 py-2 text-sm">Page 5 of 20</span>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </CardContent>
        </Card>
      </div>

    </div>
  )
}