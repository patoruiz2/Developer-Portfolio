import ReactDOM from 'react-dom/client'
import App from './Pages/App/App.tsx'
import './index.css'
import { StrictMode } from 'react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
