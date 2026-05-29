import React, { useState } from "react";
import {
    Mail,
    Lock,
    Eye,
    PencilLine,
    EyeOff,} from "lucide-react";

import { Link } from "react-router-dom";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);

    const [name, setName] = useState("")

    const [email, setEmail] = useState("")

    const [password, setPassword] = useState("")
    
    const  [signUpCredential, setSignUpCredential] = useState({
        name: "",
        email:"",
        password:""
    })
    
    const handelSignIn = (e)=>{
        e.preventDefault()
        setSignUpCredential({
            name:name,
            email:email,
            password:password
        })
        setName("")
        setEmail("")
        setPassword("")
        
    }

    // console.log(signUpCredential);
    

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
            <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8">

                {/* Heading */}
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-black">
                        Create an account
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Sign up to get started
                    </p>
                </div>

                {/* Form */}
                <form className="mt-10 space-y-6">

                    <div>
                        <label className="block mb-2 font-medium text-gray-700">
                            Name
                        </label>

                        <div className="flex items-center border border-gray-300 rounded-xl px-4 py-3">
                            <PencilLine className="text-gray-400 mr-3" size={20} />

                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full outline-none bg-transparent"
                                value={name}
                                onChange={(e)=>setName(e.target.value)}
                            />
                        </div>
                    </div>


                    {/* Email */}
                    <div>
                        <label className="block mb-2 font-medium text-gray-700">
                            Email
                        </label>

                        <div className="flex items-center border border-gray-300 rounded-xl px-4 py-3">
                            <Mail className="text-gray-400 mr-3" size={20} />

                            <input
                                type="email"
                                placeholder="you@example.com"
                                className="w-full outline-none bg-transparent"
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block mb-2 font-medium text-gray-700">
                            Password
                        </label>

                        <div className="flex items-center border border-gray-300 rounded-xl px-4 py-3">
                            <Lock className="text-gray-400 mr-3" size={20} />

                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="********"
                                className="w-full outline-none bg-transparent"
                                value={password}
                                onChange={(e)=>setPassword(e.target.value)}
                            />

                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? (
                                    <EyeOff className="text-gray-400" size={20} />
                                ) : (
                                    <Eye className="text-gray-400" size={20} />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Forgot Password
                    <div className="flex justify-end">
                        <a
                            href="/forgot-password"
                            className="text-blue-600 text-sm hover:underline"
                        >
                            Forgot Password?
                        </a>
                    </div> */}

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl text-lg font-semibold shadow-lg transition"
                        onClick={handelSignIn}
                    >
                        Sign Up
                    </button>
                </form>

                {/* Signup */}
                <p className="text-center text-gray-600 mt-6">
                    Already have an account?{" "}
                    <Link to={'/login'}
                        className="text-blue-600 font-semibold hover:underline">
                    Sign In
                    </Link>
                </p>

                {/* Divider */}
                <div className="flex items-center my-8">
                    <div className="flex-1 h-[1px] bg-gray-300"></div>

                    <span className="px-4 text-gray-500 text-sm">
                        Or continue with
                    </span>

                    <div className="flex-1 h-[1px] bg-gray-300"></div>
                </div>

                {/* Social Buttons */}
                <div className="grid grid-cols gap-4">

                    <button className="border border-gray-300 rounded-xl py-3 flex items-center justify-center gap-2 hover:bg-gray-50 transition">
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
    );
};

export default Register;