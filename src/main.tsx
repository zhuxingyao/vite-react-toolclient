import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // 去掉严格模式，防止 useEffect 触发两次
  // <React.StrictMode>
  //   <App /> 
  // </React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
