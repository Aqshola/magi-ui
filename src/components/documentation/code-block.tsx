import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface CodeBlockProps {
  children: string
  language?: string
  title?: string
  className?: string
}

function CodeBlock({ 
  children, 
  language = "tsx", 
  title,
  className 
}: CodeBlockProps) {
  const [copied, setCopied] = React.useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(children)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  return (
    <div className={cn("relative group", className)}>
      {title && (
        <div className="flex items-center justify-between px-4 py-2 bg-muted border border-border rounded-t-lg">
          <span className="text-sm font-medium text-muted-foreground">
            {title}
          </span>
          <span className="text-xs text-muted-foreground uppercase">
            {language}
          </span>
        </div>
      )}
      
      <div className="relative">
        <pre className={cn(
          "overflow-x-auto p-4 bg-muted/50 border border-border text-sm",
          title ? "rounded-b-lg border-t-0" : "rounded-lg"
        )}>
          <code className="text-foreground font-mono">
            {children}
          </code>
        </pre>
        
        <Button
          variant="ghost"
          size="sm"
          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={copyToClipboard}
        >
          {copied ? "Copied!" : "Copy"}
        </Button>
      </div>
    </div>
  )
}

export { CodeBlock }