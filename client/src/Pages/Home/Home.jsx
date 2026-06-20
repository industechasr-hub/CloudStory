import React from 'react'
import Navbar from '../../Components/Navbar'
import { useEffect, useState } from 'react'
import BookCard from '../../Components/BookCard'
import { fetchBooks } from '../../services/api'
import bgimg from '../../assets/bgi.png'
import { Link } from 'react-router-dom'
import Footer from '../../Components/Footer'
import UploadBookForm from '../BookCreate/BookCreateForm'
import Testimonials from '../../Components/Testimonials/Testimonials'
import img3 from '../../assets/mimg.jpg'

function Home() {

  const [books, setBooks] = useState([])
  const [Search, setSearch] = useState()

  useEffect(() => {
    const loadBooks = async () => {
      const books = await fetchBooks();
      setBooks(books);
    };

    loadBooks();
  }, []);


  return (
    <>
      <Navbar />

      <div className="flex flex-col">

        <div className="grid grid-cols-1 md:grid-cols-2 items-center min-h-125 px-4 md:px-10 gap-8">


          <div>
            <h1 className="font-serif text-3xl md:text-5xl font-extrabold py-4 text-gray-800">
              Stories That Connect <br /> the World
            </h1>

            <h2 className="text-xl md:text-2xl font-bold font-serif text-pink-900">
              Create. Explore. Inspire.
            </h2>

            <p className="text-sm md:text-base py-4 text-gray-600">
              Share your stories, explore new ideas, and connect with readers
              around the world. CloudStory is your space to write, discover,
              and inspire through meaningful content.
            </p>


            <div className="bg-gray-100 rounded-full p-2 mt-4 flex w-full max-w-md">
              <input
                className="flex-1 px-3 py-2 outline-none bg-transparent text-sm font-semibold"
                placeholder="Find your book here..."
                type="search"
              />

              <button className="text-white px-5 py-2 font-semibold rounded-full bg-sky-700 hover:bg-sky-600 transition">
                Search
              </button>
            </div>
          </div>


          <div className="flex justify-center">
            <div className="rounded-2xl bg-pink-100 p-8">
              <img
                className="w-full max-w-lg object-contain"
                src={bgimg}
                alt="CloudStory Hero"
              />
            </div>
          </div>
        </div>

        <div className='w-full p-8 '>
          <img
            className='w-full rounded-2xl shadow-amber-800 shadow-lg ease-in-out duration-500'
            src={img3} alt="" />
        </div>
        <div className="text-center mt-12 px-4">
          <h2 className="text-3xl font-bold text-gray-800">
            Explore Popular Books
          </h2>

          <p className="text-gray-500 mt-2">
            Discover stories from talented writers around the world.
          </p>
        </div>


        <div className="mt-8 flex flex-wrap gap-5 justify-center px-4 pb-10">
          <BookCard books={books} />
        </div>
      </div>
      <Testimonials />
      <Footer />
      
    </>

  )
}

export default Home