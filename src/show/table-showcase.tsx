import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Checkbox } from '@/components/ui/checkbox'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Search,
  Filter,
  Download,
  Upload,
  MoreHorizontal,
  Edit,
  Trash2,
  Eye,
  Star,
  StarOff,
  ArrowUpDown,
  ArrowUp,
  ArrowDown,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Calendar,
  Clock,
  User,
  Mail,
  Phone,
  MapPin,
  Building,
  Briefcase,
  DollarSign,
  TrendingUp,
  TrendingDown,
  Activity,
  Shield,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Zap,
  Target,
  Award,
  Users,
  Database,
  Server,
  Monitor,
  Cpu,
  HardDrive,
  Wifi,
  Signal,
  Battery,
  Power,
  Settings,
  RefreshCw,
  FileText,
  Image,
  Video,
  Music,
  Archive,
  Package,
  ShoppingCart,
  CreditCard,
  Tag,
  Gift,
  Percent,
  Hash,
  AtSign,
  Globe,
  Link,
  ExternalLink,
  Copy,
  Share2,
  Bookmark,
  Heart,
  MessageSquare,
  Send,
  Bell,
  BellOff,
  Volume2,
  VolumeX,
  Play,
  Pause,
  Stop,
  SkipBack,
  SkipForward,
  Repeat,
  Shuffle,
  Mic,
  MicOff,
  Camera,
  CameraOff,
  VideoIcon,
  VideoOff,
  Headphones,
  Speaker,
  Radio,
  Tv,
  Smartphone,
  Tablet,
  Laptop,
  Watch,
  Gamepad2,
  Keyboard,
  Mouse,
  Printer,
  Scanner,
  Fax,
  Router,
  Modem,
  Ethernet,
  Bluetooth,
  Usb,
  SdCard,
  HardDriveIcon,
  Disc,
  Save,
  FolderOpen,
  Folder,
  File,
  FilePlus,
  FileX,
  FileEdit,
  FileCheck,
  FileWarning,
  FileImage,
  FileVideo,
  FileAudio,
  FileCode,
  FileSpreadsheet,
  FileText as FileTextIcon,
  FilePdf,
  FileArchive,
  Paperclip,
  Scissors,
  Clipboard,
  ClipboardCopy,
  ClipboardCheck,
  ClipboardX,
  ClipboardList,
  ClipboardPaste,
  Undo,
  Redo,
  RotateCcw,
  RotateCw,
  FlipHorizontal,
  FlipVertical,
  Crop,
  Move,
  Resize,
  ZoomIn,
  ZoomOut,
  Maximize,
  Minimize,
  Maximize2,
  Minimize2,
  Square,
  Circle,
  Triangle,
  Hexagon,
  Octagon,
  Pentagon,
  Diamond,
  Plus,
  Minus,
  X,
  Check,
  CheckCheck,
  Slash,
  Equal,
  NotEqual,
  MoreVertical,
  Menu,
  Grid,
  List,
  Columns,
  Rows,
  Layout,
  LayoutGrid,
  LayoutList,
  Sidebar,
  PanelLeft,
  PanelRight,
  PanelTop,
  PanelBottom,
  PanelLeftOpen,
  PanelRightOpen,
  PanelTopOpen,
  PanelBottomOpen,
  SplitSquareHorizontal,
  SplitSquareVertical,
  Combine,
  Separate,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  AlignVerticalJustifyCenter,
  AlignVerticalJustifyStart,
  AlignVerticalJustifyEnd,
  AlignHorizontalJustifyCenter,
  AlignHorizontalJustifyStart,
  AlignHorizontalJustifyEnd,
  AlignStartVertical,
  AlignCenterVertical,
  AlignEndVertical,
  AlignStartHorizontal,
  AlignCenterHorizontal,
  AlignEndHorizontal,
  DistributeHorizontal,
  DistributeVertical,
  WrapText,
  Type,
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Subscript,
  Superscript,
  Quote,
  Code,
  Code2,
  Terminal,
  Command,
  Hash as HashIcon,
  Heading,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Paragraph,
  Text,
  TextCursor,
  TextSelect,
  CaseSensitive,
  CaseUpper,
  CaseLower,
  RemoveFormatting,
  Highlighter,
  Palette,
  Paintbrush,
  Paintbrush2,
  Pipette,
  Dropper,
  Brush,
  Pen,
  PenTool,
  Pencil,
  Edit2,
  Edit3,
  Eraser,
  Ruler,
  Compass,
  Protractor,
  Straighten,
  Spline,
  Bezier,
  Vector,
  Shapes,
  Box,
  Cube,
  Sphere,
  Cylinder,
  Cone,
  Pyramid,
  Torus,
  Dodecahedron,
  Icosahedron,
  Tetrahedron,
  Octahedron,
  Plane,
  Mesh,
  Wireframe,
  Material,
  Texture,
  Light,
  Shadow,
  Reflection,
  Refraction,
  Transparency,
  Opacity,
  Gradient,
  Pattern,
  Noise,
  Blur,
  Sharpen,
  Contrast,
  Brightness,
  Saturation,
  Hue,
  Invert,
  Sepia,
  Grayscale,
  Vintage,
  Vignette,
  Fisheye,
  Lens,
  Focus,
  Aperture,
  Shutter,
  Iso,
  Exposure,
  WhiteBalance,
  Flash,
  Timer,
  SelfTimer,
  Burst,
  Panorama,
  Portrait,
  Landscape,
  Macro,
  Telephoto,
  WideAngle,
  Zoom,
  Autofocus,
  ManualFocus,
  Stabilization,
  AntiShake,
  RedEye,
  Histogram,
  Grid3x3,
  Crosshair,
  Target as TargetIcon,
  Scope,
  Radar,
  Sonar,
  Satellite,
  Gps,
  Navigation as NavigationIcon,
  Compass as CompassIcon,
  Map,
  MapPin as MapPinIcon,
  Route,
  Directions,
  Signpost,
  Milestone,
  Flag,
  FlagTriangleLeft,
  FlagTriangleRight,
  Bookmark as BookmarkIcon,
  BookmarkPlus,
  BookmarkMinus,
  BookmarkX,
  BookmarkCheck,
  BookOpen,
  BookClosed,
  Library,
  Newspaper,
  Magazine,
  Journal,
  Notebook,
  Notepad,
  Sticky,
  PostIt,
  Note,
  Notes,
  Memo,
  Todo,
  Task,
  Checklist,
  CheckSquare,
  Square as SquareIcon,
  CheckCircle2,
  Circle as CircleIcon,
  Dot,
  DotSquare,
  Minus as MinusIcon,
  Plus as PlusIcon,
  X as XIcon,
  Check as CheckIcon,
  CheckCheck as CheckCheckIcon,
  Slash as SlashIcon,
  Equal as EqualIcon,
  NotEqual as NotEqualIcon,
  LessThan,
  LessThanEqual,
  GreaterThan,
  GreaterThanEqual,
  Approximately,
  Infinity,
  Pi,
  Sigma,
  Delta,
  Alpha,
  Beta,
  Gamma,
  Lambda,
  Mu,
  Omega,
  Phi,
  Psi,
  Theta,
  Zeta,
  Eta,
  Iota,
  Kappa,
  Nu,
  Xi,
  Omicron,
  Rho,
  Tau,
  Upsilon,
  Chi,
  Function,
  Variable,
  Constant,
  Equation,
  Formula,
  Expression,
  Calculation,
  Calculator,
  Abacus,
  Binary,
  Decimal,
  Hexadecimal,
  Octal,
  Percentage,
  Fraction,
  Ratio,
  Proportion,
  Scale,
  Measure,
  Ruler as RulerIcon,
  Tape,
  Caliper,
  Gauge,
  Speedometer,
  Tachometer,
  Barometer,
  Thermometer,
  Hygrometer,
  Anemometer,
  Seismometer,
  Geiger,
  Dosimeter,
  Voltmeter,
  Ammeter,
  Ohmmeter,
  Multimeter,
  Oscilloscope,
  Spectrum,
  Frequency,
  Amplitude,
  Wavelength,
  Phase,
  Modulation,
  Demodulation,
  Encoding,
  Decoding,
  Encryption,
  Decryption,
  Hash as HashFunction,
  Checksum,
  Signature,
  Certificate,
  Key,
  Lock,
  Unlock,
  Shield as ShieldIcon,
  ShieldCheck,
  ShieldX,
  ShieldAlert,
  ShieldOff,
  Security,
  Privacy,
  Anonymous,
  Incognito,
  Mask,
  Hidden,
  Visible,
  Invisible,
  Eye as EyeIcon,
  EyeOff,
  Show,
  Hide,
  Reveal,
  Conceal,
  Expose,
  Cover,
  Uncover,
  Wrap,
  Unwrap,
  Package as PackageIcon,
  PackageOpen,
  PackageCheck,
  PackageX,
  PackagePlus,
  PackageMinus,
  PackageSearch,
  Box as BoxIcon,
  BoxSelect,
  Container,
  Crate,
  Barrel,
  Jar,
  Bottle,
  Can,
  Tube,
  Capsule,
  Pill,
  Tablet as TabletIcon,
  Syringe,
  Bandage,
  Stethoscope,
  Thermometer as ThermometerIcon,
  Microscope,
  Telescope,
  Binoculars,
  Magnifier,
  MagnifyingGlass,
  Loupe,
  Lens as LensIcon,
  Prism,
  Mirror,
  Reflection as ReflectionIcon,
  Refraction as RefractionIcon,
  Spectrum as SpectrumIcon,
  Rainbow,
  Prism as PrismIcon,
  Crystal,
  Gem as GemIcon,
  Diamond as DiamondIcon,
  Ruby,
  Emerald,
  Sapphire,
  Topaz,
  Amethyst,
  Opal,
  Pearl,
  Coral,
  Amber,
  Jade,
  Turquoise,
  Onyx,
  Agate,
  Quartz,
  Granite,
  Marble,
  Slate,
  Sandstone,
  Limestone,
  Shale,
  Coal,
  Oil,
  Gas,
  Petroleum,
  Fuel,
  Energy,
  Power as PowerIcon,
  Electric,
  Solar,
  Wind,
  Water,
  Steam,
  Nuclear,
  Atomic,
  Molecular,
  Chemical,
  Biological,
  Organic,
  Synthetic,
  Natural,
  Artificial,
  Virtual,
  Digital,
  Analog,
  Hybrid,
  Composite,
  Complex,
  Simple,
  Basic,
  Advanced,
  Professional,
  Expert,
  Beginner,
  Intermediate,
  Novice,
  Master,
  Apprentice,
  Student,
  Teacher,
  Professor,
  Doctor,
  Nurse,
  Surgeon,
  Dentist,
  Veterinarian,
  Pharmacist,
  Therapist,
  Counselor,
  Psychologist,
  Psychiatrist,
  Neurologist,
  Cardiologist,
  Dermatologist,
  Ophthalmologist,
  Otolaryngologist,
  Orthopedist,
  Pediatrician,
  Geriatrician,
  Oncologist,
  Radiologist,
  Pathologist,
  Anesthesiologist,
  Emergency,
  Ambulance,
  Hospital as HospitalIcon,
  Clinic,
  Pharmacy,
  Laboratory,
  Research,
  Science,
  Experiment,
  Test,
  Trial,
  Study,
  Analysis,
  Investigation,
  Discovery,
  Innovation,
  Invention,
  Creation,
  Development,
  Design,
  Engineering,
  Architecture,
  Construction,
  Building as BuildingIcon,
  House,
  Home as HomeIcon,
  Office,
  Factory as FactoryIcon,
  Warehouse,
  Store as StoreIcon,
  Shop,
  Market,
  Mall,
  Supermarket,
  Restaurant as RestaurantIcon,
  Cafe,
  Bar,
  Pub,
  Club,
  Hotel as HotelIcon,
  Motel,
  Resort,
  Lodge,
  Inn,
  Hostel,
  Campground,
  Tent,
  Cabin,
  Cottage,
  Villa,
  Mansion,
  Castle,
  Palace,
  Tower,
  Skyscraper,
  Bridge,
  Tunnel,
  Road,
  Highway,
  Street,
  Avenue,
  Boulevard,
  Lane,
  Alley,
  Path,
  Trail,
  Walkway,
  Sidewalk,
  Crosswalk,
  Intersection,
  Roundabout,
  Overpass,
  Underpass,
  Ramp,
  Exit,
  Entrance,
  Gate,
  Door,
  Window,
  Balcony,
  Terrace,
  Patio,
  Deck,
  Porch,
  Veranda,
  Gazebo,
  Pergola,
  Arbor,
  Trellis,
  Fence,
  Wall,
  Barrier,
  Boundary,
  Border,
  Edge,
  Corner,
  Angle,
  Curve,
  Bend,
  Turn,
  Twist,
  Spiral,
  Helix,
  Coil,
  Spring,
  Elastic,
  Flexible,
  Rigid,
  Solid,
  Liquid,
  Gas as GasIcon,
  Plasma,
  Matter,
  Substance,
  Material as MaterialIcon,
  Element,
  Compound,
  Mixture,
  Solution,
  Suspension,
  Emulsion,
  Colloid,
  Gel,
  Foam,
  Aerosol,
  Vapor,
  Mist,
  Fog,
  Cloud as CloudIcon,
  Rain,
  Snow,
  Hail,
  Sleet,
  Ice,
  Frost,
  Dew,
  Humidity,
  Moisture,
  Dry,
  Wet,
  Damp,
  Soggy,
  Soaked,
  Dripping,
  Flowing,
  Streaming,
  Pouring,
  Gushing,
  Trickling,
  Drizzling,
  Sprinkling,
  Misting,
  Spraying,
  Splashing,
  Splashing as SplashingIcon,
  Wave,
  Ripple,
  Current,
  Tide,
  Tsunami,
  Flood,
  Drought,
  Desert,
  Oasis,
  Lake,
  River,
  Stream,
  Creek,
  Brook,
  Pond,
  Pool,
  Ocean,
  Sea,
  Bay,
  Gulf,
  Strait,
  Channel,
  Inlet,
  Outlet,
  Harbor,
  Port,
  Dock,
  Pier,
  Wharf,
  Marina,
  Lighthouse,
  Beacon,
  Buoy,
  Anchor,
  Chain,
  Rope,
  Cable,
  Wire,
  Cord,
  String,
  Thread,
  Yarn,
  Fiber,
  Fabric,
  Cloth,
  Textile,
  Cotton,
  Wool,
  Silk,
  Linen,
  Polyester,
  Nylon,
  Spandex,
  Leather,
  Fur,
  Hide,
  Skin,
  Scale,
  Feather,
  Hair,
  Beard,
  Mustache,
  Eyebrow,
  Eyelash,
  Nail,
  Claw,
  Tooth,
  Fang,
  Horn,
  Antler,
  Tusk,
  Beak,
  Bill,
  Snout,
  Nose,
  Nostril,
  Mouth,
  Lip,
  Tongue,
  Throat,
  Neck,
  Shoulder,
  Arm,
  Elbow,
  Wrist,
  Hand,
  Finger,
  Thumb,
  Palm,
  Fist,
  Knuckle,
  Chest,
  Breast,
  Stomach,
  Belly,
  Waist,
  Hip,
  Thigh,
  Knee,
  Shin,
  Calf,
  Ankle,
  Foot,
  Toe,
  Heel,
  Sole,
  Arch,
  Instep,
  Head,
  Skull,
  Brain,
  Mind,
  Thought,
  Idea,
  Concept,
  Notion,
  Theory,
  Hypothesis,
  Assumption,
  Belief,
  Opinion,
  View,
  Perspective,
  Viewpoint,
  Standpoint,
  Position,
  Stance,
  Attitude,
  Approach,
  Method,
  Technique,
  Strategy,
  Tactic,
  Plan,
  Scheme,
  Plot,
  Design as DesignIcon,
  Blueprint,
  Draft,
  Sketch,
  Drawing,
  Illustration,
  Diagram,
  Chart,
  Graph,
  Table as TableIcon,
  List as ListIcon,
  Menu as MenuIcon,
  Index,
  Catalog,
  Directory,
  Registry,
  Database as DatabaseIcon,
  Archive as ArchiveIcon,
  Library as LibraryIcon,
  Collection,
  Set,
  Group,
  Cluster,
  Bundle,
  Pack,
  Batch,
  Lot,
  Series,
  Sequence,
  Order,
  Arrangement,
  Organization,
  Structure,
  Framework,
  System,
  Network,
  Grid as GridIcon,
  Matrix,
  Array,
  Vector as VectorIcon,
  Tensor,
  Scalar,
  Field,
  Space,
  Dimension,
  Coordinate,
  Axis,
  Origin,
  Point,
  Line,
  Segment,
  Ray,
  Curve as CurveIcon,
  Arc,
  Circle as CircleGeometry,
  Ellipse,
  Oval,
  Square as SquareGeometry,
  Rectangle,
  Parallelogram,
  Rhombus,
  Trapezoid,
  Triangle as TriangleGeometry,
  Pentagon as PentagonGeometry,
  Hexagon as HexagonGeometry,
  Heptagon,
  Octagon as OctagonGeometry,
  Nonagon,
  Decagon,
  Polygon,
  Polyhedron,
  Prism as PrismGeometry,
  Pyramid as PyramidGeometry,
  Cylinder as CylinderGeometry,
  Cone as ConeGeometry,
  Sphere as SphereGeometry,
  Ellipsoid,
  Torus as TorusGeometry,
  Helix as HelixGeometry,
  Spiral as SpiralGeometry,
  Fractal,
  Mandelbrot,
  Julia,
  Sierpinski,
  Koch,
  Cantor,
  Fibonacci,
  Golden,
  Ratio as RatioIcon,
  Proportion as ProportionIcon,
  Scale as ScaleIcon,
  Size,
  Magnitude,
  Amplitude as AmplitudeIcon,
  Intensity,
  Brightness as BrightnessIcon,
  Luminosity,
  Radiance,
  Illumination,
  Light as LightIcon,
  Dark,
  Shadow as ShadowIcon,
  Shade,
  Tint,
  Hue as HueIcon,
  Saturation as SaturationIcon,
  Value,
  Chroma,
  Tone,
  Color,
  Red,
  Orange,
  Yellow,
  Green,
  Blue,
  Indigo,
  Violet,
  Purple,
  Pink,
  Brown,
  Black,
  White,
  Gray,
  Silver,
  Gold,
  Bronze,
  Copper,
  Iron,
  Steel,
  Aluminum,
  Titanium,
  Platinum,
  Palladium,
  Rhodium,
  Iridium,
  Osmium,
  Ruthenium,
  Rhenium,
  Tungsten,
  Tantalum,
  Hafnium,
  Zirconium,
  Niobium,
  Molybdenum,
  Technetium,
  Manganese,
  Chromium,
  Vanadium,
  Scandium,
  Yttrium,
  Lanthanum,
  Actinium,
  Thorium,
  Protactinium,
  Uranium,
  Neptunium,
  Plutonium,
  Americium,
  Curium,
  Berkelium,
  Californium,
  Einsteinium,
  Fermium,
  Mendelevium,
  Nobelium,
  Lawrencium,
  Rutherfordium,
  Dubnium,
  Seaborgium,
  Bohrium,
  Hassium,
  Meitnerium,
  Darmstadtium,
  Roentgenium,
  Copernicium,
  Nihonium,
  Flerovium,
  Moscovium,
  Livermorium,
  Tennessine,
  Oganesson,
  Hydrogen,
  Helium,
  Lithium,
  Beryllium,
  Boron,
  Carbon,
  Nitrogen,
  Oxygen,
  Fluorine,
  Neon,
  Sodium,
  Magnesium,
  Silicon,
  Phosphorus,
  Sulfur,
  Chlorine,
  Argon,
  Potassium,
  Calcium,
  Gallium,
  Germanium,
  Arsenic,
  Selenium,
  Bromine,
  Krypton,
  Rubidium,
  Strontium,
  Indium,
  Tin,
  Antimony,
  Tellurium,
  Iodine,
  Xenon,
  Cesium,
  Barium,
  Thallium,
  Lead,
  Bismuth,
  Polonium,
  Astatine,
  Radon,
  Francium,
  Radium,
  Cerium,
  Praseodymium,
  Neodymium,
  Promethium,
  Samarium,
  Europium,
  Gadolinium,
  Terbium,
  Dysprosium,
  Holmium,
  Erbium,
  Thulium,
  Ytterbium,
  Lutetium,
  Zinc,
  Cadmium,
  Mercury,
  Nickel,
  Cobalt
} from 'lucide-react'

