
import { Routes, Route } from 'react-router-dom'

import Welcome from '../pages/Welcome/Welcome.jsx'
import Login from '../pages/Login/Login.jsx'
import Register from '../pages/Register/Register.jsx'
import Home from '../pages/Home/Home.jsx'
import About from '../pages/About/About.jsx'
import Contact from '../pages/Contact/Contact.jsx'
import Books from '../Pages/Books/Books.jsx'
import Profile from '../pages/Profile/Profile.jsx'
import UploadBookForm from '../Pages/BookCreate/UploadBookForm.jsx'


function AppRoutes() {
  return (

    <Routes>

      <Route path='/' element={<Welcome />} />

      <Route path='/login' element={<Login />} />
      
      <Route path='/register' element={<Register />} />
      
      <Route path='/home' element={<Home />} />

      <Route path='/about' element={<About />} />

      <Route path='/contact' element={<Contact />} />

      <Route path='/books' element={<Books/>} />

      <Route path='/profile' element={<Profile />} />

      <Route path='/upload' element={<UploadBookForm />} />

    </Routes>

  )
}

export default AppRoutes;