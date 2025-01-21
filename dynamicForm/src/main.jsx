import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from "@/components/ui/provider"
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <Provider>
    <App />
  </Provider>,
)