// Sample data for different table examples
const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
]

const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "Admin",
    status: "Active",
    lastLogin: "2024-01-15",
    avatar: "/placeholder-avatar.jpg"
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    role: "User",
    status: "Active",
    lastLogin: "2024-01-14",
    avatar: "/placeholder-avatar.jpg"
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob@example.com",
    role: "Moderator",
    status: "Inactive",
    lastLogin: "2024-01-10",
    avatar: "/placeholder-avatar.jpg"
  },
  {
    id: 4,
    name: "Alice Brown",
    email: "alice@example.com",
    role: "User",
    status: "Active",
    lastLogin: "2024-01-16",
    avatar: "/placeholder-avatar.jpg"
  },
  {
    id: 5,
    name: "Charlie Wilson",
    email: "charlie@example.com",
    role: "Admin",
    status: "Pending",
    lastLogin: "Never",
    avatar: "/placeholder-avatar.jpg"
  },
]

const products = [
  {
    id: "PROD001",
    name: "Wireless Headphones",
    category: "Electronics",
    price: 99.99,
    stock: 45,
    status: "In Stock",
    rating: 4.5,
    sales: 234
  },
  {
    id: "PROD002",
    name: "Smart Watch",
    category: "Electronics",
    price: 299.99,
    stock: 12,
    status: "Low Stock",
    rating: 4.8,
    sales: 156
  },
  {
    id: "PROD003",
    name: "Coffee Maker",
    category: "Appliances",
    price: 149.99,
    stock: 0,
    status: "Out of Stock",
    rating: 4.2,
    sales: 89
  },
  {
    id: "PROD004",
    name: "Desk Lamp",
    category: "Furniture",
    price: 79.99,
    stock: 23,
    status: "In Stock",
    rating: 4.0,
    sales: 67
  },
  {
    id: "PROD005",
    name: "Bluetooth Speaker",
    category: "Electronics",
    price: 59.99,
    stock: 8,
    status: "Low Stock",
    rating: 4.6,
    sales: 198
  },
]

const evaUnits = [
  {
    unit: "Unit-01",
    pilot: "Shinji Ikari",
    syncRatio: 98.7,
    status: "Active",
    atField: "Stable",
    powerLevel: 100,
    lastDeployment: "2024-01-15",
    batteryLife: "5:00",
    condition: "Excellent"
  },
  {
    unit: "Unit-02",
    pilot: "Asuka Langley",
    syncRatio: 45.2,
    status: "Standby",
    atField: "Inactive",
    powerLevel: 67,
    lastDeployment: "2024-01-10",
    batteryLife: "4:30",
    condition: "Good"
  },
  {
    unit: "Unit-00",
    pilot: "Rei Ayanami",
    syncRatio: 72.1,
    status: "Maintenance",
    atField: "Unstable",
    powerLevel: 0,
    lastDeployment: "2024-01-08",
    batteryLife: "0:00",
    condition: "Damaged"
  },
  {
    unit: "Unit-03",
    pilot: "Toji Suzuhara",
    syncRatio: 23.4,
    status: "Destroyed",
    atField: "None",
    powerLevel: 0,
    lastDeployment: "2024-01-05",
    batteryLife: "0:00",
    condition: "Destroyed"
  },
]

const systemMetrics = [
  {
    component: "MAGI MELCHIOR",
    cpu: 23,
    memory: 67,
    network: 45,
    status: "Online",
    uptime: "99.9%",
    lastCheck: "2024-01-16 14:30"
  },
  {
    component: "MAGI BALTHASAR",
    cpu: 18,
    memory: 72,
    network: 52,
    status: "Online",
    uptime: "99.8%",
    lastCheck: "2024-01-16 14:30"
  },
  {
    component: "MAGI CASPER",
    cpu: 89,
    memory: 91,
    network: 23,
    status: "Warning",
    uptime: "97.2%",
    lastCheck: "2024-01-16 14:29"
  },
  {
    component: "Central Dogma",
    cpu: 45,
    memory: 56,
    network: 78,
    status: "Online",
    uptime: "100%",
    lastCheck: "2024-01-16 14:30"
  },
  {
    component: "Terminal Dogma",
    cpu: 12,
    memory: 34,
    network: 89,
    status: "Online",
    uptime: "99.9%",
    lastCheck: "2024-01-16 14:30"
  },
]

