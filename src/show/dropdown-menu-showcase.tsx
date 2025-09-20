import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuShortcut,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  User, 
  Settings, 
  LogOut, 
  Shield, 
  Zap, 
  Target, 
  AlertTriangle, 
  CheckCircle,
  MoreHorizontal,
  ChevronRight,
  Power,
  Monitor,
  Cpu,
  HardDrive
} from "lucide-react"
import { useState } from "react"

export function DropdownMenuShowcase() {
  const [showStatusBar, setShowStatusBar] = useState(true)
  const [showActivityBar, setShowActivityBar] = useState(false)
  const [showPanel, setShowPanel] = useState(false)
  const [position, setPosition] = useState("bottom")

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-primary uppercase tracking-wide font-mono">
          MAGI Dropdown Menu Component
        </h2>
        <p className="text-muted-foreground font-mono tracking-wide">
          Evangelion MAGI-themed dropdown menus with polygon shapes and gradient effects.
        </p>
      </div>

      <div className="grid gap-8">
        {/* Basic Dropdown */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-primary uppercase tracking-wide font-mono">
            Basic Dropdown Menu
          </h3>
          <div className="flex gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  <User className="h-4 w-4 mr-2" />
                  User Menu
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>NERV Personnel</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Shield className="mr-2 h-4 w-4" />
                  <span>Security</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                  <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* EVA Unit Control */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-primary uppercase tracking-wide font-mono">
            EVA Unit Control
          </h3>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button>
                  <Zap className="h-4 w-4 mr-2" />
                  EVA-01 Actions
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Evangelion Unit-01</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <Power className="mr-2 h-4 w-4" />
                    <span>Activate</span>
                    <DropdownMenuShortcut>⌘A</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Target className="mr-2 h-4 w-4" />
                    <span>Target Lock</span>
                    <DropdownMenuShortcut>⌘T</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Shield className="mr-2 h-4 w-4" />
                    <span>AT Field</span>
                    <DropdownMenuShortcut>⌘F</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <Monitor className="mr-2 h-4 w-4" />
                    <span>Diagnostics</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Calibration</span>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-600">
                  <AlertTriangle className="mr-2 h-4 w-4" />
                  <span>Emergency Stop</span>
                  <DropdownMenuShortcut>⌘⇧E</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Quick Actions</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <CheckCircle className="mr-2 h-4 w-4" />
                  <span>System Check</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Cpu className="mr-2 h-4 w-4" />
                  <span>Performance Monitor</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <HardDrive className="mr-2 h-4 w-4" />
                  <span>Data Backup</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Submenu Example */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-primary uppercase tracking-wide font-mono">
            Nested Submenus
          </h3>
          <div className="flex gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  <Settings className="h-4 w-4 mr-2" />
                  MAGI System
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>MAGI Control</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                      <Cpu className="mr-2 h-4 w-4" />
                      <span>Core Systems</span>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent>
                        <DropdownMenuItem>
                          <span>Melchior</span>
                          <Badge variant="default" className="ml-auto text-xs">ONLINE</Badge>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <span>Balthasar</span>
                          <Badge variant="default" className="ml-auto text-xs">ONLINE</Badge>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <span>Casper</span>
                          <Badge variant="destructive" className="ml-auto text-xs">ERROR</Badge>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <span>Restart All Cores</span>
                        </DropdownMenuItem>
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                      <Monitor className="mr-2 h-4 w-4" />
                      <span>Monitoring</span>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent>
                        <DropdownMenuItem>
                          <span>System Logs</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <span>Performance Metrics</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <span>Error Reports</span>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <span>Export Data</span>
                        </DropdownMenuItem>
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>System Configuration</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Checkbox Items */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-primary uppercase tracking-wide font-mono">
            Checkbox Menu Items
          </h3>
          <div className="flex gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  <Monitor className="h-4 w-4 mr-2" />
                  View Options
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Display Settings</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem
                  checked={showStatusBar}
                  onCheckedChange={setShowStatusBar}
                >
                  Status Bar
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={showActivityBar}
                  onCheckedChange={setShowActivityBar}
                >
                  Activity Bar
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={showPanel}
                  onCheckedChange={setShowPanel}
                >
                  Panel
                </DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Radio Group */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-primary uppercase tracking-wide font-mono">
            Radio Group Menu
          </h3>
          <div className="flex gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  <Target className="h-4 w-4 mr-2" />
                  Position: {position}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                  <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="left">Left</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Status Indicators */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-primary uppercase tracking-wide font-mono">
            System Status Menu
          </h3>
          <div className="flex gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                  System Status
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64">
                <DropdownMenuLabel>NERV System Status</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <div className="flex items-center justify-between w-full">
                    <span>MAGI Cores</span>
                    <Badge variant="default">2/3 ONLINE</Badge>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <div className="flex items-center justify-between w-full">
                    <span>EVA Units</span>
                    <Badge variant="default">3 READY</Badge>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <div className="flex items-center justify-between w-full">
                    <span>AT Field</span>
                    <Badge variant="default">ACTIVE</Badge>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <div className="flex items-center justify-between w-full">
                    <span>Security Level</span>
                    <Badge variant="destructive">MAXIMUM</Badge>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <AlertTriangle className="mr-2 h-4 w-4 text-yellow-500" />
                  <span>View Alerts (3)</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Complex Menu */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-primary uppercase tracking-wide">COMPLEX MENU</h3>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button>PILOT MANAGEMENT</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>PILOT OPERATIONS</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  VIEW PROFILES
                  <DropdownMenuShortcut>⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  SYNC HISTORY
                  <DropdownMenuShortcut>⌘H</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>ASSIGN TO EVA</DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem>EVA UNIT-00</DropdownMenuItem>
                    <DropdownMenuItem>EVA UNIT-01</DropdownMenuItem>
                    <DropdownMenuItem>EVA UNIT-02</DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem checked>
                ACTIVE STATUS
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>
                STANDBY MODE
              </DropdownMenuCheckboxItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive">
                EMERGENCY RECALL
                <DropdownMenuShortcut>⌘⇧R</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Status Menu */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-primary uppercase tracking-wide">STATUS MENU</h3>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="destructive">ALERT STATUS</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel className="text-destructive">SYSTEM ALERTS</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive">
                ANGEL DETECTED
              </DropdownMenuItem>
              <DropdownMenuItem className="text-yellow-500">
                SYNC RATE LOW
              </DropdownMenuItem>
              <DropdownMenuItem className="text-yellow-500">
                POWER CRITICAL
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                ACKNOWLEDGE ALL
              </DropdownMenuItem>
              <DropdownMenuItem className="text-destructive">
                EMERGENCY PROTOCOL
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Settings Menu */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-primary uppercase tracking-wide">SETTINGS MENU</h3>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">PREFERENCES</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>USER PREFERENCES</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                ACCOUNT SETTINGS
                <DropdownMenuShortcut>⌘,</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                NOTIFICATIONS
              </DropdownMenuItem>
              <DropdownMenuItem>
                KEYBOARD SHORTCUTS
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                HELP & SUPPORT
                <DropdownMenuShortcut>⌘?</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                ABOUT MAGI
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                SIGN OUT
                <DropdownMenuShortcut>⌘Q</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
    </div>
  )
}