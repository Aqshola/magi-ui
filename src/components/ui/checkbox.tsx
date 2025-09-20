import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { CheckIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "custom-polygon-shape peer bg-gradient-to-br from-background to-primary/10 border-primary/30 font-mono tracking-wide",
        "data-[state=checked]:bg-gradient-to-br data-[state=checked]:from-primary data-[state=checked]:to-primary/80 data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary",
        "focus-visible:border-primary focus-visible:ring-primary/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 aria-invalid:border-destructive",
        "size-4 shrink-0 border shadow-lg transition-all duration-200 outline-none",
        "disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-muted",
        "hover:border-primary/50 hover:shadow-primary/20",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="flex items-center justify-center text-current transition-none"
      >
        <CheckIcon className="size-3.5 text-primary-foreground" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }
