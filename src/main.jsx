import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Analytics — only initialise if VITE_ANALYTICS_ID is configured
const analyticsId = import.meta.env.VITE_ANALYTICS_ID
if (analyticsId) {
  // Placeholder: replace with your analytics provider initialisation
  console.info('[Analytics] Initialised with ID:', analyticsId)
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
