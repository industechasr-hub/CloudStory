import React, { useState } from 'react'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import { User } from 'lucide-react'
import { logIn } from '../../services/api'
import { useEffect } from 'react'

function Profile() {

  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    role: "",
  });

  const token = localStorage.getItem("token");
  useEffect(() => {

    const data = JSON.parse(localStorage.getItem("user"));
    // console.log(data);

    if (data) {
      setUser(data);
    }
  }, []);

  const Logout = () => {
    localStorage.removeItem("token");
    localStorage.clear();
    window.location.reload();
  }



  return (
    <>
      <Navbar />
      {token ? <div className="min-h-screen bg-gray-100 flex items-center justify-center p-5">
        <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-8 px-14">

          <div className="flex flex-col items-center">
            <User className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center" />

            <h1 className="text-2xl font-bold mt-4">{user?.name}</h1>
            <p className="text-gray-500">{user?.email}</p>
          </div>

          <div className="mt-8 space-y-4">
            <div className="flex justify-between border-b pb-2">
              <span className="font-semibold">User ID:</span>
              <span>{user._id}</span>
            </div>

            <div className="flex justify-between border-b pb-2">
              <span className="font-semibold">Name:</span>
              <span>{user.name}</span>
            </div>

            <div className="flex justify-between border-b pb-2">
              <span className="font-semibold">Email:</span>
              <span>{user.email}</span>
            </div>

            <div className="flex justify-between border-b pb-2">
              <span className="font-semibold">Role:</span>
              <span className="capitalize">{user.role}</span>
            </div>
          </div>

          <div className='flex justify-center'>
            <button
              className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded mt-8 "
              onClick={Logout}
            >
              Logout
            </button>
          </div>

        </div>
      </div> : <h1 className='text-2xl font-bold text-center mt-4'>Please login first </h1>}

      <Footer />

    </>
  )
}

export default Profile