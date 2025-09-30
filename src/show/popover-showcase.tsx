import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Switch } from '@/components/ui/switch'
import { Separator } from '@/components/ui/separator'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import {
  Settings,
  User,
  Calendar,
  Clock,
  Info,
  HelpCircle,
  Share2,
  Filter,
  MoreHorizontal,
  Bell,
  Search,
  Palette,
  Volume2,
  Wifi,
  Battery,
  Signal,
  Download,
  Upload,
  Eye,
  EyeOff,
  Lock,
  Unlock,
  Power,
  RefreshCw,
  Trash2,
  Edit,
  Copy,
  ExternalLink,
  Star,
  Heart,
  Bookmark,
  MessageSquare,
  Send,
  Plus,
  Minus,
  X,
  Check,
  AlertTriangle,
  Zap,
  Shield,
  Target,
  Activity,
  BarChart3,
  TrendingUp,
  Users,
  Globe,
  Database,
  Server,
  Monitor,
  Smartphone,
  Tablet,
  Laptop,
  Headphones,
  Camera,
  Mic,
  Video,
  Image,
  File,
  Folder,
  Archive,
  Package,
  ShoppingCart,
  CreditCard,
  DollarSign,
  Percent,
  Tag,
  Gift,
  Award,
  Trophy,
  Medal,
  Crown,
  Gem,
  Sparkles,
  Flame,
  Snowflake,
  Sun,
  Moon,
  Cloud,
  CloudRain,
  Umbrella,
  Wind,
  Thermometer,
  Compass,
  Map,
  MapPin,
  Navigation,
  Route,
  Car,
  Plane,
  Train,
  Ship,
  Bike,
  Walk,
  Home,
  Building,
  Store,
  Factory,
  School,
  Hospital,
  Church,
  Bank,
  Hotel,
  Restaurant,
  Coffee,
  Pizza,
  Utensils,
  Wine,
  Beer,
  Cake,
  Apple,
  Cherry,
  Grape,
  Banana,
  Carrot,
  Leaf,
  Tree,
  Flower,
  Seedling,
  Bug,
  Fish,
  Bird,
  Cat,
  Dog,
  Rabbit,
  Turtle,
  Butterfly,
  Bee,
  Spider,
  Snail,
  Worm,
  Ant,
  Ladybug,
  Dragonfly,
  Mosquito,
  Fly,
  Beetle,
  Cricket,
  Grasshopper,
  Mantis,
  Scorpion,
  Snake,
  Lizard,
  Frog,
  Mouse,
  Rat,
  Hamster,
  Squirrel,
  Hedgehog,
  Bat,
  Bear,
  Wolf,
  Fox,
  Lion,
  Tiger,
  Elephant,
  Giraffe,
  Zebra,
  Horse,
  Cow,
  Pig,
  Sheep,
  Goat,
  Chicken,
  Duck,
  Turkey,
  Penguin,
  Eagle,
  Owl,
  Parrot,
  Flamingo,
  Swan,
  Peacock,
  Dove,
  Crow,
  Robin,
  Sparrow,
  Hummingbird,
  Woodpecker,
  Pelican,
  Seagull,
  Albatross,
  Ostrich,
  Emu,
  Kiwi,
  Toucan,
  Vulture,
  Hawk,
  Falcon,
  Kestrel,
  Buzzard,
  Harrier,
  Kite,
  Condor,
  Crane,
  Heron,
  Stork,
  Ibis,
  Spoonbill,
  Bittern,
  Egret,
  Cormorant,
  Gannet,
  Booby,
  Frigatebird,
  Tropicbird,
  Petrel,
  Shearwater,
  Skua,
  Jaeger,
  Tern,
  Gull,
  Auk,
  Puffin,
  Murre,
  Guillemot,
  Razorbill,
  Dovekie,
  Auklet,
  Murrelet,
  Noddy,
  Skimmer,
  Plover,
  Sandpiper,
  Turnstone,
  Knot,
  Sanderling,
  Dunlin,
  Stint,
  Curlew,
  Godwit,
  Dowitcher,
  Snipe,
  Woodcock,
  Phalarope,
  Avocet,
  Stilt,
  Oystercatcher,
  Lapwing,
  Killdeer,
  Dotterel,
  Courser,
  Pratincole,
  Thick,
  Stone,
  Bustard,
  Buttonquail,
  Sandgrouse,
  Pigeon,
  Cuckoo,
  Roadrunner,
  Ani,
  Coucal,
  Malkoha,
  Coua,
  Turaco,
  Hoatzin,
  Barn,
  Screech,
  Great,
  Horned,
  Snowy,
  Burrowing,
  Spotted,
  Barred,
  Long,
  Eared,
  Short,
  Saw,
  Whet,
  Boreal,
  Northern,
  Pygmy,
  Elf,
  Flammulated,
  Whiskered,
  Tawny,
  Strix,
  Asio,
  Aegolius,
  Glaucidium,
  Micrathene,
  Otus,
  Megascops,
  Bubo,
  Nyctea,
  Surnia,
  Athene,
  Speotyto,
  Ninox,
  Tyto,
  Phodilus,
  Jubula,
  Lophostrix,
  Pseudoscops,
  Strigiops,
  Nesasio,
  Sceloglaux,
  Mascarenotus,
  Grallistrix,
  Ornimegalonyx
} from 'lucide-react'

