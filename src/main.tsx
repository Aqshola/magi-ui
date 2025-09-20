import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
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
import { Toaster } from './components/ui/sonner'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='flex flex-col gap-8 p-8'>
      <div className='mx-auto text-4xl font-bold text-primary uppercase tracking-wide font-mono'>
        MAGI UI COMPONENT LIBRARY
      </div>
      <div className='text-center text-muted-foreground font-mono tracking-wide'>
        Evangelion NERV MAGI System Interface Components
      </div>
      
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
      <Toaster />
    </div>

  </StrictMode>,
)
