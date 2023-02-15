import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import GlobalStyles from './components/GlobalStyles'
import './index.scss'
import { GlobalProvider } from './useContext/GlobalContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <GlobalStyles>
        <GlobalProvider>
          <App />
        </GlobalProvider>
      </GlobalStyles>
    </Router>
  </React.StrictMode>
)
