import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Pages/login'
import Forgot from './Pages/forgot'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Register from './Pages/auth/Register'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path='Login' element={<Login/>}/>
      <Route path='Forgot' element={<Forgot/>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes>
    
    </BrowserRouter>
  )
}

export default App
