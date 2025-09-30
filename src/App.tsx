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
import AccordionShowcase from './show/accordion-showcase'
import BreadcrumbShowcase from './show/breadcrumb-showcase'
import CollapsibleShowcase from './show/collapsible-showcase'
import CommandShowcase from './show/command-showcase'
import ContextMenuShowcase from './show/context-menu-showcase'
import MenubarShowcase from './show/menubar-showcase'
import NavigationMenuShowcase from './show/navigation-menu-showcase'
import ResizableShowcase from './show/resizable-showcase'
import ScrollAreaShowcase from './show/scroll-area-showcase'
import SkeletonShowcase from './show/skeleton-showcase'
import SliderShowcase from './show/slider-showcase'
import ToggleGroupShowcase from './show/toggle-group-showcase'
import ChartShowcase from './show/chart-showcase'
import DrawerShowcase from './show/drawer-showcase'
import PaginationShowcase from './show/pagination-showcase'
import ToggleShowcase from './show/toggle-showcase'
import TableShowcase from './show/table-showcase'
import RadioGroupShowcase from './show/radio-group-showcase'
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
import AccordionDocs from './docs/accordion.mdx'
import BreadcrumbDocs from './docs/breadcrumb.mdx'
import CollapsibleDocs from './docs/collapsible.mdx'
import CommandDocs from './docs/command.mdx'
import ContextMenuDocs from './docs/context-menu.mdx'
import MenubarDocs from './docs/menubar.mdx'
import NavigationMenuDocs from './docs/navigation-menu.mdx'
import ResizableDocs from './docs/resizable.mdx'
import ScrollAreaDocs from './docs/scroll-area.mdx'
import SkeletonDocs from './docs/skeleton.mdx'
import SliderDocs from './docs/slider.mdx'
import ToggleGroupDocs from './docs/toggle-group.mdx'
import ChartDocs from './docs/chart.mdx'
import DrawerDocs from './docs/drawer.mdx'
import PaginationDocs from './docs/pagination.mdx'
import ToggleDocs from './docs/toggle.mdx'
import TableDocs from './docs/table.mdx'
import RadioGroupDocs from './docs/radio-group.mdx'

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
    <div className='flex flex-col gap-8 p-8 max-w-3xl mx-auto'>
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
      
      {/* Form Components */}
      <ButtonShowCase />
      <InputShowcase/>
      <SelectShowCase/>
      <CheckboxShowcase />
      <RadioGroupShowcase />
      <LabelShowcase />
      <SwitchShowcase />
      <TextareaShowcase />
      <SliderShowcase />
      <ToggleShowcase />
      <ToggleGroupShowcase />
      
      {/* Layout Components */}
      <CardShowcase />
      <SeparatorShowcase />
      <AccordionShowcase />
      <CollapsibleShowcase />
      <ResizableShowcase />
      <ScrollAreaShowcase />
      <TabsShowcase />
      
      {/* Navigation Components */}
      <BreadcrumbShowcase />
      <NavigationMenuShowcase />
      <MenubarShowcase />
      <PaginationShowcase />
      <CommandShowcase />
      
      {/* Display Components */}
      <AlertShowCase />
      <BadgeShowcase/>
      <AvatarShowcase />
      <SkeletonShowcase />
      <ProgressShowcase/>
      <CalendarShowcase/>
      <CarouselShowcase />
      <TableShowcase />
      <ChartShowcase />
      
      {/* Overlay Components */}
      <DialogShowcase />
      <AlertDialogShowcase/>
      <SheetShowcase />
      <DrawerShowcase />
      <TooltipShowcase />
      <DropdownMenuShowcase />
      <ContextMenuShowcase />
      
      {/* Feedback Components */}
      <SonnerShowcase />
    </div>
  )
}

