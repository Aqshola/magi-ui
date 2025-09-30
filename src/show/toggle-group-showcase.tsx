import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { 
  Bold, 
  Italic, 
  Underline, 
  AlignLeft, 
  AlignCenter, 
  AlignRight, 
  AlignJustify,
  List,
  ListOrdered,
  Quote,
  Code,
  Link,
  Image,
  Table,
  Heading1,
  Heading2,
  Heading3,
  Eye,
  EyeOff,
  Volume2,
  VolumeX,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Shuffle,
  Repeat,
  Heart,
  Share,
  Download,
  Settings,
  Grid,
  List as ListView,
  Calendar,
  Map,
  BarChart3,
  PieChart,
  LineChart,
  TrendingUp
} from "lucide-react"

export default function ToggleGroupShowCase() {
  return (
    <div className="space-y-8 p-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight mb-2">Toggle Group</h2>
        <p className="text-muted-foreground">
          A set of two-state buttons that can be toggled on or off. Perfect for formatting controls and option selection.
        </p>
      </div>

      {/* Basic Single Selection */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            Basic Single Selection
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="text-sm text-muted-foreground mb-3">Text Alignment</p>
            <ToggleGroup type="single" defaultValue="left">
              <ToggleGroupItem value="left" aria-label="Align left">
                <AlignLeft className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="center" aria-label="Align center">
                <AlignCenter className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="right" aria-label="Align right">
                <AlignRight className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="justify" aria-label="Justify">
                <AlignJustify className="h-4 w-4" />
              </ToggleGroupItem>
            </ToggleGroup>
          </div>

          <div>
            <p className="text-sm text-muted-foreground mb-3">View Mode</p>
            <ToggleGroup type="single" defaultValue="grid">
              <ToggleGroupItem value="grid" aria-label="Grid view">
                <Grid className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="list" aria-label="List view">
                <ListView className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="calendar" aria-label="Calendar view">
                <Calendar className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="map" aria-label="Map view">
                <Map className="h-4 w-4" />
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </CardContent>
      </Card>

      {/* Multiple Selection */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bold className="h-5 w-5" />
            Multiple Selection
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="text-sm text-muted-foreground mb-3">Text Formatting</p>
            <ToggleGroup type="multiple" defaultValue={["bold"]}>
              <ToggleGroupItem value="bold" aria-label="Bold">
                <Bold className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="italic" aria-label="Italic">
                <Italic className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="underline" aria-label="Underline">
                <Underline className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="code" aria-label="Code">
                <Code className="h-4 w-4" />
              </ToggleGroupItem>
            </ToggleGroup>
          </div>

          <div>
            <p className="text-sm text-muted-foreground mb-3">Content Types</p>
            <ToggleGroup type="multiple">
              <ToggleGroupItem value="list" aria-label="Bullet list">
                <List className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="ordered" aria-label="Numbered list">
                <ListOrdered className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="quote" aria-label="Quote">
                <Quote className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="link" aria-label="Link">
                <Link className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="image" aria-label="Image">
                <Image className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="table" aria-label="Table">
                <Table className="h-4 w-4" />
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </CardContent>
      </Card>

      {/* NERV Command Center Interface */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Eye className="h-5 w-5" />
            NERV Command Center
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="outline" className="bg-red-50 dark:bg-red-950">System Status</Badge>
              </div>
              <ToggleGroup type="multiple" defaultValue={["monitoring", "defense"]}>
                <ToggleGroupItem value="monitoring" aria-label="Monitoring active">
                  <Eye className="h-4 w-4" />
                  <span className="ml-2 text-sm">Monitor</span>
                </ToggleGroupItem>
                <ToggleGroupItem value="stealth" aria-label="Stealth mode">
                  <EyeOff className="h-4 w-4" />
                  <span className="ml-2 text-sm">Stealth</span>
                </ToggleGroupItem>
                <ToggleGroupItem value="defense" aria-label="Defense systems">
                  <Settings className="h-4 w-4" />
                  <span className="ml-2 text-sm">Defense</span>
                </ToggleGroupItem>
              </ToggleGroup>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="outline" className="bg-blue-50 dark:bg-blue-950">Audio Systems</Badge>
              </div>
              <ToggleGroup type="single" defaultValue="normal">
                <ToggleGroupItem value="muted" aria-label="Muted">
                  <VolumeX className="h-4 w-4" />
                  <span className="ml-2 text-sm">Mute</span>
                </ToggleGroupItem>
                <ToggleGroupItem value="normal" aria-label="Normal volume">
                  <Volume2 className="h-4 w-4" />
                  <span className="ml-2 text-sm">Audio</span>
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
          </div>

          <Separator />

          <div>
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="outline" className="bg-purple-50 dark:bg-purple-950">EVA Unit Controls</Badge>
            </div>
            <ToggleGroup type="multiple" defaultValue={["unit-01"]}>
              <ToggleGroupItem value="unit-01" aria-label="EVA Unit-01">
                <div className="h-3 w-3 rounded-full bg-purple-500 mr-2"></div>
                <span className="text-sm">Unit-01</span>
              </ToggleGroupItem>
              <ToggleGroupItem value="unit-00" aria-label="EVA Unit-00">
                <div className="h-3 w-3 rounded-full bg-blue-500 mr-2"></div>
                <span className="text-sm">Unit-00</span>
              </ToggleGroupItem>
              <ToggleGroupItem value="unit-02" aria-label="EVA Unit-02">
                <div className="h-3 w-3 rounded-full bg-red-500 mr-2"></div>
                <span className="text-sm">Unit-02</span>
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </CardContent>
      </Card>

      {/* Media Player Controls */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Play className="h-5 w-5" />
            Media Player Controls
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="text-sm text-muted-foreground mb-3">Playback Controls</p>
            <ToggleGroup type="single" defaultValue="play">
              <ToggleGroupItem value="previous" aria-label="Previous track">
                <SkipBack className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="play" aria-label="Play">
                <Play className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="pause" aria-label="Pause">
                <Pause className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="next" aria-label="Next track">
                <SkipForward className="h-4 w-4" />
              </ToggleGroupItem>
            </ToggleGroup>
          </div>

          <div>
            <p className="text-sm text-muted-foreground mb-3">Player Options</p>
            <ToggleGroup type="multiple" defaultValue={["shuffle"]}>
              <ToggleGroupItem value="shuffle" aria-label="Shuffle">
                <Shuffle className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="repeat" aria-label="Repeat">
                <Repeat className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="favorite" aria-label="Add to favorites">
                <Heart className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="share" aria-label="Share">
                <Share className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="download" aria-label="Download">
                <Download className="h-4 w-4" />
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </CardContent>
      </Card>

      {/* Text Editor Toolbar */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heading1 className="h-5 w-5" />
            Text Editor Toolbar
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="text-sm text-muted-foreground mb-3">Heading Levels</p>
            <ToggleGroup type="single">
              <ToggleGroupItem value="h1" aria-label="Heading 1">
                <Heading1 className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="h2" aria-label="Heading 2">
                <Heading2 className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="h3" aria-label="Heading 3">
                <Heading3 className="h-4 w-4" />
              </ToggleGroupItem>
            </ToggleGroup>
          </div>

          <div>
            <p className="text-sm text-muted-foreground mb-3">Text Formatting</p>
            <ToggleGroup type="multiple">
              <ToggleGroupItem value="bold" aria-label="Bold">
                <Bold className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="italic" aria-label="Italic">
                <Italic className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="underline" aria-label="Underline">
                <Underline className="h-4 w-4" />
              </ToggleGroupItem>
            </ToggleGroup>
          </div>

          <div>
            <p className="text-sm text-muted-foreground mb-3">Text Alignment</p>
            <ToggleGroup type="single" defaultValue="left">
              <ToggleGroupItem value="left" aria-label="Align left">
                <AlignLeft className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="center" aria-label="Align center">
                <AlignCenter className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="right" aria-label="Align right">
                <AlignRight className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="justify" aria-label="Justify">
                <AlignJustify className="h-4 w-4" />
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </CardContent>
      </Card>

      {/* Chart Type Selector */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5" />
            Chart Type Selector
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <p className="text-sm text-muted-foreground mb-3">Select Chart Type</p>
            <ToggleGroup type="single" defaultValue="bar">
              <ToggleGroupItem value="bar" aria-label="Bar chart">
                <BarChart3 className="h-4 w-4" />
                <span className="ml-2 text-sm">Bar</span>
              </ToggleGroupItem>
              <ToggleGroupItem value="pie" aria-label="Pie chart">
                <PieChart className="h-4 w-4" />
                <span className="ml-2 text-sm">Pie</span>
              </ToggleGroupItem>
              <ToggleGroupItem value="line" aria-label="Line chart">
                <LineChart className="h-4 w-4" />
                <span className="ml-2 text-sm">Line</span>
              </ToggleGroupItem>
              <ToggleGroupItem value="trend" aria-label="Trend chart">
                <TrendingUp className="h-4 w-4" />
                <span className="ml-2 text-sm">Trend</span>
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </CardContent>
      </Card>

      {/* Size Variants */}
      <Card>
        <CardHeader>
          <CardTitle>Size Variants</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="text-sm text-muted-foreground mb-3">Small</p>
            <ToggleGroup type="multiple" size="sm">
              <ToggleGroupItem value="bold" aria-label="Bold">
                <Bold className="h-3 w-3" />
              </ToggleGroupItem>
              <ToggleGroupItem value="italic" aria-label="Italic">
                <Italic className="h-3 w-3" />
              </ToggleGroupItem>
              <ToggleGroupItem value="underline" aria-label="Underline">
                <Underline className="h-3 w-3" />
              </ToggleGroupItem>
            </ToggleGroup>
          </div>

          <div>
            <p className="text-sm text-muted-foreground mb-3">Default</p>
            <ToggleGroup type="multiple">
              <ToggleGroupItem value="bold" aria-label="Bold">
                <Bold className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="italic" aria-label="Italic">
                <Italic className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="underline" aria-label="Underline">
                <Underline className="h-4 w-4" />
              </ToggleGroupItem>
            </ToggleGroup>
          </div>

          <div>
            <p className="text-sm text-muted-foreground mb-3">Large</p>
            <ToggleGroup type="multiple" size="lg">
              <ToggleGroupItem value="bold" aria-label="Bold">
                <Bold className="h-5 w-5" />
              </ToggleGroupItem>
              <ToggleGroupItem value="italic" aria-label="Italic">
                <Italic className="h-5 w-5" />
              </ToggleGroupItem>
              <ToggleGroupItem value="underline" aria-label="Underline">
                <Underline className="h-5 w-5" />
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </CardContent>
      </Card>

      {/* Variant Styles */}
      <Card>
        <CardHeader>
          <CardTitle>Variant Styles</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="text-sm text-muted-foreground mb-3">Default</p>
            <ToggleGroup type="multiple" defaultValue={["bold"]}>
              <ToggleGroupItem value="bold" aria-label="Bold">
                <Bold className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="italic" aria-label="Italic">
                <Italic className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="underline" aria-label="Underline">
                <Underline className="h-4 w-4" />
              </ToggleGroupItem>
            </ToggleGroup>
          </div>

          <div>
            <p className="text-sm text-muted-foreground mb-3">Outline</p>
            <ToggleGroup type="multiple" variant="outline" defaultValue={["italic"]}>
              <ToggleGroupItem value="bold" aria-label="Bold">
                <Bold className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="italic" aria-label="Italic">
                <Italic className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="underline" aria-label="Underline">
                <Underline className="h-4 w-4" />
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </CardContent>
      </Card>

      {/* Usage Guidelines */}
      <Card>
        <CardHeader>
          <CardTitle>Usage Guidelines</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Best Practices:</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• Use single selection for mutually exclusive options</li>
              <li>• Use multiple selection for independent toggleable features</li>
              <li>• Provide clear visual feedback for selected states</li>
              <li>• Include appropriate ARIA labels for accessibility</li>
              <li>• Group related functionality together</li>
              <li>• Consider the logical order of toggle items</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Common Use Cases:</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• Text formatting toolbars (bold, italic, underline)</li>
              <li>• View mode selectors (grid, list, card)</li>
              <li>• Filter controls for data tables</li>
              <li>• Media player controls and options</li>
              <li>• Chart type selectors in dashboards</li>
              <li>• Feature toggles in settings panels</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}