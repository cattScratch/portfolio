import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Landpage from './landpage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Landpage />
  </StrictMode>,
)
