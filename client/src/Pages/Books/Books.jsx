import React from 'react'
import Navbar from '../../Components/Navbar'
import { useEffect, useState } from 'react'
import BookCard from '../../Components/BookCard'
import { fetchBooks } from '../../services/api'
import Footer from '../../Components/Footer'

function Books() {
  const [books, setBooks] = useState([]);

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
    <div className="mt-8 flex flex-wrap gap-5 justify-center px-4 pb-10">
      <BookCard books={books} />
    </div>
    <Footer/>
    </>
  )
}

export default Books