import React, { useState } from "react";
import {
    Mail,
    Lock,
    Eye,
    PencilLine,
    UserRoundKey,
    EyeOff,
} from "lucide-react";
import { Link } from "react-router-dom";
import { signUp } from "../../services/api";


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

    const handelSignUp =  (e) => {
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
                <form className="mt-10 space-y-6" onSubmit={handelSignUp}>
                    {/* Name */}
                    <div>
                        <label className="block mb-2 font-medium text-gray-700">
                            Name
                        </label>

                        <div className="flex items-center border border-gray-300 rounded-xl px-4 py-3">
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
                        <label className="block mb-2 font-medium text-gray-700">
                            Role
                        </label>

                        <div className="flex items-center border border-gray-300 rounded-xl px-4 py-3">
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
                        <label className="block mb-2 font-medium text-gray-700">
                            Email
                        </label>

                        <div className="flex items-center border border-gray-300 rounded-xl px-4 py-3">
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
                        <label className="block mb-2 font-medium text-gray-700">
                            Password
                        </label>

                        <div className="flex items-center border border-gray-300 rounded-xl px-4 py-3">
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
                                    <EyeOff className="text-gray-400" size={20} />
                                ) : (
                                    <Eye className="text-gray-400" size={20} />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Forgot Password */}
                    <div className="flex justify-end">
                        <Link
                            to="/forgot-password"
                            className="text-red-600 text-xs font-semibold hover:underline"
                        >
                            Forgot Password?
                        </Link>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-xl text-lg font-semibold shadow-lg transition"
                    >
                        Sign Up
                    </button>
                </form>

                {/* Login Link */}
                <p className="text-center text-gray-600 mt-6">
                    Already have an account?{" "}
                    <Link
                        to="/login"
                        className="text-blue-600 font-semibold hover:underline"
                    >
                        Log In
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

                {/* Google Login */}
                <div className="grid grid-cols-1 gap-4">
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