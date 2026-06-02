import { useState } from "react";

function BookUploadForm() {
  const [bookData, setBookData] = useState({
    title: "",
    description: "",
    author: "",
    cover: null,
    pdf: null,
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setBookData({
      ...bookData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;

    setBookData({
      ...bookData,
      [name]: files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(bookData);

    //submit successfully popup
    // alert("Book uploaded successfully");
    setMessage("Book uploaded successfully!");

    setTimeout(() => {
      setMessage("");
    }, 4000)


    // Reset form state
    setBookData({
      title: "",
      description: "",
      author: "",
      cover: null,
      pdf: null,
    });

    // Clear file inputs
    e.target.reset();
  };


  return (
    <div className="max-w-xl mx-auto p-6 rounded-lg shadow-2xl shadow-amber-500  border-amber-100 border-opacity-50">

      <h2 className="bg-amber-500 text-center text-xl text-white font-semibold mb-5 rounded p-2">
        UPLOAD YOUR BOOK
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block mb-1 font-medium">Book Title</label>
          <input
            type="text"
            name="title"
            value={bookData.title}
            onChange={handleChange}
            placeholder="Enter book title"
            className="w-full border rounded p-2"
            required
          />
        </div>

        {/* Author */}
        <div>
          <label className="block mb-1 font-medium">Author Name</label>
          <input
            type="text"
            name="author"
            value={bookData.author}
            onChange={handleChange}
            placeholder="Enter author name"
            className="w-full border rounded p-2"
            required
          />
        </div>
        {message && (
          <div className="fixed top-5 mt-100 bg-green-500 text-xl text-white px-20 py-5 rounded-lg shadow-xl z-50 transition-all duration-300 ease-in-out">
            {message}
          </div>
        )}


        {/* Description */}
        <div>
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            name="description"
            value={bookData.description}
            onChange={handleChange}
            rows="5"
            placeholder="Write book description..."
            className="w-full border rounded p-2"
            required
          />
        </div>

        {/* Cover */}
        <div>
          <label className="block mb-1 font-medium">Cover Image</label>
          <input
            type="file"
            name="cover"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full border rounded p-2"
            required
          />
        </div>

        {/* PDF */}
        <div>
          <label className="block mb-1 font-medium">Book PDF</label>
          <input
            type="file"
            name="pdf"
            accept=".pdf"
            onChange={handleFileChange}
            className="w-full border rounded p-2"
            required
          />
        </div>
        <div className="flex justify-center mt-10">
          <button
          type="submit"
          className="bg-blue-500 font-semibold text-white px-5 py-2 rounded hover:opacity-90"
        >
          UPLOAD BOOK
        </button>
        </div>
        
      </form>
    </div>
  );
}

export default BookUploadForm;