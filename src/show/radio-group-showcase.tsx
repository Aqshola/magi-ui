import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { 
  CreditCard, 
  Banknote, 
  Smartphone, 
  Truck, 
  Plane, 
  Ship,
  Clock,
  Zap,
  Shield,
  Star,
  Users,
  Building,
  Home,
  Briefcase,
  GraduationCap,
  Heart,
  Activity,
  Wifi,
  WifiOff,
  Volume2,
  VolumeX,
  Sun,
  Moon,
  Monitor,
  Palette,
  Settings,
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  FileText,
  Image,
  Video,
  Music
} from "lucide-react"
import { useState } from "react"

export default function RadioGroupShowcase() {
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [shippingMethod, setShippingMethod] = useState("standard")
  const [theme, setTheme] = useState("system")
  const [priority, setPriority] = useState("medium")
  const [accountType, setAccountType] = useState("personal")
  const [contactMethod, setContactMethod] = useState("email")
  const [fileType, setFileType] = useState("document")

  return (
    <div className="space-y-8 p-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Radio Group</h1>
        <p className="text-lg text-muted-foreground">
          A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.
        </p>
      </div>

      {/* Basic Examples */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            Basic Examples
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Simple Radio Group */}
          <div className="space-y-3">
            <Label className="text-sm font-medium">Choose your plan</Label>
            <RadioGroup defaultValue="pro" className="grid grid-cols-1 gap-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="free" id="free" />
                <Label htmlFor="free" className="text-sm font-normal cursor-pointer">
                  Free - Basic features
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="pro" id="pro" />
                <Label htmlFor="pro" className="text-sm font-normal cursor-pointer">
                  Pro - Advanced features
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="enterprise" id="enterprise" />
                <Label htmlFor="enterprise" className="text-sm font-normal cursor-pointer">
                  Enterprise - All features
                </Label>
              </div>
            </RadioGroup>
          </div>

          <Separator />

          {/* With Icons */}
          <div className="space-y-3">
            <Label className="text-sm font-medium">Theme preference</Label>
            <RadioGroup value={theme} onValueChange={setTheme} className="grid grid-cols-1 gap-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="light" id="light" />
                <Label htmlFor="light" className="text-sm font-normal cursor-pointer flex items-center gap-2">
                  <Sun className="h-4 w-4" />
                  Light mode
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="dark" id="dark" />
                <Label htmlFor="dark" className="text-sm font-normal cursor-pointer flex items-center gap-2">
                  <Moon className="h-4 w-4" />
                  Dark mode
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="system" id="system" />
                <Label htmlFor="system" className="text-sm font-normal cursor-pointer flex items-center gap-2">
                  <Monitor className="h-4 w-4" />
                  System preference
                </Label>
              </div>
            </RadioGroup>
          </div>
        </CardContent>
      </Card>

      {/* E-commerce Examples */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCard className="h-5 w-5" />
            E-commerce Examples
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Payment Methods */}
          <div className="space-y-3">
            <Label className="text-sm font-medium">Payment method</Label>
            <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="grid grid-cols-1 gap-3">
              <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                <RadioGroupItem value="card" id="card" />
                <Label htmlFor="card" className="text-sm font-normal cursor-pointer flex items-center gap-3 flex-1">
                  <CreditCard className="h-5 w-5 text-blue-600" />
                  <div>
                    <div className="font-medium">Credit/Debit Card</div>
                    <div className="text-xs text-muted-foreground">Visa, Mastercard, American Express</div>
                  </div>
                </Label>
              </div>
              <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                <RadioGroupItem value="paypal" id="paypal" />
                <Label htmlFor="paypal" className="text-sm font-normal cursor-pointer flex items-center gap-3 flex-1">
                  <Smartphone className="h-5 w-5 text-blue-500" />
                  <div>
                    <div className="font-medium">PayPal</div>
                    <div className="text-xs text-muted-foreground">Pay with your PayPal account</div>
                  </div>
                </Label>
              </div>
              <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                <RadioGroupItem value="cash" id="cash" />
                <Label htmlFor="cash" className="text-sm font-normal cursor-pointer flex items-center gap-3 flex-1">
                  <Banknote className="h-5 w-5 text-green-600" />
                  <div>
                    <div className="font-medium">Cash on Delivery</div>
                    <div className="text-xs text-muted-foreground">Pay when you receive your order</div>
                  </div>
                </Label>
              </div>
            </RadioGroup>
          </div>

          <Separator />

          {/* Shipping Methods */}
          <div className="space-y-3">
            <Label className="text-sm font-medium">Shipping method</Label>
            <RadioGroup value={shippingMethod} onValueChange={setShippingMethod} className="grid grid-cols-1 gap-3">
              <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex items-center space-x-3">
                  <RadioGroupItem value="standard" id="standard" />
                  <Label htmlFor="standard" className="text-sm font-normal cursor-pointer flex items-center gap-3">
                    <Truck className="h-5 w-5 text-blue-600" />
                    <div>
                      <div className="font-medium">Standard Shipping</div>
                      <div className="text-xs text-muted-foreground">5-7 business days</div>
                    </div>
                  </Label>
                </div>
                <Badge variant="secondary">Free</Badge>
              </div>
              <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex items-center space-x-3">
                  <RadioGroupItem value="express" id="express" />
                  <Label htmlFor="express" className="text-sm font-normal cursor-pointer flex items-center gap-3">
                    <Plane className="h-5 w-5 text-orange-600" />
                    <div>
                      <div className="font-medium">Express Shipping</div>
                      <div className="text-xs text-muted-foreground">2-3 business days</div>
                    </div>
                  </Label>
                </div>
                <Badge variant="outline">$9.99</Badge>
              </div>
              <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex items-center space-x-3">
                  <RadioGroupItem value="overnight" id="overnight" />
                  <Label htmlFor="overnight" className="text-sm font-normal cursor-pointer flex items-center gap-3">
                    <Zap className="h-5 w-5 text-yellow-600" />
                    <div>
                      <div className="font-medium">Overnight Shipping</div>
                      <div className="text-xs text-muted-foreground">Next business day</div>
                    </div>
                  </Label>
                </div>
                <Badge variant="outline">$24.99</Badge>
              </div>
            </RadioGroup>
          </div>
        </CardContent>
      </Card>

      {/* NERV Command Interface */}
      <Card className="border-red-200 dark:border-red-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-red-700 dark:text-red-400">
            <Shield className="h-5 w-5" />
            NERV Command Interface
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Priority Level */}
          <div className="space-y-3">
            <Label className="text-sm font-medium text-red-700 dark:text-red-400">Alert Priority Level</Label>
            <RadioGroup value={priority} onValueChange={setPriority} className="grid grid-cols-1 gap-3">
              <div className="flex items-center space-x-3 p-3 border border-green-200 dark:border-green-800 rounded-lg bg-green-50 dark:bg-green-950/30">
                <RadioGroupItem value="low" id="low" />
                <Label htmlFor="low" className="text-sm font-normal cursor-pointer flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  <div>
                    <div className="font-medium text-green-700 dark:text-green-400">Low Priority</div>
                    <div className="text-xs text-green-600 dark:text-green-500">Routine operations</div>
                  </div>
                </Label>
              </div>
              <div className="flex items-center space-x-3 p-3 border border-yellow-200 dark:border-yellow-800 rounded-lg bg-yellow-50 dark:bg-yellow-950/30">
                <RadioGroupItem value="medium" id="medium" />
                <Label htmlFor="medium" className="text-sm font-normal cursor-pointer flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div>
                    <div className="font-medium text-yellow-700 dark:text-yellow-400">Medium Priority</div>
                    <div className="text-xs text-yellow-600 dark:text-yellow-500">Standard alert level</div>
                  </div>
                </Label>
              </div>
              <div className="flex items-center space-x-3 p-3 border border-red-200 dark:border-red-800 rounded-lg bg-red-50 dark:bg-red-950/30">
                <RadioGroupItem value="high" id="high" />
                <Label htmlFor="high" className="text-sm font-normal cursor-pointer flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-red-500 animate-pulse"></div>
                  <div>
                    <div className="font-medium text-red-700 dark:text-red-400">High Priority</div>
                    <div className="text-xs text-red-600 dark:text-red-500">Angel attack imminent</div>
                  </div>
                </Label>
              </div>
            </RadioGroup>
          </div>

          <Separator />

          {/* EVA Unit Selection */}
          <div className="space-y-3">
            <Label className="text-sm font-medium text-red-700 dark:text-red-400">EVA Unit Assignment</Label>
            <RadioGroup defaultValue="unit-01" className="grid grid-cols-1 gap-3">
              <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                <RadioGroupItem value="unit-01" id="unit-01" />
                <Label htmlFor="unit-01" className="text-sm font-normal cursor-pointer flex items-center gap-3">
                  <div className="h-4 w-4 rounded-full bg-purple-500"></div>
                  <div>
                    <div className="font-medium">EVA Unit-01</div>
                    <div className="text-xs text-muted-foreground">Pilot: Shinji Ikari</div>
                  </div>
                </Label>
              </div>
              <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                <RadioGroupItem value="unit-00" id="unit-00" />
                <Label htmlFor="unit-00" className="text-sm font-normal cursor-pointer flex items-center gap-3">
                  <div className="h-4 w-4 rounded-full bg-blue-500"></div>
                  <div>
                    <div className="font-medium">EVA Unit-00</div>
                    <div className="text-xs text-muted-foreground">Pilot: Rei Ayanami</div>
                  </div>
                </Label>
              </div>
              <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                <RadioGroupItem value="unit-02" id="unit-02" />
                <Label htmlFor="unit-02" className="text-sm font-normal cursor-pointer flex items-center gap-3">
                  <div className="h-4 w-4 rounded-full bg-red-500"></div>
                  <div>
                    <div className="font-medium">EVA Unit-02</div>
                    <div className="text-xs text-muted-foreground">Pilot: Asuka Langley</div>
                  </div>
                </Label>
              </div>
            </RadioGroup>
          </div>
        </CardContent>
      </Card>

      {/* Form Examples */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Form Examples
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Account Type */}
          <div className="space-y-3">
            <Label className="text-sm font-medium">Account type</Label>
            <RadioGroup value={accountType} onValueChange={setAccountType} className="grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center space-y-2 p-4 border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                <RadioGroupItem value="personal" id="personal-account" className="sr-only" />
                <Label htmlFor="personal-account" className="flex flex-col cursor-pointer text-center">
                  <User className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                  <div className="font-medium">Personal</div>
                  <div className="text-xs text-muted-foreground">For individual use</div>
                </Label>
              </div>
              <div className="flex flex-col items-center space-y-2 p-4 border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                <RadioGroupItem value="business" id="business-account" className="sr-only" />
                <Label htmlFor="business-account" className="flex flex-col cursor-pointer text-center">
                  <Briefcase className="h-8 w-8 mx-auto mb-2 text-green-600" />
                  <div className="font-medium">Business</div>
                  <div className="text-xs text-muted-foreground">For companies</div>
                </Label>
              </div>
              <div className="flex flex-col items-center space-y-2 p-4 border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                <RadioGroupItem value="enterprise" id="enterprise-account" className="sr-only" />
                <Label htmlFor="enterprise-account" className="flex flex-col cursor-pointer text-center">
                  <Building className="h-8 w-8 mx-auto mb-2 text-purple-600" />
                  <div className="font-medium">Enterprise</div>
                  <div className="text-xs text-muted-foreground">For large organizations</div>
                </Label>
              </div>
            </RadioGroup>
          </div>

          <Separator />

          {/* Contact Method */}
          <div className="space-y-3">
            <Label className="text-sm font-medium">Preferred contact method</Label>
            <RadioGroup value={contactMethod} onValueChange={setContactMethod} className="grid grid-cols-1 gap-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="email" id="contact-email" />
                <Label htmlFor="contact-email" className="text-sm font-normal cursor-pointer flex items-center gap-2">
                  <Mail className="h-4 w-4 text-blue-600" />
                  Email notifications
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="sms" id="contact-sms" />
                <Label htmlFor="contact-sms" className="text-sm font-normal cursor-pointer flex items-center gap-2">
                  <Phone className="h-4 w-4 text-green-600" />
                  SMS messages
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="push" id="contact-push" />
                <Label htmlFor="contact-push" className="text-sm font-normal cursor-pointer flex items-center gap-2">
                  <Smartphone className="h-4 w-4 text-purple-600" />
                  Push notifications
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="none" id="contact-none" />
                <Label htmlFor="contact-none" className="text-sm font-normal cursor-pointer flex items-center gap-2">
                  <WifiOff className="h-4 w-4 text-gray-600" />
                  No notifications
                </Label>
              </div>
            </RadioGroup>
          </div>

          <Separator />

          {/* File Type */}
          <div className="space-y-3">
            <Label className="text-sm font-medium">File type to upload</Label>
            <RadioGroup value={fileType} onValueChange={setFileType} className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                <RadioGroupItem value="document" id="file-document" />
                <Label htmlFor="file-document" className="text-sm font-normal cursor-pointer flex items-center gap-3">
                  <FileText className="h-5 w-5 text-blue-600" />
                  <div>
                    <div className="font-medium">Document</div>
                    <div className="text-xs text-muted-foreground">PDF, DOC, TXT</div>
                  </div>
                </Label>
              </div>
              <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                <RadioGroupItem value="image" id="file-image" />
                <Label htmlFor="file-image" className="text-sm font-normal cursor-pointer flex items-center gap-3">
                  <Image className="h-5 w-5 text-green-600" />
                  <div>
                    <div className="font-medium">Image</div>
                    <div className="text-xs text-muted-foreground">JPG, PNG, GIF</div>
                  </div>
                </Label>
              </div>
              <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                <RadioGroupItem value="video" id="file-video" />
                <Label htmlFor="file-video" className="text-sm font-normal cursor-pointer flex items-center gap-3">
                  <Video className="h-5 w-5 text-red-600" />
                  <div>
                    <div className="font-medium">Video</div>
                    <div className="text-xs text-muted-foreground">MP4, AVI, MOV</div>
                  </div>
                </Label>
              </div>
              <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                <RadioGroupItem value="audio" id="file-audio" />
                <Label htmlFor="file-audio" className="text-sm font-normal cursor-pointer flex items-center gap-3">
                  <Music className="h-5 w-5 text-purple-600" />
                  <div>
                    <div className="font-medium">Audio</div>
                    <div className="text-xs text-muted-foreground">MP3, WAV, FLAC</div>
                  </div>
                </Label>
              </div>
            </RadioGroup>
          </div>
        </CardContent>
      </Card>

      {/* Disabled State */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            Disabled State
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <Label className="text-sm font-medium text-muted-foreground">Unavailable options</Label>
            <RadioGroup defaultValue="option2" className="grid grid-cols-1 gap-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option1" id="disabled1" disabled />
                <Label htmlFor="disabled1" className="text-sm font-normal cursor-not-allowed text-muted-foreground">
                  Option 1 (Disabled)
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option2" id="disabled2" />
                <Label htmlFor="disabled2" className="text-sm font-normal cursor-pointer">
                  Option 2 (Available)
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option3" id="disabled3" disabled />
                <Label htmlFor="disabled3" className="text-sm font-normal cursor-not-allowed text-muted-foreground">
                  Option 3 (Disabled)
                </Label>
              </div>
            </RadioGroup>
          </div>
        </CardContent>
      </Card>

      
    </div>
  )
}