import axios from "axios";


// register
 export const signUp = async (e, signUpCredential) => {
    e.preventDefault();

    try {
      const response = await axios.post(
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
export const logIn = async (e, logInCredential) => {
  e.preventDefault();

  try {
    const response = await axios.post(
      "/api/auth/login",
      logInCredential
    );

    console.log(response.data);

    localStorage.setItem("token", response.data.token);

    alert("Login successful");
  } catch (error) {
    console.log(error.response?.data || error.message);

    alert(error.response?.data?.message || "Something went wrong");
  }
};


//fetch books
export const fetchBooks = async () => {
  const response = await axios.get("/api/book");
  // console.log(response.data.books);
  return response.data.books;
};

