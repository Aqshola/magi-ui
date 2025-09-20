import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function TextareaShowcase() {
  const [logData, setLogData] = useState(
    "[2024-01-15 14:32:01] MAGI SYSTEM INITIALIZATION\n" +
    "[2024-01-15 14:32:02] Loading neural network patterns...\n" +
    "[2024-01-15 14:32:03] Melchior core: ONLINE\n" +
    "[2024-01-15 14:32:04] Balthasar core: ONLINE\n" +
    "[2024-01-15 14:32:05] Casper core: ONLINE\n" +
    "[2024-01-15 14:32:06] All systems operational\n"
  )

  const [commandInput, setCommandInput] = useState("")
  const [reportText, setReportText] = useState("")

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-primary uppercase tracking-wide font-mono">
          MAGI Textarea Component
        </h2>
        <p className="text-muted-foreground font-mono tracking-wide">
          Evangelion MAGI-themed textarea with polygon shapes and gradient effects.
        </p>
      </div>

      <div className="grid gap-8">
        {/* Basic Textarea */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-primary uppercase tracking-wide font-mono">
            Basic Textarea
          </h3>
          <div className="space-y-2">
            <Label htmlFor="basic-textarea">System Notes</Label>
            <Textarea 
              id="basic-textarea"
              placeholder="Enter system notes..."
              className="min-h-[100px]"
            />
          </div>
        </div>

        {/* System Log */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-primary uppercase tracking-wide font-mono">
            System Log Viewer
          </h3>
          <div className="space-y-2">
            <Label htmlFor="log-viewer">MAGI System Log</Label>
            <Textarea 
              id="log-viewer"
              value={logData}
              onChange={(e) => setLogData(e.target.value)}
              className="min-h-[200px] font-mono text-sm"
              readOnly
            />
          </div>
        </div>

        {/* Command Interface */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-primary uppercase tracking-wide font-mono">
            Command Interface
          </h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="command-input">Terminal Commands</Label>
              <Textarea 
                id="command-input"
                value={commandInput}
                onChange={(e) => setCommandInput(e.target.value)}
                placeholder="> magi.system.status()\n> eva.unit.sync_check(01)\n> nerv.security.scan()"
                className="min-h-[120px] font-mono text-sm bg-black/20"
              />
            </div>
            <div className="flex gap-2">
              <Button 
                onClick={() => setCommandInput("")}
                variant="outline"
                size="sm"
              >
                Clear
              </Button>
              <Button 
                onClick={() => {
                  const timestamp = new Date().toISOString().slice(0, 19).replace('T', ' ')
                  setLogData(prev => prev + `[${timestamp}] Executed: ${commandInput.split('\n')[0]}\n`)
                  setCommandInput("")
                }}
                size="sm"
              >
                Execute
              </Button>
            </div>
          </div>
        </div>

        {/* Incident Report */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-primary uppercase tracking-wide font-mono">
            Incident Report
          </h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="incident-report">Angel Attack Report</Label>
              <Textarea 
                id="incident-report"
                value={reportText}
                onChange={(e) => setReportText(e.target.value)}
                placeholder="CLASSIFICATION: TOP SECRET\n\nINCIDENT REPORT - ANGEL ATTACK\n\nDate: [DATE]\nTime: [TIME]\nLocation: Tokyo-3\n\nAngel Designation: [DESIGNATION]\nEVA Units Deployed: [UNITS]\n\nSummary:\n[Detailed incident report...]\n\nCasualties:\n[Casualty report...]\n\nRecommendations:\n[Strategic recommendations...]"
                className="min-h-[300px]"
              />
            </div>
            <div className="flex gap-2">
              <Button 
                onClick={() => setReportText("")}
                variant="outline"
                size="sm"
              >
                Clear Report
              </Button>
              <Button 
                size="sm"
              >
                Submit to NERV HQ
              </Button>
            </div>
          </div>
        </div>

        {/* Different Sizes */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-primary uppercase tracking-wide font-mono">
            Size Variants
          </h3>
          <div className="grid gap-4">
            <div className="space-y-2">
              <Label htmlFor="small-textarea">Small (min-h-16)</Label>
              <Textarea 
                id="small-textarea"
                placeholder="Quick note..."
                className="min-h-16"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="medium-textarea">Medium (min-h-32)</Label>
              <Textarea 
                id="medium-textarea"
                placeholder="Medium length content..."
                className="min-h-32"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="large-textarea">Large (min-h-48)</Label>
              <Textarea 
                id="large-textarea"
                placeholder="Extended content area..."
                className="min-h-48"
              />
            </div>
          </div>
        </div>

        {/* States */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-primary uppercase tracking-wide font-mono">
            Component States
          </h3>
          <div className="grid gap-4">
            <div className="space-y-2">
              <Label htmlFor="normal-textarea">Normal State</Label>
              <Textarea 
                id="normal-textarea"
                placeholder="Normal textarea..."
                className="min-h-24"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="disabled-textarea">Disabled State</Label>
              <Textarea 
                id="disabled-textarea"
                placeholder="Disabled textarea..."
                disabled
                className="min-h-24"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="readonly-textarea">Read-only State</Label>
              <Textarea 
                id="readonly-textarea"
                value="This textarea is read-only and cannot be edited."
                readOnly
                className="min-h-24"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="error-textarea">Error State</Label>
              <Textarea 
                id="error-textarea"
                placeholder="Textarea with error..."
                aria-invalid
                className="min-h-24"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}