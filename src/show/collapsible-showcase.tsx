import { useState } from "react"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { 
  ChevronDown, 
  ChevronRight, 
  Settings, 
  User, 
  Bell, 
  Shield, 
  Database,
  Activity,
  FileText,
  Users,
  Zap,
  Brain,
  Eye,
  Lock
} from "lucide-react"

export default function CollapsibleShowcase() {
  const [isOpen, setIsOpen] = useState(false)
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [magiSystemOpen, setMagiSystemOpen] = useState(true)
  const [securityOpen, setSecurityOpen] = useState(false)

  return (
    <div className="space-y-8 p-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Collapsible Component</h1>
        <p className="text-muted-foreground">
          A collapsible component that can hide and show content with smooth animations.
        </p>
      </div>

      <Separator />

      {/* Basic Example */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Basic Collapsible</h2>
        <Card>
          <CardContent className="p-6">
            <Collapsible open={isOpen} onOpenChange={setIsOpen}>
              <div className="flex items-center justify-between space-x-4">
                <h4 className="text-sm font-semibold">
                  @peduarte starred 3 repositories
                </h4>
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" size="sm" className="w-9 p-0">
                    {isOpen ? (
                      <ChevronDown className="h-4 w-4" />
                    ) : (
                      <ChevronRight className="h-4 w-4" />
                    )}
                    <span className="sr-only">Toggle</span>
                  </Button>
                </CollapsibleTrigger>
              </div>
              <div className="rounded-md border px-4 py-3 font-mono text-sm mt-4">
                @radix-ui/primitives
              </div>
              <CollapsibleContent className="space-y-2">
                <div className="rounded-md border px-4 py-3 font-mono text-sm">
                  @radix-ui/colors
                </div>
                <div className="rounded-md border px-4 py-3 font-mono text-sm">
                  @stitches/react
                </div>
              </CollapsibleContent>
            </Collapsible>
          </CardContent>
        </Card>
      </div>

      {/* Settings Panel Example */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Settings Panel</h2>
        <Card>
          <CardContent className="p-6 space-y-4">
            <Collapsible open={settingsOpen} onOpenChange={setSettingsOpen}>
              <CollapsibleTrigger asChild>
                <Button variant="outline" className="w-full justify-between">
                  <div className="flex items-center space-x-2">
                    <Settings className="h-4 w-4" />
                    <span>Advanced Settings</span>
                  </div>
                  {settingsOpen ? (
                    <ChevronDown className="h-4 w-4" />
                  ) : (
                    <ChevronRight className="h-4 w-4" />
                  )}
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-4 mt-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span className="text-sm font-medium">User Preferences</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Configure user-specific settings and preferences.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Bell className="h-4 w-4" />
                      <span className="text-sm font-medium">Notifications</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Manage notification settings and alerts.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Shield className="h-4 w-4" />
                      <span className="text-sm font-medium">Security</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Configure security and privacy settings.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Database className="h-4 w-4" />
                      <span className="text-sm font-medium">Data Management</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Manage data storage and backup settings.
                    </p>
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </CardContent>
        </Card>
      </div>

      {/* MAGI System Interface */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">MAGI System Interface</h2>
        <div className="grid gap-4">
          <Card className="border-blue-200 dark:border-blue-800">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center space-x-2">
                <Brain className="h-5 w-5 text-blue-500" />
                <span>MAGI System Status</span>
                <Badge variant="outline" className="ml-auto">
                  Active
                </Badge>
              </CardTitle>
              <CardDescription>
                Multi-purpose Artificial General Intelligence System
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Collapsible open={magiSystemOpen} onOpenChange={setMagiSystemOpen}>
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" className="w-full justify-between p-0 h-auto">
                    <div className="flex items-center space-x-2">
                      <Activity className="h-4 w-4" />
                      <span className="font-medium">System Components</span>
                    </div>
                    {magiSystemOpen ? (
                      <ChevronDown className="h-4 w-4" />
                    ) : (
                      <ChevronRight className="h-4 w-4" />
                    )}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-3 mt-4">
                  <div className="grid gap-3">
                    <div className="flex items-center justify-between p-3 rounded-lg border bg-muted/50">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <div>
                          <p className="font-medium text-sm">MELCHIOR</p>
                          <p className="text-xs text-muted-foreground">Scientist Type</p>
                        </div>
                      </div>
                      <Badge variant="secondary">Online</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg border bg-muted/50">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <div>
                          <p className="font-medium text-sm">BALTHASAR</p>
                          <p className="text-xs text-muted-foreground">Mother Type</p>
                        </div>
                      </div>
                      <Badge variant="secondary">Online</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg border bg-muted/50">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                        <div>
                          <p className="font-medium text-sm">CASPER</p>
                          <p className="text-xs text-muted-foreground">Woman Type</p>
                        </div>
                      </div>
                      <Badge variant="outline">Maintenance</Badge>
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </CardContent>
          </Card>

          <Card className="border-red-200 dark:border-red-800">
            <CardContent className="p-6">
              <Collapsible open={securityOpen} onOpenChange={setSecurityOpen}>
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" className="w-full justify-between p-0 h-auto">
                    <div className="flex items-center space-x-2">
                      <Lock className="h-4 w-4 text-red-500" />
                      <span className="font-medium">Security Protocols</span>
                      <Badge variant="destructive" className="text-xs">
                        Classified
                      </Badge>
                    </div>
                    {securityOpen ? (
                      <ChevronDown className="h-4 w-4" />
                    ) : (
                      <ChevronRight className="h-4 w-4" />
                    )}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-3 mt-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2 rounded border-l-4 border-l-red-500  dark:bg-red-950/20">
                      <div className="flex items-center space-x-2">
                        <Eye className="h-4 w-4" />
                        <span className="text-sm">AT Field Analysis</span>
                      </div>
                      <Badge variant="destructive" className="text-xs">Level 5</Badge>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded border-l-4 border-l-orange-500 dark:bg-orange-950/20">
                      <div className="flex items-center space-x-2">
                        <Zap className="h-4 w-4" />
                        <span className="text-sm">Eva Unit Synchronization</span>
                      </div>
                      <Badge variant="secondary" className="text-xs">Level 3</Badge>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded border-l-4 border-l-blue-500  dark:bg-blue-950/20">
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4" />
                        <span className="text-sm">Personnel Access Control</span>
                      </div>
                      <Badge variant="outline" className="text-xs">Level 2</Badge>
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Multiple Collapsibles */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Multiple Collapsibles</h2>
        <div className="space-y-2">
          {[
            { 
              id: "docs", 
              title: "Documentation", 
              icon: FileText, 
              items: ["API Reference", "Component Guide", "Examples"] 
            },
            { 
              id: "team", 
              title: "Team Members", 
              icon: Users, 
              items: ["Developers", "Designers", "Product Managers"] 
            },
            { 
              id: "resources", 
              title: "Resources", 
              icon: Database, 
              items: ["Assets", "Libraries", "Tools"] 
            },
          ].map((section) => (
            <CollapsibleSection key={section.id} {...section} />
          ))}
        </div>
      </div>

      
    </div>
  )
}

function CollapsibleSection({ 
  title, 
  icon: Icon, 
  items 
}: { 
  title: string
  icon: any
  items: string[] 
}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Card>
      <CardContent className="p-4">
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" className="w-full justify-between p-0 h-auto">
              <div className="flex items-center space-x-2">
                <Icon className="h-4 w-4" />
                <span className="font-medium">{title}</span>
              </div>
              {isOpen ? (
                <ChevronDown className="h-4 w-4" />
              ) : (
                <ChevronRight className="h-4 w-4" />
              )}
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-2 mt-3">
            {items.map((item, index) => (
              <div key={index} className="pl-6 py-1 text-sm text-muted-foreground">
                {item}
              </div>
            ))}
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
    </Card>
  )
}