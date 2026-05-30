import "dotenv/config"
import { userModel } from "../models/userModel.js"
import createError from "http-errors"
import jwt from 'jsonwebtoken'


const JWT_SECRET = process.env.JWT_SECRET

const authMiddleware = async  (req, res, next)=>{

    const header = req.headers.authorization

    if (!header) {
        next(createError(400, "No token Provided"))
    }

    const token =  header.split(" ") [1]

    const validToken = jwt.decode(token, JWT_SECRET)

    const id = validToken.id

    const user = await userModel.findById(id).select("-password")

    req.user = user

    next()
}

export default authMiddleware