import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { 
  Zap, 
  Shield, 
  Target, 
  Monitor, 
  Cpu, 
  HardDrive,
  Activity,
  AlertTriangle,
  CheckCircle,
  Clock
} from "lucide-react"

export default function CarouselShowCase() {
  const magiUnits = [
    {
      id: "unit-01",
      name: "MELCHIOR",
      status: "Active",
      sync: 98.7,
      description: "Primary computational core handling strategic analysis",
      icon: Cpu,
      color: "bg-blue-500"
    },
    {
      id: "unit-02", 
      name: "BALTHASAR",
      status: "Active",
      sync: 94.2,
      description: "Secondary core managing tactical operations",
      icon: Shield,
      color: "bg-green-500"
    },
    {
      id: "unit-00",
      name: "CASPER",
      status: "Standby",
      sync: 87.1,
      description: "Tertiary core overseeing system diagnostics",
      icon: Monitor,
      color: "bg-orange-500"
    }
  ]

  const systemMetrics = [
    { label: "CPU Usage", value: 67, icon: Cpu },
    { label: "Memory", value: 84, icon: HardDrive },
    { label: "Network", value: 92, icon: Activity },
    { label: "Storage", value: 45, icon: HardDrive },
    { label: "Power", value: 78, icon: Zap }
  ]

  const alerts = [
    {
      type: "warning",
      title: "Pattern Blue Detected",
      message: "Anomalous readings in sector 7-G",
      time: "2 minutes ago",
      icon: AlertTriangle,
      color: "text-orange-500"
    },
    {
      type: "success", 
      title: "Sync Rate Optimized",
      message: "Unit-01 synchronization improved by 3.2%",
      time: "5 minutes ago",
      icon: CheckCircle,
      color: "text-green-500"
    },
    {
      type: "info",
      title: "Routine Maintenance",
      message: "Scheduled system check in 30 minutes",
      time: "10 minutes ago", 
      icon: Clock,
      color: "text-blue-500"
    }
  ]

  return (
    <div className="space-y-8 p-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Carousel Component</h1>
        <p className="text-muted-foreground">
          Interactive carousel component built with Embla Carousel for smooth navigation through content.
        </p>
      </div>

      {/* Basic Carousel */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Basic Carousel</h2>
          <p className="text-muted-foreground">
            Simple carousel with navigation controls and multiple slides.
          </p>
        </div>
        
        <div className="flex justify-center">
          <Carousel className="w-full max-w-xs">
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-4xl font-semibold">{index + 1}</span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* MAGI Units Carousel */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">MAGI System Units</h2>
          <p className="text-muted-foreground">
            Carousel displaying the three MAGI supercomputer units with their current status.
          </p>
        </div>

        <div className="flex justify-center">
          <Carousel className="w-full max-w-sm">
            <CarouselContent>
              {magiUnits.map((unit) => {
                const IconComponent = unit.icon
                return (
                  <CarouselItem key={unit.id}>
                    <div className="p-1">
                      <Card className="h-64">
                        <CardHeader className="pb-3">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className={`p-2 rounded-lg ${unit.color}`}>
                                <IconComponent className="h-4 w-4 text-white" />
                              </div>
                              <CardTitle className="text-lg">{unit.name}</CardTitle>
                            </div>
                            <Badge variant={unit.status === "Active" ? "default" : "secondary"}>
                              {unit.status}
                            </Badge>
                          </div>
                          <CardDescription>{unit.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span>Sync Rate</span>
                              <span className="font-medium">{unit.sync}%</span>
                            </div>
                            <Progress value={unit.sync} />
                          </div>
                          <Button className="w-full" size="sm">
                            View Details
                          </Button>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                )
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Multiple Items Carousel */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">System Metrics</h2>
          <p className="text-muted-foreground">
            Carousel showing multiple items at once with system performance metrics.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {systemMetrics.map((metric, index) => {
              const IconComponent = metric.icon
              return (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex flex-col items-center justify-center p-6 space-y-4">
                        <div className="flex items-center gap-2">
                          <IconComponent className="h-5 w-5 text-muted-foreground" />
                          <span className="font-medium">{metric.label}</span>
                        </div>
                        <div className="w-full space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Usage</span>
                            <span className="font-medium">{metric.value}%</span>
                          </div>
                          <Progress value={metric.value} />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              )
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      {/* Vertical Carousel */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">System Alerts</h2>
          <p className="text-muted-foreground">
            Vertical carousel displaying recent system alerts and notifications.
          </p>
        </div>

        <div className="flex justify-center">
          <Carousel
            orientation="vertical"
            className="w-full max-w-md"
          >
            <CarouselContent className="h-64">
              {alerts.map((alert, index) => {
                const IconComponent = alert.icon
                return (
                  <CarouselItem key={index} className="pt-1 md:basis-1/2">
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex items-start gap-3 p-4">
                          <IconComponent className={`h-5 w-5 mt-0.5 ${alert.color}`} />
                          <div className="flex-1 space-y-1">
                            <h4 className="font-medium leading-none">{alert.title}</h4>
                            <p className="text-sm text-muted-foreground">{alert.message}</p>
                            <p className="text-xs text-muted-foreground">{alert.time}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                )
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Carousel with Custom Styling */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Custom Styled Carousel</h2>
          <p className="text-muted-foreground">
            Carousel with custom button styling and enhanced visual design.
          </p>
        </div>

        <div className="flex justify-center">
          <Carousel className="w-full max-w-lg">
            <CarouselContent>
              {Array.from({ length: 4 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card className="border-2 border-dashed border-muted-foreground/25 hover:border-primary/50 transition-colors">
                      <CardContent className="flex aspect-video items-center justify-center p-6">
                        <div className="text-center space-y-2">
                          <Target className="h-12 w-12 mx-auto text-muted-foreground" />
                          <h3 className="font-semibold">Slide {index + 1}</h3>
                          <p className="text-sm text-muted-foreground">
                            Custom styled carousel item with enhanced visuals
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious  />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
    </div>
  )
}