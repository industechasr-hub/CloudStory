import React, { useState } from "react";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
} from "lucide-react";

import { Link } from "react-router-dom";
import { logIn } from "../../services/api";
import img from '../../../src/assets/bg2.webp'
import Footer from "../../Components/Footer";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [logInCredential, setLogInCredential] = useState({
    email: "",
    password: "",
  });

  const handelChange = (e) => {
    setLogInCredential({
      ...logInCredential,
      [e.target.name]: e.target.value,
    });
  };

  const handelLogIn = (e) => {
    e.preventDefault();

    console.log(logInCredential);

    logIn(e, logInCredential);

    setLogInCredential({
      email: "",
      password: "",
    });
  };

  return (
    <>
      <div className=" relative min-h-screen flex items-center justify-center px-4">

        <img className=" absolute h-full w-full" src={img} alt="" />
        
        <div className="w-full backdrop-blur-md max-w-md rounded-3xl shadow-xl p-8 border-2 border-gray-300">
        
          <div className="text-center">
            <h1 className="text-4xl font-bold text-black">
              Welcome Back
            </h1>

            <p className="text-gray-700 mt-2">
              Login to continue
            </p>
          </div>

          <form className="mt-10 space-y-6" onSubmit={handelLogIn}>
            {/* Email */}
            <div>
              <label className="block mb-2 font-medium">
                Email
              </label>

              <div className="flex items-center border border-gray-400 rounded-xl px-4 py-3">
                <Mail className="text-gray-400 mr-3" size={20} />

                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className="w-full outline-none bg-transparent"
                  value={logInCredential.email}
                  onChange={handelChange}
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block mb-2 font-medium">
                Password
              </label>

              <div className="flex items-center border border-gray-400 rounded-xl px-4 py-3">
                <Lock className="text-gray-400 mr-3" size={20} />

                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="********"
                  className="w-full outline-none bg-transparent"
                  value={logInCredential.password}
                  onChange={handelChange}
                  required
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="text-gray-700" size={20} />
                  ) : (
                    <Eye className="text-gray-400" size={20} />
                  )}
                </button>
              </div>
            </div>

            <div className="flex justify-end">
              <a
                href="/forgot-password"
                className="text-xs font-semibold hover:underline"
              >
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl text-lg font-semibold shadow-lg transition"
            >
              Log In
            </button>
          </form>

          <p className="text-center mt-6">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="text-blue-600 font-semibold hover:underline"
            >
              Sign Up
            </Link>
          </p>

          <div className="flex items-center my-8">
            <div className="flex-1 h-0.5 bg-gray-400"></div>

            <span className="px-4 text-sm">
              Or continue with
            </span>

            <div className="flex-1 h-0.5 bg-gray-400"></div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <button className="border border-gray-500 rounded-xl py-3 flex items-center justify-center gap-2 hover:bg-gray-50 transition">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
                alt="google"
                className="w-5 h-5"
              />
              Google
            </button>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Login;