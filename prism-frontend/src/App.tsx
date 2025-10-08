import Dashboard from './pages/Dashboard'
import './App.css'
import { Signup } from './pages/Signup'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Signin } from './pages/Signin'
import { LandingPage } from './pages/LandingPage'
import { Toaster } from 'react-hot-toast'
import { ProtectRoute } from './components/ProtectRoute'

const App = () => {

  return (
    <BrowserRouter>
    <Toaster position="top-center" reverseOrder={false} />

      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
        <Route element={<ProtectRoute/>}>
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
