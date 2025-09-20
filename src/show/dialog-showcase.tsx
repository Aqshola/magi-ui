import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function DialogShowcase() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4 text-primary uppercase tracking-wide">DIALOG COMPONENT</h2>
        <p className="text-muted-foreground mb-6">MAGI-themed dialog component with polygon shapes and gradient effects.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Basic Dialog */}
        <Dialog>
          <DialogTrigger asChild>
            <Button>SYSTEM STATUS</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>MAGI SYSTEM STATUS</DialogTitle>
              <DialogDescription>
                Current operational parameters and system diagnostics.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm font-mono">
                <div>CPU USAGE:</div>
                <div className="text-primary">73.2%</div>
                <div>MEMORY:</div>
                <div className="text-primary">8.4/16 GB</div>
                <div>TEMPERATURE:</div>
                <div className="text-primary">42°C</div>
                <div>STATUS:</div>
                <div className="text-green-500">OPERATIONAL</div>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline">REFRESH</Button>
              <Button>CLOSE</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Form Dialog */}
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">PILOT REGISTRATION</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>EVA PILOT REGISTRATION</DialogTitle>
              <DialogDescription>
                Enter pilot information for EVA unit synchronization.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="pilot-name">PILOT NAME</Label>
                <Input id="pilot-name" placeholder="Enter pilot designation" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="eva-unit">EVA UNIT</Label>
                <Input id="eva-unit" placeholder="Unit number" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="sync-rate">SYNC RATE</Label>
                <Input id="sync-rate" placeholder="Initial synchronization rate" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="notes">NOTES</Label>
                <Textarea id="notes" placeholder="Additional pilot information" />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline">CANCEL</Button>
              <Button>REGISTER PILOT</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Alert Dialog */}
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="destructive">EMERGENCY ALERT</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="text-destructive">CRITICAL SYSTEM ALERT</DialogTitle>
              <DialogDescription>
                Angel detected approaching Tokyo-3. Immediate action required.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="bg-destructive/10 border border-destructive/20 rounded p-4">
                <div className="font-mono text-sm space-y-1">
                  <div className="text-destructive font-bold">PATTERN: BLUE</div>
                  <div>DISTANCE: 15.7 KM</div>
                  <div>APPROACH SPEED: 340 KM/H</div>
                  <div>THREAT LEVEL: MAXIMUM</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                All EVA units must be deployed immediately. Activate emergency protocols.
              </p>
            </div>
            <DialogFooter>
              <Button variant="outline">EVACUATE CIVILIANS</Button>
              <Button variant="destructive">DEPLOY EVA UNITS</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Confirmation Dialog */}
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">SELF-DESTRUCT</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>CONFIRM SELF-DESTRUCT SEQUENCE</DialogTitle>
              <DialogDescription>
                This action cannot be undone. All NERV facilities will be destroyed.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="bg-destructive/10 border border-destructive/20 rounded p-4">
                <p className="text-destructive font-bold text-center">
                  WARNING: IRREVERSIBLE ACTION
                </p>
                <p className="text-sm text-center mt-2">
                  Countdown will begin immediately upon confirmation.
                </p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmation">TYPE "DESTROY" TO CONFIRM</Label>
                <Input id="confirmation" placeholder="Confirmation code" />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline">ABORT</Button>
              <Button variant="destructive">INITIATE SEQUENCE</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Data Dialog */}
        <Dialog>
          <DialogTrigger asChild>
            <Button>SYNC TEST RESULTS</Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>SYNCHRONIZATION TEST RESULTS</DialogTitle>
              <DialogDescription>
                Detailed analysis of pilot-EVA synchronization rates.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center space-y-2">
                  <div className="text-2xl font-bold text-primary font-mono">98.7%</div>
                  <div className="text-sm text-muted-foreground">SHINJI IKARI</div>
                  <div className="text-xs">EVA-01</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-2xl font-bold text-primary font-mono">94.3%</div>
                  <div className="text-sm text-muted-foreground">ASUKA LANGLEY</div>
                  <div className="text-xs">EVA-02</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-2xl font-bold text-primary font-mono">89.1%</div>
                  <div className="text-sm text-muted-foreground">REI AYANAMI</div>
                  <div className="text-xs">EVA-00</div>
                </div>
              </div>
              <div className="border-t pt-4">
                <h4 className="font-semibold mb-2">ANALYSIS NOTES:</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• All pilots show acceptable synchronization rates</li>
                  <li>• EVA-01 demonstrates exceptional neural compatibility</li>
                  <li>• Recommend continued training for optimal performance</li>
                </ul>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline">EXPORT DATA</Button>
              <Button>CLOSE REPORT</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Settings Dialog */}
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">SYSTEM SETTINGS</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>MAGI SYSTEM CONFIGURATION</DialogTitle>
              <DialogDescription>
                Adjust system parameters and operational settings.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="refresh-rate">REFRESH RATE (Hz)</Label>
                <Input id="refresh-rate" defaultValue="60" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="alert-threshold">ALERT THRESHOLD (%)</Label>
                <Input id="alert-threshold" defaultValue="85" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="backup-interval">BACKUP INTERVAL (min)</Label>
                <Input id="backup-interval" defaultValue="15" />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline">RESET DEFAULTS</Button>
              <Button>SAVE SETTINGS</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}