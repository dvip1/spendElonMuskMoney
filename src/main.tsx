import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { MoneyProvider } from './components/money.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MoneyProvider>
      <App />
    </MoneyProvider>
  </React.StrictMode>,
)
