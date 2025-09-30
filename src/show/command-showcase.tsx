import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
  Search,
  Terminal,
  FileText,
  Folder,
  Mail,
  Phone,
  Shield,
  Zap,
  Database,
  Monitor,
  Activity,
} from "lucide-react"

export default function CommandShowCase() {
  const [open, setOpen] = useState(false)
  const [dialogOpen, setDialogOpen] = useState(false)

  return (
    <div className="space-y-8 p-6">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Command</h2>
        <p className="text-muted-foreground">
          Fast, composable, unstyled command menu for React. Perfect for building search interfaces and command palettes.
        </p>
      </div>

      {/* Basic Command */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Basic Command</h3>
        <div className="w-full max-w-md">
          <Command className="rounded-lg border shadow-md">
            <CommandInput placeholder="Search MAGI systems..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="MAGI Systems">
                <CommandItem>
                  <Database className="mr-2 h-4 w-4" />
                  <span>MAGI-01 Melchior</span>
                </CommandItem>
                <CommandItem>
                  <Monitor className="mr-2 h-4 w-4" />
                  <span>MAGI-02 Balthasar</span>
                </CommandItem>
                <CommandItem>
                  <Activity className="mr-2 h-4 w-4" />
                  <span>MAGI-03 Casper</span>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Operations">
                <CommandItem>
                  <Shield className="mr-2 h-4 w-4" />
                  <span>AT Field Analysis</span>
                  <CommandShortcut>⌘A</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <Zap className="mr-2 h-4 w-4" />
                  <span>Pattern Blue Detection</span>
                  <CommandShortcut>⌘B</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <Terminal className="mr-2 h-4 w-4" />
                  <span>System Diagnostics</span>
                  <CommandShortcut>⌘D</CommandShortcut>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </div>
      </div>

      {/* Command Dialog */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Command Dialog</h3>
        <div className="space-y-2">
          <Button onClick={() => setDialogOpen(true)}>
            <Search className="mr-2 h-4 w-4" />
            Open Command Palette
          </Button>
          <p className="text-sm text-muted-foreground">
            Press ⌘K to open the command palette
          </p>
        </div>
        <CommandDialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>
                <Calendar className="mr-2 h-4 w-4" />
                <span>Calendar</span>
              </CommandItem>
              <CommandItem>
                <Smile className="mr-2 h-4 w-4" />
                <span>Search Emoji</span>
              </CommandItem>
              <CommandItem>
                <Calculator className="mr-2 h-4 w-4" />
                <span>Calculator</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
                <CommandShortcut>⌘P</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <CreditCard className="mr-2 h-4 w-4" />
                <span>Billing</span>
                <CommandShortcut>⌘B</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
                <CommandShortcut>⌘S</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandDialog>
      </div>

      {/* NERV Command Center */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">NERV Command Center</h3>
        <div className="w-full max-w-lg">
          <Command className="rounded-lg border-2 border-orange-500/20 bg-gradient-to-br from-orange-50 to-red-50 shadow-lg dark:from-orange-950/20 dark:to-red-950/20">
            <CommandInput 
              placeholder="Enter NERV command..." 
              className="border-orange-200 dark:border-orange-800"
            />
            <CommandList>
              <CommandEmpty>Command not recognized.</CommandEmpty>
              <CommandGroup heading="Evangelion Units">
                <CommandItem className="data-[selected=true]:bg-orange-100 dark:data-[selected=true]:bg-orange-900/50">
                  <Shield className="mr-2 h-4 w-4 text-purple-600" />
                  <span>EVA-01 Status</span>
                  <CommandShortcut>E1</CommandShortcut>
                </CommandItem>
                <CommandItem className="data-[selected=true]:bg-orange-100 dark:data-[selected=true]:bg-orange-900/50">
                  <Shield className="mr-2 h-4 w-4 text-red-600" />
                  <span>EVA-02 Status</span>
                  <CommandShortcut>E2</CommandShortcut>
                </CommandItem>
                <CommandItem className="data-[selected=true]:bg-orange-100 dark:data-[selected=true]:bg-orange-900/50">
                  <Shield className="mr-2 h-4 w-4 text-blue-600" />
                  <span>EVA-00 Status</span>
                  <CommandShortcut>E0</CommandShortcut>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator className="bg-orange-200 dark:bg-orange-800" />
              <CommandGroup heading="Emergency Protocols">
                <CommandItem className="data-[selected=true]:bg-orange-100 dark:data-[selected=true]:bg-orange-900/50">
                  <Zap className="mr-2 h-4 w-4 text-yellow-600" />
                  <span>Angel Alert</span>
                  <CommandShortcut>⌘!</CommandShortcut>
                </CommandItem>
                <CommandItem className="data-[selected=true]:bg-orange-100 dark:data-[selected=true]:bg-orange-900/50">
                  <Activity className="mr-2 h-4 w-4 text-red-600" />
                  <span>Emergency Evacuation</span>
                  <CommandShortcut>⌘E</CommandShortcut>
                </CommandItem>
                <CommandItem className="data-[selected=true]:bg-orange-100 dark:data-[selected=true]:bg-orange-900/50">
                  <Database className="mr-2 h-4 w-4 text-green-600" />
                  <span>MAGI Override</span>
                  <CommandShortcut>⌘M</CommandShortcut>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator className="bg-orange-200 dark:bg-orange-800" />
              <CommandGroup heading="Communications">
                <CommandItem className="data-[selected=true]:bg-orange-100 dark:data-[selected=true]:bg-orange-900/50">
                  <Mail className="mr-2 h-4 w-4" />
                  <span>Contact Pilot</span>
                </CommandItem>
                <CommandItem className="data-[selected=true]:bg-orange-100 dark:data-[selected=true]:bg-orange-900/50">
                  <Phone className="mr-2 h-4 w-4" />
                  <span>Bridge Communication</span>
                </CommandItem>
                <CommandItem className="data-[selected=true]:bg-orange-100 dark:data-[selected=true]:bg-orange-900/50">
                  <FileText className="mr-2 h-4 w-4" />
                  <span>Mission Reports</span>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </div>
      </div>

      {/* File Explorer Command */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">File Explorer</h3>
        <div className="w-full max-w-md">
          <Command className="rounded-lg border shadow-md">
            <CommandInput placeholder="Search files and folders..." />
            <CommandList>
              <CommandEmpty>No files found.</CommandEmpty>
              <CommandGroup heading="Recent Files">
                <CommandItem>
                  <FileText className="mr-2 h-4 w-4 text-blue-600" />
                  <span>project-report.pdf</span>
                </CommandItem>
                <CommandItem>
                  <FileText className="mr-2 h-4 w-4 text-green-600" />
                  <span>data-analysis.xlsx</span>
                </CommandItem>
                <CommandItem>
                  <FileText className="mr-2 h-4 w-4 text-orange-600" />
                  <span>presentation.pptx</span>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Folders">
                <CommandItem>
                  <Folder className="mr-2 h-4 w-4 text-yellow-600" />
                  <span>Documents</span>
                </CommandItem>
                <CommandItem>
                  <Folder className="mr-2 h-4 w-4 text-purple-600" />
                  <span>Projects</span>
                </CommandItem>
                <CommandItem>
                  <Folder className="mr-2 h-4 w-4 text-pink-600" />
                  <span>Downloads</span>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </div>
      </div>

      {/* Keyboard Shortcuts Info */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Keyboard Navigation</h3>
        <div className="rounded-lg border p-4 space-y-2 text-sm">
          <p><kbd className="px-2 py-1 bg-muted rounded text-xs">↑↓</kbd> Navigate items</p>
          <p><kbd className="px-2 py-1 bg-muted rounded text-xs">Enter</kbd> Select item</p>
          <p><kbd className="px-2 py-1 bg-muted rounded text-xs">Esc</kbd> Close dialog</p>
          <p><kbd className="px-2 py-1 bg-muted rounded text-xs">⌘K</kbd> Open command palette</p>
        </div>
      </div>
    </div>
  )
}