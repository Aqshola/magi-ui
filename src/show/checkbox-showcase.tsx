import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export function CheckboxShowcase() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4 text-primary uppercase tracking-wide">CHECKBOX COMPONENT</h2>
        <p className="text-muted-foreground mb-6">MAGI-themed checkbox component with polygon shapes and gradient effects.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Basic Checkboxes */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-primary uppercase tracking-wide">BASIC STATES</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Checkbox id="unchecked" />
              <Label htmlFor="unchecked">UNCHECKED STATE</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="checked" defaultChecked />
              <Label htmlFor="checked">CHECKED STATE</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="disabled" disabled />
              <Label htmlFor="disabled">DISABLED STATE</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="disabled-checked" disabled defaultChecked />
              <Label htmlFor="disabled-checked">DISABLED CHECKED</Label>
            </div>
          </div>
        </div>

        {/* System Options */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-primary uppercase tracking-wide">SYSTEM OPTIONS</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Checkbox id="magi-1" defaultChecked />
              <Label htmlFor="magi-1">MAGI-1 CASPER</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="magi-2" defaultChecked />
              <Label htmlFor="magi-2">MAGI-2 BALTHASAR</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="magi-3" defaultChecked />
              <Label htmlFor="magi-3">MAGI-3 MELCHIOR</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="at-field" />
              <Label htmlFor="at-field">AT FIELD ACTIVE</Label>
            </div>
          </div>
        </div>

        {/* Security Settings */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-primary uppercase tracking-wide">SECURITY PROTOCOLS</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Checkbox id="auto-destruct" />
              <Label htmlFor="auto-destruct">AUTO-DESTRUCT ENABLED</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="emergency" defaultChecked />
              <Label htmlFor="emergency">EMERGENCY PROTOCOLS</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="backup" defaultChecked />
              <Label htmlFor="backup">BACKUP SYSTEMS</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="quarantine" />
              <Label htmlFor="quarantine">QUARANTINE MODE</Label>
            </div>
          </div>
        </div>

        {/* EVA Unit Status */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-primary uppercase tracking-wide">EVA UNIT STATUS</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Checkbox id="eva-01" defaultChecked />
              <Label htmlFor="eva-01">EVA UNIT-01 READY</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="eva-02" />
              <Label htmlFor="eva-02">EVA UNIT-02 STANDBY</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="eva-00" disabled />
              <Label htmlFor="eva-00">EVA UNIT-00 OFFLINE</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="sync-test" />
              <Label htmlFor="sync-test">SYNC TEST ACTIVE</Label>
            </div>
          </div>
        </div>

        {/* Monitoring Systems */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-primary uppercase tracking-wide">MONITORING</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Checkbox id="pattern-blue" />
              <Label htmlFor="pattern-blue">PATTERN BLUE DETECTED</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="pattern-orange" />
              <Label htmlFor="pattern-orange">PATTERN ORANGE ALERT</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="neural-link" defaultChecked />
              <Label htmlFor="neural-link">NEURAL LINK STABLE</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="life-signs" defaultChecked />
              <Label htmlFor="life-signs">PILOT LIFE SIGNS OK</Label>
            </div>
          </div>
        </div>

        {/* Interactive Example */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-primary uppercase tracking-wide">INTERACTIVE TEST</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Checkbox id="interactive-1" />
              <Label htmlFor="interactive-1">CLICK TO TOGGLE</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="interactive-2" />
              <Label htmlFor="interactive-2">ANOTHER OPTION</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="interactive-3" />
              <Label htmlFor="interactive-3">THIRD CHOICE</Label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}