import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Info, AlertTriangle, CheckCircle, XCircle, Zap, Shield, Target } from "lucide-react"

export function TooltipShowcase() {
  return (
    <TooltipProvider>
      <div className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-primary uppercase tracking-wide font-mono">
            MAGI Tooltip Component
          </h2>
          <p className="text-muted-foreground font-mono tracking-wide">
            Evangelion MAGI-themed tooltips with polygon shapes and gradient effects.
          </p>
        </div>

        <div className="grid gap-8">
          {/* Basic Tooltips */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary uppercase tracking-wide font-mono">
              Basic Tooltips
            </h3>
            <div className="flex flex-wrap gap-4">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline">
                    <Info className="h-4 w-4 mr-2" />
                    System Info
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>MAGI System Status: All cores operational</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button>
                    <Shield className="h-4 w-4 mr-2" />
                    AT Field
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Absolute Terror Field - Defensive barrier system</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="destructive">
                    <AlertTriangle className="h-4 w-4 mr-2" />
                    Alert
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Angel detected in proximity - Initiate combat protocol</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>

          {/* EVA Unit Status */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary uppercase tracking-wide font-mono">
              EVA Unit Status
            </h3>
            <div className="grid grid-cols-3 gap-4">
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="p-4 border border-primary/20 rounded-lg bg-gradient-to-br from-background to-background/50 cursor-pointer hover:border-primary/40 transition-colors">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-sm uppercase tracking-wide">EVA-01</span>
                      <Badge variant="default">ACTIVE</Badge>
                    </div>
                    <Progress value={85} className="mt-2" />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <div className="space-y-1">
                    <p className="font-semibold">Evangelion Unit-01</p>
                    <p>Pilot: Shinji Ikari</p>
                    <p>Sync Ratio: 85%</p>
                    <p>Status: Combat Ready</p>
                    <p>Last Maintenance: 2 days ago</p>
                  </div>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="p-4 border border-primary/20 rounded-lg bg-gradient-to-br from-background to-background/50 cursor-pointer hover:border-primary/40 transition-colors">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-sm uppercase tracking-wide">EVA-02</span>
                      <Badge variant="secondary">STANDBY</Badge>
                    </div>
                    <Progress value={72} className="mt-2" />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <div className="space-y-1">
                    <p className="font-semibold">Evangelion Unit-02</p>
                    <p>Pilot: Asuka Langley</p>
                    <p>Sync Ratio: 72%</p>
                    <p>Status: On Standby</p>
                    <p>Last Maintenance: 1 day ago</p>
                  </div>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="p-4 border border-primary/20 rounded-lg bg-gradient-to-br from-background to-background/50 cursor-pointer hover:border-primary/40 transition-colors">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-sm uppercase tracking-wide">EVA-00</span>
                      <Badge variant="outline">MAINTENANCE</Badge>
                    </div>
                    <Progress value={45} className="mt-2" />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <div className="space-y-1">
                    <p className="font-semibold">Evangelion Unit-00</p>
                    <p>Pilot: Rei Ayanami</p>
                    <p>Sync Ratio: 45%</p>
                    <p>Status: Under Maintenance</p>
                    <p>Expected Ready: 6 hours</p>
                  </div>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>

          {/* System Components */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary uppercase tracking-wide font-mono">
              System Components
            </h3>
            <div className="flex flex-wrap gap-4">
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex items-center gap-2 p-2 border border-primary/20 rounded cursor-pointer hover:bg-primary/5">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="font-mono text-sm">MELCHIOR</span>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <div className="space-y-1">
                    <p className="font-semibold">MAGI Melchior</p>
                    <p>Status: Online</p>
                    <p>CPU Usage: 23%</p>
                    <p>Memory: 67%</p>
                    <p>Response Time: 0.3ms</p>
                  </div>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex items-center gap-2 p-2 border border-primary/20 rounded cursor-pointer hover:bg-primary/5">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="font-mono text-sm">BALTHASAR</span>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <div className="space-y-1">
                    <p className="font-semibold">MAGI Balthasar</p>
                    <p>Status: Online</p>
                    <p>CPU Usage: 31%</p>
                    <p>Memory: 54%</p>
                    <p>Response Time: 0.2ms</p>
                  </div>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex items-center gap-2 p-2 border border-primary/20 rounded cursor-pointer hover:bg-primary/5">
                    <XCircle className="h-4 w-4 text-red-500" />
                    <span className="font-mono text-sm">CASPER</span>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <div className="space-y-1">
                    <p className="font-semibold">MAGI Casper</p>
                    <p>Status: Error</p>
                    <p>CPU Usage: 0%</p>
                    <p>Memory: N/A</p>
                    <p>Last Error: Connection timeout</p>
                  </div>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>

          {/* Tooltip Positions */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary uppercase tracking-wide font-mono">
              Tooltip Positions
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-8">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" className="w-full">
                    Top
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="top">
                  <p>Tooltip positioned at top</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" className="w-full">
                    Right
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right">
                  <p>Tooltip positioned at right</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" className="w-full">
                    Bottom
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  <p>Tooltip positioned at bottom</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" className="w-full">
                    Left
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="left">
                  <p>Tooltip positioned at left</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>

          {/* Interactive Elements */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary uppercase tracking-wide font-mono">
              Interactive Elements
            </h3>
            <div className="flex flex-wrap gap-4">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Badge variant="default" className="cursor-pointer">
                    <Zap className="h-3 w-3 mr-1" />
                    Power Level
                  </Badge>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Current power output: 120% of normal capacity</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Badge variant="secondary" className="cursor-pointer">
                    <Target className="h-3 w-3 mr-1" />
                    Target Lock
                  </Badge>
                </TooltipTrigger>
                <TooltipContent>
                  <div className="space-y-1">
                    <p className="font-semibold">Target Acquisition System</p>
                    <p>Targets Locked: 3</p>
                    <p>Accuracy: 98.7%</p>
                    <p>Range: 2.4km</p>
                  </div>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="text-primary font-mono text-sm cursor-pointer hover:underline">
                    NERV-HQ-001
                  </span>
                </TooltipTrigger>
                <TooltipContent>
                  <div className="space-y-1">
                    <p className="font-semibold">NERV Headquarters</p>
                    <p>Location: Tokyo-3</p>
                    <p>Security Level: Maximum</p>
                    <p>Personnel: 2,847</p>
                    <p>Status: Operational</p>
                  </div>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </TooltipProvider>
  )
}