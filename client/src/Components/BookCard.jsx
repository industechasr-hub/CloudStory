import React from "react";

function BookCard({ book }) {

    return (

        <>
            <div className="text-center w-70 h-100% bg-white rounded-xl border-2 border-gray-200 pt-4 p-4 shadow-lg shadow-gray-400 overflow-hidden">
                <div className="flex justify-center">
                    <img
                        src={book.cover}
                        alt="Book Cover"
                        className="-rotate-3 rounded h-68 object-cover"
                    />
                </div>

                <div className="p-4">
                    <h2 className="text-xl font-bold line-clamp-1">
                        {book.title}
                    </h2>

                    <p className="text-sm mt-1">
                        Author: {book.authorName}
                    </p>

                    <p className="text-sm mt-1 line-clamp-1">
                        Description: {book.description}
                    </p>

                    <button className="mt-2 px-2 py-1 bg-orange-500 text-white rounded-lg hover:bg-blue-700">
                        Read More
                    </button>
                </div>
            </div>
        </>
    );
}

export default BookCard;