import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { AlertTriangle, CheckCircle, Info, X, Zap } from "lucide-react"

export function SonnerShowcase() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-primary uppercase tracking-wide font-mono">
          MAGI Sonner Toast Component
        </h2>
        <p className="text-muted-foreground font-mono tracking-wide">
          Evangelion NERV MAGI System notification toasts using Sonner
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Basic Toast */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-primary uppercase tracking-wide font-mono">
            Basic Notifications
          </h3>
          <div className="space-y-2">
            <Button
              onClick={() => toast("MAGI System Alert", {
                description: "System notification received"
              })}
              className="w-full"
            >
              Basic Toast
            </Button>
            <Button
              onClick={() => toast("EVA-01 Status Update", {
                description: "Synchronization rate: 98.7%",
                action: {
                  label: "View Details",
                  onClick: () => console.log("View details clicked")
                }
              })}
              className="w-full"
            >
              With Action
            </Button>
          </div>
        </div>

        {/* Success Toast */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-primary uppercase tracking-wide font-mono">
            Success Notifications
          </h3>
          <div className="space-y-2">
            <Button
              onClick={() => toast.success("MAGI System Online", {
                description: "All systems operational",
                icon: <CheckCircle className="h-4 w-4" />
              })}
              className="w-full"
              variant="outline"
            >
              Success Toast
            </Button>
            <Button
              onClick={() => toast.success("EVA Unit Deployed", {
                description: "Unit-01 successfully launched",
                action: {
                  label: "Monitor",
                  onClick: () => console.log("Monitor clicked")
                }
              })}
              className="w-full"
              variant="outline"
            >
              Success with Action
            </Button>
          </div>
        </div>

        {/* Error Toast */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-primary uppercase tracking-wide font-mono">
            Error Notifications
          </h3>
          <div className="space-y-2">
            <Button
              onClick={() => toast.error("MAGI System Error", {
                description: "Critical system failure detected",
                icon: <X className="h-4 w-4" />
              })}
              className="w-full"
              variant="destructive"
            >
              Error Toast
            </Button>
            <Button
              onClick={() => toast.error("AT Field Breach", {
                description: "Angel detected in Tokyo-3",
                action: {
                  label: "Emergency Protocol",
                  onClick: () => console.log("Emergency protocol activated")
                }
              })}
              className="w-full"
              variant="destructive"
            >
              Critical Error
            </Button>
          </div>
        </div>

        {/* Warning Toast */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-primary uppercase tracking-wide font-mono">
            Warning Notifications
          </h3>
          <div className="space-y-2">
            <Button
              onClick={() => toast.warning("MAGI System Warning", {
                description: "Unusual pattern detected",
                icon: <AlertTriangle className="h-4 w-4" />
              })}
              className="w-full"
              variant="secondary"
            >
              Warning Toast
            </Button>
            <Button
              onClick={() => toast.warning("Sync Rate Declining", {
                description: "EVA-01 synchronization at 45%",
                action: {
                  label: "Adjust",
                  onClick: () => console.log("Sync adjustment initiated")
                }
              })}
              className="w-full"
              variant="secondary"
            >
              Sync Warning
            </Button>
          </div>
        </div>

        {/* Info Toast */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-primary uppercase tracking-wide font-mono">
            Info Notifications
          </h3>
          <div className="space-y-2">
            <Button
              onClick={() => toast.info("MAGI System Info", {
                description: "Routine maintenance scheduled",
                icon: <Info className="h-4 w-4" />
              })}
              className="w-full"
              variant="outline"
            >
              Info Toast
            </Button>
            <Button
              onClick={() => toast.info("Angel Analysis Complete", {
                description: "Pattern Blue confirmed",
                action: {
                  label: "Review",
                  onClick: () => console.log("Analysis review opened")
                }
              })}
              className="w-full"
              variant="outline"
            >
              Analysis Info
            </Button>
          </div>
        </div>

        {/* Custom Toast */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-primary uppercase tracking-wide font-mono">
            Custom Notifications
          </h3>
          <div className="space-y-2">
            <Button
              onClick={() => toast("NERV Command Center", {
                description: "Incoming transmission from Commander Ikari",
                icon: <Zap className="h-4 w-4" />,
                duration: 5000,
                action: {
                  label: "Accept",
                  onClick: () => console.log("Transmission accepted")
                },
                cancel: {
                  label: "Decline",
                  onClick: () => console.log("Transmission declined")
                }
              })}
              className="w-full"
            >
              Custom Toast
            </Button>
            <Button
              onClick={() => toast("Third Impact Warning", {
                description: "Instrumentality event probability: 23%",
                icon: <AlertTriangle className="h-4 w-4" />,
                duration: Infinity,
                action: {
                  label: "Prevent",
                  onClick: () => {
                    toast.success("Third Impact Prevented", {
                      description: "Crisis averted successfully"
                    })
                  }
                }
              })}
              className="w-full"
              variant="destructive"
            >
              Persistent Toast
            </Button>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-primary uppercase tracking-wide font-mono">
          Toast Controls
        </h3>
        <div className="flex gap-2">
          <Button
            onClick={() => toast.dismiss()}
            variant="outline"
            size="sm"
          >
            Dismiss All
          </Button>
          <Button
            onClick={() => {
              toast.promise(
                new Promise((resolve) => setTimeout(resolve, 2000)),
                {
                  loading: 'MAGI System Initializing...',
                  success: 'MAGI System Online',
                  error: 'MAGI System Failed to Initialize',
                }
              )
            }}
            variant="outline"
            size="sm"
          >
            Promise Toast
          </Button>
        </div>
      </div>
    </div>
  )
}