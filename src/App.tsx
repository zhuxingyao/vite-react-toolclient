import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import 'antd/dist/antd.css'

import Login from './pages/login/login'
import Faq from './pages/faq/faq'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/faq' element={<Faq />}></Route>
      </Routes>
    </div>
  )
}

export default App
