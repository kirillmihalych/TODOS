import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import { AppProvider } from './context'

const root = createRoot(document.getElementById('root'))

root.render(
  <AppProvider>
    <App />
  </AppProvider>
)
