import React from 'react'
import Navbar from '../../Components/Navbar'
import Loader from '../../Components/loader/Loader'
import BookCard from '../../Components/BookCard'
import BookUploadForm from '../BookUpload/BookUploadForm'
function Home() {
  return (
    <>
    <Navbar/>
    <h1>Home</h1>
    {/* <BookUploadForm/> */}
    
    <BookCard/>
   
    </>
    
  )
}

export default Home