function DocsNavigation() {
  return (
    <div className="w-64 border-r bg-muted/10 p-4 overflow-y-scroll">
      <h2 className="font-semibold mb-4">Documentation</h2>
      <nav className="space-y-2">
        <Link to="/docs" className="block px-2 py-1 rounded hover:bg-muted">
          Overview
        </Link>
        
        <div className="mt-4">
          <h3 className="font-medium text-sm text-muted-foreground mb-2">Form Components</h3>
          <div className="space-y-1 ml-2">
            <Link to="/docs/button" className="block px-2 py-1 rounded hover:bg-muted text-sm">
              Button
            </Link>
            <Link to="/docs/input" className="block px-2 py-1 rounded hover:bg-muted text-sm">
              Input
            </Link>
            <Link to="/docs/checkbox" className="block px-2 py-1 rounded hover:bg-muted text-sm">
              Checkbox
            </Link>
            <Link to="/docs/radio-group" className="block px-2 py-1 rounded hover:bg-muted text-sm">
              Radio Group
            </Link>
            <Link to="/docs/label" className="block px-2 py-1 rounded hover:bg-muted text-sm">
              Label
            </Link>
            <Link to="/docs/slider" className="block px-2 py-1 rounded hover:bg-muted text-sm">
              Slider
            </Link>
            <Link to="/docs/toggle" className="block px-2 py-1 rounded hover:bg-muted text-sm">
              Toggle
            </Link>
            <Link to="/docs/toggle-group" className="block px-2 py-1 rounded hover:bg-muted text-sm">
              Toggle Group
            </Link>
          </div>
        </div>

        <div className="mt-4">
          <h3 className="font-medium text-sm text-muted-foreground mb-2">Navigation Components</h3>
          <div className="space-y-1 ml-2">
            <Link to="/docs/breadcrumb" className="block px-2 py-1 rounded hover:bg-muted text-sm">
              Breadcrumb
            </Link>
            <Link to="/docs/command" className="block px-2 py-1 rounded hover:bg-muted text-sm">
              Command
            </Link>
            <Link to="/docs/menubar" className="block px-2 py-1 rounded hover:bg-muted text-sm">
              Menubar
            </Link>
            <Link to="/docs/navigation-menu" className="block px-2 py-1 rounded hover:bg-muted text-sm">
              Navigation Menu
            </Link>
            <Link to="/docs/pagination" className="block px-2 py-1 rounded hover:bg-muted text-sm">
              Pagination
            </Link>
          </div>
        </div>

        <div className="mt-4">
          <h3 className="font-medium text-sm text-muted-foreground mb-2">Display Components</h3>
          <div className="space-y-1 ml-2">
            <Link to="/docs/card" className="block px-2 py-1 rounded hover:bg-muted text-sm">
              Card
            </Link>
            <Link to="/docs/alert" className="block px-2 py-1 rounded hover:bg-muted text-sm">
              Alert
            </Link>
            <Link to="/docs/badge" className="block px-2 py-1 rounded hover:bg-muted text-sm">
              Badge
            </Link>
            <Link to="/docs/avatar" className="block px-2 py-1 rounded hover:bg-muted text-sm">
              Avatar
            </Link>
            <Link to="/docs/carousel" className="block px-2 py-1 rounded hover:bg-muted text-sm">
              Carousel
            </Link>
            <Link to="/docs/chart" className="block px-2 py-1 rounded hover:bg-muted text-sm">
              Chart
            </Link>
            <Link to="/docs/skeleton" className="block px-2 py-1 rounded hover:bg-muted text-sm">
              Skeleton
            </Link>
            <Link to="/docs/table" className="block px-2 py-1 rounded hover:bg-muted text-sm">
              Table
            </Link>
          </div>
        </div>

        <div className="mt-4">
          <h3 className="font-medium text-sm text-muted-foreground mb-2">Layout Components</h3>
          <div className="space-y-1 ml-2">
            <Link to="/docs/accordion" className="block px-2 py-1 rounded hover:bg-muted text-sm">
              Accordion
            </Link>
            <Link to="/docs/collapsible" className="block px-2 py-1 rounded hover:bg-muted text-sm">
              Collapsible
            </Link>
            <Link to="/docs/resizable" className="block px-2 py-1 rounded hover:bg-muted text-sm">
              Resizable
            </Link>
            <Link to="/docs/scroll-area" className="block px-2 py-1 rounded hover:bg-muted text-sm">
              Scroll Area
            </Link>
            <Link to="/docs/separator" className="block px-2 py-1 rounded hover:bg-muted text-sm">
              Separator
            </Link>
          </div>
        </div>

        <div className="mt-4">
          <h3 className="font-medium text-sm text-muted-foreground mb-2">Overlay Components</h3>
          <div className="space-y-1 ml-2">
            <Link to="/docs/alert-dialog" className="block px-2 py-1 rounded hover:bg-muted text-sm">
              Alert Dialog
            </Link>
            <Link to="/docs/context-menu" className="block px-2 py-1 rounded hover:bg-muted text-sm">
              Context Menu
            </Link>
            <Link to="/docs/drawer" className="block px-2 py-1 rounded hover:bg-muted text-sm">
              Drawer
            </Link>
            <Link to="/docs/sheet" className="block px-2 py-1 rounded hover:bg-muted text-sm">
              Sheet
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-[90vh] overflow-hidden">
      <DocsNavigation />
      <div className="flex-1 overflow-y-scroll h-full">
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
          <Route path="/docs/accordion" element={
            <DocsLayout>
              <AccordionDocs />
            </DocsLayout>
          } />
          <Route path="/docs/breadcrumb" element={
            <DocsLayout>
              <BreadcrumbDocs />
            </DocsLayout>
          } />
          <Route path="/docs/collapsible" element={
            <DocsLayout>
              <CollapsibleDocs />
            </DocsLayout>
          } />
          <Route path="/docs/command" element={
            <DocsLayout>
              <CommandDocs />
            </DocsLayout>
          } />
          <Route path="/docs/context-menu" element={
            <DocsLayout>
              <ContextMenuDocs />
            </DocsLayout>
          } />
          <Route path="/docs/menubar" element={
            <DocsLayout>
              <MenubarDocs />
            </DocsLayout>
          } />
          <Route path="/docs/navigation-menu" element={
            <DocsLayout>
              <NavigationMenuDocs />
            </DocsLayout>
          } />
          <Route path="/docs/resizable" element={
            <DocsLayout>
              <ResizableDocs />
            </DocsLayout>
          } />
          <Route path="/docs/scroll-area" element={
            <DocsLayout>
              <ScrollAreaDocs />
            </DocsLayout>
          } />
          <Route path="/docs/skeleton" element={
            <DocsLayout>
              <SkeletonDocs />
            </DocsLayout>
          } />
          <Route path="/docs/slider" element={
            <DocsLayout>
              <SliderDocs />
            </DocsLayout>
          } />
          <Route path="/docs/toggle-group" element={
            <DocsLayout>
              <ToggleGroupDocs />
            </DocsLayout>
          } />
          <Route path="/docs/chart" element={
            <DocsLayout>
              <ChartDocs />
            </DocsLayout>
          } />
          <Route path="/docs/drawer" element={
            <DocsLayout>
              <DrawerDocs />
            </DocsLayout>
          } />
          <Route path="/docs/pagination" element={
            <DocsLayout>
              <PaginationDocs />
            </DocsLayout>
          } />
          <Route path="/docs/toggle" element={
            <DocsLayout>
              <ToggleDocs />
            </DocsLayout>
          } />
          <Route path="/docs/table" element={
            <DocsLayout>
              <TableDocs />
            </DocsLayout>
          } />
          <Route path="/docs/radio-group" element={
            <DocsLayout>
              <RadioGroupDocs />
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