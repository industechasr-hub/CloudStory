import {loginUser, registerUser} from "../Controllers/authController.js"
import express from "express"

const authRoute = express.Router()

authRoute.post("/register", registerUser)

authRoute.post('/login', loginUser )

export default authRoute;