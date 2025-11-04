import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// On case-sensitive filesystems (like Vercel/Linux) the filename must match exactly.
// The file in this repo is `src/app.jsx` (lowercase), so import that name.
import App from './app.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
