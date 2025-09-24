import * as React from "react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

interface ComponentDocsLayoutProps {
  children: React.ReactNode
  title: string
  description?: string
  category?: string
  version?: string
  className?: string
}

function ComponentDocsLayout({
  children,
  title,
  description,
  category = "Component",
  version = "1.0.0",
  className
}: ComponentDocsLayoutProps) {
  return (
    <div className={cn("max-w-6xl mx-auto p-6 space-y-8", className)}>
      {/* Header Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Badge variant="secondary" className="text-xs font-medium">
            {category}
          </Badge>
          <Badge variant="outline" className="text-xs">
            v{version}
          </Badge>
        </div>
        
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">{title}</h1>
          {description && (
            <p className="text-lg text-muted-foreground max-w-3xl">
              {description}
            </p>
          )}
        </div>
        
        <Separator className="my-6" />
      </div>

      {/* Content Section */}
      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <div className="space-y-8">
          {children}
        </div>
      </div>

      {/* Footer */}
      <div className="pt-8 border-t border-border">
        <p className="text-sm text-muted-foreground">
          Documentation generated with MDX • MAGI-UI Component Library
        </p>
      </div>
    </div>
  )
}

export { ComponentDocsLayout }