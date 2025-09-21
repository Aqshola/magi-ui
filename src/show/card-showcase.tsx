import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function CardShowcase() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4 text-primary uppercase tracking-wide">CARD COMPONENT</h2>
        <p className="text-muted-foreground mb-6">MAGI-themed card component with polygon shapes and gradient effects.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Basic Card */}
        <Card className="w-full">
          <CardHeader>
            <CardTitle>SYSTEM STATUS</CardTitle>
            <CardDescription>Current operational parameters</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">All systems are functioning within normal parameters. MAGI units are synchronized.</p>
          </CardContent>
        </Card>

        {/* Card with Footer */}
        <Card className="w-full">
          <CardHeader>
            <CardTitle>SECURITY ALERT</CardTitle>
            <CardDescription>Threat assessment report</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-destructive">Anomalous pattern detected in sector 7. Immediate investigation required.</p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button isCustomPolygon={false} variant="outline" size="sm">DISMISS</Button>
            <Button isCustomPolygon={false} size="sm">INVESTIGATE</Button>
          </CardFooter>
        </Card>

        {/* Data Card */}
        <Card className="w-full">
          <CardHeader>
            <CardTitle>MAGI CORE</CardTitle>
            <CardDescription>Processing unit statistics</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>CPU USAGE:</span>
              <span className="text-primary font-mono">73.2%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>MEMORY:</span>
              <span className="text-primary font-mono">8.4/16 GB</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>TEMPERATURE:</span>
              <span className="text-primary font-mono">42°C</span>
            </div>
          </CardContent>
          <CardFooter>
            <Button isCustomPolygon={false} variant="outline" className="w-full">VIEW DETAILS</Button>
          </CardFooter>
        </Card>

        {/* Compact Card */}
        <Card className="w-full">
          <CardContent className="pt-6">
            <div className="text-center space-y-2">
              <CardTitle className="text-lg">ANGEL DETECTED</CardTitle>
              <p className="text-destructive font-mono text-sm">PATTERN BLUE</p>
              <Button isCustomPolygon={false} className="w-full mt-4">ACTIVATE AT FIELD</Button>
            </div>
          </CardContent>
        </Card>

        {/* Status Card */}
        <Card className="w-full">
          <CardHeader>
            <CardTitle>SYNC RATIO</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary font-mono">98.7%</div>
              <p className="text-sm text-muted-foreground mt-2">Pilot synchronization rate</p>
            </div>
          </CardContent>
        </Card>

        {/* Warning Card */}
        <Card className="w-full border-destructive">
          <CardHeader>
            <CardTitle className="text-destructive">CRITICAL ERROR</CardTitle>
            <CardDescription>System malfunction detected</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">EVA Unit 01 has exceeded operational limits. Emergency shutdown initiated.</p>
          </CardContent>
          <CardFooter>
            <Button isCustomPolygon={false} variant="destructive" className="w-full">EMERGENCY PROTOCOL</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}