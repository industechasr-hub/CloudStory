import React from 'react'
import Navbar from '../../Components/Navbar'
import { useEffect, useState } from 'react'

function Home() {


  const [books, setBooks] = useState([])

  const fetchBooks = async () => {
    const response = await fetch('/api/book')
    const data = await response.json()
    console.log(data.books)
    setBooks(data.books)

  }

  useEffect(() => {

    fetchBooks()

  }, [])


  return (
    <>
      <Navbar />
      <h1>Home</h1>
      {books.map((book) => (
        <div key={book._id}>
          <h2>{book.title}</h2>
          <p>{book.description}</p>
          <img className='h-44'

            src={book.cover}
            alt="" />
        </div>
      ))}

    </>

  )
}

export default Home