export default function PopoverShowcase() {
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [volume, setVolume] = useState(75)

  return (
    <div className="space-y-8 p-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Popover Component</h1>
        <p className="text-muted-foreground">
          A floating content container that appears on top of other content when triggered.
        </p>
      </div>

      <Separator />

      {/* Basic Examples */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Basic Examples</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Simple Popover */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Simple Popover</CardTitle>
              <CardDescription>Basic popover with text content</CardDescription>
            </CardHeader>
            <CardContent>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline">Open Popover</Button>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="space-y-2">
                    <h4 className="font-medium leading-none">Popover Title</h4>
                    <p className="text-sm text-muted-foreground">
                      This is a simple popover with some text content. You can put any content here.
                    </p>
                  </div>
                </PopoverContent>
              </Popover>
            </CardContent>
          </Card>

          {/* Info Popover */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Info Popover</CardTitle>
              <CardDescription>Popover with help information</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <span className="text-sm">Need help?</span>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                      <HelpCircle className="h-4 w-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-64">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Info className="h-4 w-4 text-blue-500" />
                        <h4 className="font-medium">Help Information</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        This feature allows you to manage your account settings and preferences.
                      </p>
                      <div className="flex space-x-2 pt-2">
                        <Button size="sm" variant="outline">Learn More</Button>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </CardContent>
          </Card>

          {/* User Profile Popover */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">User Profile</CardTitle>
              <CardDescription>Profile information popover</CardDescription>
            </CardHeader>
            <CardContent>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="ghost" className="h-10 w-10 rounded-full p-0">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder-avatar.jpg" alt="User" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src="/placeholder-avatar.jpg" alt="User" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-medium">John Doe</h4>
                        <p className="text-sm text-muted-foreground">john.doe@example.com</p>
                      </div>
                    </div>
                    <Separator />
                    <div className="space-y-2">
                      <Button variant="ghost" className="w-full justify-start" size="sm">
                        <User className="mr-2 h-4 w-4" />
                        View Profile
                      </Button>
                      <Button variant="ghost" className="w-full justify-start" size="sm">
                        <Settings className="mr-2 h-4 w-4" />
                        Settings
                      </Button>
                      <Button variant="ghost" className="w-full justify-start" size="sm">
                        <Power className="mr-2 h-4 w-4" />
                        Sign Out
                      </Button>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Form Examples */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Form Examples</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Settings Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Settings Form</CardTitle>
              <CardDescription>Popover with form controls</CardDescription>
            </CardHeader>
            <CardContent>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline">
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="font-medium leading-none">Settings</h4>
                      <p className="text-sm text-muted-foreground">
                        Configure your preferences
                      </p>
                    </div>
                    <Separator />
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="notifications" className="text-sm">
                          Notifications
                        </Label>
                        <Switch
                          id="notifications"
                          checked={isNotificationsEnabled}
                          onCheckedChange={setIsNotificationsEnabled}
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="dark-mode" className="text-sm">
                          Dark Mode
                        </Label>
                        <Switch
                          id="dark-mode"
                          checked={isDarkMode}
                          onCheckedChange={setIsDarkMode}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="volume" className="text-sm">
                          Volume: {volume}%
                        </Label>
                        <input
                          id="volume"
                          type="range"
                          min="0"
                          max="100"
                          value={volume}
                          onChange={(e) => setVolume(Number(e.target.value))}
                          className="w-full"
                        />
                      </div>
                    </div>
                    <div className="flex space-x-2 pt-2">
                      <Button size="sm" className="flex-1">Save</Button>
                      <Button size="sm" variant="outline" className="flex-1">Cancel</Button>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Contact Form</CardTitle>
              <CardDescription>Quick contact form in popover</CardDescription>
            </CardHeader>
            <CardContent>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Contact Us
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="font-medium leading-none">Contact Us</h4>
                      <p className="text-sm text-muted-foreground">
                        Send us a quick message
                      </p>
                    </div>
                    <Separator />
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="Your name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="your@email.com" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea id="message" placeholder="Your message..." rows={3} />
                      </div>
                    </div>
                    <div className="flex space-x-2 pt-2">
                      <Button size="sm" className="flex-1">
                        <Send className="mr-2 h-4 w-4" />
                        Send
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">Cancel</Button>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* NERV Command Interface */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">NERV Command Interface</h2>
        <Card className="bg-gradient-to-br from-red-950/20 to-orange-950/20 border-red-500/20">
          <CardHeader>
            <CardTitle className="text-xl text-red-400">NERV Operations Center</CardTitle>
            <CardDescription className="text-red-300/70">
              Advanced popover controls for Eva Unit management
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* System Status */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="h-20 flex-col border-blue-500/30 hover:border-blue-400">
                    <Activity className="h-6 w-6 mb-2 text-blue-400" />
                    <span className="text-sm">System Status</span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80 bg-slate-900/95 border-blue-500/30">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Activity className="h-5 w-5 text-blue-400" />
                      <h4 className="font-medium text-blue-100">MAGI System Status</h4>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-slate-300">MELCHIOR</span>
                        <Badge variant="secondary" className="bg-green-500/20 text-green-400">ONLINE</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-slate-300">BALTHASAR</span>
                        <Badge variant="secondary" className="bg-green-500/20 text-green-400">ONLINE</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-slate-300">CASPER</span>
                        <Badge variant="secondary" className="bg-yellow-500/20 text-yellow-400">STANDBY</Badge>
                      </div>
                    </div>
                    <Separator className="bg-slate-700" />
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-300">CPU Usage</span>
                        <span className="text-blue-400">23%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-300">Memory</span>
                        <span className="text-blue-400">67%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-300">Network</span>
                        <span className="text-green-400">Stable</span>
                      </div>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>

              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="h-20 flex-col border-purple-500/30 hover:border-purple-400">
                    <Shield className="h-6 w-6 mb-2 text-purple-400" />
                    <span className="text-sm">Eva Units</span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80 bg-slate-900/95 border-purple-500/30">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Shield className="h-5 w-5 text-purple-400" />
                      <h4 className="font-medium text-purple-100">Eva Unit Status</h4>
                    </div>
                    <div className="space-y-3">
                      <div className="p-3 rounded-lg bg-purple-500/10 border border-purple-500/20">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium text-purple-200">Unit-01</span>
                          <Badge variant="secondary" className="bg-green-500/20 text-green-400">ACTIVE</Badge>
                        </div>
                        <div className="text-xs text-slate-400 space-y-1">
                          <div className="flex justify-between">
                            <span>Pilot: Shinji Ikari</span>
                            <span>Sync: 98.7%</span>
                          </div>
                          <div className="flex justify-between">
                            <span>AT Field: Stable</span>
                            <span>Power: 100%</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium text-red-200">Unit-02</span>
                          <Badge variant="secondary" className="bg-red-500/20 text-red-400">STANDBY</Badge>
                        </div>
                        <div className="text-xs text-slate-400 space-y-1">
                          <div className="flex justify-between">
                            <span>Pilot: Asuka Langley</span>
                            <span>Sync: 45.2%</span>
                          </div>
                          <div className="flex justify-between">
                            <span>AT Field: Inactive</span>
                            <span>Power: 67%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>

              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="h-20 flex-col border-orange-500/30 hover:border-orange-400">
                    <AlertTriangle className="h-6 w-6 mb-2 text-orange-400" />
                    <span className="text-sm">Alerts</span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80 bg-slate-900/95 border-orange-500/30">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <AlertTriangle className="h-5 w-5 text-orange-400" />
                      <h4 className="font-medium text-orange-100">System Alerts</h4>
                    </div>
                    <div className="space-y-3">
                      <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20">
                        <div className="flex items-start space-x-2">
                          <AlertTriangle className="h-4 w-4 text-red-400 mt-0.5" />
                          <div>
                            <p className="text-sm font-medium text-red-200">Angel Detected</p>
                            <p className="text-xs text-slate-400">Pattern Blue confirmed - 15th Angel approaching</p>
                            <p className="text-xs text-slate-500">2 minutes ago</p>
                          </div>
                        </div>
                      </div>
                      <div className="p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                        <div className="flex items-start space-x-2">
                          <Info className="h-4 w-4 text-yellow-400 mt-0.5" />
                          <div>
                            <p className="text-sm font-medium text-yellow-200">Maintenance Required</p>
                            <p className="text-xs text-slate-400">Unit-00 requires scheduled maintenance</p>
                            <p className="text-xs text-slate-500">1 hour ago</p>
                          </div>
                        </div>
                      </div>
                      <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20">
                        <div className="flex items-start space-x-2">
                          <Info className="h-4 w-4 text-blue-400 mt-0.5" />
                          <div>
                            <p className="text-sm font-medium text-blue-200">System Update</p>
                            <p className="text-xs text-slate-400">MAGI firmware updated successfully</p>
                            <p className="text-xs text-slate-500">3 hours ago</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Action Popovers */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Action Popovers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Share Popover */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Share</CardTitle>
            </CardHeader>
            <CardContent>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full">
                    <Share2 className="mr-2 h-4 w-4" />
                    Share
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-64">
                  <div className="space-y-4">
                    <h4 className="font-medium">Share this content</h4>
                    <div className="space-y-2">
                      <Button variant="ghost" className="w-full justify-start" size="sm">
                        <Copy className="mr-2 h-4 w-4" />
                        Copy Link
                      </Button>
                      <Button variant="ghost" className="w-full justify-start" size="sm">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Open in New Tab
                      </Button>
                      <Button variant="ghost" className="w-full justify-start" size="sm">
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </CardContent>
          </Card>

          {/* Filter Popover */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Filter</CardTitle>
            </CardHeader>
            <CardContent>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full">
                    <Filter className="mr-2 h-4 w-4" />
                    Filter
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-64">
                  <div className="space-y-4">
                    <h4 className="font-medium">Filter Options</h4>
                    <div className="space-y-3">
                      <div className="space-y-2">
                        <Label className="text-sm">Status</Label>
                        <div className="space-y-1">
                          <label className="flex items-center space-x-2 text-sm">
                            <input type="checkbox" className="rounded" defaultChecked />
                            <span>Active</span>
                          </label>
                          <label className="flex items-center space-x-2 text-sm">
                            <input type="checkbox" className="rounded" />
                            <span>Inactive</span>
                          </label>
                          <label className="flex items-center space-x-2 text-sm">
                            <input type="checkbox" className="rounded" />
                            <span>Pending</span>
                          </label>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label className="text-sm">Date Range</Label>
                        <Input type="date" className="text-sm" />
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" className="flex-1">Apply</Button>
                      <Button size="sm" variant="outline" className="flex-1">Reset</Button>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </CardContent>
          </Card>

          {/* More Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">More Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full">
                    <MoreHorizontal className="mr-2 h-4 w-4" />
                    More
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-48">
                  <div className="space-y-1">
                    <Button variant="ghost" className="w-full justify-start" size="sm">
                      <Edit className="mr-2 h-4 w-4" />
                      Edit
                    </Button>
                    <Button variant="ghost" className="w-full justify-start" size="sm">
                      <Copy className="mr-2 h-4 w-4" />
                      Duplicate
                    </Button>
                    <Button variant="ghost" className="w-full justify-start" size="sm">
                      <Archive className="mr-2 h-4 w-4" />
                      Archive
                    </Button>
                    <Separator />
                    <Button variant="ghost" className="w-full justify-start text-red-600" size="sm">
                      <Trash2 className="mr-2 h-4 w-4" />
                      Delete
                    </Button>
                  </div>
                </PopoverContent>
              </Popover>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full">
                    <Zap className="mr-2 h-4 w-4" />
                    Quick
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-48">
                  <div className="space-y-1">
                    <Button variant="ghost" className="w-full justify-start" size="sm">
                      <Star className="mr-2 h-4 w-4" />
                      Add to Favorites
                    </Button>
                    <Button variant="ghost" className="w-full justify-start" size="sm">
                      <Bookmark className="mr-2 h-4 w-4" />
                      Bookmark
                    </Button>
                    <Button variant="ghost" className="w-full justify-start" size="sm">
                      <Heart className="mr-2 h-4 w-4" />
                      Like
                    </Button>
                    <Button variant="ghost" className="w-full justify-start" size="sm">
                      <Bell className="mr-2 h-4 w-4" />
                      Subscribe
                    </Button>
                  </div>
                </PopoverContent>
              </Popover>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Usage Guidelines */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage Guidelines</h2>
        <Card>
          <CardHeader>
            <CardTitle>When to Use Popovers</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-green-600 mb-2">✅ Good Use Cases</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Additional information or help text</li>
                  <li>• Quick forms and settings</li>
                  <li>• User profile menus</li>
                  <li>• Action menus and options</li>
                  <li>• Contextual information</li>
                  <li>• Non-critical notifications</li>
                  <li>• Quick preview content</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-red-600 mb-2">❌ Avoid Using For</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Critical actions or confirmations</li>
                  <li>• Long forms or complex content</li>
                  <li>• Primary navigation</li>
                  <li>• Error messages</li>
                  <li>• Content that needs to be always visible</li>
                  <li>• Mobile-first interfaces (consider drawer instead)</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}