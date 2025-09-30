import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { 
  Monitor, 
  FileText, 
  Settings, 
  Terminal, 
  Code, 
  Database,
  Activity,
  Shield,
  Zap,
  Brain
} from "lucide-react"

export default function ResizableShowCase() {
  return (
    <div className="space-y-8 p-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight mb-2">Resizable</h2>
        <p className="text-muted-foreground">
          Accessible resizable panel groups and layouts. Perfect for creating flexible interfaces.
        </p>
      </div>

      {/* Basic Horizontal Layout */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Monitor className="h-5 w-5" />
            Basic Horizontal Layout
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResizablePanelGroup
            direction="horizontal"
            className="min-h-[200px] max-w-md rounded-lg border"
          >
            <ResizablePanel defaultSize={50}>
              <div className="flex h-full items-center justify-center p-6">
                <div className="text-center">
                  <FileText className="h-8 w-8 mx-auto mb-2 text-blue-500" />
                  <span className="font-semibold">Panel One</span>
                </div>
              </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={50}>
              <div className="flex h-full items-center justify-center p-6">
                <div className="text-center">
                  <Settings className="h-8 w-8 mx-auto mb-2 text-green-500" />
                  <span className="font-semibold">Panel Two</span>
                </div>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </CardContent>
      </Card>

      {/* Basic Vertical Layout */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Terminal className="h-5 w-5" />
            Basic Vertical Layout
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResizablePanelGroup
            direction="vertical"
            className="min-h-[200px] max-w-md rounded-lg border"
          >
            <ResizablePanel defaultSize={50}>
              <div className="flex h-full items-center justify-center p-6">
                <div className="text-center">
                  <Code className="h-8 w-8 mx-auto mb-2 text-purple-500" />
                  <span className="font-semibold">Top Panel</span>
                </div>
              </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={50}>
              <div className="flex h-full items-center justify-center p-6">
                <div className="text-center">
                  <Database className="h-8 w-8 mx-auto mb-2 text-orange-500" />
                  <span className="font-semibold">Bottom Panel</span>
                </div>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </CardContent>
      </Card>

      {/* Complex Layout - MAGI System Interface */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5" />
            MAGI System Interface
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResizablePanelGroup
            direction="horizontal"
            className="min-h-[400px] rounded-lg border"
          >
            <ResizablePanel defaultSize={25} minSize={20}>
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between p-4 border-b">
                  <h3 className="font-semibold">MAGI Systems</h3>
                  <Badge variant="outline">3 Active</Badge>
                </div>
                <div className="flex-1 p-4 space-y-3">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 dark:bg-blue-950">
                    <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                    <div>
                      <p className="font-medium">MELCHIOR</p>
                      <p className="text-sm text-muted-foreground">Scientist</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-green-50 dark:bg-green-950">
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    <div>
                      <p className="font-medium">BALTHASAR</p>
                      <p className="text-sm text-muted-foreground">Mother</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-purple-50 dark:bg-purple-950">
                    <div className="h-3 w-3 rounded-full bg-purple-500"></div>
                    <div>
                      <p className="font-medium">CASPER</p>
                      <p className="text-sm text-muted-foreground">Woman</p>
                    </div>
                  </div>
                </div>
              </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={50}>
              <ResizablePanelGroup direction="vertical">
                <ResizablePanel defaultSize={60}>
                  <div className="flex h-full flex-col">
                    <div className="flex items-center justify-between p-4 border-b">
                      <h3 className="font-semibold">System Status</h3>
                      <div className="flex gap-2">
                        <Badge className="bg-green-500">Operational</Badge>
                        <Badge variant="outline">Real-time</Badge>
                      </div>
                    </div>
                    <div className="flex-1 p-4">
                      <div className="grid grid-cols-2 gap-4 h-full">
                        <div className="space-y-4">
                          <div className="flex items-center gap-3">
                            <Activity className="h-5 w-5 text-green-500" />
                            <div>
                              <p className="font-medium">CPU Usage</p>
                              <p className="text-2xl font-bold">23%</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <Shield className="h-5 w-5 text-blue-500" />
                            <div>
                              <p className="font-medium">Security Level</p>
                              <p className="text-2xl font-bold">5</p>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <div className="flex items-center gap-3">
                            <Zap className="h-5 w-5 text-yellow-500" />
                            <div>
                              <p className="font-medium">Power Output</p>
                              <p className="text-2xl font-bold">98%</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <Database className="h-5 w-5 text-purple-500" />
                            <div>
                              <p className="font-medium">Data Sync</p>
                              <p className="text-2xl font-bold">100%</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel defaultSize={40}>
                  <div className="flex h-full flex-col">
                    <div className="flex items-center justify-between p-4 border-b">
                      <h3 className="font-semibold">Command Log</h3>
                      <Button size="sm" variant="outline">Clear</Button>
                    </div>
                    <div className="flex-1 p-4 font-mono text-sm space-y-1 overflow-auto">
                      <div className="text-green-400">[12:34:56] MAGI-01: System initialization complete</div>
                      <div className="text-blue-400">[12:35:12] MAGI-02: Synchronization established</div>
                      <div className="text-yellow-400">[12:35:28] MAGI-03: Pattern analysis started</div>
                      <div className="text-green-400">[12:35:45] All systems: Consensus achieved</div>
                      <div className="text-gray-400">[12:36:01] Monitoring: Background processes active</div>
                      <div className="text-blue-400">[12:36:15] Security: Perimeter scan complete</div>
                    </div>
                  </div>
                </ResizablePanel>
              </ResizablePanelGroup>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={25} minSize={20}>
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between p-4 border-b">
                  <h3 className="font-semibold">Quick Actions</h3>
                </div>
                <div className="flex-1 p-4 space-y-3">
                  <Button className="w-full justify-start" variant="outline">
                    <Shield className="h-4 w-4 mr-2" />
                    Security Scan
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Activity className="h-4 w-4 mr-2" />
                    System Check
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Database className="h-4 w-4 mr-2" />
                    Data Backup
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Zap className="h-4 w-4 mr-2" />
                    Power Cycle
                  </Button>
                  <Separator className="my-4" />
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Recent Alerts</h4>
                    <div className="text-xs space-y-1">
                      <div className="p-2 rounded bg-yellow-50 dark:bg-yellow-950 text-yellow-800 dark:text-yellow-200">
                        Pattern Blue detected
                      </div>
                      <div className="p-2 rounded bg-green-50 dark:bg-green-950 text-green-800 dark:text-green-200">
                        Sync completed
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </CardContent>
      </Card>

      {/* Three Panel Layout */}
      <Card>
        <CardHeader>
          <CardTitle>Three Panel Layout</CardTitle>
        </CardHeader>
        <CardContent>
          <ResizablePanelGroup
            direction="horizontal"
            className="min-h-[200px] max-w-2xl rounded-lg border"
          >
            <ResizablePanel defaultSize={33}>
              <div className="flex h-full items-center justify-center p-6">
                <div className="text-center">
                  <div className="h-8 w-8 mx-auto mb-2 rounded bg-red-500"></div>
                  <span className="font-semibold">Left</span>
                </div>
              </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={34}>
              <div className="flex h-full items-center justify-center p-6">
                <div className="text-center">
                  <div className="h-8 w-8 mx-auto mb-2 rounded bg-blue-500"></div>
                  <span className="font-semibold">Center</span>
                </div>
              </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={33}>
              <div className="flex h-full items-center justify-center p-6">
                <div className="text-center">
                  <div className="h-8 w-8 mx-auto mb-2 rounded bg-green-500"></div>
                  <span className="font-semibold">Right</span>
                </div>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </CardContent>
      </Card>

      {/* Nested Layout */}
      <Card>
        <CardHeader>
          <CardTitle>Nested Resizable Layout</CardTitle>
        </CardHeader>
        <CardContent>
          <ResizablePanelGroup
            direction="horizontal"
            className="min-h-[300px] max-w-3xl rounded-lg border"
          >
            <ResizablePanel defaultSize={30}>
              <div className="flex h-full items-center justify-center p-6">
                <div className="text-center">
                  <FileText className="h-8 w-8 mx-auto mb-2 text-blue-500" />
                  <span className="font-semibold">Sidebar</span>
                </div>
              </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={70}>
              <ResizablePanelGroup direction="vertical">
                <ResizablePanel defaultSize={70}>
                  <div className="flex h-full items-center justify-center p-6">
                    <div className="text-center">
                      <Monitor className="h-8 w-8 mx-auto mb-2 text-green-500" />
                      <span className="font-semibold">Main Content</span>
                    </div>
                  </div>
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel defaultSize={30}>
                  <div className="flex h-full items-center justify-center p-6">
                    <div className="text-center">
                      <Terminal className="h-8 w-8 mx-auto mb-2 text-purple-500" />
                      <span className="font-semibold">Footer</span>
                    </div>
                  </div>
                </ResizablePanel>
              </ResizablePanelGroup>
            </ResizablePanel>
          </ResizablePanelGroup>
        </CardContent>
      </Card>

      {/* Usage Guidelines */}
      <Card>
        <CardHeader>
          <CardTitle>Usage Guidelines</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Best Practices:</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• Set appropriate minimum and maximum sizes for panels</li>
              <li>• Use meaningful default sizes based on content importance</li>
              <li>• Consider the user's workflow when designing layouts</li>
              <li>• Test resizing behavior on different screen sizes</li>
              <li>• Provide visual feedback during resize operations</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Common Use Cases:</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• Code editors with sidebar and terminal</li>
              <li>• Dashboard layouts with multiple data views</li>
              <li>• File managers with directory tree and content</li>
              <li>• Email clients with folder list and message view</li>
              <li>• Design tools with toolbars and canvas areas</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}