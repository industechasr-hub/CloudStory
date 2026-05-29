import {registerUser} from "../Controllers/authController.js"
import express from "express"

const authRoute = express.Router()

authRoute.post("/register", registerUser)

export default authRoute;