import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import { MDXProvider } from '@mdx-js/react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { MDXComponents } from '@/components/mdx-components'

// Showcase imports
import ButtonShowCase from './show/button-showcase'
import AlertShowCase from './show/alert-showcase'
import InputShowcase from './show/input-showcase'
import SelectShowCase from './show/select-showcase'
import ProgressShowcase from './show/progress-showcase'
import AlertDialogShowcase from './show/alert-dialog-showcase'
import BadgeShowcase from './show/badge-showcase'
import CalendarShowcase from './show/calendar-showcase'
import { CardShowcase } from './show/card-showcase'
import { CheckboxShowcase } from './show/checkbox-showcase'
import { DialogShowcase } from './show/dialog-showcase'
import { DropdownMenuShowcase } from './show/dropdown-menu-showcase'
import { LabelShowcase } from './show/label-showcase'
import { SwitchShowcase } from './show/switch-showcase'
import { TabsShowcase } from './show/tabs-showcase'
import { TextareaShowcase } from './show/textarea-showcase'
import { TooltipShowcase } from './show/tooltip-showcase'
import { SonnerShowcase } from './show/sonner-showcase'
import AvatarShowcase from './show/avatar-showcase'
import CarouselShowcase from './show/carousel-showcase'
import SeparatorShowcase from './show/separator-showcase'
import SheetShowcase from './show/sheet-showcase'
import { Toaster } from './components/ui/sonner'

// MDX Documentation imports
import DocsIndex from './docs/index.mdx'
import ButtonDocs from './docs/button.mdx'
import CardDocs from './docs/card.mdx'
import InputDocs from './docs/input.mdx'
import AlertDocs from './docs/alert.mdx'
import BadgeDocs from './docs/badge.mdx'
import LabelDocs from './docs/label.mdx'
import AlertDialogDocs from './docs/alert-dialog.mdx'
import CheckboxDocs from './docs/checkbox.mdx'
import AvatarDocs from './docs/avatar.mdx'
import CarouselDocs from './docs/carousel.mdx'
import SeparatorDocs from './docs/separator.mdx'
import SheetDocs from './docs/sheet.mdx'

