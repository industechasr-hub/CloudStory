import React from 'react'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'

function Contact() {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gray-200 py-12 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">
            Contact Us
          </h1>
          <p className="text-gray-600 mt-3">
            Have questions, feedback, or need support? We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h2 className="text-2xl font-semibold mb-6">
              Send a Message
            </h2>

            <form className="space-y-5">
              <div>
                <label className="block mb-2 font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Enter subject"
                  className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Message
                </label>
                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-sky-500 hover:bg-sky-700 text-white py-3 rounded-lg font-semibold transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h2 className=" bg-sky-700 text-white p-1 rounded-lg text-2xl font-semibold mb-6">
              Get In Touch
            </h2>

            <div className="space-y-6">

              <div>
                <h3 className="font-semibold text-lg"> Address</h3>
                <p className="text-gray-600">
                  CloudStory Office,
                  <br />
                  Indore, Madhya Pradesh, India
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                <p className="text-gray-600">
                  support@cloudstory.com
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg"> Phone</h3>
                <p className="text-gray-600">
                  +91 98765 43210
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">
                   Working Hours
                </h3>
                <p className="text-gray-600">
                  Monday - Friday
                  <br />
                  9:00 AM - 6:00 PM
                </p>
              </div>
            </div>

            {/* Optional Map Placeholder */}
            <div className="mt-8 bg-gray-100 rounded-lg h-48 flex items-center justify-center">
              
                <iframe
                className='w-full h-full rounded-lg'
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4514.0350842522!2d75.89186589977318!3d22.75134610360064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1780908993843!5m2!1sen!2sin"></iframe>
             
            </div>
          </div>

        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Contact