import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const avatarVariants = cva(
  "relative flex shrink-0 overflow-hidden rounded-full border-2 border-border/20 transition-all duration-200",
  {
    variants: {
      size: {
        xs: "size-6",
        sm: "size-8",
        md: "size-10",
        lg: "size-12",
        xl: "size-16",
        "2xl": "size-20",
      },
      variant: {
        default: "bg-background",
        magi: "bg-gradient-to-br from-primary/20 to-secondary/20 border-primary/30",
        system: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border-blue-500/30",
        warning: "bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border-yellow-500/30",
        danger: "bg-gradient-to-br from-red-500/20 to-pink-500/20 border-red-500/30",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "default",
    },
  }
)

interface AvatarProps
  extends React.ComponentProps<typeof AvatarPrimitive.Root>,
    VariantProps<typeof avatarVariants> {}

function Avatar({
  className,
  size,
  variant,
  ...props
}: AvatarProps) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn(avatarVariants({ size, variant }), className)}
      {...props}
    />
  )
}

function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("aspect-square size-full", className)}
      {...props}
    />
  )
}

const avatarFallbackVariants = cva(
  "flex size-full items-center justify-center rounded-full font-medium text-foreground/80 transition-colors",
  {
    variants: {
      size: {
        xs: "text-xs",
        sm: "text-xs",
        md: "text-sm",
        lg: "text-base",
        xl: "text-lg",
        "2xl": "text-xl",
      },
      variant: {
        default: "bg-muted",
        magi: "bg-gradient-to-br from-primary/30 to-secondary/30 text-primary-foreground",
        system: "bg-gradient-to-br from-blue-500/30 to-cyan-500/30 text-blue-50",
        warning: "bg-gradient-to-br from-yellow-500/30 to-orange-500/30 text-yellow-50",
        danger: "bg-gradient-to-br from-red-500/30 to-pink-500/30 text-red-50",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "default",
    },
  }
)

interface AvatarFallbackProps
  extends React.ComponentProps<typeof AvatarPrimitive.Fallback>,
    VariantProps<typeof avatarFallbackVariants> {}

function AvatarFallback({
  className,
  size,
  variant,
  ...props
}: AvatarFallbackProps) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(avatarFallbackVariants({ size, variant }), className)}
      {...props}
    />
  )
}

export { Avatar, AvatarImage, AvatarFallback }
