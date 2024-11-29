//dependencias
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

//tailwind
import './index.css'

//componentes
import { App } from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
