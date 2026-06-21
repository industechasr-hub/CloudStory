import React from 'react'

function BookGrid( {books} ) {
   
  return (
    <>
    {books.map((book) => (
        <div key={book._id} className="w-70 bg-white rounded-xl border-2 border-gray-200 pt-2 shadow-md overflow-hidden hover:scale-105 transition ease-in-out duration-700 ">
          <div className='flex justify-center'>
            <img
            src={book.cover}
            alt="Book Cover"
            className=" -rotate-3 rounded h-68 object-cover"
          />
          </div>
        
          <div className="p-4">
            <h2 className="text-xl font-bold">
              {book.title}
            </h2>

            <p className="text-sm mt-1">
              Author: {book.authorName}
            </p>

            <p className=" text-sm mt-1"> Description: {book.description} </p>

            <button className="mt-2 px-2 py-1 bg-orange-500 text-white rounded-lg hover:bg-blue-700">
              Read More
            </button>
          </div>
        </div>
      ))}
    </>
  )
}

export default BookGrid