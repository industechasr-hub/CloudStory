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

