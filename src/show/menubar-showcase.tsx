import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
} from "@/components/ui/menubar"
import {
  File,
  Edit,
  View,
  Settings,
  Save,
  Copy,
  Undo,
  Redo,
  Search,
  Monitor,
  Sun,
  Moon,
  Laptop,
  Shield,
  Zap,
  Database,
  Activity,
  Terminal,
  FileText,
  Folder,
  Download,
  Upload,
  RefreshCw,
  Power,
} from "lucide-react"

export default function MenubarShowCase() {
  return (
    <div className="space-y-8 p-6">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Menubar</h2>
        <p className="text-muted-foreground">
          A visually persistent menu common in desktop applications that provides access to a consistent set of commands.
        </p>
      </div>

      {/* Basic Application Menubar */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Application Menubar</h3>
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>File</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                <File className="mr-2 h-4 w-4" />
                New File
                <MenubarShortcut>⌘N</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                <Folder className="mr-2 h-4 w-4" />
                Open File
                <MenubarShortcut>⌘O</MenubarShortcut>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem>
                <Save className="mr-2 h-4 w-4" />
                Save
                <MenubarShortcut>⌘S</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                Save As...
                <MenubarShortcut>⌘⇧S</MenubarShortcut>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem>
                <Download className="mr-2 h-4 w-4" />
                Export
              </MenubarItem>
              <MenubarItem>
                <Upload className="mr-2 h-4 w-4" />
                Import
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger>Edit</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                <Undo className="mr-2 h-4 w-4" />
                Undo
                <MenubarShortcut>⌘Z</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                <Redo className="mr-2 h-4 w-4" />
                Redo
                <MenubarShortcut>⌘Y</MenubarShortcut>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem>
                <Copy className="mr-2 h-4 w-4" />
                Copy
                <MenubarShortcut>⌘C</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                Paste
                <MenubarShortcut>⌘V</MenubarShortcut>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem>
                <Search className="mr-2 h-4 w-4" />
                Find
                <MenubarShortcut>⌘F</MenubarShortcut>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger>View</MenubarTrigger>
            <MenubarContent>
              <MenubarCheckboxItem checked>
                Show Sidebar
              </MenubarCheckboxItem>
              <MenubarCheckboxItem>
                Show Toolbar
              </MenubarCheckboxItem>
              <MenubarCheckboxItem checked>
                Show Status Bar
              </MenubarCheckboxItem>
              <MenubarSeparator />
              <MenubarSub>
                <MenubarSubTrigger>
                  Zoom
                </MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>Zoom In</MenubarItem>
                  <MenubarItem>Zoom Out</MenubarItem>
                  <MenubarItem>Reset Zoom</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSub>
                <MenubarSubTrigger>
                  <Monitor className="mr-2 h-4 w-4" />
                  Theme
                </MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarRadioGroup value="light">
                    <MenubarRadioItem value="light">
                      <Sun className="mr-2 h-4 w-4" />
                      Light
                    </MenubarRadioItem>
                    <MenubarRadioItem value="dark">
                      <Moon className="mr-2 h-4 w-4" />
                      Dark
                    </MenubarRadioItem>
                    <MenubarRadioItem value="system">
                      <Laptop className="mr-2 h-4 w-4" />
                      System
                    </MenubarRadioItem>
                  </MenubarRadioGroup>
                </MenubarSubContent>
              </MenubarSub>
            </MenubarContent>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger>Help</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                Documentation
              </MenubarItem>
              <MenubarItem>
                <FileText className="mr-2 h-4 w-4" />
                Keyboard Shortcuts
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem>About</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>

      {/* NERV Command Center Menubar */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">NERV Command Center</h3>
        <Menubar className="border-orange-200 bg-gradient-to-r from-orange-50 to-red-50 dark:border-orange-800 dark:from-orange-950/20 dark:to-red-950/20">
          <MenubarMenu>
            <MenubarTrigger className="data-[state=open]:bg-orange-100 dark:data-[state=open]:bg-orange-900/50">
              System
            </MenubarTrigger>
            <MenubarContent className="border-orange-200 dark:border-orange-800">
              <MenubarItem>
                <Database className="mr-2 h-4 w-4 text-blue-600" />
                MAGI Status
                <MenubarShortcut>⌘M</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                <Activity className="mr-2 h-4 w-4 text-green-600" />
                System Diagnostics
                <MenubarShortcut>⌘D</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                <Terminal className="mr-2 h-4 w-4 text-purple-600" />
                Command Terminal
                <MenubarShortcut>⌘T</MenubarShortcut>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem>
                <RefreshCw className="mr-2 h-4 w-4 text-orange-600" />
                System Refresh
              </MenubarItem>
              <MenubarItem>
                <Power className="mr-2 h-4 w-4 text-red-600" />
                Emergency Shutdown
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger className="data-[state=open]:bg-orange-100 dark:data-[state=open]:bg-orange-900/50">
              Evangelion
            </MenubarTrigger>
            <MenubarContent className="border-orange-200 dark:border-orange-800">
              <MenubarSub>
                <MenubarSubTrigger>
                  <Shield className="mr-2 h-4 w-4 text-purple-600" />
                  EVA-01
                </MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>Status Report</MenubarItem>
                  <MenubarItem>Sync Ratio</MenubarItem>
                  <MenubarItem>AT Field Status</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Launch Sequence</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSub>
                <MenubarSubTrigger>
                  <Shield className="mr-2 h-4 w-4 text-red-600" />
                  EVA-02
                </MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>Status Report</MenubarItem>
                  <MenubarItem>Sync Ratio</MenubarItem>
                  <MenubarItem>AT Field Status</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Launch Sequence</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSub>
                <MenubarSubTrigger>
                  <Shield className="mr-2 h-4 w-4 text-blue-600" />
                  EVA-00
                </MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>Status Report</MenubarItem>
                  <MenubarItem>Sync Ratio</MenubarItem>
                  <MenubarItem>AT Field Status</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Launch Sequence</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
            </MenubarContent>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger className="data-[state=open]:bg-orange-100 dark:data-[state=open]:bg-orange-900/50">
              Operations
            </MenubarTrigger>
            <MenubarContent className="border-orange-200 dark:border-orange-800">
              <MenubarCheckboxItem checked>
                Angel Detection Active
              </MenubarCheckboxItem>
              <MenubarCheckboxItem>
                Pattern Blue Analysis
              </MenubarCheckboxItem>
              <MenubarCheckboxItem checked>
                AT Field Monitoring
              </MenubarCheckboxItem>
              <MenubarSeparator />
              <MenubarItem>
                <Zap className="mr-2 h-4 w-4 text-yellow-600" />
                Emergency Alert
                <MenubarShortcut>⌘!</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                <Shield className="mr-2 h-4 w-4 text-green-600" />
                Activate Barriers
                <MenubarShortcut>⌘B</MenubarShortcut>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger className="data-[state=open]:bg-orange-100 dark:data-[state=open]:bg-orange-900/50">
              Settings
            </MenubarTrigger>
            <MenubarContent className="border-orange-200 dark:border-orange-800">
              <MenubarSub>
                <MenubarSubTrigger>
                  <Monitor className="mr-2 h-4 w-4" />
                  Display Mode
                </MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarRadioGroup value="tactical">
                    <MenubarRadioItem value="tactical">
                      Tactical View
                    </MenubarRadioItem>
                    <MenubarRadioItem value="overview">
                      Overview Mode
                    </MenubarRadioItem>
                    <MenubarRadioItem value="detailed">
                      Detailed Analysis
                    </MenubarRadioItem>
                  </MenubarRadioGroup>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarItem>
                <Settings className="mr-2 h-4 w-4" />
                Preferences
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem>
                Security Settings
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>

      {/* Compact Menubar */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Compact Menubar</h3>
        <Menubar className="h-8">
          <MenubarMenu>
            <MenubarTrigger className="h-7 px-2 text-sm">File</MenubarTrigger>
            <MenubarContent>
              <MenubarItem className="text-sm">
                New
                <MenubarShortcut>⌘N</MenubarShortcut>
              </MenubarItem>
              <MenubarItem className="text-sm">
                Open
                <MenubarShortcut>⌘O</MenubarShortcut>
              </MenubarItem>
              <MenubarItem className="text-sm">
                Save
                <MenubarShortcut>⌘S</MenubarShortcut>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger className="h-7 px-2 text-sm">Edit</MenubarTrigger>
            <MenubarContent>
              <MenubarItem className="text-sm">
                Cut
                <MenubarShortcut>⌘X</MenubarShortcut>
              </MenubarItem>
              <MenubarItem className="text-sm">
                Copy
                <MenubarShortcut>⌘C</MenubarShortcut>
              </MenubarItem>
              <MenubarItem className="text-sm">
                Paste
                <MenubarShortcut>⌘V</MenubarShortcut>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger className="h-7 px-2 text-sm">View</MenubarTrigger>
            <MenubarContent>
              <MenubarCheckboxItem checked className="text-sm">
                Sidebar
              </MenubarCheckboxItem>
              <MenubarCheckboxItem className="text-sm">
                Minimap
              </MenubarCheckboxItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>

    </div>
  )
}