import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuCheckboxItem,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuShortcut,
} from "@/components/ui/context-menu"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { 
  Copy, 
  Download, 
  Share, 
  Edit, 
  Trash2, 
  Star, 
  Eye, 
  EyeOff,
  MoreHorizontal,
  FileText,
  Image,
  Video,
  Music,
  Folder,
  Settings,
  Info,
  RefreshCw,
  Bookmark,
  Heart,
  MessageSquare,
  Send,
  Archive,
  Flag,
  Shield,
  Zap,
  Brain,
  Target
} from "lucide-react"
import { useState } from "react"

export default function ContextMenuShowcase() {
  const [bookmarked, setBookmarked] = useState(false)
  const [starred, setStarred] = useState(false)
  const [visibility, setVisibility] = useState("public")
  const [viewMode, setViewMode] = useState("grid")

  return (
    <div className="space-y-8 p-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Context Menu Component</h1>
        <p className="text-muted-foreground">
          Right-click context menus that appear on demand with rich interactions and keyboard navigation.
        </p>
      </div>

      <Separator />

      {/* Basic Example */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Basic Context Menu</h2>
        <Card>
          <CardContent className="p-6">
            <ContextMenu>
              <ContextMenuTrigger className="flex h-32 w-full items-center justify-center rounded-md border border-dashed text-sm">
                Right click here to open context menu
              </ContextMenuTrigger>
              <ContextMenuContent className="w-64">
                <ContextMenuItem inset>
                  <Copy className="mr-2 h-4 w-4" />
                  Copy
                  <ContextMenuShortcut>⌘C</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem inset>
                  Cut
                  <ContextMenuShortcut>⌘X</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem inset>
                  Paste
                  <ContextMenuShortcut>⌘V</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem inset>
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </ContextMenuItem>
                <ContextMenuItem inset>
                  <Share className="mr-2 h-4 w-4" />
                  Share
                </ContextMenuItem>
              </ContextMenuContent>
            </ContextMenu>
          </CardContent>
        </Card>
      </div>

      {/* File Manager Example */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">File Manager Context Menu</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: "Document.pdf", type: "file", icon: FileText, size: "2.4 MB" },
            { name: "Image.jpg", type: "file", icon: Image, size: "1.8 MB" },
            { name: "Video.mp4", type: "file", icon: Video, size: "45.2 MB" },
            { name: "Projects", type: "folder", icon: Folder, size: "12 items" },
          ].map((item, index) => (
            <ContextMenu key={index}>
              <ContextMenuTrigger>
                <Card className="cursor-pointer hover:bg-muted/50 transition-colors">
                  <CardContent className="p-4 text-center">
                    <item.icon className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm font-medium truncate">{item.name}</p>
                    <p className="text-xs text-muted-foreground">{item.size}</p>
                  </CardContent>
                </Card>
              </ContextMenuTrigger>
              <ContextMenuContent className="w-56">
                <ContextMenuItem>
                  <Eye className="mr-2 h-4 w-4" />
                  Open
                </ContextMenuItem>
                <ContextMenuItem>
                  <Edit className="mr-2 h-4 w-4" />
                  Edit
                </ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem>
                  <Copy className="mr-2 h-4 w-4" />
                  Copy
                  <ContextMenuShortcut>⌘C</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem>
                  Cut
                  <ContextMenuShortcut>⌘X</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuSub>
                  <ContextMenuSubTrigger inset>
                    <Share className="mr-2 h-4 w-4" />
                    Share
                  </ContextMenuSubTrigger>
                  <ContextMenuSubContent className="w-48">
                    <ContextMenuItem>
                      <Send className="mr-2 h-4 w-4" />
                      Email
                    </ContextMenuItem>
                    <ContextMenuItem>
                      <Copy className="mr-2 h-4 w-4" />
                      Copy Link
                    </ContextMenuItem>
                    <ContextMenuItem>
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </ContextMenuItem>
                  </ContextMenuSubContent>
                </ContextMenuSub>
                <ContextMenuSeparator />
                <ContextMenuItem>
                  <Info className="mr-2 h-4 w-4" />
                  Properties
                </ContextMenuItem>
                <ContextMenuItem className="text-destructive">
                  <Trash2 className="mr-2 h-4 w-4" />
                  Delete
                  <ContextMenuShortcut>⌫</ContextMenuShortcut>
                </ContextMenuItem>
              </ContextMenuContent>
            </ContextMenu>
          ))}
        </div>
      </div>

      {/* NERV Command Interface */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">NERV Command Interface</h2>
        <Card className="border-red-200 dark:border-red-800">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-red-500" />
              <span>NERV Operations Terminal</span>
              <Badge variant="destructive" className="ml-auto">
                Classified
              </Badge>
            </CardTitle>
            <CardDescription>
              Right-click on operational units for command options
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { 
                  name: "Evangelion Unit-01", 
                  pilot: "Shinji Ikari", 
                  status: "Standby",
                  icon: Brain,
                  color: "purple"
                },
                { 
                  name: "Evangelion Unit-02", 
                  pilot: "Asuka Langley", 
                  status: "Active",
                  icon: Zap,
                  color: "red"
                },
                { 
                  name: "Evangelion Unit-00", 
                  pilot: "Rei Ayanami", 
                  status: "Maintenance",
                  icon: Target,
                  color: "blue"
                },
              ].map((unit, index) => (
                <ContextMenu key={index}>
                  <ContextMenuTrigger>
                    <Card className="cursor-pointer hover:bg-muted/50 transition-colors">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-3">
                          <unit.icon className={`h-6 w-6 text-${unit.color}-500`} />
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium truncate">{unit.name}</p>
                            <p className="text-xs text-muted-foreground">Pilot: {unit.pilot}</p>
                            <Badge 
                              variant={unit.status === "Active" ? "default" : "secondary"}
                              className="text-xs mt-1"
                            >
                              {unit.status}
                            </Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </ContextMenuTrigger>
                  <ContextMenuContent className="w-64">
                    <ContextMenuLabel>Unit Operations</ContextMenuLabel>
                    <ContextMenuSeparator />
                    <ContextMenuItem>
                      <Zap className="mr-2 h-4 w-4" />
                      Activate Unit
                      <ContextMenuShortcut>⌘A</ContextMenuShortcut>
                    </ContextMenuItem>
                    <ContextMenuItem>
                      <Eye className="mr-2 h-4 w-4" />
                      Monitor Status
                    </ContextMenuItem>
                    <ContextMenuItem>
                      <Settings className="mr-2 h-4 w-4" />
                      System Diagnostics
                    </ContextMenuItem>
                    <ContextMenuSeparator />
                    <ContextMenuSub>
                      <ContextMenuSubTrigger inset>
                        <Brain className="mr-2 h-4 w-4" />
                        Sync Operations
                      </ContextMenuSubTrigger>
                      <ContextMenuSubContent className="w-48">
                        <ContextMenuItem>
                          <Target className="mr-2 h-4 w-4" />
                          Sync Test
                        </ContextMenuItem>
                        <ContextMenuItem>
                          <RefreshCw className="mr-2 h-4 w-4" />
                          Recalibrate
                        </ContextMenuItem>
                        <ContextMenuItem>
                          <Shield className="mr-2 h-4 w-4" />
                          AT Field Analysis
                        </ContextMenuItem>
                      </ContextMenuSubContent>
                    </ContextMenuSub>
                    <ContextMenuSeparator />
                    <ContextMenuItem className="text-destructive">
                      <Flag className="mr-2 h-4 w-4" />
                      Emergency Stop
                      <ContextMenuShortcut>⌘⇧S</ContextMenuShortcut>
                    </ContextMenuItem>
                  </ContextMenuContent>
                </ContextMenu>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Advanced Features */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Advanced Features</h2>
        <Card>
          <CardContent className="p-6">
            <ContextMenu>
              <ContextMenuTrigger className="flex h-40 w-full items-center justify-center rounded-md border border-dashed text-sm">
                Right click for advanced context menu
              </ContextMenuTrigger>
              <ContextMenuContent className="w-64">
                <ContextMenuLabel>Actions</ContextMenuLabel>
                <ContextMenuSeparator />
                <ContextMenuCheckboxItem 
                  checked={bookmarked} 
                  onCheckedChange={setBookmarked}
                >
                  <Bookmark className="mr-2 h-4 w-4" />
                  Bookmark
                </ContextMenuCheckboxItem>
                <ContextMenuCheckboxItem 
                  checked={starred} 
                  onCheckedChange={setStarred}
                >
                  <Star className="mr-2 h-4 w-4" />
                  Add to Favorites
                </ContextMenuCheckboxItem>
                <ContextMenuSeparator />
                <ContextMenuSub>
                  <ContextMenuSubTrigger inset>
                    <Eye className="mr-2 h-4 w-4" />
                    Visibility
                  </ContextMenuSubTrigger>
                  <ContextMenuSubContent className="w-48">
                    <ContextMenuRadioGroup value={visibility} onValueChange={setVisibility}>
                      <ContextMenuRadioItem value="public">
                        Public
                      </ContextMenuRadioItem>
                      <ContextMenuRadioItem value="private">
                        Private
                      </ContextMenuRadioItem>
                      <ContextMenuRadioItem value="unlisted">
                        Unlisted
                      </ContextMenuRadioItem>
                    </ContextMenuRadioGroup>
                  </ContextMenuSubContent>
                </ContextMenuSub>
                <ContextMenuSub>
                  <ContextMenuSubTrigger inset>
                    <MoreHorizontal className="mr-2 h-4 w-4" />
                    View Mode
                  </ContextMenuSubTrigger>
                  <ContextMenuSubContent className="w-48">
                    <ContextMenuRadioGroup value={viewMode} onValueChange={setViewMode}>
                      <ContextMenuRadioItem value="grid">
                        Grid View
                      </ContextMenuRadioItem>
                      <ContextMenuRadioItem value="list">
                        List View
                      </ContextMenuRadioItem>
                      <ContextMenuRadioItem value="card">
                        Card View
                      </ContextMenuRadioItem>
                    </ContextMenuRadioGroup>
                  </ContextMenuSubContent>
                </ContextMenuSub>
                <ContextMenuSeparator />
                <ContextMenuItem>
                  <Copy className="mr-2 h-4 w-4" />
                  Copy Link
                  <ContextMenuShortcut>⌘L</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem>
                  <Archive className="mr-2 h-4 w-4" />
                  Archive
                </ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem disabled>
                  <Heart className="mr-2 h-4 w-4" />
                  Like (Disabled)
                </ContextMenuItem>
                <ContextMenuItem>
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Comment
                </ContextMenuItem>
              </ContextMenuContent>
            </ContextMenu>
          </CardContent>
        </Card>
      </div>

      {/* Text Selection Context Menu */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Text Selection Context Menu</h2>
        <Card>
          <CardContent className="p-6">
            <ContextMenu>
              <ContextMenuTrigger>
                <div className="p-4 border rounded-md bg-muted/50">
                  <p className="text-sm leading-relaxed">
                    Select this text and right-click to see text-specific context menu options. 
                    This demonstrates how context menus can be contextual based on the content 
                    being interacted with. The MAGI system processes information through three 
                    distinct computational cores, each representing different aspects of human 
                    decision-making: scientific logic, maternal instinct, and feminine intuition.
                  </p>
                </div>
              </ContextMenuTrigger>
              <ContextMenuContent className="w-56">
                <ContextMenuItem>
                  <Copy className="mr-2 h-4 w-4" />
                  Copy Text
                  <ContextMenuShortcut>⌘C</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem>
                  Cut Text
                  <ContextMenuShortcut>⌘X</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuSub>
                  <ContextMenuSubTrigger inset>
                    <Edit className="mr-2 h-4 w-4" />
                    Format
                  </ContextMenuSubTrigger>
                  <ContextMenuSubContent className="w-48">
                    <ContextMenuItem>
                      <span className="mr-2 font-bold">B</span>
                      Bold
                    </ContextMenuItem>
                    <ContextMenuItem>
                      <span className="mr-2 italic">I</span>
                      Italic
                    </ContextMenuItem>
                    <ContextMenuItem>
                      <span className="mr-2 underline">U</span>
                      Underline
                    </ContextMenuItem>
                  </ContextMenuSubContent>
                </ContextMenuSub>
                <ContextMenuItem>
                  <Share className="mr-2 h-4 w-4" />
                  Share Selection
                </ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem>
                  <Info className="mr-2 h-4 w-4" />
                  Word Count
                </ContextMenuItem>
              </ContextMenuContent>
            </ContextMenu>
          </CardContent>
        </Card>
      </div>

      {/* Usage Guidelines */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage Guidelines</h2>
        <Card>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">When to Use Context Menus</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>For secondary actions that don't need primary UI space</li>
                  <li>When actions are contextual to specific content or elements</li>
                  <li>For power user features and shortcuts</li>
                  <li>In data-heavy interfaces like file managers or tables</li>
                  <li>For actions that apply to selected content</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Best Practices</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Keep menu items relevant to the context</li>
                  <li>Use clear, action-oriented labels</li>
                  <li>Group related actions with separators</li>
                  <li>Include keyboard shortcuts for common actions</li>
                  <li>Use submenus sparingly to avoid deep nesting</li>
                  <li>Disable unavailable actions rather than hiding them</li>
                  <li>Consider mobile users who can't right-click</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Accessibility</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Ensure keyboard navigation works properly</li>
                  <li>Provide alternative access methods for touch devices</li>
                  <li>Use proper ARIA labels and roles</li>
                  <li>Test with screen readers</li>
                  <li>Consider users who may not know about right-click functionality</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}