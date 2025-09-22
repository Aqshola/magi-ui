import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import workletURL from '@/utils/paint-worklet.js?url'
import "@/button-polygon.css"

const buttonVariants = cva(
  "cursor-pointer uppercase inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semi-bold transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs",
        destructive:
          "bg-destructive text-white shadow-xs focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs dark:bg-input/30",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs",
        ghost:
          "text-primary dark:text-accent-foreground",
        link:
          "text-primary underline-offset-4",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  isCustomPolygon = true,
  style,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
    isCustomPolygon?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  if (isCustomPolygon) {
    initButtonPaint()
  }

  function initButtonPaint() {
    if ("paintWorklet" in CSS) {
      CSS.paintWorklet.addModule(workletURL)
    }
  }

  const borderColors: Record<string, string> = {
    default: "#EC6F1C", // orange
    destructive: "#F30505", // red
    outline: "white",
    secondary: "", // e.g. blue, change to your theme
    ghost: "", // gray
    link: "", // green
  }

  return (
    <Comp
      data-slot="button"
      className={cn(
        buttonVariants({ variant, size, className }),
        isCustomPolygon && variant!='outline'  && "custom-polygon-button",
        isCustomPolygon  && variant=='outline' && "custom-polygon-button-outline"
      )}
      style={{
        ["--polygon-border-color" as any]: borderColors[variant ?? "default"],
        ["--mode" as any]: variant != "outline" ? "filled" : "outlined",
        ...style,
      }}
      {...props}
    />
  )
}

export { Button, buttonVariants }
