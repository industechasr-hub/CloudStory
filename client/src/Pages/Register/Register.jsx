import React, { useState } from "react";
import { Mail, Lock, Eye, PencilLine, UserRoundKey, EyeOff, } from "lucide-react";
import { Link } from "react-router-dom";
import { signUp } from "../../services/api";
import regbg from "../../assets/bg2.webp"
import Footer from "../../Components/Footer";


const Register = () => {
    const [showPassword, setShowPassword] = useState(false);

    const [signUpCredential, setSignUpCredential] = useState({
        name: "",
        role: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setSignUpCredential({
            ...signUpCredential,
            [e.target.name]: e.target.value,
        });
    };

    const handelSignUp = (e) => {
        e.preventDefault();

        signUp(e, signUpCredential);
        setSignUpCredential({
            name: "",
            role: "",
            email: "",
            password: "",
        });

    };

    return (
        <>
        <div className=" relative min-h-screen flex justify-center  items-center px-10">
            <img className="absolute inset-0 w-full h-full object-cover" src={regbg} alt="img" />

            <div className=" absolute w-full max-w-md backdrop-blur-lg rounded-3xl shadow-xl p-8 border-2 border-gray-300">
                {/* Heading */}
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-orange-600">
                        Create an account
                    </h1>

                    <p className="mt-1">
                        Sign up to get started
                    </p>
                </div>

                {/* Form */}
                <form className="mt-8 space-y-2" onSubmit={handelSignUp}>
                    {/* Name */}
                    <div>
                        <label className="block mb-2 font-medium text-black">
                            Name
                        </label>

                        <div className="flex items-center border border-gray-400 rounded-xl px-4 py-2">
                            <PencilLine className="text-gray-400 mr-3" size={20} />

                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                className="w-full outline-none bg-transparent"
                                value={signUpCredential.name}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    {/* Role */}
                    <div>
                        <label className="block mb-2 font-medium">
                            Role
                        </label>

                        <div className="flex items-center border border-gray-400 rounded-xl px-4 py-3">
                            <UserRoundKey className="text-gray-400 mr-3" size={20} />

                            <select
                                name="role"
                                className="w-full outline-none bg-transparent"
                                value={signUpCredential.role}
                                onChange={handleChange}
                            >
                                <option value="">Select Role</option>
                                <option value="user">User</option>
                                <option value="author">Author</option>
                            </select>
                        </div>
                    </div>

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
                                value={signUpCredential.email}
                                onChange={handleChange}
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
                                value={signUpCredential.password}
                                onChange={handleChange}
                            />

                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? (
                                    <EyeOff className="text-gray-700" size={20} />
                                ) : (
                                    <Eye className="text-gray-700" size={20} />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Forgot Password */}
                    <div className="flex justify-end">
                        <Link
                            to="/forgot-password"
                            className="text-xs font-semibold hover:underline"
                        >
                            Forgot Password?
                        </Link>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-xl text-lg font-semibold shadow-lg transition"
                    >
                        Sign Up
                    </button>
                </form>

                {/* Login Link */}
                <p className="text-center mt-3">
                    Already have an account?{" "}
                    <Link
                        to="/login"
                        className="text-blue-500 font-semibold hover:underline"
                    >
                        Log In
                    </Link>
                </p>

                {/* Divider */}
                <div className="flex items-center my-5">
                    <div className="flex-1 h-[1px] bg-gray-400"></div>

                    <span className="px- text-sm">
                        Or continue with
                    </span>

                    <div className="flex-1 h-[1px] bg-gray-400"></div>
                </div>

                {/* Google Login */}
                <div className="grid grid-cols-1 gap-4">
                    <button className="border border-gray-500 rounded-xl py-2 flex items-center justify-center gap-2 hover:bg-gray-50 transition">
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

export default Register;