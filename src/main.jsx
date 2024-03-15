import { render } from 'preact'
import { App } from './app.jsx'
import './index.css'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )