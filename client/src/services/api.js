import axios from "axios";

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




