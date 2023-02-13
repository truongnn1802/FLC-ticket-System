import React from 'react'
import { QueryClient,QueryClientProvider } from '@tanstack/react-query'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import GlobalStyles from './components/GlobalStyles'
import './index.scss'

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <GlobalStyles>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </GlobalStyles>
    </Router>
  </React.StrictMode>
)
