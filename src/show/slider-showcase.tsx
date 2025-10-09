import { useState } from "react"
import { Slider } from "@/components/ui/slider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Volume2, 
  VolumeX, 
  Thermometer, 
  Zap, 
  Activity, 
  Shield, 
  Brain,
  Gauge,
  Settings,
  Monitor,
  Battery,
  Wifi,
  Speaker,
  Mic,
  Camera,
  Play,
  RotateCcw
} from "lucide-react"

export default function SliderShowCase() {
  const [volume, setVolume] = useState([50])
  const [brightness, setBrightness] = useState([75])
  const [temperature, setTemperature] = useState([22])
  const [syncRatio, setSyncRatio] = useState([68.5])
  const [powerLevel, setPowerLevel] = useState([85])
  const [atFieldStrength, setAtFieldStrength] = useState([42])
  const [rangeValues, setRangeValues] = useState([20, 80])
  const [multipleValues, setMultipleValues] = useState([25, 50, 75])

  // NERV System Controls
  const [magiSystem, setMagiSystem] = useState([95])
  const [evaUnit01, setEvaUnit01] = useState([74])
  const [evaUnit00, setEvaUnit00] = useState([68])
  const [evaUnit02, setEvaUnit02] = useState([52])
  const [lcl, setLcl] = useState([100])
  const [cooling, setCooling] = useState([60])

  const resetAllValues = () => {
    setVolume([50])
    setBrightness([75])
    setTemperature([22])
    setSyncRatio([68.5])
    setPowerLevel([85])
    setAtFieldStrength([42])
    setRangeValues([20, 80])
    setMultipleValues([25, 50, 75])
    setMagiSystem([95])
    setEvaUnit01([74])
    setEvaUnit00([68])
    setEvaUnit02([52])
    setLcl([100])
    setCooling([60])
  }

  return (
    <div className="space-y-8 p-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Slider</h1>
        <p className="text-muted-foreground mb-6">
          An input where the user selects a value from within a given range.
        </p>
      </div>

      {/* Basic Slider */}
      <div className="space-y-4 b">
        <h2 className="text-xl font-semibold">Basic Slider</h2>
        <div className="border border-primary rounded-lg p-6 bg-card">
          <div className="space-y-6">
            <div className="space-y-2">
              <Label>Default Slider</Label>
              <Slider
                defaultValue={[50]}
                max={100}
                step={1}
                className="w-[60%]"
              />
            </div>
            <div className="space-y-2">
              <Label>Disabled Slider</Label>
              <Slider
                defaultValue={[25]}
                max={100}
                step={1}
                disabled
                className="w-[60%]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Controlled Sliders */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Controlled Sliders</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Volume2 className="h-5 w-5" />
                Volume Control
              </CardTitle>
              <CardDescription>Adjust system audio level</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <VolumeX className="h-4 w-4 text-muted-foreground" />
                <Slider
                  value={volume}
                  onValueChange={setVolume}
                  max={100}
                  step={1}
                  className="flex-1"
                />
                <Volume2 className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="text-center">
                <Badge variant="outline">{volume[0]}%</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                Brightness
              </CardTitle>
              <CardDescription>Screen brightness adjustment</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Slider
                value={brightness}
                onValueChange={setBrightness}
                max={100}
                step={5}
                className="w-full"
              />
              <div className="text-center">
                <Badge variant="outline">{brightness[0]}%</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Thermometer className="h-5 w-5" />
                Temperature
              </CardTitle>
              <CardDescription>Room temperature control</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Slider
                value={temperature}
                onValueChange={setTemperature}
                min={16}
                max={30}
                step={0.5}
                className="w-full"
              />
              <div className="text-center">
                <Badge variant="outline">{temperature[0]}°C</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5" />
                Sync Ratio
              </CardTitle>
              <CardDescription>Pilot synchronization level</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Slider
                value={syncRatio}
                onValueChange={setSyncRatio}
                min={0}
                max={100}
                step={0.1}
                className="w-full"
              />
              <div className="text-center">
                <Badge 
                  variant={syncRatio[0] > 70 ? "default" : syncRatio[0] > 50 ? "secondary" : "destructive"}
                >
                  {syncRatio[0].toFixed(1)}%
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* NERV Command Center */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">NERV Command Center</h2>
        <div className="border rounded-lg p-6 bg-gradient-to-r from-red-950/20 to-orange-950/20">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5" />
                System Control Interface
              </CardTitle>
              <CardDescription>
                Central control for all NERV facility operations
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label className="flex items-center gap-2">
                        <Brain className="h-4 w-4" />
                        MAGI System
                      </Label>
                      <Badge variant={magiSystem[0] > 90 ? "default" : "secondary"}>
                        {magiSystem[0]}%
                      </Badge>
                    </div>
                    <Slider
                      value={magiSystem}
                      onValueChange={setMagiSystem}
                      min={0}
                      max={100}
                      step={1}
                      className="w-full"
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label className="flex items-center gap-2">
                        <Zap className="h-4 w-4 text-purple-500" />
                        Eva Unit 01
                      </Label>
                      <Badge variant={evaUnit01[0] > 70 ? "default" : "secondary"}>
                        {evaUnit01[0]}%
                      </Badge>
                    </div>
                    <Slider
                      value={evaUnit01}
                      onValueChange={setEvaUnit01}
                      min={0}
                      max={100}
                      step={0.1}
                      className="w-full"
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label className="flex items-center gap-2">
                        <Zap className="h-4 w-4 text-blue-500" />
                        Eva Unit 00
                      </Label>
                      <Badge variant={evaUnit00[0] > 70 ? "default" : "secondary"}>
                        {evaUnit00[0]}%
                      </Badge>
                    </div>
                    <Slider
                      value={evaUnit00}
                      onValueChange={setEvaUnit00}
                      min={0}
                      max={100}
                      step={0.1}
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label className="flex items-center gap-2">
                        <Zap className="h-4 w-4 text-red-500" />
                        Eva Unit 02
                      </Label>
                      <Badge variant={evaUnit02[0] > 70 ? "default" : "secondary"}>
                        {evaUnit02[0]}%
                      </Badge>
                    </div>
                    <Slider
                      value={evaUnit02}
                      onValueChange={setEvaUnit02}
                      min={0}
                      max={100}
                      step={0.1}
                      className="w-full"
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label className="flex items-center gap-2">
                        <Activity className="h-4 w-4 text-orange-500" />
                        LCL Pressure
                      </Label>
                      <Badge variant={lcl[0] === 100 ? "default" : "destructive"}>
                        {lcl[0]}%
                      </Badge>
                    </div>
                    <Slider
                      value={lcl}
                      onValueChange={setLcl}
                      min={0}
                      max={100}
                      step={1}
                      className="w-full"
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label className="flex items-center gap-2">
                        <Thermometer className="h-4 w-4 text-cyan-500" />
                        Cooling System
                      </Label>
                      <Badge variant={cooling[0] > 50 ? "default" : "secondary"}>
                        {cooling[0]}%
                      </Badge>
                    </div>
                    <Slider
                      value={cooling}
                      onValueChange={setCooling}
                      min={0}
                      max={100}
                      step={5}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Range Sliders */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Range Sliders</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Gauge className="h-5 w-5" />
                Power Range
              </CardTitle>
              <CardDescription>Set minimum and maximum power levels</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Slider
                value={rangeValues}
                onValueChange={setRangeValues}
                min={0}
                max={100}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between">
                <Badge variant="outline">Min: {rangeValues[0]}%</Badge>
                <Badge variant="outline">Max: {rangeValues[1]}%</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                AT Field Strength
              </CardTitle>
              <CardDescription>Configure field strength parameters</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Slider
                value={atFieldStrength}
                onValueChange={setAtFieldStrength}
                min={0}
                max={100}
                step={1}
                className="w-full"
              />
              <div className="text-center">
                <Badge 
                  variant={atFieldStrength[0] > 60 ? "default" : atFieldStrength[0] > 30 ? "secondary" : "destructive"}
                >
                  {atFieldStrength[0]}% Field Strength
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Multiple Value Slider */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Multiple Value Slider</h2>
        <div className="border rounded-lg p-6 bg-card">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                System Thresholds
              </CardTitle>
              <CardDescription>
                Configure low, medium, and high alert thresholds
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Slider
                value={multipleValues}
                onValueChange={setMultipleValues}
                min={0}
                max={100}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between">
                <Badge variant="destructive">Low: {multipleValues[0]}%</Badge>
                <Badge variant="secondary">Med: {multipleValues[1]}%</Badge>
                <Badge variant="default">High: {multipleValues[2]}%</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Different Sizes */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Different Sizes</h2>
        <div className="border rounded-lg p-6 bg-card space-y-6">
          <div className="space-y-2">
            <Label>Small Slider</Label>
            <Slider
              defaultValue={[33]}
              max={100}
              step={1}
              className="w-[200px] h-1"
            />
          </div>
          <div className="space-y-2">
            <Label>Medium Slider (Default)</Label>
            <Slider
              defaultValue={[50]}
              max={100}
              step={1}
              className="w-[300px]"
            />
          </div>
          <div className="space-y-2">
            <Label>Large Slider</Label>
            <Slider
              defaultValue={[75]}
              max={100}
              step={1}
              className="w-[400px] h-3"
            />
          </div>
        </div>
      </div>

      {/* Step Variations */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Step Variations</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Fine Control</CardTitle>
              <CardDescription>Step: 0.1</CardDescription>
            </CardHeader>
            <CardContent>
              <Slider
                defaultValue={[5.5]}
                min={0}
                max={10}
                step={0.1}
                className="w-full"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Standard Control</CardTitle>
              <CardDescription>Step: 1</CardDescription>
            </CardHeader>
            <CardContent>
              <Slider
                defaultValue={[50]}
                min={0}
                max={100}
                step={1}
                className="w-full"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Coarse Control</CardTitle>
              <CardDescription>Step: 10</CardDescription>
            </CardHeader>
            <CardContent>
              <Slider
                defaultValue={[50]}
                min={0}
                max={100}
                step={10}
                className="w-full"
              />
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Media Controls */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Media Controls</h2>
        <div className="border rounded-lg p-6 bg-card">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Play className="h-5 w-5" />
                Audio/Video Controls
              </CardTitle>
              <CardDescription>
                Comprehensive media control interface
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label className="flex items-center gap-2">
                      <Speaker className="h-4 w-4" />
                      Master Volume
                    </Label>
                    <Slider
                      defaultValue={[80]}
                      max={100}
                      step={1}
                      className="w-full"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="flex items-center gap-2">
                      <Mic className="h-4 w-4" />
                      Microphone Level
                    </Label>
                    <Slider
                      defaultValue={[60]}
                      max={100}
                      step={1}
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label className="flex items-center gap-2">
                      <Monitor className="h-4 w-4" />
                      Display Brightness
                    </Label>
                    <Slider
                      defaultValue={[70]}
                      max={100}
                      step={5}
                      className="w-full"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="flex items-center gap-2">
                      <Camera className="h-4 w-4" />
                      Camera Exposure
                    </Label>
                    <Slider
                      defaultValue={[0]}
                      min={-100}
                      max={100}
                      step={1}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* System Status */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">System Status Indicators</h2>
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm flex items-center gap-2">
                <Battery className="h-4 w-4" />
                Battery
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Slider
                defaultValue={[85]}
                max={100}
                step={1}
                disabled
                className="w-full"
              />
              <div className="text-center mt-2">
                <Badge variant="outline">85%</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm flex items-center gap-2">
                <Wifi className="h-4 w-4" />
                Signal
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Slider
                defaultValue={[92]}
                max={100}
                step={1}
                disabled
                className="w-full"
              />
              <div className="text-center mt-2">
                <Badge variant="outline">92%</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm flex items-center gap-2">
                <Thermometer className="h-4 w-4" />
                CPU Temp
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Slider
                defaultValue={[65]}
                max={100}
                step={1}
                disabled
                className="w-full"
              />
              <div className="text-center mt-2">
                <Badge variant="outline">65°C</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm flex items-center gap-2">
                <Activity className="h-4 w-4" />
                CPU Usage
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Slider
                defaultValue={[42]}
                max={100}
                step={1}
                disabled
                className="w-full"
              />
              <div className="text-center mt-2">
                <Badge variant="outline">42%</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Reset Controls */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Reset Controls</h2>
        <div className="border rounded-lg p-6 bg-card">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Reset All Values</h3>
              <p className="text-sm text-muted-foreground">
                Reset all sliders to their default values
              </p>
            </div>
            <Button onClick={resetAllValues} variant="outline" className="flex items-center gap-2">
              <RotateCcw className="h-4 w-4" />
              Reset All
            </Button>
          </div>
        </div>
      </div>


    </div>
  )
}