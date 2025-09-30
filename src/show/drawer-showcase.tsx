import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { 
  Menu,
  Settings,
  User,
  Bell,
  Shield,
  Zap,
  Brain,
  Activity,
  AlertTriangle,
  CheckCircle,
  X,
  Edit,
  Save,
  Trash2,
  Plus,
  Filter,
  Search,
  Download,
  Upload,
  Share,
  Heart,
  Star,
  MessageSquare,
  Calendar,
  Clock,
  MapPin,
  Phone,
  Mail,
  Globe,
  Camera,
  Mic,
  Video,
  FileText,
  Image,
  Music,
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Volume2,
  Wifi,
  Battery,
  Signal,
  Send
} from "lucide-react"
import { useState } from "react"

export default function DrawerShowCase() {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    notifications: true,
    darkMode: false,
  })

  const pilots = [
    { id: 1, name: "Shinji Ikari", unit: "Eva Unit 01", status: "Active", syncRatio: 74.2 },
    { id: 2, name: "Rei Ayanami", unit: "Eva Unit 00", status: "Standby", syncRatio: 68.9 },
    { id: 3, name: "Asuka Langley", unit: "Eva Unit 02", status: "Medical", syncRatio: 52.1 },
    { id: 4, name: "Mari Makinami", unit: "Eva Unit 08", status: "Active", syncRatio: 81.7 },
  ]

  const systemAlerts = [
    { id: 1, type: "warning", message: "MAGI System load at 85%", time: "2 min ago" },
    { id: 2, type: "error", message: "Cooling system anomaly detected", time: "5 min ago" },
    { id: 3, type: "info", message: "Sync test scheduled for 14:00", time: "10 min ago" },
    { id: 4, type: "success", message: "Security protocols updated", time: "15 min ago" },
  ]

  return (
    <div className="space-y-8 p-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Drawer</h1>
        <p className="text-muted-foreground mb-6">
          A drawer component for mobile-first navigation and content display.
        </p>
      </div>

      {/* Basic Drawer */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Basic Drawer</h2>
        <div className="border rounded-lg p-6 bg-card">
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="outline">
                <Menu className="mr-2 h-4 w-4" />
                Open Drawer
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Basic Drawer</DrawerTitle>
                <DrawerDescription>
                  This is a simple drawer with basic content.
                </DrawerDescription>
              </DrawerHeader>
              <div className="p-4">
                <p className="text-muted-foreground">
                  Drawers are perfect for mobile-first designs and can contain any content you need.
                  They slide up from the bottom of the screen and can be dismissed by dragging down
                  or clicking the close button.
                </p>
              </div>
              <DrawerFooter>
                <Button>Confirm</Button>
                <DrawerClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </div>

      {/* Settings Drawer */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Settings Drawer</h2>
        <div className="border rounded-lg p-6 bg-card">
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="outline">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Settings</DrawerTitle>
                <DrawerDescription>
                  Manage your account settings and preferences.
                </DrawerDescription>
              </DrawerHeader>
              <div className="p-4 space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Notifications</Label>
                      <div className="text-sm text-muted-foreground">
                        Receive notifications about important updates
                      </div>
                    </div>
                    <Switch 
                      checked={formData.notifications}
                      onCheckedChange={(checked) => 
                        setFormData(prev => ({ ...prev, notifications: checked }))
                      }
                    />
                  </div>
                  
                  <Separator />
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Dark Mode</Label>
                      <div className="text-sm text-muted-foreground">
                        Switch to dark theme
                      </div>
                    </div>
                    <Switch 
                      checked={formData.darkMode}
                      onCheckedChange={(checked) => 
                        setFormData(prev => ({ ...prev, darkMode: checked }))
                      }
                    />
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-2">
                    <Label htmlFor="name">Display Name</Label>
                    <Input 
                      id="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => 
                        setFormData(prev => ({ ...prev, name: e.target.value }))
                      }
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => 
                        setFormData(prev => ({ ...prev, email: e.target.value }))
                      }
                    />
                  </div>
                </div>
              </div>
              <DrawerFooter>
                <Button>Save Changes</Button>
                <DrawerClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </div>

      {/* NERV Command Interface */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">NERV Command Interface</h2>
        <div className="border rounded-lg p-6 bg-gradient-to-r from-red-950/20 to-orange-950/20">
          <div className="grid gap-4 md:grid-cols-3">
            {/* Pilot Status */}
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
                  <div className="flex items-center gap-2 mb-2">
                    <User className="h-5 w-5" />
                    <span className="font-medium">Pilot Status</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    View active pilot information
                  </div>
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    Pilot Status Report
                  </DrawerTitle>
                  <DrawerDescription>
                    Current status and sync ratios for all Eva pilots
                  </DrawerDescription>
                </DrawerHeader>
                <div className="p-4 space-y-4">
                  {pilots.map((pilot) => (
                    <div key={pilot.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarFallback>{pilot.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{pilot.name}</div>
                          <div className="text-sm text-muted-foreground">{pilot.unit}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge 
                          variant={
                            pilot.status === 'Active' ? 'default' : 
                            pilot.status === 'Medical' ? 'destructive' : 'secondary'
                          }
                        >
                          {pilot.status}
                        </Badge>
                        <div className="text-sm text-muted-foreground mt-1">
                          Sync: {pilot.syncRatio}%
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <DrawerFooter>
                  <Button>
                    <Edit className="mr-2 h-4 w-4" />
                    Update Status
                  </Button>
                  <DrawerClose asChild>
                    <Button variant="outline">Close</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>

            {/* System Alerts */}
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
                  <div className="flex items-center gap-2 mb-2">
                    <Bell className="h-5 w-5" />
                    <span className="font-medium">System Alerts</span>
                    <Badge variant="destructive" className="ml-auto">
                      {systemAlerts.filter(alert => alert.type === 'error').length}
                    </Badge>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Critical system notifications
                  </div>
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle className="flex items-center gap-2">
                    <Bell className="h-5 w-5" />
                    System Alerts
                  </DrawerTitle>
                  <DrawerDescription>
                    Recent system notifications and alerts
                  </DrawerDescription>
                </DrawerHeader>
                <div className="p-4 space-y-3">
                  {systemAlerts.map((alert) => (
                    <div key={alert.id} className="flex items-start gap-3 p-3 border rounded-lg">
                      <div className="mt-0.5">
                        {alert.type === 'error' && <AlertTriangle className="h-4 w-4 text-red-500" />}
                        {alert.type === 'warning' && <AlertTriangle className="h-4 w-4 text-yellow-500" />}
                        {alert.type === 'info' && <Activity className="h-4 w-4 text-blue-500" />}
                        {alert.type === 'success' && <CheckCircle className="h-4 w-4 text-green-500" />}
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium">{alert.message}</div>
                        <div className="text-xs text-muted-foreground">{alert.time}</div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
                <DrawerFooter>
                  <Button>
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Mark All Read
                  </Button>
                  <DrawerClose asChild>
                    <Button variant="outline">Close</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>

            {/* MAGI System */}
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
                  <div className="flex items-center gap-2 mb-2">
                    <Brain className="h-5 w-5" />
                    <span className="font-medium">MAGI System</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Supercomputer status and controls
                  </div>
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle className="flex items-center gap-2">
                    <Brain className="h-5 w-5" />
                    MAGI System Control
                  </DrawerTitle>
                  <DrawerDescription>
                    Monitor and control the MAGI supercomputer systems
                  </DrawerDescription>
                </DrawerHeader>
                <div className="p-4 space-y-4">
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="p-4 border rounded-lg text-center">
                      <div className="text-2xl font-bold text-blue-500">95%</div>
                      <div className="text-sm text-muted-foreground">Melchior</div>
                      <Badge variant="default" className="mt-2">Online</Badge>
                    </div>
                    <div className="p-4 border rounded-lg text-center">
                      <div className="text-2xl font-bold text-green-500">87%</div>
                      <div className="text-sm text-muted-foreground">Balthasar</div>
                      <Badge variant="default" className="mt-2">Online</Badge>
                    </div>
                    <div className="p-4 border rounded-lg text-center">
                      <div className="text-2xl font-bold text-yellow-500">73%</div>
                      <div className="text-sm text-muted-foreground">Casper</div>
                      <Badge variant="secondary" className="mt-2">Maintenance</Badge>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Auto-Defense Mode</span>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Pattern Analysis</span>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Sync Monitoring</span>
                      <Switch />
                    </div>
                  </div>
                </div>
                <DrawerFooter>
                  <Button>
                    <Save className="mr-2 h-4 w-4" />
                    Apply Settings
                  </Button>
                  <DrawerClose asChild>
                    <Button variant="outline">Close</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>

      {/* Contact Form Drawer */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Contact Form Drawer</h2>
        <div className="border rounded-lg p-6 bg-card">
          <Drawer>
            <DrawerTrigger asChild>
              <Button>
                <MessageSquare className="mr-2 h-4 w-4" />
                Contact Us
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Contact Us</DrawerTitle>
                <DrawerDescription>
                  Send us a message and we'll get back to you as soon as possible.
                </DrawerDescription>
              </DrawerHeader>
              <div className="p-4 space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="contact-name">Name</Label>
                    <Input 
                      id="contact-name"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-email">Email</Label>
                    <Input 
                      id="contact-email"
                      type="email"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-subject">Subject</Label>
                  <Input 
                    id="contact-subject"
                    placeholder="What's this about?"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-message">Message</Label>
                  <Textarea 
                    id="contact-message"
                    placeholder="Tell us more..."
                    rows={4}
                  />
                </div>
              </div>
              <DrawerFooter>
                <Button>
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
                <DrawerClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </div>

      {/* Media Player Drawer */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Media Player Drawer</h2>
        <div className="border rounded-lg p-6 bg-card">
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="outline">
                <Music className="mr-2 h-4 w-4" />
                Now Playing
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Now Playing</DrawerTitle>
                <DrawerDescription>
                  Control your music playback
                </DrawerDescription>
              </DrawerHeader>
              <div className="p-4 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <Music className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">Cruel Angel's Thesis</div>
                    <div className="text-sm text-muted-foreground">Yoko Takahashi</div>
                    <div className="text-xs text-muted-foreground">Neon Genesis Evangelion OST</div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>1:23</span>
                    <span>4:07</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-1">
                    <div className="bg-primary h-1 rounded-full" style={{ width: '33%' }}></div>
                  </div>
                </div>
                
                <div className="flex items-center justify-center gap-4">
                  <Button variant="ghost" size="sm">
                    <SkipBack className="h-5 w-5" />
                  </Button>
                  <Button size="lg" className="rounded-full">
                    <Play className="h-6 w-6" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <SkipForward className="h-5 w-5" />
                  </Button>
                </div>
                
                <div className="flex items-center gap-2">
                  <Volume2 className="h-4 w-4" />
                  <div className="flex-1 bg-secondary rounded-full h-1">
                    <div className="bg-primary h-1 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
              </div>
              <DrawerFooter>
                <Button variant="outline">
                  <Share className="mr-2 h-4 w-4" />
                  Share
                </Button>
                <DrawerClose asChild>
                  <Button variant="outline">Close</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </div>

      {/* Quick Actions Grid */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Quick Actions</h2>
        <div className="grid gap-4 md:grid-cols-4">
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="outline" className="h-20 flex flex-col gap-2">
                <Filter className="h-5 w-5" />
                <span className="text-sm">Filters</span>
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Filter Options</DrawerTitle>
                <DrawerDescription>Customize your view</DrawerDescription>
              </DrawerHeader>
              <div className="p-4 space-y-4">
                <div className="space-y-2">
                  <Label>Category</Label>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">All</Badge>
                    <Badge>Active</Badge>
                    <Badge variant="outline">Inactive</Badge>
                    <Badge variant="outline">Pending</Badge>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Date Range</Label>
                  <div className="flex gap-2">
                    <Input type="date" />
                    <Input type="date" />
                  </div>
                </div>
              </div>
              <DrawerFooter>
                <Button>Apply Filters</Button>
                <DrawerClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>

          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="outline" className="h-20 flex flex-col gap-2">
                <Download className="h-5 w-5" />
                <span className="text-sm">Export</span>
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Export Data</DrawerTitle>
                <DrawerDescription>Choose export format</DrawerDescription>
              </DrawerHeader>
              <div className="p-4 space-y-4">
                <div className="grid gap-2">
                  <Button variant="outline" className="justify-start">
                    <FileText className="mr-2 h-4 w-4" />
                    Export as CSV
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <FileText className="mr-2 h-4 w-4" />
                    Export as PDF
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <Image className="mr-2 h-4 w-4" />
                    Export as Image
                  </Button>
                </div>
              </div>
              <DrawerFooter>
                <DrawerClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>

          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="outline" className="h-20 flex flex-col gap-2">
                <Upload className="h-5 w-5" />
                <span className="text-sm">Import</span>
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Import Data</DrawerTitle>
                <DrawerDescription>Upload your files</DrawerDescription>
              </DrawerHeader>
              <div className="p-4 space-y-4">
                <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
                  <Upload className="mx-auto h-12 w-12 text-muted-foreground" />
                  <div className="mt-4">
                    <Button variant="outline">Choose Files</Button>
                    <p className="text-sm text-muted-foreground mt-2">
                      or drag and drop files here
                    </p>
                  </div>
                </div>
              </div>
              <DrawerFooter>
                <Button>Upload Files</Button>
                <DrawerClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>

          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="outline" className="h-20 flex flex-col gap-2">
                <Search className="h-5 w-5" />
                <span className="text-sm">Search</span>
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Advanced Search</DrawerTitle>
                <DrawerDescription>Find exactly what you're looking for</DrawerDescription>
              </DrawerHeader>
              <div className="p-4 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="search-query">Search Query</Label>
                  <Input 
                    id="search-query"
                    placeholder="Enter search terms..."
                  />
                </div>
                <div className="space-y-2">
                  <Label>Search In</Label>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Title</Badge>
                    <Badge variant="outline">Content</Badge>
                    <Badge variant="outline">Tags</Badge>
                    <Badge variant="outline">Author</Badge>
                  </div>
                </div>
              </div>
              <DrawerFooter>
                <Button>
                  <Search className="mr-2 h-4 w-4" />
                  Search
                </Button>
                <DrawerClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </div>

      {/* Usage Guidelines */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Usage Guidelines</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="border rounded-lg p-4 bg-card">
            <h3 className="font-medium mb-2 text-green-600">✓ Do</h3>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• Use drawers for mobile-first navigation</li>
              <li>• Include clear headers and descriptions</li>
              <li>• Provide obvious close actions</li>
              <li>• Keep content organized and scannable</li>
              <li>• Use appropriate trigger buttons</li>
              <li>• Consider drawer height for content</li>
            </ul>
          </div>
          <div className="border rounded-lg p-4 bg-card">
            <h3 className="font-medium mb-2 text-red-600">✗ Don't</h3>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• Overload drawers with too much content</li>
              <li>• Use drawers for critical actions on desktop</li>
              <li>• Forget to handle keyboard navigation</li>
              <li>• Make drawers too tall for mobile screens</li>
              <li>• Use multiple drawers simultaneously</li>
              <li>• Ignore accessibility considerations</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}