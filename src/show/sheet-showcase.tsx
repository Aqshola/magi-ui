import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Switch } from "@/components/ui/switch"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Menu,
  Settings,
  User,
  Bell,
  Shield,
  Monitor,
  Cpu,
  Activity,
  Zap,
  AlertTriangle,
  CheckCircle,
  Info,
  Search,
  Filter,
  Download,
  Upload,
  Save,
  X
} from "lucide-react"
import { useState } from "react"

export default function SheetShowCase() {
  const [notifications, setNotifications] = useState(true)
  const [autoSync, setAutoSync] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  const systemAlerts = [
    {
      id: 1,
      type: "warning",
      title: "Pattern Blue Detected",
      description: "Anomalous readings detected in sector 7-G. Immediate attention required.",
      time: "2 minutes ago",
      icon: AlertTriangle,
      color: "text-orange-500"
    },
    {
      id: 2,
      type: "success", 
      title: "Sync Rate Optimized",
      description: "Unit-01 synchronization rate improved by 3.2% after calibration.",
      time: "15 minutes ago",
      icon: CheckCircle,
      color: "text-green-500"
    },
    {
      id: 3,
      type: "info",
      title: "System Update Available",
      description: "MAGI OS v2.4.1 is ready for installation. Includes security patches.",
      time: "1 hour ago",
      icon: Info,
      color: "text-blue-500"
    }
  ]

  const systemMetrics = [
    { label: "CPU Usage", value: 67, unit: "%" },
    { label: "Memory", value: 84, unit: "%" },
    { label: "Network", value: 92, unit: "Mbps" },
    { label: "Storage", value: 45, unit: "%" },
    { label: "Temperature", value: 42, unit: "°C" }
  ]

  return (
    <div className="space-y-8 p-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Sheet Component</h1>
        <p className="text-muted-foreground">
          Slide-out panel component for displaying additional content, forms, and navigation menus.
        </p>
      </div>

      {/* Basic Sheet Examples */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Basic Sheet Variations</h2>
          <p className="text-muted-foreground">
            Sheets can slide in from different sides of the screen.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          {/* Right Side Sheet */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">
                <Menu className="h-4 w-4 mr-2" />
                Right Side
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Navigation Menu</SheetTitle>
                <SheetDescription>
                  Quick access to system functions and settings.
                </SheetDescription>
              </SheetHeader>
              <div className="py-4 space-y-4">
                <Button variant="ghost" className="w-full justify-start">
                  <Monitor className="h-4 w-4 mr-2" />
                  System Overview
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <User className="h-4 w-4 mr-2" />
                  User Profile
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Shield className="h-4 w-4 mr-2" />
                  Security
                </Button>
              </div>
            </SheetContent>
          </Sheet>

          {/* Left Side Sheet */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Left Side
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Filter Options</SheetTitle>
                <SheetDescription>
                  Customize your data view with advanced filters.
                </SheetDescription>
              </SheetHeader>
              <div className="py-4 space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="search">Search</Label>
                  <Input id="search" placeholder="Search items..." />
                </div>
                <div className="space-y-3">
                  <Label>Categories</Label>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="alerts" />
                      <Label htmlFor="alerts">System Alerts</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="metrics" />
                      <Label htmlFor="metrics">Performance Metrics</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="logs" />
                      <Label htmlFor="logs">System Logs</Label>
                    </div>
                  </div>
                </div>
              </div>
              <SheetFooter>
                <Button type="submit" className="w-full">Apply Filters</Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>

          {/* Top Sheet */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">
                <Bell className="h-4 w-4 mr-2" />
                Top Side
              </Button>
            </SheetTrigger>
            <SheetContent side="top">
              <SheetHeader>
                <SheetTitle>System Notifications</SheetTitle>
                <SheetDescription>
                  Recent alerts and system status updates.
                </SheetDescription>
              </SheetHeader>
              <div className="py-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {systemAlerts.map((alert) => {
                    const IconComponent = alert.icon
                    return (
                      <Card key={alert.id}>
                        <CardContent className="p-4">
                          <div className="flex items-start gap-3">
                            <IconComponent className={`h-5 w-5 mt-0.5 ${alert.color}`} />
                            <div className="flex-1 space-y-1">
                              <h4 className="font-medium text-sm">{alert.title}</h4>
                              <p className="text-xs text-muted-foreground">{alert.description}</p>
                              <p className="text-xs text-muted-foreground">{alert.time}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </div>
            </SheetContent>
          </Sheet>

          {/* Bottom Sheet */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">
                <Activity className="h-4 w-4 mr-2" />
                Bottom Side
              </Button>
            </SheetTrigger>
            <SheetContent side="bottom">
              <SheetHeader>
                <SheetTitle>System Performance</SheetTitle>
                <SheetDescription>
                  Real-time system metrics and performance indicators.
                </SheetDescription>
              </SheetHeader>
              <div className="py-4">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  {systemMetrics.map((metric, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>{metric.label}</span>
                        <span className="font-medium">{metric.value}{metric.unit}</span>
                      </div>
                      <Progress value={metric.value} />
                    </div>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </section>

      {/* Form Sheet */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Form Sheet</h2>
          <p className="text-muted-foreground">
            Sheet containing a form for user input and data collection.
          </p>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button>
              <User className="h-4 w-4 mr-2" />
              Edit Profile
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Edit Profile</SheetTitle>
              <SheetDescription>
                Update your profile information and preferences.
              </SheetDescription>
            </SheetHeader>
            <div className="py-4 space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" defaultValue="Ritsuko Akagi" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="r.akagi@nerv.jp" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="role">Role</Label>
                <Input id="role" defaultValue="Chief Scientist" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea 
                  id="bio" 
                  placeholder="Tell us about yourself..."
                  defaultValue="Lead scientist responsible for MAGI system development and maintenance."
                />
              </div>
              
              <Separator />
              
              <div className="space-y-4">
                <h4 className="font-medium">Preferences</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="notifications">Email Notifications</Label>
                    <Switch 
                      id="notifications" 
                      checked={notifications}
                      onCheckedChange={setNotifications}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="auto-sync">Auto Sync</Label>
                    <Switch 
                      id="auto-sync"
                      checked={autoSync}
                      onCheckedChange={setAutoSync}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="dark-mode">Dark Mode</Label>
                    <Switch 
                      id="dark-mode"
                      checked={darkMode}
                      onCheckedChange={setDarkMode}
                    />
                  </div>
                </div>
              </div>
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button variant="outline">Cancel</Button>
              </SheetClose>
              <Button type="submit">Save Changes</Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </section>

      {/* Settings Sheet */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Settings Sheet</h2>
          <p className="text-muted-foreground">
            Comprehensive settings panel with multiple configuration options.
          </p>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">
              <Settings className="h-4 w-4 mr-2" />
              System Settings
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[400px] sm:w-[540px]">
            <SheetHeader>
              <SheetTitle>MAGI System Settings</SheetTitle>
              <SheetDescription>
                Configure system parameters and operational settings.
              </SheetDescription>
            </SheetHeader>
            <div className="py-4 space-y-6">
              {/* System Configuration */}
              <div className="space-y-4">
                <h4 className="font-medium flex items-center gap-2">
                  <Cpu className="h-4 w-4" />
                  System Configuration
                </h4>
                <div className="space-y-3 pl-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>High Performance Mode</Label>
                      <p className="text-sm text-muted-foreground">Enable maximum processing power</p>
                    </div>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Auto Optimization</Label>
                      <p className="text-sm text-muted-foreground">Automatically optimize system performance</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>

              <Separator />

              {/* Security Settings */}
              <div className="space-y-4">
                <h4 className="font-medium flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  Security Settings
                </h4>
                <div className="space-y-3 pl-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Two-Factor Authentication</Label>
                      <p className="text-sm text-muted-foreground">Add extra security to your account</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Session Timeout</Label>
                      <p className="text-sm text-muted-foreground">Auto logout after inactivity</p>
                    </div>
                    <Switch />
                  </div>
                </div>
              </div>

              <Separator />

              {/* Monitoring Settings */}
              <div className="space-y-4">
                <h4 className="font-medium flex items-center gap-2">
                  <Monitor className="h-4 w-4" />
                  Monitoring
                </h4>
                <div className="space-y-3 pl-6">
                  <div className="space-y-2">
                    <Label htmlFor="refresh-rate">Refresh Rate (seconds)</Label>
                    <Input id="refresh-rate" type="number" defaultValue="5" min="1" max="60" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Real-time Alerts</Label>
                      <p className="text-sm text-muted-foreground">Receive instant notifications</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button variant="outline">Cancel</Button>
              </SheetClose>
              <Button type="submit">Apply Settings</Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </section>

      {/* Data Export Sheet */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Data Export Sheet</h2>
          <p className="text-muted-foreground">
            Sheet for configuring and exporting system data.
          </p>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export Data
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Export System Data</SheetTitle>
              <SheetDescription>
                Select data types and configure export settings.
              </SheetDescription>
            </SheetHeader>
            <div className="py-4 space-y-6">
              <div className="space-y-4">
                <h4 className="font-medium">Data Types</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="system-logs" defaultChecked />
                    <Label htmlFor="system-logs">System Logs</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="performance-metrics" defaultChecked />
                    <Label htmlFor="performance-metrics">Performance Metrics</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="user-data" />
                    <Label htmlFor="user-data">User Data</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="configuration" />
                    <Label htmlFor="configuration">Configuration Settings</Label>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h4 className="font-medium">Export Options</h4>
                <div className="space-y-3">
                  <div className="space-y-2">
                    <Label htmlFor="format">File Format</Label>
                    <select id="format" className="w-full p-2 border rounded">
                      <option value="json">JSON</option>
                      <option value="csv">CSV</option>
                      <option value="xml">XML</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="date-range">Date Range</Label>
                    <select id="date-range" className="w-full p-2 border rounded">
                      <option value="last-24h">Last 24 Hours</option>
                      <option value="last-week">Last Week</option>
                      <option value="last-month">Last Month</option>
                      <option value="custom">Custom Range</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-muted rounded-lg">
                <div className="flex items-center gap-2 text-sm">
                  <Info className="h-4 w-4 text-blue-500" />
                  <span>Estimated file size: 2.4 MB</span>
                </div>
              </div>
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button variant="outline">Cancel</Button>
              </SheetClose>
              <Button type="submit">
                <Download className="h-4 w-4 mr-2" />
                Export Data
              </Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </section>
    </div>
  )
}