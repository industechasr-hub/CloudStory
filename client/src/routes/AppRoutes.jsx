
import { Routes, Route } from 'react-router-dom'

import Welcome from '../pages/Welcome/Welcome.jsx'
import Login from '../pages/Login/Login.jsx'
import Register from '../pages/Register/Register.jsx'
import Home from '../pages/Home/Home.jsx'

function AppRoutes() {
  return (

    <Routes>

      <Route path='/' element={<Welcome />} />

      <Route path='/login' element={<Login />} />
      
      <Route path='/register' element={<Register />} />
      
      <Route path='/home' element={<Home />} />

    </Routes>

  )
}

export default AppRoutes;