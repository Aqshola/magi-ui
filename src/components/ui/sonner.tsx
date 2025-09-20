import { Toaster as Sonner } from "sonner"
import type { ToasterProps } from "sonner"

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="dark"
      className="toaster group"
      toastOptions={{
        classNames: {
          toast: "custom-polygon-shape bg-gradient-to-br from-popover via-popover/95 to-popover/90 text-popover-foreground border-2 border-primary/30 shadow-2xl shadow-primary/20 font-mono tracking-wide relative before:absolute before:inset-0 before:bg-gradient-to-br before:from-primary/5 before:to-transparent before:pointer-events-none",
          title: "text-primary uppercase tracking-wide font-semibold",
          description: "text-muted-foreground font-mono tracking-wide",
          actionButton: "custom-polygon-shape bg-primary text-primary-foreground hover:bg-primary/90 border border-primary/50 uppercase tracking-wide text-xs font-mono",
          cancelButton: "custom-polygon-shape bg-muted text-muted-foreground hover:bg-muted/80 border border-muted-foreground/20 uppercase tracking-wide text-xs font-mono",
          closeButton: "bg-primary/10 text-primary hover:bg-primary/20 border border-primary/30",
          error: "border-destructive/50 bg-gradient-to-br from-destructive/10 to-destructive/5 text-destructive before:from-destructive/10",
          success: "border-green-500/50 bg-gradient-to-br from-green-500/10 to-green-500/5 text-green-400 before:from-green-500/10",
          warning: "border-yellow-500/50 bg-gradient-to-br from-yellow-500/10 to-yellow-500/5 text-yellow-400 before:from-yellow-500/10",
          info: "border-blue-500/50 bg-gradient-to-br from-blue-500/10 to-blue-500/5 text-blue-400 before:from-blue-500/10",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
