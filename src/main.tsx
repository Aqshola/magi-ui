import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ButtonShowCase from './show/button-showcase'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div>
      MAGI
    </div>
    <ButtonShowCase />
  </StrictMode>,
)