function Navigation() {
  const location = useLocation()
  const isDocsRoute = location.pathname.startsWith('/docs')

  return (
    <div className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-primary uppercase tracking-wide font-mono">
            MAGI UI
          </Link>
          
          <Tabs value={isDocsRoute ? 'docs' : 'showcase'} className="w-auto">
            <TabsList>
              <TabsTrigger value="showcase" asChild>
                <Link to="/">Showcase</Link>
              </TabsTrigger>
              <TabsTrigger value="docs" asChild>
                <Link to="/docs">Documentation</Link>
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

function ShowcasePage() {
  return (
    <div className='flex flex-col gap-8 p-8'>
      <div className='text-center space-y-2'>
        <h1 className='text-4xl font-bold text-primary uppercase tracking-wide font-mono'>
          MAGI UI COMPONENT LIBRARY
        </h1>
        <p className='text-muted-foreground font-mono tracking-wide'>
          Evangelion NERV MAGI System Interface Components
        </p>
        <div className="flex justify-center gap-2 mt-4">
          <Badge variant="secondary">shadcn/ui</Badge>
          <Badge variant="secondary">Tailwind CSS v4</Badge>
          <Badge variant="secondary">React 19</Badge>
          <Badge variant="secondary">TypeScript</Badge>
        </div>
      </div>
      
      <Separator />
      
      <ButtonShowCase />
      <AlertShowCase />
      <InputShowcase/>
      <SelectShowCase/>
      <ProgressShowcase/>
      <AlertDialogShowcase/>
      <BadgeShowcase/>
      <CalendarShowcase/>
      <CardShowcase />
      <CheckboxShowcase />
      <DialogShowcase />
      <DropdownMenuShowcase />
      <LabelShowcase />
      <SwitchShowcase />
      <TabsShowcase />
      <TextareaShowcase />
      <TooltipShowcase />
      <SonnerShowcase />
      <AvatarShowcase />
      <CarouselShowcase />
      <SeparatorShowcase />
      <SheetShowcase />
    </div>
  )
}

function DocsNavigation() {
  return (
    <div className="w-64 border-r border-border bg-muted/50 p-6 space-y-6">
      <div>
        <h3 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-3">
          Getting Started
        </h3>
        <ul className="space-y-2">
          <li>
            <Link 
              to="/docs" 
              className="text-sm hover:text-primary transition-colors block py-1"
            >
              Introduction
            </Link>
          </li>
        </ul>
      </div>
      
      <div>
        <h3 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-3">
          Form Components
        </h3>
        <ul className="space-y-2">
          <li>
            <Link 
              to="/docs/button" 
              className="text-sm hover:text-primary transition-colors block py-1"
            >
              Button
            </Link>
          </li>
          <li>
            <Link 
              to="/docs/input" 
              className="text-sm hover:text-primary transition-colors block py-1"
            >
              Input
            </Link>
          </li>
          <li>
            <Link 
              to="/docs/label" 
              className="text-sm hover:text-primary transition-colors block py-1"
            >
              Label
            </Link>
          </li>
          <li>
            <Link 
              to="/docs/checkbox" 
              className="text-sm hover:text-primary transition-colors block py-1"
            >
              Checkbox
            </Link>
          </li>
        </ul>
      </div>
      
      <div>
        <h3 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-3">
          Display Components
        </h3>
        <ul className="space-y-2">
          <li>
            <Link 
              to="/docs/avatar" 
              className="text-sm hover:text-primary transition-colors block py-1"
            >
              Avatar
            </Link>
          </li>
          <li>
            <Link 
              to="/docs/card" 
              className="text-sm hover:text-primary transition-colors block py-1"
            >
              Card
            </Link>
          </li>
          <li>
            <Link 
              to="/docs/badge" 
              className="text-sm hover:text-primary transition-colors block py-1"
            >
              Badge
            </Link>
          </li>
          <li>
            <Link 
              to="/docs/carousel" 
              className="text-sm hover:text-primary transition-colors block py-1"
            >
              Carousel
            </Link>
          </li>
          <li>
            <Link 
              to="/docs/separator" 
              className="text-sm hover:text-primary transition-colors block py-1"
            >
              Separator
            </Link>
          </li>
        </ul>
      </div>
      
      <div>
        <h3 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-3">
          Layout Components
        </h3>
        <ul className="space-y-2">
          <li>
            <Link 
              to="/docs/sheet" 
              className="text-sm hover:text-primary transition-colors block py-1"
            >
              Sheet
            </Link>
          </li>
        </ul>
      </div>
      
      <div>
        <h3 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-3">
          Feedback Components
        </h3>
        <ul className="space-y-2">
          <li>
            <Link 
              to="/docs/alert" 
              className="text-sm hover:text-primary transition-colors block py-1"
            >
              Alert
            </Link>
          </li>
          <li>
            <Link 
              to="/docs/alert-dialog" 
              className="text-sm hover:text-primary transition-colors block py-1"
            >
              AlertDialog
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <DocsNavigation />
      <div className="flex-1 overflow-auto">
        {children}
      </div>
    </div>
  )
}

function App() {
  return (
    <MDXProvider components={MDXComponents}>
      <Router>
        <div className="min-h-screen bg-background">
          <Navigation />
          <Routes>
          <Route path="/" element={<ShowcasePage />} />
          <Route path="/docs" element={
            <DocsLayout>
              <DocsIndex />
            </DocsLayout>
          } />
          <Route path="/docs/button" element={
            <DocsLayout>
              <ButtonDocs />
            </DocsLayout>
          } />
          <Route path="/docs/card" element={
            <DocsLayout>
              <CardDocs />
            </DocsLayout>
          } />
          <Route path="/docs/input" element={
            <DocsLayout>
              <InputDocs />
            </DocsLayout>
          } />
          <Route path="/docs/alert" element={
            <DocsLayout>
              <AlertDocs />
            </DocsLayout>
          } />
          <Route path="/docs/badge" element={
            <DocsLayout>
              <BadgeDocs />
            </DocsLayout>
          } />
          <Route path="/docs/label" element={
            <DocsLayout>
              <LabelDocs />
            </DocsLayout>
          } />
          <Route path="/docs/alert-dialog" element={
            <DocsLayout>
              <AlertDialogDocs />
            </DocsLayout>
          } />
          <Route path="/docs/checkbox" element={
            <DocsLayout>
              <CheckboxDocs />
            </DocsLayout>
          } />
          <Route path="/docs/avatar" element={
            <DocsLayout>
              <AvatarDocs />
            </DocsLayout>
          } />
          <Route path="/docs/carousel" element={
            <DocsLayout>
              <CarouselDocs />
            </DocsLayout>
          } />
          <Route path="/docs/separator" element={
            <DocsLayout>
              <SeparatorDocs />
            </DocsLayout>
          } />
          <Route path="/docs/sheet" element={
            <DocsLayout>
              <SheetDocs />
            </DocsLayout>
          } />
        </Routes>
        <Toaster />
      </div>
    </Router>
    </MDXProvider>
  )
}

export default App