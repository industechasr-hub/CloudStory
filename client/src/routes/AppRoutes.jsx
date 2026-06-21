
import { Routes, Route } from 'react-router-dom'

import Welcome from '../Pages/Welcome/Welcome.jsx'
import Login from '../Pages/Login/Login.jsx'
import Register from '../Pages/Register/Register.jsx'
import Home from '../Pages/Home/Home.jsx'
import About from '../Pages/About/About.jsx'
import Contact from '../Pages/Contact/Contact.jsx'
import Books from '../Pages/Books/Books.jsx'
import Profile from '../Pages/Profile/Profile.jsx'
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