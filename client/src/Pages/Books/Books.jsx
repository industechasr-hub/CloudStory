import React from 'react'
import Navbar from '../../Components/Navbar'
import { useEffect, useState } from 'react'
import BookCard from '../../Components/BookCard'
import { fetchBooks } from '../../services/api'
import Footer from '../../Components/Footer'

function Books() {
  const [books, setBooks] = useState([]);
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
    <Navbar/>
    <div className='flex flex-col items-center' >
     <div className="bg-gray-200 rounded-full p-1 mt-4 flex w-full max-w-md">
          <input
            className="flex-1 px-3 py-2 outline-none bg-transparent text-sm font-semibold"
            placeholder="Find your book here..."
            type="search"
          />

          <button className="text-white px-5 py-1.5 font-semibold rounded-full bg-sky-700 hover:bg-sky-600 transition">
            Search
          </button>
        </div>
    <div className="mt-8 flex flex-wrap gap-5 justify-center px-4 pb-10">
      <BookCard books={books} />
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default Books