import Dashboard from './pages/Dashboard'
import './App.css'
import { Signup } from './pages/Signup'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Signin } from './pages/Signin'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
