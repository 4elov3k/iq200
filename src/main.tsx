import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App'
import { PrivacyPolicyPage } from './app/PrivacyPolicyPage'
import './styles/index.css'

const pathname = window.location.pathname.replace(/\/+$/, '') || '/'
const RootComponent = pathname === '/privacy' ? PrivacyPolicyPage : App

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RootComponent />
  </React.StrictMode>,
)
