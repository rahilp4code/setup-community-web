import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App.jsx'
import App2 from './components/App2.jsx'
import BrowseBuildsPage from './pages/BrowseBuilds.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <App2 />
    {/* <BrowseBuildsPage /> */}
    
  </StrictMode>,
)
