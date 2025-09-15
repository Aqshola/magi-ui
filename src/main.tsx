import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ButtonShowCase from './show/button-showcase'
import AlertShowCase from './show/alert-showcase'
import InputShowcase from './show/input-showcase'
import SelectShowCase from './show/select-showcase'
import ProgressShowcase from './show/progress-showcase'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='flex flex-col gap-3'>
      <div className='mx-auto'>
        MAGI
      </div>
      <ButtonShowCase />
      <AlertShowCase />
      <InputShowcase/>
      <SelectShowCase/>
      <ProgressShowcase/>
    </div>

  </StrictMode>,
)
