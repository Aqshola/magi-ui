import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { useState } from "react"

export function SwitchShowcase() {
  const [switches, setSwitches] = useState({
    magi1: false,
    magi2: true,
    magi3: false,
    eva01: true,
    eva02: false,
    eva00: true,
    emergency: false,
    maintenance: false
  })

  const handleSwitchChange = (key: string, value: boolean) => {
    setSwitches(prev => ({ ...prev, [key]: value }))
  }

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-primary uppercase tracking-wide font-mono">
          MAGI Switch Component
        </h2>
        <p className="text-muted-foreground font-mono tracking-wide">
          Evangelion MAGI-themed switches with polygon shapes and gradient effects.
        </p>
      </div>

      <div className="grid gap-8">
        {/* Basic Switches */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-primary uppercase tracking-wide font-mono">
            Basic Switches
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-2">
              <Switch 
                id="basic-off" 
                checked={false}
                onCheckedChange={() => {}}
              />
              <Label htmlFor="basic-off">Offline</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch 
                id="basic-on" 
                checked={true}
                onCheckedChange={() => {}}
              />
              <Label htmlFor="basic-on">Online</Label>
            </div>
          </div>
        </div>

        {/* MAGI System Controls */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-primary uppercase tracking-wide font-mono">
            MAGI System Controls
          </h3>
          <div className="grid gap-3">
            <div className="flex items-center justify-between p-4 border border-primary/20 custom-polygon-shape bg-gradient-to-r from-background/50 to-transparent">
              <div className="space-y-1">
                <Label htmlFor="magi-1">MAGI System 01</Label>
                <p className="text-xs text-muted-foreground font-mono">Melchior - Logic Core</p>
              </div>
              <Switch 
                id="magi-1" 
                checked={switches.magi1}
                onCheckedChange={(checked) => handleSwitchChange('magi1', checked)}
              />
            </div>
            <div className="flex items-center justify-between p-4 border border-primary/20 custom-polygon-shape bg-gradient-to-r from-background/50 to-transparent">
              <div className="space-y-1">
                <Label htmlFor="magi-2">MAGI System 02</Label>
                <p className="text-xs text-muted-foreground font-mono">Balthasar - Emotion Core</p>
              </div>
              <Switch 
                id="magi-2" 
                checked={switches.magi2}
                onCheckedChange={(checked) => handleSwitchChange('magi2', checked)}
              />
            </div>
            <div className="flex items-center justify-between p-4 border border-primary/20 custom-polygon-shape bg-gradient-to-r from-background/50 to-transparent">
              <div className="space-y-1">
                <Label htmlFor="magi-3">MAGI System 03</Label>
                <p className="text-xs text-muted-foreground font-mono">Casper - Intuition Core</p>
              </div>
              <Switch 
                id="magi-3" 
                checked={switches.magi3}
                onCheckedChange={(checked) => handleSwitchChange('magi3', checked)}
              />
            </div>
          </div>
        </div>

        {/* EVA Unit Controls */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-primary uppercase tracking-wide font-mono">
            EVA Unit Controls
          </h3>
          <div className="grid gap-3">
            <div className="flex items-center justify-between p-4 border border-primary/20 custom-polygon-shape bg-gradient-to-r from-background/50 to-transparent">
              <div className="space-y-1">
                <Label htmlFor="eva-01">EVA Unit 01</Label>
                <p className="text-xs text-muted-foreground font-mono">Pilot: Shinji Ikari</p>
              </div>
              <Switch 
                id="eva-01" 
                checked={switches.eva01}
                onCheckedChange={(checked) => handleSwitchChange('eva01', checked)}
              />
            </div>
            <div className="flex items-center justify-between p-4 border border-primary/20 custom-polygon-shape bg-gradient-to-r from-background/50 to-transparent">
              <div className="space-y-1">
                <Label htmlFor="eva-02">EVA Unit 02</Label>
                <p className="text-xs text-muted-foreground font-mono">Pilot: Asuka Langley</p>
              </div>
              <Switch 
                id="eva-02" 
                checked={switches.eva02}
                onCheckedChange={(checked) => handleSwitchChange('eva02', checked)}
              />
            </div>
            <div className="flex items-center justify-between p-4 border border-primary/20 custom-polygon-shape bg-gradient-to-r from-background/50 to-transparent">
              <div className="space-y-1">
                <Label htmlFor="eva-00">EVA Unit 00</Label>
                <p className="text-xs text-muted-foreground font-mono">Pilot: Rei Ayanami</p>
              </div>
              <Switch 
                id="eva-00" 
                checked={switches.eva00}
                onCheckedChange={(checked) => handleSwitchChange('eva00', checked)}
              />
            </div>
          </div>
        </div>

        {/* System Status */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-primary uppercase tracking-wide font-mono">
            System Status
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-2">
              <Switch 
                id="emergency" 
                checked={switches.emergency}
                onCheckedChange={(checked) => handleSwitchChange('emergency', checked)}
              />
              <Label htmlFor="emergency">Emergency Mode</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch 
                id="maintenance" 
                checked={switches.maintenance}
                onCheckedChange={(checked) => handleSwitchChange('maintenance', checked)}
              />
              <Label htmlFor="maintenance">Maintenance</Label>
            </div>
          </div>
        </div>

        {/* Disabled State */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-primary uppercase tracking-wide font-mono">
            Disabled State
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-2">
              <Switch id="disabled-off" disabled checked={false} />
              <Label htmlFor="disabled-off">Offline System</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="disabled-on" disabled checked={true} />
              <Label htmlFor="disabled-on">Locked System</Label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}