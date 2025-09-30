import * as React from "react"
import { ComponentDocsLayout } from "@/components/documentation/component-docs-layout"
import { ComponentPreview } from "@/components/documentation/component-preview"
import { CodeBlock } from "@/components/documentation/code-block"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { cn } from "@/lib/utils"

// Custom MDX components for better styling
const MDXComponents = {
  // Layout components
  ComponentDocsLayout,
  ComponentPreview,
  CodeBlock,
  
  // UI components
  Button,
  Badge,
  Alert,
  AlertDescription,
  AlertTitle,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
  Label,
  Checkbox,
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  
  // HTML elements with custom styling
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className={cn("text-3xl font-bold tracking-tight", className)} {...props} />
  ),
  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className={cn("text-2xl font-semibold tracking-tight mt-8 mb-4", className)} {...props} />
  ),
  h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className={cn("text-xl font-semibold tracking-tight mt-6 mb-3", className)} {...props} />
  ),
  h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4 className={cn("text-lg font-semibold tracking-tight mt-4 mb-2", className)} {...props} />
  ),
  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className={cn("leading-7", className)} {...props} />
  ),
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className={cn("my-6 ml-6 list-disc", className)} {...props} />
  ),
  ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className={cn("my-6 ml-6 list-decimal", className)} {...props} />
  ),
  li: ({ className, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
    <li className={cn("mt-2", className)} {...props} />
  ),
  blockquote: ({ className, ...props }: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote className={cn("mt-6 border-l-2 pl-6 italic", className)} {...props} />
  ),
  code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <code className={cn("relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold", className)} {...props} />
  ),
  pre: ({ className, ...props }: React.HTMLAttributes<HTMLPreElement>) => (
    <pre className={cn("mb-4 mt-6 overflow-x-auto rounded-lg border bg-zinc-950 py-4", className)} {...props} />
  ),
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className={cn("w-full", className)} {...props} />
    </div>
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr className={cn("m-0 border-t p-0 even:bg-muted", className)} {...props} />
  ),
  th: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th className={cn("border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right", className)} {...props} />
  ),
  td: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td className={cn("border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right", className)} {...props} />
  ),
}

export { MDXComponents }