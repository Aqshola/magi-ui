import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function AvatarShowcase() {
  return (
    <div className="space-y-8 p-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Avatar Component</h1>
        <p className="text-muted-foreground">
          Display user profile pictures with fallback text and various styling options.
        </p>
      </div>

      {/* Basic Avatar */}
      <Card>
        <CardHeader>
          <CardTitle>Basic Avatar</CardTitle>
          <CardDescription>
            Simple avatar with image and fallback text
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="/nonexistent.jpg" alt="@user" />
              <AvatarFallback>RA</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>MG</AvatarFallback>
            </Avatar>
          </div>
        </CardContent>
      </Card>

      {/* Size Variants */}
      <Card>
        <CardHeader>
          <CardTitle>Size Variants</CardTitle>
          <CardDescription>
            Different avatar sizes for various use cases
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-end gap-4">
            <div className="text-center space-y-2">
              <Avatar size="xs">
                <AvatarFallback>XS</AvatarFallback>
              </Avatar>
              <Badge variant="outline" className="text-xs">xs</Badge>
            </div>
            <div className="text-center space-y-2">
              <Avatar size="sm">
                <AvatarFallback>SM</AvatarFallback>
              </Avatar>
              <Badge variant="outline" className="text-xs">sm</Badge>
            </div>
            <div className="text-center space-y-2">
              <Avatar size="md">
                <AvatarFallback>MD</AvatarFallback>
              </Avatar>
              <Badge variant="outline" className="text-xs">md</Badge>
            </div>
            <div className="text-center space-y-2">
              <Avatar size="lg">
                <AvatarFallback>LG</AvatarFallback>
              </Avatar>
              <Badge variant="outline" className="text-xs">lg</Badge>
            </div>
            <div className="text-center space-y-2">
              <Avatar size="xl">
                <AvatarFallback>XL</AvatarFallback>
              </Avatar>
              <Badge variant="outline" className="text-xs">xl</Badge>
            </div>
            <div className="text-center space-y-2">
              <Avatar size="2xl">
                <AvatarFallback>2XL</AvatarFallback>
              </Avatar>
              <Badge variant="outline" className="text-xs">2xl</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* MAGI System Variants */}
      <Card>
        <CardHeader>
          <CardTitle>MAGI System Variants</CardTitle>
          <CardDescription>
            Themed avatars for different system roles and statuses
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <div className="text-center space-y-3">
              <Avatar variant="default" size="lg">
                <AvatarFallback variant="default">DF</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium text-sm">Default</p>
                <p className="text-xs text-muted-foreground">Standard user</p>
              </div>
            </div>
            <div className="text-center space-y-3">
              <Avatar variant="magi" size="lg">
                <AvatarFallback variant="magi">MG</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium text-sm">MAGI</p>
                <p className="text-xs text-muted-foreground">Core system</p>
              </div>
            </div>
            <div className="text-center space-y-3">
              <Avatar variant="system" size="lg">
                <AvatarFallback variant="system">SY</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium text-sm">System</p>
                <p className="text-xs text-muted-foreground">System admin</p>
              </div>
            </div>
            <div className="text-center space-y-3">
              <Avatar variant="warning" size="lg">
                <AvatarFallback variant="warning">WN</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium text-sm">Warning</p>
                <p className="text-xs text-muted-foreground">Alert status</p>
              </div>
            </div>
            <div className="text-center space-y-3">
              <Avatar variant="danger" size="lg">
                <AvatarFallback variant="danger">DN</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium text-sm">Danger</p>
                <p className="text-xs text-muted-foreground">Critical status</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* MAGI Personnel */}
      <Card>
        <CardHeader>
          <CardTitle>MAGI Personnel Directory</CardTitle>
          <CardDescription>
            Key personnel in the MAGI system with their roles and status
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 rounded-lg border bg-card">
              <Avatar size="lg" variant="magi">
                <AvatarImage src="/api/placeholder/64/64" alt="Ritsuko Akagi" />
                <AvatarFallback variant="magi">RA</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h3 className="font-semibold">Dr. Ritsuko Akagi</h3>
                <p className="text-sm text-muted-foreground">Chief Scientist, MAGI Development</p>
                <div className="flex items-center gap-2 mt-1">
                  <Badge variant="default">Active</Badge>
                  <Badge variant="outline">Level 5 Clearance</Badge>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-lg border bg-card">
              <Avatar size="lg" variant="system">
                <AvatarImage src="/api/placeholder/64/64" alt="Maya Ibuki" />
                <AvatarFallback variant="system">MI</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h3 className="font-semibold">Maya Ibuki</h3>
                <p className="text-sm text-muted-foreground">Systems Operator, MAGI Interface</p>
                <div className="flex items-center gap-2 mt-1">
                  <Badge variant="default">Active</Badge>
                  <Badge variant="outline">Level 3 Clearance</Badge>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-lg border bg-card">
              <Avatar size="lg" variant="warning">
                <AvatarImage src="/api/placeholder/64/64" alt="Makoto Hyuga" />
                <AvatarFallback variant="warning">MH</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h3 className="font-semibold">Makoto Hyuga</h3>
                <p className="text-sm text-muted-foreground">Communications Officer</p>
                <div className="flex items-center gap-2 mt-1">
                  <Badge variant="secondary">On Duty</Badge>
                  <Badge variant="outline">Level 2 Clearance</Badge>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* System Status Avatars */}
      <Card>
        <CardHeader>
          <CardTitle>System Status Indicators</CardTitle>
          <CardDescription>
            Using avatars to represent different system states and processes
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-4">
              <h4 className="font-medium text-sm">MAGI Units</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Avatar size="sm" variant="magi">
                    <AvatarFallback variant="magi" size="sm">M1</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">MAGI-01 Melchior</p>
                    <p className="text-xs text-muted-foreground">Operational</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Avatar size="sm" variant="magi">
                    <AvatarFallback variant="magi" size="sm">M2</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">MAGI-02 Balthasar</p>
                    <p className="text-xs text-muted-foreground">Operational</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Avatar size="sm" variant="magi">
                    <AvatarFallback variant="magi" size="sm">M3</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">MAGI-03 Casper</p>
                    <p className="text-xs text-muted-foreground">Operational</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium text-sm">System Processes</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Avatar size="sm" variant="system">
                    <AvatarFallback variant="system" size="sm">DB</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">Database</p>
                    <p className="text-xs text-muted-foreground">Running</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Avatar size="sm" variant="system">
                    <AvatarFallback variant="system" size="sm">API</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">API Server</p>
                    <p className="text-xs text-muted-foreground">Running</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Avatar size="sm" variant="warning">
                    <AvatarFallback variant="warning" size="sm">NET</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">Network</p>
                    <p className="text-xs text-muted-foreground">Warning</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium text-sm">Security Status</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Avatar size="sm" variant="default">
                    <AvatarFallback variant="default" size="sm">FW</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">Firewall</p>
                    <p className="text-xs text-muted-foreground">Active</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Avatar size="sm" variant="warning">
                    <AvatarFallback variant="warning" size="sm">IDS</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">Intrusion Detection</p>
                    <p className="text-xs text-muted-foreground">Alert</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Avatar size="sm" variant="danger">
                    <AvatarFallback variant="danger" size="sm">SEC</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">Security Breach</p>
                    <p className="text-xs text-muted-foreground">Critical</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Avatar Groups */}
      <Card>
        <CardHeader>
          <CardTitle>Avatar Groups</CardTitle>
          <CardDescription>
            Displaying multiple avatars in groups and stacks
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h4 className="font-medium text-sm mb-3">Team Members</h4>
              <div className="flex -space-x-2">
                <Avatar size="md" variant="magi" className="border-2 border-background">
                  <AvatarFallback variant="magi">RA</AvatarFallback>
                </Avatar>
                <Avatar size="md" variant="system" className="border-2 border-background">
                  <AvatarFallback variant="system">MI</AvatarFallback>
                </Avatar>
                <Avatar size="md" variant="default" className="border-2 border-background">
                  <AvatarFallback>MH</AvatarFallback>
                </Avatar>
                <Avatar size="md" variant="default" className="border-2 border-background">
                  <AvatarFallback>SH</AvatarFallback>
                </Avatar>
                <Avatar size="md" className="border-2 border-background bg-muted">
                  <AvatarFallback className="text-xs">+3</AvatarFallback>
                </Avatar>
              </div>
            </div>

            <Separator />

            <div>
              <h4 className="font-medium text-sm mb-3">Online Users</h4>
              <div className="flex flex-wrap gap-2">
                <Avatar size="sm" variant="magi">
                  <AvatarFallback variant="magi" size="sm">RA</AvatarFallback>
                </Avatar>
                <Avatar size="sm" variant="system">
                  <AvatarFallback variant="system" size="sm">MI</AvatarFallback>
                </Avatar>
                <Avatar size="sm" variant="default">
                  <AvatarFallback size="sm">MH</AvatarFallback>
                </Avatar>
                <Avatar size="sm" variant="default">
                  <AvatarFallback size="sm">SH</AvatarFallback>
                </Avatar>
                <Avatar size="sm" variant="warning">
                  <AvatarFallback variant="warning" size="sm">KF</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Custom Styling */}
      <Card>
        <CardHeader>
          <CardTitle>Custom Styling</CardTitle>
          <CardDescription>
            Examples of custom styled avatars with additional effects
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-6">
            <div className="text-center space-y-2">
              <Avatar size="lg" className="ring-2 ring-primary ring-offset-2 ring-offset-background">
                <AvatarFallback variant="magi">RA</AvatarFallback>
              </Avatar>
              <p className="text-xs text-muted-foreground">Ring Effect</p>
            </div>
            <div className="text-center space-y-2">
              <Avatar size="lg" className="shadow-lg shadow-primary/25">
                <AvatarFallback variant="system">MI</AvatarFallback>
              </Avatar>
              <p className="text-xs text-muted-foreground">Shadow Effect</p>
            </div>
            <div className="text-center space-y-2">
              <Avatar size="lg" className="hover:scale-110 transition-transform cursor-pointer">
                <AvatarFallback variant="warning">MH</AvatarFallback>
              </Avatar>
              <p className="text-xs text-muted-foreground">Hover Scale</p>
            </div>
            <div className="text-center space-y-2">
              <Avatar size="lg" className="opacity-60 grayscale">
                <AvatarFallback>OFF</AvatarFallback>
              </Avatar>
              <p className="text-xs text-muted-foreground">Offline State</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}