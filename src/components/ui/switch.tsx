"use client"

import * as React from "react"
import * as SwitchPrimitive from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "custom-polygon-shape peer data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-primary data-[state=checked]:to-primary/80 data-[state=unchecked]:bg-gradient-to-r data-[state=unchecked]:from-input data-[state=unchecked]:to-input/80 focus-visible:border-primary focus-visible:ring-primary/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center border-2 border-primary/30 shadow-lg shadow-primary/20 transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 relative before:absolute before:inset-0 before:bg-gradient-to-r before:from-primary/10 before:to-transparent before:pointer-events-none",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "custom-polygon-shape bg-gradient-to-br from-background to-background/90 dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0 border border-primary/20 shadow-sm"
        )}
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }
