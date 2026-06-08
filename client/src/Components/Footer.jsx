import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {



    return (
        <>
            <div className="bg-gray-900 text-gray-300 mt-16">
                <div className="max-w-7xl mx-auto px-6 py-12">

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                        {/* Brand */}
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">
                                CloudStory
                            </h2>
                            <p className="text-sm leading-6">
                                A platform where stories come to life. Discover, share,
                                and connect through meaningful content and inspiring ideas.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="text-lg font-semibold text-white mb-4">
                                Quick Links
                            </h3>
                            <ul className="space-y-2">
                                <li><Link
                                    to="/home"
                                    className="hover:text-white">Home</Link></li>
                                <li><Link
                                    to="/about" className="hover:text-white">About</Link></li>
                                <li><Link
                                 to="/books" className="hover:text-white">Books</Link></li>
                                <li><Link 
                                to="/contact" className="hover:text-white">Contact</Link></li>
                            </ul>
                        </div>

                        {/* Resources */}
                        <div>
                            <h3 className="text-lg font-semibold text-white mb-4">
                                Resources
                            </h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:text-white">Blog</a></li>
                                <li><a href="#" className="hover:text-white">Help Center</a></li>
                                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                            </ul>
                        </div>

                        {/* Newsletter */}
                        <div>
                            <h3 className="text-lg font-semibold text-white mb-4">
                                Stay Updated
                            </h3>

                            <p className="text-sm mb-4">
                                Get the latest stories and updates delivered to your inbox.
                            </p>

                            <div className="flex">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="flex-1 px-3 py-2 rounded-l-lg text-white outline-none bg-gray-800"
                                />

                                <button className="bg-pink-600 px-4 py-2 rounded-r-lg hover:bg-pink-700">
                                    Subscribe
                                </button>
                            </div>
                        </div>

                    </div>

                    <hr className="border-gray-700 my-8" />

                    <div className="flex flex-col md:flex-row justify-between items-center text-sm">
                        <p>
                            © 2026 CloudStory. All rights reserved.
                        </p>

                        <div className="flex gap-4 mt-4 md:mt-0">
                            <a href="#" className="hover:text-white">Facebook</a>
                            <a href="#" className="hover:text-white">Twitter</a>
                            <a href="#" className="hover:text-white">Instagram</a>
                            <a href="#" className="hover:text-white">LinkedIn</a>
                        </div>
                    </div>

                </div>
            </div>
        </>

    )
}

export default Footer