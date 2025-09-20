import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Switch } from "@/components/ui/switch"

export function LabelShowcase() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-primary uppercase tracking-wide font-mono">
          MAGI Label Component
        </h2>
        <p className="text-muted-foreground font-mono tracking-wide">
          Evangelion MAGI-themed labels with uppercase styling and monospace font.
        </p>
      </div>

      <div className="grid gap-8">
        {/* Basic Label */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-primary uppercase tracking-wide font-mono">
            Basic Label
          </h3>
          <div className="space-y-2">
            <Label>System Status</Label>
            <Label>Neural Network</Label>
            <Label>Synchronization Rate</Label>
          </div>
        </div>

        {/* Label with Checkbox */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-primary uppercase tracking-wide font-mono">
            Label with Checkbox
          </h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Checkbox id="magi-1" />
              <Label htmlFor="magi-1">MAGI System 01</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="magi-2" />
              <Label htmlFor="magi-2">MAGI System 02</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="magi-3" />
              <Label htmlFor="magi-3">MAGI System 03</Label>
            </div>
          </div>
        </div>

        {/* Label with Switch */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-primary uppercase tracking-wide font-mono">
            Label with Switch
          </h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Switch id="eva-01" />
              <Label htmlFor="eva-01">EVA Unit 01</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="eva-02" />
              <Label htmlFor="eva-02">EVA Unit 02</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="eva-00" />
              <Label htmlFor="eva-00">EVA Unit 00</Label>
            </div>
          </div>
        </div>

        {/* Different Label Sizes */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-primary uppercase tracking-wide font-mono">
            Label Variants
          </h3>
          <div className="space-y-2">
            <Label className="text-xs">Terminal Interface</Label>
            <Label className="text-sm">Command Protocol</Label>
            <Label className="text-base">System Override</Label>
            <Label className="text-lg">Emergency Mode</Label>
          </div>
        </div>

        {/* Disabled State */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-primary uppercase tracking-wide font-mono">
            Disabled State
          </h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-2 group" data-disabled="true">
              <Checkbox id="disabled-check" disabled />
              <Label htmlFor="disabled-check">Offline System</Label>
            </div>
            <div className="flex items-center space-x-2 group" data-disabled="true">
              <Switch id="disabled-switch" disabled />
              <Label htmlFor="disabled-switch">Maintenance Mode</Label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}