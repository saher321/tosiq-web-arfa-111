import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Hook from './pages/Hook.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Home /> */}
    {/* <About /> */}
    <Hook />
  </StrictMode>,
)
