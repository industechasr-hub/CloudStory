import axios from "axios";
import { useState } from "react";

const API = axios.create({
  baseURL: "import.meta.env.VITE_API_URL",  
})


// register
export const signUp = async (e, signUpCredential) => {
  e.preventDefault();

  try {
    const response = await API.post(
      "/api/auth/register",
      signUpCredential
    );

    alert("Account created successfully");
    //   console.log(response.data);     
  } catch (error) {
    console.log(error.response?.data || error.message);
    alert(error.response?.data?.message || "Something went wrong");
  }
};

// login
export const logIn = async (logInCredential) => {

  try {
    const response = await API.post(
      "/api/auth/login",
      logInCredential
    );
    // console.log(response.data);
    // localStorage.setItem("token", response.data.token);

    
    alert("Login successful");
    console.log(response.data);
  
    return response.data;

  } catch (error) {
    console.log(error.response?.data || error.message);

    alert(error.response?.data?.message || "Something went wrong");
  }
};


//fetch books
export const fetchBooks = async () => {
  const response = await API.get("/api/book");
  // console.log(response.data.books);
  return response.data.books;
};


export const uploadBook = async (bookData) => {
  try {
    const token = localStorage.getItem("token");

    const response = await API.post(
      "/api/book/create-book",
      bookData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );
    // console.log(response.data);

    return response.data;
  } catch (error) {
    console.log(error.response?.data || error.message);
  }
};