export default function TableShowcase() {
  const [selectedUsers, setSelectedUsers] = useState<number[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [sortField, setSortField] = useState<string | null>(null)
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc')

  const handleSelectUser = (userId: number) => {
    setSelectedUsers(prev => 
      prev.includes(userId) 
        ? prev.filter(id => id !== userId)
        : [...prev, userId]
    )
  }

  const handleSelectAll = () => {
    setSelectedUsers(prev => 
      prev.length === users.length ? [] : users.map(user => user.id)
    )
  }

  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc')
    } else {
      setSortField(field)
      setSortDirection('asc')
    }
  }

  const getSortIcon = (field: string) => {
    if (sortField !== field) return <ArrowUpDown className="h-4 w-4" />
    return sortDirection === 'asc' ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />
  }

  const getStatusBadge = (status: string) => {
    const variants: Record<string, "default" | "secondary" | "destructive" | "outline"> = {
      "Paid": "default",
      "Pending": "secondary",
      "Unpaid": "destructive",
      "Active": "default",
      "Inactive": "secondary",
      "In Stock": "default",
      "Low Stock": "secondary",
      "Out of Stock": "destructive",
      "Online": "default",
      "Warning": "secondary",
      "Offline": "destructive",
      "Stable": "default",
      "Unstable": "secondary",
      "None": "destructive",
      "Excellent": "default",
      "Good": "secondary",
      "Damaged": "destructive",
      "Destroyed": "destructive",
      "Standby": "outline",
      "Maintenance": "secondary"
    }
    
    return <Badge variant={variants[status] || "outline"}>{status}</Badge>
  }

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.role.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-8 p-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Table Component</h1>
        <p className="text-muted-foreground">
          A flexible table component for displaying structured data with support for sorting, filtering, and selection.
        </p>
      </div>

      <Separator />

      {/* Basic Table */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Basic Table</h2>
        <Card>
          <CardHeader>
            <CardTitle>Invoice List</CardTitle>
            <CardDescription>A simple table showing invoice data</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableCaption>A list of your recent invoices.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Invoice</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Method</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoices.map((invoice) => (
                  <TableRow key={invoice.invoice}>
                    <TableCell className="font-medium">{invoice.invoice}</TableCell>
                    <TableCell>{getStatusBadge(invoice.paymentStatus)}</TableCell>
                    <TableCell>{invoice.paymentMethod}</TableCell>
                    <TableCell className="text-right">{invoice.totalAmount}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell colSpan={3}>Total</TableCell>
                  <TableCell className="text-right">$2,500.00</TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </CardContent>
        </Card>
      </div>

      {/* Interactive Table with Selection */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Interactive Table</h2>
        <Card>
          <CardHeader>
            <CardTitle>User Management</CardTitle>
            <CardDescription>Table with selection, search, and actions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Search and Actions */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search users..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-8 w-[300px]"
                  />
                </div>
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
                <Button size="sm">
                  <User className="h-4 w-4 mr-2" />
                  Add User
                </Button>
              </div>
            </div>

            {/* Selected Items Info */}
            {selectedUsers.length > 0 && (
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <span className="text-sm">
                  {selectedUsers.length} user{selectedUsers.length > 1 ? 's' : ''} selected
                </span>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">
                    <Edit className="h-4 w-4 mr-2" />
                    Edit
                  </Button>
                  <Button variant="outline" size="sm">
                    <Trash2 className="h-4 w-4 mr-2" />
                    Delete
                  </Button>
                </div>
              </div>
            )}

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[50px]">
                    <Checkbox
                      checked={selectedUsers.length === filteredUsers.length}
                      onCheckedChange={handleSelectAll}
                      aria-label="Select all users"
                    />
                  </TableHead>
                  <TableHead>User</TableHead>
                  <TableHead>
                    <Button
                      variant="ghost"
                      onClick={() => handleSort('role')}
                      className="h-auto p-0 font-medium"
                    >
                      Role
                      {getSortIcon('role')}
                    </Button>
                  </TableHead>
                  <TableHead>
                    <Button
                      variant="ghost"
                      onClick={() => handleSort('status')}
                      className="h-auto p-0 font-medium"
                    >
                      Status
                      {getSortIcon('status')}
                    </Button>
                  </TableHead>
                  <TableHead>
                    <Button
                      variant="ghost"
                      onClick={() => handleSort('lastLogin')}
                      className="h-auto p-0 font-medium"
                    >
                      Last Login
                      {getSortIcon('lastLogin')}
                    </Button>
                  </TableHead>
                  <TableHead className="w-[100px]">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredUsers.map((user) => (
                  <TableRow key={user.id} data-state={selectedUsers.includes(user.id) ? "selected" : undefined}>
                    <TableCell>
                      <Checkbox
                        checked={selectedUsers.includes(user.id)}
                        onCheckedChange={() => handleSelectUser(user.id)}
                        aria-label={`Select ${user.name}`}
                      />
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={user.avatar} alt={user.name} />
                          <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{user.name}</div>
                          <div className="text-sm text-muted-foreground">{user.email}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{user.role}</Badge>
                    </TableCell>
                    <TableCell>{getStatusBadge(user.status)}</TableCell>
                    <TableCell className="text-sm text-muted-foreground">{user.lastLogin}</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem>
                            <Eye className="mr-2 h-4 w-4" />
                            View details
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Edit className="mr-2 h-4 w-4" />
                            Edit user
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-red-600">
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete user
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      {/* Product Inventory Table */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Product Inventory</h2>
        <Card>
          <CardHeader>
            <CardTitle>Product Management</CardTitle>
            <CardDescription>Inventory tracking with ratings and sales data</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Stock</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Rating</TableHead>
                  <TableHead>Sales</TableHead>
                  <TableHead className="w-[100px]">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{product.name}</div>
                        <div className="text-sm text-muted-foreground">{product.id}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{product.category}</Badge>
                    </TableCell>
                    <TableCell className="font-medium">${product.price}</TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <span>{product.stock}</span>
                        {product.stock <= 10 && product.stock > 0 && (
                          <AlertTriangle className="h-4 w-4 text-yellow-500" />
                        )}
                        {product.stock === 0 && (
                          <XCircle className="h-4 w-4 text-red-500" />
                        )}
                      </div>
                    </TableCell>
                    <TableCell>{getStatusBadge(product.status)}</TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span>{product.rating}</span>
                      </div>
                    </TableCell>
                    <TableCell>{product.sales}</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Eye className="mr-2 h-4 w-4" />
                            View
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Edit className="mr-2 h-4 w-4" />
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Copy className="mr-2 h-4 w-4" />
                            Duplicate
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-red-600">
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      {/* NERV Eva Units Table */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">NERV Operations Center</h2>
        <Card className="bg-gradient-to-br from-red-950/20 to-orange-950/20 border-red-500/20">
          <CardHeader>
            <CardTitle className="text-xl text-red-400">Evangelion Unit Status</CardTitle>
            <CardDescription className="text-red-300/70">
              Real-time monitoring of Eva Unit operational parameters
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="border-red-500/20">
                  <TableHead className="text-red-200">Unit</TableHead>
                  <TableHead className="text-red-200">Pilot</TableHead>
                  <TableHead className="text-red-200">Sync Ratio</TableHead>
                  <TableHead className="text-red-200">Status</TableHead>
                  <TableHead className="text-red-200">AT Field</TableHead>
                  <TableHead className="text-red-200">Power</TableHead>
                  <TableHead className="text-red-200">Battery</TableHead>
                  <TableHead className="text-red-200">Condition</TableHead>
                  <TableHead className="text-red-200">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {evaUnits.map((unit) => (
                  <TableRow key={unit.unit} className="border-red-500/10 hover:bg-red-500/5">
                    <TableCell className="font-medium text-purple-300">{unit.unit}</TableCell>
                    <TableCell className="text-blue-300">{unit.pilot}</TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <span className={`font-medium ${
                          unit.syncRatio > 80 ? 'text-green-400' :
                          unit.syncRatio > 50 ? 'text-yellow-400' :
                          'text-red-400'
                        }`}>
                          {unit.syncRatio}%
                        </span>
                        {unit.syncRatio > 80 && <TrendingUp className="h-4 w-4 text-green-400" />}
                        {unit.syncRatio <= 50 && <TrendingDown className="h-4 w-4 text-red-400" />}
                      </div>
                    </TableCell>
                    <TableCell>{getStatusBadge(unit.status)}</TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        {getStatusBadge(unit.atField)}
                        {unit.atField === "Stable" && <Shield className="h-4 w-4 text-blue-400" />}
                        {unit.atField === "Unstable" && <AlertTriangle className="h-4 w-4 text-yellow-400" />}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <span className={`font-medium ${
                          unit.powerLevel > 80 ? 'text-green-400' :
                          unit.powerLevel > 30 ? 'text-yellow-400' :
                          'text-red-400'
                        }`}>
                          {unit.powerLevel}%
                        </span>
                        <Battery className={`h-4 w-4 ${
                          unit.powerLevel > 80 ? 'text-green-400' :
                          unit.powerLevel > 30 ? 'text-yellow-400' :
                          'text-red-400'
                        }`} />
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className={`font-medium ${
                        unit.batteryLife === "0:00" ? 'text-red-400' :
                        unit.batteryLife.startsWith("4") || unit.batteryLife.startsWith("5") ? 'text-green-400' :
                        'text-yellow-400'
                      }`}>
                        {unit.batteryLife}
                      </span>
                    </TableCell>
                    <TableCell>{getStatusBadge(unit.condition)}</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0 text-slate-300 hover:text-white">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="bg-slate-900 border-slate-700">
                          <DropdownMenuItem className="text-slate-200 hover:bg-slate-800">
                            <Activity className="mr-2 h-4 w-4" />
                            View Diagnostics
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-slate-200 hover:bg-slate-800">
                            <Settings className="mr-2 h-4 w-4" />
                            Configure
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-slate-200 hover:bg-slate-800">
                            <RefreshCw className="mr-2 h-4 w-4" />
                            Sync Test
                          </DropdownMenuItem>
                          <DropdownMenuSeparator className="bg-slate-700" />
                          <DropdownMenuItem className="text-red-400 hover:bg-red-900/20">
                            <Power className="mr-2 h-4 w-4" />
                            Emergency Stop
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      {/* System Metrics Table */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">System Metrics</h2>
        <Card className="bg-gradient-to-br from-blue-950/20 to-cyan-950/20 border-blue-500/20">
          <CardHeader>
            <CardTitle className="text-xl text-blue-400">MAGI System Performance</CardTitle>
            <CardDescription className="text-blue-300/70">
              Real-time monitoring of MAGI system components
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="border-blue-500/20">
                  <TableHead className="text-blue-200">Component</TableHead>
                  <TableHead className="text-blue-200">CPU Usage</TableHead>
                  <TableHead className="text-blue-200">Memory</TableHead>
                  <TableHead className="text-blue-200">Network</TableHead>
                  <TableHead className="text-blue-200">Status</TableHead>
                  <TableHead className="text-blue-200">Uptime</TableHead>
                  <TableHead className="text-blue-200">Last Check</TableHead>
                  <TableHead className="text-blue-200">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {systemMetrics.map((metric) => (
                  <TableRow key={metric.component} className="border-blue-500/10 hover:bg-blue-500/5">
                    <TableCell className="font-medium text-cyan-300">{metric.component}</TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <div className="w-16 bg-slate-700 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${
                              metric.cpu > 80 ? 'bg-red-400' :
                              metric.cpu > 60 ? 'bg-yellow-400' :
                              'bg-green-400'
                            }`}
                            style={{ width: `${metric.cpu}%` }}
                          />
                        </div>
                        <span className="text-sm text-slate-300">{metric.cpu}%</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <div className="w-16 bg-slate-700 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${
                              metric.memory > 80 ? 'bg-red-400' :
                              metric.memory > 60 ? 'bg-yellow-400' :
                              'bg-green-400'
                            }`}
                            style={{ width: `${metric.memory}%` }}
                          />
                        </div>
                        <span className="text-sm text-slate-300">{metric.memory}%</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <div className="w-16 bg-slate-700 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${
                              metric.network > 80 ? 'bg-red-400' :
                              metric.network > 60 ? 'bg-yellow-400' :
                              'bg-green-400'
                            }`}
                            style={{ width: `${metric.network}%` }}
                          />
                        </div>
                        <span className="text-sm text-slate-300">{metric.network}%</span>
                      </div>
                    </TableCell>
                    <TableCell>{getStatusBadge(metric.status)}</TableCell>
                    <TableCell>
                      <span className={`font-medium ${
                        parseFloat(metric.uptime) > 99 ? 'text-green-400' :
                        parseFloat(metric.uptime) > 95 ? 'text-yellow-400' :
                        'text-red-400'
                      }`}>
                        {metric.uptime}
                      </span>
                    </TableCell>
                    <TableCell className="text-sm text-slate-400">{metric.lastCheck}</TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-1">
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-slate-300 hover:text-white">
                          <Activity className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-slate-300 hover:text-white">
                          <Settings className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-slate-300 hover:text-white">
                          <RefreshCw className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      {/* Compact Table */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Compact Table</h2>
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Compact table layout for dense information</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[50px]">#</TableHead>
                  <TableHead>Event</TableHead>
                  <TableHead>User</TableHead>
                  <TableHead>Time</TableHead>
                  <TableHead className="w-[100px]">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="text-muted-foreground">001</TableCell>
                  <TableCell className="font-medium">User login</TableCell>
                  <TableCell>john@example.com</TableCell>
                  <TableCell className="text-muted-foreground">2 min ago</TableCell>
                  <TableCell><Badge variant="default" className="text-xs">Success</Badge></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-muted-foreground">002</TableCell>
                  <TableCell className="font-medium">File upload</TableCell>
                  <TableCell>jane@example.com</TableCell>
                  <TableCell className="text-muted-foreground">5 min ago</TableCell>
                  <TableCell><Badge variant="default" className="text-xs">Success</Badge></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-muted-foreground">003</TableCell>
                  <TableCell className="font-medium">Password change</TableCell>
                  <TableCell>bob@example.com</TableCell>
                  <TableCell className="text-muted-foreground">10 min ago</TableCell>
                  <TableCell><Badge variant="secondary" className="text-xs">Pending</Badge></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-muted-foreground">004</TableCell>
                  <TableCell className="font-medium">Failed login</TableCell>
                  <TableCell>unknown@example.com</TableCell>
                  <TableCell className="text-muted-foreground">15 min ago</TableCell>
                  <TableCell><Badge variant="destructive" className="text-xs">Failed</Badge></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-muted-foreground">005</TableCell>
                  <TableCell className="font-medium">Data export</TableCell>
                  <TableCell>alice@example.com</TableCell>
                  <TableCell className="text-muted-foreground">20 min ago</TableCell>
                  <TableCell><Badge variant="default" className="text-xs">Success</Badge></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      {/* Usage Guidelines */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage Guidelines</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg text-green-600">When to Use Tables</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Structured Data Display</p>
                  <p className="text-sm text-muted-foreground">When you need to display data in rows and columns with clear relationships</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Data Comparison</p>
                  <p className="text-sm text-muted-foreground">When users need to compare values across different items or categories</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Bulk Operations</p>
                  <p className="text-sm text-muted-foreground">When users need to select multiple items for batch actions</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Sorting and Filtering</p>
                  <p className="text-sm text-muted-foreground">When data needs to be organized or filtered by different criteria</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Administrative Interfaces</p>
                  <p className="text-sm text-muted-foreground">For dashboards, admin panels, and data management interfaces</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg text-red-600">When to Avoid Tables</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start space-x-2">
                <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Mobile-First Designs</p>
                  <p className="text-sm text-muted-foreground">Tables can be difficult to use on small screens; consider cards or lists instead</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Simple Lists</p>
                  <p className="text-sm text-muted-foreground">For basic lists without complex relationships, use simpler list components</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Content-Heavy Data</p>
                  <p className="text-sm text-muted-foreground">When cells contain large amounts of text or complex content</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Few Data Points</p>
                  <p className="text-sm text-muted-foreground">Tables add unnecessary complexity for very small datasets</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Narrative Content</p>
                  <p className="text-sm text-muted-foreground">For storytelling or flowing content, use text-based layouts instead</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Best Practices */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Best Practices</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Performance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm">• Use pagination for large datasets</p>
              <p className="text-sm">• Implement virtual scrolling for very large tables</p>
              <p className="text-sm">• Debounce search and filter operations</p>
              <p className="text-sm">• Memoize expensive calculations</p>
              <p className="text-sm">• Use skeleton loading states</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Accessibility</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm">• Use proper table semantics</p>
              <p className="text-sm">• Include table captions and headers</p>
              <p className="text-sm">• Support keyboard navigation</p>
              <p className="text-sm">• Provide screen reader friendly labels</p>
              <p className="text-sm">• Ensure sufficient color contrast</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">User Experience</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm">• Keep column headers visible while scrolling</p>
              <p className="text-sm">• Provide clear visual feedback for interactions</p>
              <p className="text-sm">• Use consistent spacing and alignment</p>
              <p className="text-sm">• Show loading states during data fetching</p>
              <p className="text-sm">• Include helpful empty states</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}