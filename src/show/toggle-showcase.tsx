import React, { useState } from "react"
import { Toggle } from "@/components/ui/toggle"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { 
  Bold, 
  Italic, 
  Underline, 
  AlignLeft, 
  AlignCenter, 
  AlignRight,
  Volume2,
  VolumeX,
  Wifi,
  WifiOff,
  Eye,
  EyeOff,
  Heart,
  Star,
  Bookmark,
  Play,
  Pause,
  Shuffle,
  Repeat,
  Settings,
  Bell,
  BellOff,
  Moon,
  Sun,
  Grid,
  List,
  Filter,
  SortAsc,
  SortDesc,
  Lock,
  Unlock,
  Zap,
  ZapOff
} from "lucide-react"

export default function ToggleShowcase() {
  const [textFormatting, setTextFormatting] = useState({
    bold: false,
    italic: false,
    underline: false
  })
  
  const [alignment, setAlignment] = useState<'left' | 'center' | 'right'>('left')
  const [volume, setVolume] = useState(true)
  const [wifi, setWifi] = useState(true)
  const [visibility, setVisibility] = useState(true)
  const [liked, setLiked] = useState(false)
  const [bookmarked, setBookmarked] = useState(false)
  const [starred, setStarred] = useState(false)
  
  // NERV System Controls
  const [magiSystem, setMagiSystem] = useState({
    casper: true,
    melchior: false,
    balthasar: true
  })
  
  const [evaUnits, setEvaUnits] = useState({
    unit01: true,
    unit02: false,
    unit00: true
  })
  
  const [systemSettings, setSystemSettings] = useState({
    notifications: true,
    darkMode: false,
    autoSave: true,
    gridView: true,
    filtering: false,
    sortAsc: true,
    securityLock: false,
    powerMode: true
  })

  return (
    <div className="space-y-8 p-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Toggle Component</h1>
        <p className="text-muted-foreground">
          A two-state button that can be either on or off. Perfect for settings, preferences, and binary choices.
        </p>
      </div>

      {/* Basic Examples */}
      <Card>
        <CardHeader>
          <CardTitle>Basic Toggle</CardTitle>
          <CardDescription>Simple toggle buttons with different variants and sizes</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium mb-3">Default Variant</h4>
              <div className="flex items-center gap-2">
                <Toggle size="sm" aria-label="Small toggle">
                  <Bold className="h-3 w-3" />
                </Toggle>
                <Toggle aria-label="Default toggle">
                  <Bold className="h-4 w-4" />
                </Toggle>
                <Toggle size="lg" aria-label="Large toggle">
                  <Bold className="h-5 w-5" />
                </Toggle>
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-medium mb-3">Outline Variant</h4>
              <div className="flex items-center gap-2">
                <Toggle variant="outline" size="sm" aria-label="Small outline toggle">
                  <Italic className="h-3 w-3" />
                </Toggle>
                <Toggle variant="outline" aria-label="Default outline toggle">
                  <Italic className="h-4 w-4" />
                </Toggle>
                <Toggle variant="outline" size="lg" aria-label="Large outline toggle">
                  <Italic className="h-5 w-5" />
                </Toggle>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Text Formatting */}
      <Card>
        <CardHeader>
          <CardTitle>Text Formatting Toolbar</CardTitle>
          <CardDescription>Common text formatting controls using toggles</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-1 p-2 border rounded-md bg-muted/20">
            <Toggle
              pressed={textFormatting.bold}
              onPressedChange={(pressed) => 
                setTextFormatting(prev => ({ ...prev, bold: pressed }))
              }
              aria-label="Bold"
            >
              <Bold className="h-4 w-4" />
            </Toggle>
            <Toggle
              pressed={textFormatting.italic}
              onPressedChange={(pressed) => 
                setTextFormatting(prev => ({ ...prev, italic: pressed }))
              }
              aria-label="Italic"
            >
              <Italic className="h-4 w-4" />
            </Toggle>
            <Toggle
              pressed={textFormatting.underline}
              onPressedChange={(pressed) => 
                setTextFormatting(prev => ({ ...prev, underline: pressed }))
              }
              aria-label="Underline"
            >
              <Underline className="h-4 w-4" />
            </Toggle>
            
            <Separator orientation="vertical" className="h-6 mx-1" />
            
            <Toggle
              pressed={alignment === 'left'}
              onPressedChange={() => setAlignment('left')}
              aria-label="Align left"
            >
              <AlignLeft className="h-4 w-4" />
            </Toggle>
            <Toggle
              pressed={alignment === 'center'}
              onPressedChange={() => setAlignment('center')}
              aria-label="Align center"
            >
              <AlignCenter className="h-4 w-4" />
            </Toggle>
            <Toggle
              pressed={alignment === 'right'}
              onPressedChange={() => setAlignment('right')}
              aria-label="Align right"
            >
              <AlignRight className="h-4 w-4" />
            </Toggle>
          </div>
          
          <div className="text-sm text-muted-foreground">
            Active formatting: {Object.entries(textFormatting)
              .filter(([_, active]) => active)
              .map(([format]) => format)
              .join(', ') || 'None'} | Alignment: {alignment}
          </div>
        </CardContent>
      </Card>

      {/* System Controls */}
      <Card>
        <CardHeader>
          <CardTitle>System Controls</CardTitle>
          <CardDescription>Common system and media controls</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <Toggle
                pressed={volume}
                onPressedChange={setVolume}
                variant="outline"
                className="w-full"
                aria-label="Toggle volume"
              >
                {volume ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
                {volume ? 'Volume On' : 'Muted'}
              </Toggle>
            </div>
            
            <div className="space-y-2">
              <Toggle
                pressed={wifi}
                onPressedChange={setWifi}
                variant="outline"
                className="w-full"
                aria-label="Toggle WiFi"
              >
                {wifi ? <Wifi className="h-4 w-4" /> : <WifiOff className="h-4 w-4" />}
                {wifi ? 'WiFi On' : 'WiFi Off'}
              </Toggle>
            </div>
            
            <div className="space-y-2">
              <Toggle
                pressed={visibility}
                onPressedChange={setVisibility}
                variant="outline"
                className="w-full"
                aria-label="Toggle visibility"
              >
                {visibility ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                {visibility ? 'Visible' : 'Hidden'}
              </Toggle>
            </div>
            
            <div className="space-y-2">
              <Toggle
                pressed={systemSettings.darkMode}
                onPressedChange={(pressed) => 
                  setSystemSettings(prev => ({ ...prev, darkMode: pressed }))
                }
                variant="outline"
                className="w-full"
                aria-label="Toggle dark mode"
              >
                {systemSettings.darkMode ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
                {systemSettings.darkMode ? 'Dark' : 'Light'}
              </Toggle>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Interactive Actions</CardTitle>
          <CardDescription>Like, bookmark, and favorite toggles</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4">
            <Toggle
              pressed={liked}
              onPressedChange={setLiked}
              aria-label="Like"
              className="data-[state=on]:text-red-500"
            >
              <Heart className={`h-4 w-4 ${liked ? 'fill-current' : ''}`} />
              Like
            </Toggle>
            
            <Toggle
              pressed={starred}
              onPressedChange={setStarred}
              aria-label="Star"
              className="data-[state=on]:text-yellow-500"
            >
              <Star className={`h-4 w-4 ${starred ? 'fill-current' : ''}`} />
              Star
            </Toggle>
            
            <Toggle
              pressed={bookmarked}
              onPressedChange={setBookmarked}
              aria-label="Bookmark"
              className="data-[state=on]:text-blue-500"
            >
              <Bookmark className={`h-4 w-4 ${bookmarked ? 'fill-current' : ''}`} />
              Bookmark
            </Toggle>
          </div>
        </CardContent>
      </Card>

      {/* NERV Command Center */}
      <Card>
        <CardHeader>
          <CardTitle>NERV Command Center</CardTitle>
          <CardDescription>
            <Badge variant="outline" className="mr-2">MAGI System</Badge>
            Critical system controls and Eva Unit management
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="text-sm font-medium mb-3 text-blue-600 dark:text-blue-400">MAGI System Status</h4>
            <div className="grid grid-cols-3 gap-3">
              <Toggle
                pressed={magiSystem.casper}
                onPressedChange={(pressed) => 
                  setMagiSystem(prev => ({ ...prev, casper: pressed }))
                }
                variant="outline"
                className="w-full data-[state=on]:bg-green-500/10 data-[state=on]:border-green-500 data-[state=on]:text-green-600"
                aria-label="CASPER system"
              >
                <Zap className="h-4 w-4" />
                CASPER
              </Toggle>
              
              <Toggle
                pressed={magiSystem.melchior}
                onPressedChange={(pressed) => 
                  setMagiSystem(prev => ({ ...prev, melchior: pressed }))
                }
                variant="outline"
                className="w-full data-[state=on]:bg-green-500/10 data-[state=on]:border-green-500 data-[state=on]:text-green-600"
                aria-label="MELCHIOR system"
              >
                <Zap className="h-4 w-4" />
                MELCHIOR
              </Toggle>
              
              <Toggle
                pressed={magiSystem.balthasar}
                onPressedChange={(pressed) => 
                  setMagiSystem(prev => ({ ...prev, balthasar: pressed }))
                }
                variant="outline"
                className="w-full data-[state=on]:bg-green-500/10 data-[state=on]:border-green-500 data-[state=on]:text-green-600"
                aria-label="BALTHASAR system"
              >
                <Zap className="h-4 w-4" />
                BALTHASAR
              </Toggle>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-medium mb-3 text-purple-600 dark:text-purple-400">Eva Unit Status</h4>
            <div className="grid grid-cols-3 gap-3">
              <Toggle
                pressed={evaUnits.unit01}
                onPressedChange={(pressed) => 
                  setEvaUnits(prev => ({ ...prev, unit01: pressed }))
                }
                variant="outline"
                className="w-full data-[state=on]:bg-purple-500/10 data-[state=on]:border-purple-500 data-[state=on]:text-purple-600"
                aria-label="Eva Unit-01"
              >
                <Play className="h-4 w-4" />
                Unit-01
              </Toggle>
              
              <Toggle
                pressed={evaUnits.unit02}
                onPressedChange={(pressed) => 
                  setEvaUnits(prev => ({ ...prev, unit02: pressed }))
                }
                variant="outline"
                className="w-full data-[state=on]:bg-purple-500/10 data-[state=on]:border-purple-500 data-[state=on]:text-purple-600"
                aria-label="Eva Unit-02"
              >
                <Pause className="h-4 w-4" />
                Unit-02
              </Toggle>
              
              <Toggle
                pressed={evaUnits.unit00}
                onPressedChange={(pressed) => 
                  setEvaUnits(prev => ({ ...prev, unit00: pressed }))
                }
                variant="outline"
                className="w-full data-[state=on]:bg-purple-500/10 data-[state=on]:border-purple-500 data-[state=on]:text-purple-600"
                aria-label="Eva Unit-00"
              >
                <Play className="h-4 w-4" />
                Unit-00
              </Toggle>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Settings Panel */}
      <Card>
        <CardHeader>
          <CardTitle>Settings Panel</CardTitle>
          <CardDescription>Application preferences and configuration</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label htmlFor="notifications" className="text-sm font-medium">
                  Notifications
                </label>
                <Toggle
                  id="notifications"
                  pressed={systemSettings.notifications}
                  onPressedChange={(pressed) => 
                    setSystemSettings(prev => ({ ...prev, notifications: pressed }))
                  }
                  aria-label="Toggle notifications"
                >
                  {systemSettings.notifications ? <Bell className="h-4 w-4" /> : <BellOff className="h-4 w-4" />}
                </Toggle>
              </div>
              
              <div className="flex items-center justify-between">
                <label htmlFor="autosave" className="text-sm font-medium">
                  Auto Save
                </label>
                <Toggle
                  id="autosave"
                  pressed={systemSettings.autoSave}
                  onPressedChange={(pressed) => 
                    setSystemSettings(prev => ({ ...prev, autoSave: pressed }))
                  }
                  aria-label="Toggle auto save"
                >
                  <Settings className="h-4 w-4" />
                </Toggle>
              </div>
              
              <div className="flex items-center justify-between">
                <label htmlFor="gridview" className="text-sm font-medium">
                  Grid View
                </label>
                <Toggle
                  id="gridview"
                  pressed={systemSettings.gridView}
                  onPressedChange={(pressed) => 
                    setSystemSettings(prev => ({ ...prev, gridView: pressed }))
                  }
                  aria-label="Toggle grid view"
                >
                  {systemSettings.gridView ? <Grid className="h-4 w-4" /> : <List className="h-4 w-4" />}
                </Toggle>
              </div>
              
              <div className="flex items-center justify-between">
                <label htmlFor="filtering" className="text-sm font-medium">
                  Enable Filtering
                </label>
                <Toggle
                  id="filtering"
                  pressed={systemSettings.filtering}
                  onPressedChange={(pressed) => 
                    setSystemSettings(prev => ({ ...prev, filtering: pressed }))
                  }
                  aria-label="Toggle filtering"
                >
                  <Filter className="h-4 w-4" />
                </Toggle>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label htmlFor="sorting" className="text-sm font-medium">
                  Sort Ascending
                </label>
                <Toggle
                  id="sorting"
                  pressed={systemSettings.sortAsc}
                  onPressedChange={(pressed) => 
                    setSystemSettings(prev => ({ ...prev, sortAsc: pressed }))
                  }
                  aria-label="Toggle sort direction"
                >
                  {systemSettings.sortAsc ? <SortAsc className="h-4 w-4" /> : <SortDesc className="h-4 w-4" />}
                </Toggle>
              </div>
              
              <div className="flex items-center justify-between">
                <label htmlFor="security" className="text-sm font-medium">
                  Security Lock
                </label>
                <Toggle
                  id="security"
                  pressed={systemSettings.securityLock}
                  onPressedChange={(pressed) => 
                    setSystemSettings(prev => ({ ...prev, securityLock: pressed }))
                  }
                  aria-label="Toggle security lock"
                  className="data-[state=on]:bg-red-500/10 data-[state=on]:text-red-600"
                >
                  {systemSettings.securityLock ? <Lock className="h-4 w-4" /> : <Unlock className="h-4 w-4" />}
                </Toggle>
              </div>
              
              <div className="flex items-center justify-between">
                <label htmlFor="powermode" className="text-sm font-medium">
                  Power Mode
                </label>
                <Toggle
                  id="powermode"
                  pressed={systemSettings.powerMode}
                  onPressedChange={(pressed) => 
                    setSystemSettings(prev => ({ ...prev, powerMode: pressed }))
                  }
                  aria-label="Toggle power mode"
                  className="data-[state=on]:bg-green-500/10 data-[state=on]:text-green-600"
                >
                  {systemSettings.powerMode ? <Zap className="h-4 w-4" /> : <ZapOff className="h-4 w-4" />}
                </Toggle>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Media Player Controls */}
      <Card>
        <CardHeader>
          <CardTitle>Media Player Controls</CardTitle>
          <CardDescription>Music player toggle controls</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center gap-2 p-4 bg-muted/20 rounded-lg">
            <Toggle aria-label="Shuffle">
              <Shuffle className="h-4 w-4" />
            </Toggle>
            <Toggle aria-label="Repeat">
              <Repeat className="h-4 w-4" />
            </Toggle>
            <Toggle variant="outline" aria-label="Volume">
              <Volume2 className="h-4 w-4" />
            </Toggle>
          </div>
        </CardContent>
      </Card>

    </div>
  )
}