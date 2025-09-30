import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { 
  Home, 
  Users, 
  Settings, 
  FileText, 
  Shield, 
  Activity, 
  Database, 
  Zap, 
  Brain,
  Monitor,
  AlertTriangle,
  Lock,
  Eye,
  BarChart3,
  Cpu,
  Network
} from "lucide-react"
import React from "react"

export default function NavigationMenuShowCase() {
  return (
    <div className="space-y-8 p-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Navigation Menu</h1>
        <p className="text-muted-foreground mb-6">
          A collection of links for navigating websites with dropdown menus and keyboard support.
        </p>
      </div>

      {/* Basic Navigation Menu */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Basic Navigation</h2>
        <div className="border rounded-lg p-6 bg-card">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <Home className="mr-2 h-4 w-4" />
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <Users className="mr-2 h-4 w-4" />
                  About
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <FileText className="mr-2 h-4 w-4" />
                  Documentation
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>

      {/* Navigation with Dropdowns */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">With Dropdown Menus</h2>
        <div className="border rounded-lg p-6 bg-card">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <Shield className="mr-2 h-4 w-4" />
                  NERV Systems
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          <Brain className="h-6 w-6" />
                          <div className="mb-2 mt-4 text-lg font-medium">
                            MAGI System
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Advanced AI system for strategic analysis and decision making.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/eva-units" title="Evangelion Units">
                      Biomechanical weapons for Angel combat operations.
                    </ListItem>
                    <ListItem href="/at-field" title="AT Field Analysis">
                      Absolute Terror Field research and countermeasures.
                    </ListItem>
                    <ListItem href="/sync-ratio" title="Synchronization">
                      Pilot synchronization monitoring and optimization.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <Activity className="mr-2 h-4 w-4" />
                  Operations
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <ListItem
                      title="Mission Control"
                      href="/mission-control"
                    >
                      Central command for all NERV operations.
                    </ListItem>
                    <ListItem
                      title="Angel Detection"
                      href="/angel-detection"
                    >
                      Early warning systems for Angel approach.
                    </ListItem>
                    <ListItem
                      title="Pilot Status"
                      href="/pilot-status"
                    >
                      Real-time monitoring of pilot conditions.
                    </ListItem>
                    <ListItem
                      title="Equipment Status"
                      href="/equipment"
                    >
                      Eva unit maintenance and readiness reports.
                    </ListItem>
                    <ListItem
                      title="Emergency Protocols"
                      href="/emergency"
                    >
                      Crisis response and evacuation procedures.
                    </ListItem>
                    <ListItem
                      title="Research Data"
                      href="/research"
                    >
                      Scientific analysis and experimental results.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <Database className="mr-2 h-4 w-4" />
                  Database
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>

      {/* NERV Command Interface */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">NERV Command Interface</h2>
        <div className="border rounded-lg p-6 bg-gradient-to-r from-red-950/20 to-orange-950/20">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-red-900/20 hover:bg-red-900/30">
                  <AlertTriangle className="mr-2 h-4 w-4 text-red-400" />
                  Alert Status
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 w-[400px]">
                    <ListItem
                      title="Angel Approach"
                      href="/alerts/angel"
                      className="border-l-4 border-red-500"
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                        Critical threat detected - Pattern Blue
                      </div>
                    </ListItem>
                    <ListItem
                      title="System Status"
                      href="/alerts/system"
                      className="border-l-4 border-yellow-500"
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                        MAGI System operating at 98% efficiency
                      </div>
                    </ListItem>
                    <ListItem
                      title="Pilot Readiness"
                      href="/alerts/pilots"
                      className="border-l-4 border-green-500"
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                        All pilots on standby - sync rates optimal
                      </div>
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-blue-900/20 hover:bg-blue-900/30">
                  <Monitor className="mr-2 h-4 w-4 text-blue-400" />
                  Monitoring
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[500px] gap-3 p-4 md:grid-cols-2">
                    <ListItem title="Eva Unit 01" href="/monitoring/eva01">
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>Power Level</span>
                          <span className="text-green-400">100%</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Sync Ratio</span>
                          <span className="text-blue-400">74.2%</span>
                        </div>
                      </div>
                    </ListItem>
                    <ListItem title="Eva Unit 00" href="/monitoring/eva00">
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>Power Level</span>
                          <span className="text-yellow-400">85%</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Sync Ratio</span>
                          <span className="text-blue-400">68.9%</span>
                        </div>
                      </div>
                    </ListItem>
                    <ListItem title="Eva Unit 02" href="/monitoring/eva02">
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>Power Level</span>
                          <span className="text-red-400">45%</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Sync Ratio</span>
                          <span className="text-blue-400">52.1%</span>
                        </div>
                      </div>
                    </ListItem>
                    <ListItem title="MAGI Systems" href="/monitoring/magi">
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>Melchior</span>
                          <span className="text-green-400">Online</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Balthasar</span>
                          <span className="text-green-400">Online</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Casper</span>
                          <span className="text-green-400">Online</span>
                        </div>
                      </div>
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-purple-900/20 hover:bg-purple-900/30">
                  <Lock className="mr-2 h-4 w-4 text-purple-400" />
                  Security
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 w-[350px]">
                    <ListItem title="Access Control" href="/security/access">
                      Manage personnel clearance levels and restricted areas.
                    </ListItem>
                    <ListItem title="Surveillance" href="/security/surveillance">
                      Monitor facility security cameras and sensors.
                    </ListItem>
                    <ListItem title="Containment" href="/security/containment">
                      Angel specimen containment and research protocols.
                    </ListItem>
                    <ListItem title="Data Protection" href="/security/data">
                      Classified information encryption and backup systems.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-gray-900/20 hover:bg-gray-900/30")}>
                  <BarChart3 className="mr-2 h-4 w-4 text-gray-400" />
                  Analytics
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>

      {/* Compact Navigation */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Compact Navigation</h2>
        <div className="border rounded-lg p-6 bg-card">
          <NavigationMenu>
            <NavigationMenuList className="space-x-1">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-8 px-3 text-sm">
                  <Cpu className="mr-1 h-3 w-3" />
                  System
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-2 p-3 w-[250px]">
                    <ListItem title="CPU Usage" href="/system/cpu" className="text-sm">
                      Monitor processor performance
                    </ListItem>
                    <ListItem title="Memory" href="/system/memory" className="text-sm">
                      RAM and storage statistics
                    </ListItem>
                    <ListItem title="Network" href="/system/network" className="text-sm">
                      Connection status and bandwidth
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "h-8 px-3 text-sm")}>
                  <Eye className="mr-1 h-3 w-3" />
                  Monitor
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "h-8 px-3 text-sm")}>
                  <Network className="mr-1 h-3 w-3" />
                  Network
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "h-8 px-3 text-sm")}>
                  <Zap className="mr-1 h-3 w-3" />
                  Power
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>

      {/* Usage Guidelines */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Usage Guidelines</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="border rounded-lg p-4 bg-card">
            <h3 className="font-medium mb-2 text-green-600">✓ Do</h3>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• Use clear, descriptive labels</li>
              <li>• Group related items logically</li>
              <li>• Include icons for better recognition</li>
              <li>• Keep dropdown content focused</li>
              <li>• Provide keyboard navigation</li>
              <li>• Use consistent styling</li>
            </ul>
          </div>
          <div className="border rounded-lg p-4 bg-card">
            <h3 className="font-medium mb-2 text-red-600">✗ Don't</h3>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• Overcrowd the navigation bar</li>
              <li>• Use vague or ambiguous labels</li>
              <li>• Create overly deep menu hierarchies</li>
              <li>• Mix different interaction patterns</li>
              <li>• Forget mobile responsiveness</li>
              <li>• Ignore accessibility requirements</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string }
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})