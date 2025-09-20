import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

export function TabsShowcase() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-primary uppercase tracking-wide font-mono">
          MAGI Tabs Component
        </h2>
        <p className="text-muted-foreground font-mono tracking-wide">
          Evangelion MAGI-themed tabs with polygon shapes and gradient effects.
        </p>
      </div>

      <div className="grid gap-8">
        {/* Basic Tabs */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-primary uppercase tracking-wide font-mono">
            MAGI System Tabs
          </h3>
          <Tabs defaultValue="melchior" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="melchior">Melchior</TabsTrigger>
              <TabsTrigger value="balthasar">Balthasar</TabsTrigger>
              <TabsTrigger value="casper">Casper</TabsTrigger>
            </TabsList>
            <TabsContent value="melchior" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>MAGI System 01 - Melchior</CardTitle>
                  <CardDescription>Logic and Reasoning Core</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm font-mono">
                      <span>Processing Power</span>
                      <span>87%</span>
                    </div>
                    <Progress value={87} />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm font-mono">
                      <span>Memory Usage</span>
                      <span>64%</span>
                    </div>
                    <Progress value={64} />
                  </div>
                  <div className="flex gap-2">
                    <Badge>Logic Core</Badge>
                    <Badge variant="secondary">Active</Badge>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="balthasar" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>MAGI System 02 - Balthasar</CardTitle>
                  <CardDescription>Emotional Processing Core</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm font-mono">
                      <span>Emotional Analysis</span>
                      <span>92%</span>
                    </div>
                    <Progress value={92} />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm font-mono">
                      <span>Pattern Recognition</span>
                      <span>78%</span>
                    </div>
                    <Progress value={78} />
                  </div>
                  <div className="flex gap-2">
                    <Badge>Emotion Core</Badge>
                    <Badge variant="secondary">Active</Badge>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="casper" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>MAGI System 03 - Casper</CardTitle>
                  <CardDescription>Intuitive Decision Core</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm font-mono">
                      <span>Intuitive Processing</span>
                      <span>95%</span>
                    </div>
                    <Progress value={95} />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm font-mono">
                      <span>Decision Matrix</span>
                      <span>83%</span>
                    </div>
                    <Progress value={83} />
                  </div>
                  <div className="flex gap-2">
                    <Badge>Intuition Core</Badge>
                    <Badge variant="secondary">Active</Badge>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* EVA Units Tabs */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-primary uppercase tracking-wide font-mono">
            EVA Unit Status
          </h3>
          <Tabs defaultValue="eva-01" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="eva-01">EVA-01</TabsTrigger>
              <TabsTrigger value="eva-02">EVA-02</TabsTrigger>
              <TabsTrigger value="eva-00">EVA-00</TabsTrigger>
            </TabsList>
            <TabsContent value="eva-01" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Evangelion Unit 01</CardTitle>
                  <CardDescription>Test Type - Pilot: Shinji Ikari</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm font-mono">
                      <span>Sync Ratio</span>
                      <span>74.6%</span>
                    </div>
                    <Progress value={74.6} />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm font-mono">
                      <span>AT Field</span>
                      <span>89%</span>
                    </div>
                    <Progress value={89} />
                  </div>
                  <div className="flex gap-2">
                    <Badge>Test Type</Badge>
                    <Badge variant="secondary">Standby</Badge>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="eva-02" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Evangelion Unit 02</CardTitle>
                  <CardDescription>Production Model - Pilot: Asuka Langley</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm font-mono">
                      <span>Sync Ratio</span>
                      <span>82.3%</span>
                    </div>
                    <Progress value={82.3} />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm font-mono">
                      <span>AT Field</span>
                      <span>91%</span>
                    </div>
                    <Progress value={91} />
                  </div>
                  <div className="flex gap-2">
                    <Badge>Production</Badge>
                    <Badge variant="secondary">Active</Badge>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="eva-00" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Evangelion Unit 00</CardTitle>
                  <CardDescription>Prototype - Pilot: Rei Ayanami</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm font-mono">
                      <span>Sync Ratio</span>
                      <span>67.8%</span>
                    </div>
                    <Progress value={67.8} />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm font-mono">
                      <span>AT Field</span>
                      <span>76%</span>
                    </div>
                    <Progress value={76} />
                  </div>
                  <div className="flex gap-2">
                    <Badge>Prototype</Badge>
                    <Badge variant="secondary">Maintenance</Badge>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Vertical Tabs */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-primary uppercase tracking-wide font-mono">
            System Monitoring
          </h3>
          <Tabs defaultValue="network" className="w-full" orientation="vertical">
            <div className="flex gap-4">
              <TabsList className="flex flex-col h-fit">
                <TabsTrigger value="network" className="w-full">Network</TabsTrigger>
                <TabsTrigger value="security" className="w-full">Security</TabsTrigger>
                <TabsTrigger value="power" className="w-full">Power</TabsTrigger>
                <TabsTrigger value="cooling" className="w-full">Cooling</TabsTrigger>
              </TabsList>
              <div className="flex-1">
                <TabsContent value="network" className="mt-0">
                  <Card>
                    <CardHeader>
                      <CardTitle>Network Status</CardTitle>
                      <CardDescription>NERV Internal Network</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm font-mono">
                          <span>Bandwidth Usage</span>
                          <span>45%</span>
                        </div>
                        <Progress value={45} />
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="security" className="mt-0">
                  <Card>
                    <CardHeader>
                      <CardTitle>Security Status</CardTitle>
                      <CardDescription>Firewall and Intrusion Detection</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm font-mono">
                          <span>Threat Level</span>
                          <span>12%</span>
                        </div>
                        <Progress value={12} />
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="power" className="mt-0">
                  <Card>
                    <CardHeader>
                      <CardTitle>Power Systems</CardTitle>
                      <CardDescription>Electrical Grid Status</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm font-mono">
                          <span>Power Consumption</span>
                          <span>78%</span>
                        </div>
                        <Progress value={78} />
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="cooling" className="mt-0">
                  <Card>
                    <CardHeader>
                      <CardTitle>Cooling Systems</CardTitle>
                      <CardDescription>Temperature Control</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm font-mono">
                          <span>Cooling Efficiency</span>
                          <span>92%</span>
                        </div>
                        <Progress value={92} />
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </div>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  )
}