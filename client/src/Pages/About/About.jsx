import React from 'react'
import Navbar from '../../Components/Navbar'
import { Link } from 'react-router-dom'
import Footer from '../../Components/Footer'

function About() {
  return (

    <>
      <Navbar />
      <div className="max-w-6xl mx-auto px-6 py-12">


        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
            About CloudStory
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Where stories come to life, ideas find a voice, and readers discover
            content that inspires, educates, and connects people around the world.
          </p>
        </div>


        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600 leading-8">
            Our mission is to make storytelling accessible to everyone. Whether
            you're sharing personal experiences, educational content, creative
            writing, or insightful articles, CloudStory helps your voice reach a
            wider audience and create meaningful impact.
          </p>
        </div>


        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            What We Offer
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className=" shadow-md rounded-xl p-6">
              <h3 className="font-bold text-xl mb-2"> Easy Publishing</h3>
              <p className="text-gray-600">
                Create, edit, and publish your stories effortlessly.
              </p>
            </div>

            <div className="bg-gray-200 shadow-md rounded-xl p-6">
              <h3 className="font-bold text-xl mb-2"> Quality Content</h3>
              <p className="text-gray-600">
                Explore articles, experiences, and ideas from diverse voices.
              </p>
            </div>

            <div className="shadow-md rounded-xl p-6">
              <h3 className="font-bold text-xl mb-2">Global Community</h3>
              <p className="text-gray-600">
                Connect with readers and writers from around the world.
              </p>
            </div>

            <div className="bg-gray-200 shadow-md rounded-xl p-6">
              <h3 className="font-bold text-xl mb-2">Responsive Experience</h3>
              <p className="text-gray-600">
                Enjoy seamless reading and writing across all devices.
              </p>
            </div>
          </div>
        </div>


        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Why CloudStory?
          </h2>

          <p className="text-gray-600 leading-8">
            Every story has the power to inspire, educate, and connect people.
            CloudStory was created to bring together individuals who love sharing
            ideas and discovering new perspectives. We believe that meaningful
            content can create lasting impact and foster genuine connections.
          </p>
        </div>


        <div className="bg-linear-to-r from-pink-400 to-orange-400 text-white rounded-2xl p-10 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Join Our Community
          </h2>

          <p className="mb-6 text-lg">
            Whether you're here to write your first story, explore fresh ideas,
            or connect with fellow readers, CloudStory welcomes you.
          </p>

          <Link
            to="/books"
            className="bg-white text-orange-700 font-semibold px-6 py-3 rounded-full hover:scale-105 transition">
            Start Reading
          </Link>
        </div>

      </div>
      <Footer/>
    </>

  )
}

export default About