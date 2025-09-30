import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  FileText, 
  User, 
  Calendar, 
  Clock, 
  Shield, 
  Activity, 
  Database, 
  Zap, 
  Brain,
  Monitor,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Info,
  Settings,
  Eye,
  Lock
} from "lucide-react"

export default function ScrollAreaShowCase() {
  const tags = Array.from({ length: 50 }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`
  )

  const logEntries = [
    { time: "14:32:15", level: "INFO", message: "MAGI System initialization complete", icon: CheckCircle, color: "text-green-500" },
    { time: "14:32:16", level: "INFO", message: "Eva Unit 01 power systems online", icon: Zap, color: "text-blue-500" },
    { time: "14:32:17", level: "WARN", message: "Sync ratio fluctuation detected in Unit 00", icon: AlertTriangle, color: "text-yellow-500" },
    { time: "14:32:18", level: "INFO", message: "AT Field analysis module loaded", icon: Shield, color: "text-green-500" },
    { time: "14:32:19", level: "ERROR", message: "Connection lost to Terminal Dogma sensors", icon: XCircle, color: "text-red-500" },
    { time: "14:32:20", level: "INFO", message: "Backup sensors activated", icon: Eye, color: "text-blue-500" },
    { time: "14:32:21", level: "INFO", message: "Pilot vitals monitoring active", icon: Activity, color: "text-green-500" },
    { time: "14:32:22", level: "WARN", message: "LCL pressure variance in Entry Plug 02", icon: AlertTriangle, color: "text-yellow-500" },
    { time: "14:32:23", level: "INFO", message: "Angel detection grid fully operational", icon: Monitor, color: "text-green-500" },
    { time: "14:32:24", level: "INFO", message: "Security clearance verified for Commander Ikari", icon: Lock, color: "text-blue-500" },
    { time: "14:32:25", level: "ERROR", message: "Anomalous reading from Geo-Front sector 7", icon: XCircle, color: "text-red-500" },
    { time: "14:32:26", level: "INFO", message: "Maintenance crew dispatched", icon: Settings, color: "text-blue-500" },
    { time: "14:32:27", level: "INFO", message: "Eva Unit 02 standby mode activated", icon: Zap, color: "text-green-500" },
    { time: "14:32:28", level: "WARN", message: "Coolant temperature rising in reactor 3", icon: AlertTriangle, color: "text-yellow-500" },
    { time: "14:32:29", level: "INFO", message: "Emergency cooling system engaged", icon: CheckCircle, color: "text-green-500" },
    { time: "14:32:30", level: "INFO", message: "All systems nominal", icon: CheckCircle, color: "text-green-500" },
  ]

  const pilots = [
    { name: "Shinji Ikari", eva: "Unit 01", syncRatio: "74.2%", status: "Active", lastMission: "2 days ago" },
    { name: "Rei Ayanami", eva: "Unit 00", syncRatio: "68.9%", status: "Standby", lastMission: "1 week ago" },
    { name: "Asuka Langley", eva: "Unit 02", syncRatio: "52.1%", status: "Medical", lastMission: "3 days ago" },
    { name: "Mari Makinami", eva: "Unit 08", syncRatio: "81.7%", status: "Active", lastMission: "1 day ago" },
    { name: "Kaworu Nagisa", eva: "Unit 06", syncRatio: "95.3%", status: "Unknown", lastMission: "Never" },
  ]

  const missions = Array.from({ length: 25 }, (_, i) => ({
    id: `MISSION-${String(i + 1).padStart(3, '0')}`,
    name: `Operation ${['Yashima', 'Bardiel', 'Zeruel', 'Sahaquiel', 'Ireul'][i % 5]}`,
    date: new Date(Date.now() - i * 24 * 60 * 60 * 1000).toLocaleDateString(),
    status: ['Completed', 'Failed', 'In Progress', 'Cancelled'][i % 4],
    pilot: pilots[i % pilots.length].name
  }))

  return (
    <div className="space-y-8 p-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Scroll Area</h1>
        <p className="text-muted-foreground mb-6">
          Augments native scroll functionality for custom, cross-browser styling.
        </p>
      </div>

      {/* Basic Scroll Area */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Basic Scroll Area</h2>
        <div className="border rounded-lg p-6 bg-card">
          <ScrollArea className="h-72 w-48 rounded-md border p-4">
            <div className="pr-4">
              <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
              {tags.map((tag) => (
                <div key={tag}>
                  <div className="text-sm">
                    {tag}
                  </div>
                  <Separator className="my-2" />
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>

      {/* Horizontal Scroll Area */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Horizontal Scroll Area</h2>
        <div className="border rounded-lg p-6 bg-card">
          <ScrollArea className="w-96 whitespace-nowrap rounded-md border">
            <div className="flex w-max space-x-4 p-4">
              {Array.from({ length: 10 }, (_, i) => (
                <figure key={i} className="shrink-0">
                  <div className="overflow-hidden rounded-md">
                    <div className="h-[150px] w-[150px] bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold">
                      Eva {String(i + 1).padStart(2, '0')}
                    </div>
                  </div>
                  <figcaption className="pt-2 text-xs text-muted-foreground">
                    Evangelion Unit {String(i + 1).padStart(2, '0')}
                  </figcaption>
                </figure>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>

      {/* NERV System Logs */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">NERV System Logs</h2>
        <div className="border rounded-lg p-6 bg-gradient-to-r from-red-950/20 to-orange-950/20">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5" />
                System Activity Monitor
              </CardTitle>
              <CardDescription>
                Real-time NERV facility operations log
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-80 w-full rounded-md border bg-black/20 p-4">
                <div className="space-y-2 font-mono text-sm">
                  {logEntries.map((entry, index) => {
                    const IconComponent = entry.icon
                    return (
                      <div key={index} className="flex items-center gap-3 text-green-400">
                        <span className="text-gray-400">[{entry.time}]</span>
                        <Badge 
                          variant={entry.level === 'ERROR' ? 'destructive' : entry.level === 'WARN' ? 'secondary' : 'default'}
                          className="w-12 text-xs"
                        >
                          {entry.level}
                        </Badge>
                        <IconComponent className={`h-4 w-4 ${entry.color}`} />
                        <span className="flex-1">{entry.message}</span>
                      </div>
                    )
                  })}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Pilot Database */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Pilot Database</h2>
        <div className="border rounded-lg p-6 bg-card">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Eva Pilot Registry
              </CardTitle>
              <CardDescription>
                Current pilot status and synchronization data
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-64 w-full">
                <div className="space-y-4">
                  {pilots.map((pilot, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg bg-muted/50">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-medium">{pilot.name}</h4>
                          <Badge variant={pilot.status === 'Active' ? 'default' : pilot.status === 'Medical' ? 'destructive' : 'secondary'}>
                            {pilot.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">Evangelion {pilot.eva}</p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Activity className="h-3 w-3" />
                            Sync: {pilot.syncRatio}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            Last: {pilot.lastMission}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-blue-500">{pilot.syncRatio}</div>
                        <div className="text-xs text-muted-foreground">Sync Ratio</div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Mission Archive */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Mission Archive</h2>
        <div className="border rounded-lg p-6 bg-card">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Operation History
              </CardTitle>
              <CardDescription>
                Complete record of all NERV operations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96 w-full">
                <div className="space-y-2">
                  {missions.map((mission, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded hover:bg-muted/50 transition-colors">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{mission.id}</span>
                          <Badge 
                            variant={
                              mission.status === 'Completed' ? 'default' : 
                              mission.status === 'Failed' ? 'destructive' : 
                              mission.status === 'In Progress' ? 'secondary' : 
                              'outline'
                            }
                          >
                            {mission.status}
                          </Badge>
                        </div>
                        <p className="text-sm font-medium">{mission.name}</p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {mission.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <User className="h-3 w-3" />
                            {mission.pilot}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        {mission.status === 'Completed' && <CheckCircle className="h-5 w-5 text-green-500" />}
                        {mission.status === 'Failed' && <XCircle className="h-5 w-5 text-red-500" />}
                        {mission.status === 'In Progress' && <Clock className="h-5 w-5 text-blue-500" />}
                        {mission.status === 'Cancelled' && <XCircle className="h-5 w-5 text-gray-500" />}
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Compact Scroll Areas */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Compact Scroll Areas</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-32 w-full">
                <div className="space-y-2">
                  {['Deploy Eva Unit', 'Activate AT Field', 'Emergency Protocol', 'Sync Test', 'System Diagnostic', 'Pilot Briefing'].map((action, i) => (
                    <div key={i} className="text-sm p-2 hover:bg-muted rounded cursor-pointer">
                      {action}
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm">System Status</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-32 w-full">
                <div className="space-y-2">
                  {[
                    { name: 'MAGI System', status: 'Online' },
                    { name: 'Eva Unit 01', status: 'Standby' },
                    { name: 'Eva Unit 00', status: 'Maintenance' },
                    { name: 'AT Field Gen', status: 'Online' },
                    { name: 'Power Grid', status: 'Optimal' },
                    { name: 'Cooling System', status: 'Normal' }
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between text-sm p-2">
                      <span>{item.name}</span>
                      <Badge variant="outline" className="text-xs">
                        {item.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm">Recent Alerts</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-32 w-full">
                <div className="space-y-2">
                  {[
                    { message: 'Sync ratio optimal', type: 'info' },
                    { message: 'Angel detected', type: 'warning' },
                    { message: 'System updated', type: 'success' },
                    { message: 'Maintenance due', type: 'warning' },
                    { message: 'Backup complete', type: 'success' },
                    { message: 'Connection lost', type: 'error' }
                  ].map((alert, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm p-2">
                      <div className={`w-2 h-2 rounded-full ${
                        alert.type === 'success' ? 'bg-green-500' :
                        alert.type === 'warning' ? 'bg-yellow-500' :
                        alert.type === 'error' ? 'bg-red-500' : 'bg-blue-500'
                      }`} />
                      <span className="flex-1">{alert.message}</span>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Usage Guidelines */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Usage Guidelines</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="border rounded-lg p-4 bg-card">
            <h3 className="font-medium mb-2 text-green-600">✓ Do</h3>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• Use for content that exceeds container height</li>
              <li>• Provide clear visual boundaries</li>
              <li>• Consider horizontal scrolling for wide content</li>
              <li>• Use consistent scrollbar styling</li>
              <li>• Ensure keyboard navigation works</li>
              <li>• Add loading states for dynamic content</li>
            </ul>
          </div>
          <div className="border rounded-lg p-4 bg-card">
            <h3 className="font-medium mb-2 text-red-600">✗ Don't</h3>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• Make scroll areas too small to be usable</li>
              <li>• Hide important content below the fold</li>
              <li>• Use nested scroll areas unnecessarily</li>
              <li>• Forget to handle empty states</li>
              <li>• Ignore mobile touch scrolling</li>
              <li>• Make scrollbars too thin to interact with</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}