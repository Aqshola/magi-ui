import * as React from "react"
import { cn } from "@/lib/utils"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CodeBlock } from "./code-block"

interface ComponentPreviewProps {
  children: React.ReactNode
  code: string
  title?: string
  description?: string
  className?: string
}

function ComponentPreview({
  children,
  code,
  title,
  description,
  className
}: ComponentPreviewProps) {
  return (
    <div className={cn("space-y-4", className)}>
      {(title || description) && (
        <div className="space-y-2">
          {title && (
            <h3 className="text-lg font-semibold">{title}</h3>
          )}
          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
        </div>
      )}
      
      <Tabs defaultValue="preview" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        
        <TabsContent value="preview" className="mt-4">
          <div className="relative rounded-lg border border-border bg-background p-8">
            <div className="flex items-center justify-center min-h-[200px]">
              {children}
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="code" className="mt-4">
          <CodeBlock language="tsx" title="Component Code">
            {code}
          </CodeBlock>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export { ComponentPreview }