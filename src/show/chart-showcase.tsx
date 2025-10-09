import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  TrendingUp, 
  TrendingDown, 
  Activity, 
  Zap, 
  Shield, 
  Brain,
  Monitor,
  CheckCircle,
  BarChart3,
  LineChart,
  PieChart,
  Gauge
} from "lucide-react"
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  Line,
  LineChart as RechartsLineChart,
  Pie,
  PieChart as RechartsPieChart,
  RadialBar,
  RadialBarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Cell,
} from "recharts"

export default function ChartShowCase() {
  // Sample data for different chart types
  const monthlyData = [
    { month: "Jan", eva01: 186, eva00: 80, eva02: 120, angels: 2 },
    { month: "Feb", eva01: 305, eva00: 200, eva02: 180, angels: 1 },
    { month: "Mar", eva01: 237, eva00: 120, eva02: 160, angels: 3 },
    { month: "Apr", eva01: 73, eva00: 190, eva02: 140, angels: 0 },
    { month: "May", eva01: 209, eva00: 130, eva02: 200, angels: 2 },
    { month: "Jun", eva01: 214, eva00: 140, eva02: 180, angels: 1 },
  ]

  const syncRatioData = [
    { pilot: "Shinji", syncRatio: 74.2, status: "Active" },
    { pilot: "Rei", syncRatio: 68.9, status: "Standby" },
    { pilot: "Asuka", syncRatio: 52.1, status: "Medical" },
    { pilot: "Mari", syncRatio: 81.7, status: "Active" },
    { pilot: "Kaworu", syncRatio: 95.3, status: "Unknown" },
  ]

  const systemStatusData = [
    { name: "MAGI System", value: 95, fill: "#8884d8" },
    { name: "Power Grid", value: 87, fill: "#82ca9d" },
    { name: "Cooling", value: 73, fill: "#ffc658" },
    { name: "Security", value: 91, fill: "#ff7300" },
    { name: "Communications", value: 89, fill: "#00ff88" },
  ]

  const angelThreatData = [
    { time: "00:00", threat: 0, activity: 2 },
    { time: "04:00", threat: 1, activity: 3 },
    { time: "08:00", threat: 3, activity: 8 },
    { time: "12:00", threat: 7, activity: 12 },
    { time: "16:00", threat: 5, activity: 9 },
    { time: "20:00", threat: 2, activity: 4 },
  ]

  const performanceData = [
    { metric: "Response Time", current: 85, target: 90, fill: "#8884d8" },
    { metric: "Sync Accuracy", current: 92, target: 95, fill: "#82ca9d" },
    { metric: "Power Efficiency", current: 78, target: 85, fill: "#ffc658" },
    { metric: "System Uptime", current: 99, target: 99.5, fill: "#ff7300" },
  ]

  const chartConfig = {
    eva01: {
      label: "Eva Unit 01",
      color: "#8b5cf6",
    },
    eva00: {
      label: "Eva Unit 00",
      color: "#06b6d4",
    },
    eva02: {
      label: "Eva Unit 02",
      color: "#ef4444",
    },
    angels: {
      label: "Angel Encounters",
      color: "#f59e0b",
    },
    threat: {
      label: "Threat Level",
      color: "#ef4444",
    },
    activity: {
      label: "System Activity",
      color: "#06b6d4",
    },
  } satisfies ChartConfig

  return (
    <div className="space-y-8 p-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Chart</h1>
        <p className="text-muted-foreground mb-6">
          Recharts components for building charts and data visualizations.
        </p>
      </div>

      {/* Line Chart */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Line Chart</h2>
        <div className="border rounded-lg p-6 bg-card">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <LineChart className="h-5 w-5" />
                Eva Unit Performance Trends
              </CardTitle>
              <CardDescription>
                Monthly performance metrics for Evangelion units
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[300px]">
                <RechartsLineChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <ChartLegend content={<ChartLegendContent />} />
                  <Line 
                    type="monotone" 
                    dataKey="eva01" 
                    stroke="var(--color-eva01)" 
                    strokeWidth={2}
                    dot={{ fill: "var(--color-eva01)" }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="eva00" 
                    stroke="var(--color-eva00)" 
                    strokeWidth={2}
                    dot={{ fill: "var(--color-eva00)" }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="eva02" 
                    stroke="var(--color-eva02)" 
                    strokeWidth={2}
                    dot={{ fill: "var(--color-eva02)" }}
                  />
                </RechartsLineChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Bar Chart */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Bar Chart</h2>
        <div className="border rounded-lg p-6 bg-card">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Pilot Synchronization Ratios
              </CardTitle>
              <CardDescription>
                Current sync ratios for all active pilots
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[300px]">
                <BarChart data={syncRatioData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="pilot" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar 
                    dataKey="syncRatio" 
                    fill="#8884d8"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ChartContainer>
              <div className="flex flex-wrap gap-2 mt-4">
                {syncRatioData.map((pilot, index) => (
                  <Badge 
                    key={index}
                    variant={pilot.status === 'Active' ? 'default' : pilot.status === 'Medical' ? 'destructive' : 'secondary'}
                  >
                    {pilot.pilot}: {pilot.syncRatio}%
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Area Chart */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Area Chart</h2>
        <div className="border rounded-lg p-6 bg-card">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5" />
                Angel Threat Analysis
              </CardTitle>
              <CardDescription>
                24-hour threat level and system activity monitoring
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[300px]">
                <AreaChart data={angelThreatData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <ChartLegend content={<ChartLegendContent />} />
                  <Area 
                    type="monotone" 
                    dataKey="threat" 
                    stackId="1"
                    stroke="var(--color-threat)" 
                    fill="var(--color-threat)"
                    fillOpacity={0.6}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="activity" 
                    stackId="1"
                    stroke="var(--color-activity)" 
                    fill="var(--color-activity)"
                    fillOpacity={0.6}
                  />
                </AreaChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Pie Chart */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Pie Chart</h2>
        <div className="border rounded-lg p-6 bg-card">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PieChart className="h-5 w-5" />
                System Status Distribution
              </CardTitle>
              <CardDescription>
                Current operational status across all NERV systems
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[300px]">
                <RechartsPieChart>
                  <Pie
                    data={systemStatusData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {systemStatusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <ChartTooltip content={<ChartTooltipContent />} />
                </RechartsPieChart>
              </ChartContainer>
              <div className="grid grid-cols-2 gap-2 mt-4">
                {systemStatusData.map((system, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: system.fill }}
                    />
                    <span className="text-sm">{system.name}: {system.value}%</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Radial Bar Chart */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Radial Bar Chart</h2>
        <div className="border rounded-lg p-6 bg-card">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Gauge className="h-5 w-5" />
                Performance Metrics
              </CardTitle>
              <CardDescription>
                Current vs target performance across key metrics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[300px]">
                <RadialBarChart cx="50%" cy="50%" innerRadius="20%" outerRadius="80%" data={performanceData}>
                  <RadialBar dataKey="current" cornerRadius={10} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                </RadialBarChart>
              </ChartContainer>
              <div className="grid grid-cols-2 gap-4 mt-4">
                {performanceData.map((metric, index) => (
                  <div key={index} className="flex items-center justify-between p-2 border rounded">
                    <span className="text-sm font-medium">{metric.metric}</span>
                    <div className="flex items-center gap-2">
                      <Badge variant={metric.current >= metric.target ? "default" : "secondary"}>
                        {metric.current}%
                      </Badge>
                      <span className="text-xs text-muted-foreground">/ {metric.target}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* NERV Command Dashboard */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">NERV Command Dashboard</h2>
        <div className="border rounded-lg p-6 bg-gradient-to-r from-red-950/20 to-orange-950/20">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="h-5 w-5" />
                  MAGI System Load
                </CardTitle>
                <CardDescription>Real-time processing load distribution</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig} className="h-[200px]">
                  <AreaChart data={[
                    { time: "00:00", melchior: 45, balthasar: 52, casper: 38 },
                    { time: "06:00", melchior: 67, balthasar: 71, casper: 55 },
                    { time: "12:00", melchior: 89, balthasar: 85, casper: 78 },
                    { time: "18:00", melchior: 72, balthasar: 68, casper: 65 },
                  ]}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Area type="monotone" dataKey="melchior" stackId="1" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                    <Area type="monotone" dataKey="balthasar" stackId="1" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                    <Area type="monotone" dataKey="casper" stackId="1" stroke="#ffc658" fill="#ffc658" fillOpacity={0.6} />
                  </AreaChart>
                </ChartContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  AT Field Strength
                </CardTitle>
                <CardDescription>Current field strength by Eva unit</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig} className="h-[200px]">
                  <BarChart data={[
                    { unit: "Unit 01", strength: 85, stability: 92 },
                    { unit: "Unit 00", strength: 78, stability: 88 },
                    { unit: "Unit 02", strength: 65, stability: 75 },
                  ]}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="unit" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="strength" fill="#8884d8" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="stability" fill="#82ca9d" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ChartContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  Power Consumption
                </CardTitle>
                <CardDescription>Hourly power usage across facilities</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig} className="h-[200px]">
                  <RechartsLineChart data={[
                    { hour: "00", geofront: 120, surface: 80, eva: 200 },
                    { hour: "06", geofront: 150, surface: 100, eva: 180 },
                    { hour: "12", geofront: 180, surface: 140, eva: 350 },
                    { hour: "18", geofront: 160, surface: 120, eva: 280 },
                  ]}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="hour" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line type="monotone" dataKey="geofront" stroke="#8884d8" strokeWidth={2} />
                    <Line type="monotone" dataKey="surface" stroke="#82ca9d" strokeWidth={2} />
                    <Line type="monotone" dataKey="eva" stroke="#ffc658" strokeWidth={2} />
                  </RechartsLineChart>
                </ChartContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Monitor className="h-5 w-5" />
                  System Health
                </CardTitle>
                <CardDescription>Overall system health indicators</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig} className="h-[200px]">
                  <RadialBarChart cx="50%" cy="50%" innerRadius="30%" outerRadius="70%" data={[
                    { name: "Overall", value: 94, fill: "#8884d8" },
                    { name: "Security", value: 87, fill: "#82ca9d" },
                    { name: "Performance", value: 91, fill: "#ffc658" },
                  ]}>
                    <RadialBar dataKey="value" cornerRadius={10} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                  </RadialBarChart>
                </ChartContainer>
                <div className="flex justify-center mt-4">
                  <Badge variant="default" className="text-lg">
                    System Status: Optimal
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Small Charts Grid */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Compact Charts</h2>
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-green-500" />
                Sync Rate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">74.2%</div>
              <ChartContainer config={chartConfig} className="h-[60px]">
                <AreaChart data={[
                  { value: 65 }, { value: 68 }, { value: 72 }, { value: 74 }, { value: 74.2 }
                ]}>
                  <Area type="monotone" dataKey="value" stroke="#22c55e" fill="#22c55e" fillOpacity={0.3} />
                </AreaChart>
              </ChartContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm flex items-center gap-2">
                <TrendingDown className="h-4 w-4 text-red-500" />
                Threat Level
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Low</div>
              <ChartContainer config={chartConfig} className="h-[60px]">
                <AreaChart data={[
                  { value: 8 }, { value: 6 }, { value: 4 }, { value: 3 }, { value: 2 }
                ]}>
                  <Area type="monotone" dataKey="value" stroke="#ef4444" fill="#ef4444" fillOpacity={0.3} />
                </AreaChart>
              </ChartContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm flex items-center gap-2">
                <Activity className="h-4 w-4 text-blue-500" />
                System Load
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">67%</div>
              <ChartContainer config={chartConfig} className="h-[60px]">
                <BarChart data={[
                  { value: 45 }, { value: 52 }, { value: 61 }, { value: 65 }, { value: 67 }
                ]}>
                  <Bar dataKey="value" fill="#3b82f6" />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Uptime
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">99.9%</div>
              <ChartContainer config={chartConfig} className="h-[60px]">
                <RechartsLineChart data={[
                  { value: 99.5 }, { value: 99.7 }, { value: 99.8 }, { value: 99.9 }, { value: 99.9 }
                ]}>
                  <Line type="monotone" dataKey="value" stroke="#22c55e" strokeWidth={2} dot={false} />
                </RechartsLineChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>
      </div>

    </div>
  )
}