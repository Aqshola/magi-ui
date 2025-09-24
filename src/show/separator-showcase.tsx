import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { 
  User, 
  Settings, 
  Shield, 
  Zap, 
  Monitor, 
  Clock,
  Activity,
  AlertTriangle,
  CheckCircle,
  Info
} from "lucide-react"

export default function SeparatorShowCase() {
  const systemStats = [
    { label: "Active Units", value: "3", icon: Monitor },
    { label: "Sync Rate", value: "94.2%", icon: Activity },
    { label: "Power Level", value: "87%", icon: Zap },
    { label: "Uptime", value: "72h", icon: Clock }
  ]

  const notifications = [
    {
      type: "warning",
      title: "Pattern Blue Detected",
      description: "Anomalous readings in sector 7-G",
      time: "2 min ago",
      icon: AlertTriangle,
      color: "text-orange-500"
    },
    {
      type: "success",
      title: "Sync Rate Optimized", 
      description: "Unit-01 synchronization improved",
      time: "5 min ago",
      icon: CheckCircle,
      color: "text-green-500"
    },
    {
      type: "info",
      title: "System Update Available",
      description: "MAGI OS v2.4.1 ready for installation",
      time: "1 hour ago",
      icon: Info,
      color: "text-blue-500"
    }
  ]

  const teamMembers = [
    { name: "Ritsuko Akagi", role: "Chief Scientist", status: "online" },
    { name: "Maya Ibuki", role: "Operations", status: "online" },
    { name: "Makoto Hyuga", role: "Communications", status: "away" },
    { name: "Shigeru Aoba", role: "Technical", status: "offline" }
  ]

  return (
    <div className="space-y-8 p-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Separator Component</h1>
        <p className="text-muted-foreground">
          Visual divider component for creating clear sections and improving content organization.
        </p>
      </div>

      {/* Basic Horizontal Separator */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Basic Horizontal Separator</h2>
          <p className="text-muted-foreground">
            Simple horizontal line separator for dividing content sections.
          </p>
        </div>

        <Card className="p-6">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">MAGI System Overview</h3>
              <p className="text-sm text-muted-foreground">
                The MAGI supercomputer system consists of three independent units.
              </p>
            </div>
            
            <Separator />
            
            <div>
              <h3 className="font-semibold">Current Status</h3>
              <p className="text-sm text-muted-foreground">
                All systems operational with optimal synchronization rates.
              </p>
            </div>
            
            <Separator />
            
            <div>
              <h3 className="font-semibold">Next Maintenance</h3>
              <p className="text-sm text-muted-foreground">
                Scheduled system check in 6 hours and 23 minutes.
              </p>
            </div>
          </div>
        </Card>
      </section>

      {/* Vertical Separator */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Vertical Separator</h2>
          <p className="text-muted-foreground">
            Vertical separator for dividing content in horizontal layouts.
          </p>
        </div>

        <Card className="p-6">
          <div className="flex items-center justify-between h-24">
            <div className="text-center space-y-1">
              <Monitor className="h-6 w-6 mx-auto text-blue-500" />
              <p className="text-sm font-medium">MELCHIOR</p>
              <Badge variant="default" className="text-xs">Active</Badge>
            </div>
            
            <Separator orientation="vertical" />
            
            <div className="text-center space-y-1">
              <Shield className="h-6 w-6 mx-auto text-green-500" />
              <p className="text-sm font-medium">BALTHASAR</p>
              <Badge variant="default" className="text-xs">Active</Badge>
            </div>
            
            <Separator orientation="vertical" />
            
            <div className="text-center space-y-1">
              <Zap className="h-6 w-6 mx-auto text-orange-500" />
              <p className="text-sm font-medium">CASPER</p>
              <Badge variant="secondary" className="text-xs">Standby</Badge>
            </div>
          </div>
        </Card>
      </section>

      {/* Stats Dashboard with Separators */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">System Statistics</h2>
          <p className="text-muted-foreground">
            Dashboard layout using separators to organize statistical information.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>MAGI System Performance</CardTitle>
            <CardDescription>Real-time operational metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {systemStats.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <div key={index}>
                    <div className="text-center space-y-2">
                      <IconComponent className="h-8 w-8 mx-auto text-muted-foreground" />
                      <div>
                        <p className="text-2xl font-bold">{stat.value}</p>
                        <p className="text-sm text-muted-foreground">{stat.label}</p>
                      </div>
                    </div>
                    {index < systemStats.length - 1 && (
                      <Separator 
                        orientation="vertical" 
                        className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 h-16" 
                      />
                    )}
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Notification List with Separators */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">System Notifications</h2>
          <p className="text-muted-foreground">
            List of notifications separated for better readability.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Recent Alerts</CardTitle>
            <CardDescription>Latest system notifications and updates</CardDescription>
          </CardHeader>
          <CardContent className="space-y-0">
            {notifications.map((notification, index) => {
              const IconComponent = notification.icon
              return (
                <div key={index}>
                  <div className="flex items-start gap-3 py-4">
                    <IconComponent className={`h-5 w-5 mt-0.5 ${notification.color}`} />
                    <div className="flex-1 space-y-1">
                      <h4 className="font-medium leading-none">{notification.title}</h4>
                      <p className="text-sm text-muted-foreground">{notification.description}</p>
                      <p className="text-xs text-muted-foreground">{notification.time}</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                  </div>
                  {index < notifications.length - 1 && <Separator />}
                </div>
              )
            })}
          </CardContent>
        </Card>
      </section>

      {/* Team Members with Separators */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Team Directory</h2>
          <p className="text-muted-foreground">
            Staff directory with separators for clean organization.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>NERV Operations Team</CardTitle>
            <CardDescription>Current staff and their availability status</CardDescription>
          </CardHeader>
          <CardContent className="space-y-0">
            {teamMembers.map((member, index) => (
              <div key={index}>
                <div className="flex items-center justify-between py-4">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback>
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{member.name}</p>
                      <p className="text-sm text-muted-foreground">{member.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${
                      member.status === 'online' ? 'bg-green-500' :
                      member.status === 'away' ? 'bg-yellow-500' : 'bg-gray-400'
                    }`} />
                    <span className="text-sm capitalize">{member.status}</span>
                  </div>
                </div>
                {index < teamMembers.length - 1 && <Separator />}
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      {/* Custom Styled Separators */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Custom Styled Separators</h2>
          <p className="text-muted-foreground">
            Examples of separators with custom styling and thickness.
          </p>
        </div>

        <Card className="p-6 space-y-6">
          <div>
            <h3 className="font-semibold mb-2">Default Separator</h3>
            <Separator />
          </div>

          <div>
            <h3 className="font-semibold mb-2">Thick Separator</h3>
            <Separator className="h-0.5 bg-primary" />
          </div>

          <div>
            <h3 className="font-semibold mb-2">Dashed Separator</h3>
            <Separator className="border-dashed border-t border-border h-0" />
          </div>

          <div>
            <h3 className="font-semibold mb-2">Colored Separator</h3>
            <Separator className="bg-gradient-to-r from-blue-500 to-purple-500 h-px" />
          </div>
        </Card>
      </section>

      {/* Complex Layout Example */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Complex Layout</h2>
          <p className="text-muted-foreground">
            Advanced layout combining horizontal and vertical separators.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>MAGI Control Panel</CardTitle>
            <CardDescription>Comprehensive system control interface</CardDescription>
          </CardHeader>
          <Separator />
          <CardContent className="p-0">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="p-6 space-y-4">
                <h3 className="font-semibold flex items-center gap-2">
                  <User className="h-4 w-4" />
                  User Management
                </h3>
                <p className="text-sm text-muted-foreground">
                  Manage user access and permissions
                </p>
                <Button size="sm" className="w-full">
                  Manage Users
                </Button>
              </div>
              
              <Separator orientation="vertical" className="hidden md:block" />
              <Separator className="md:hidden" />
              
              <div className="p-6 space-y-4">
                <h3 className="font-semibold flex items-center gap-2">
                  <Settings className="h-4 w-4" />
                  System Settings
                </h3>
                <p className="text-sm text-muted-foreground">
                  Configure system parameters
                </p>
                <Button size="sm" variant="outline" className="w-full">
                  Open Settings
                </Button>
              </div>
              
              <Separator orientation="vertical" className="hidden md:block" />
              <Separator className="md:hidden" />
              
              <div className="p-6 space-y-4">
                <h3 className="font-semibold flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  Security
                </h3>
                <p className="text-sm text-muted-foreground">
                  Monitor security status
                </p>
                <Button size="sm" variant="secondary" className="w-full">
                  View Logs
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}