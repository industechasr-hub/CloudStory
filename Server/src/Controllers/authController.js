import createError from "http-errors"
import { userModel } from "../models/userModel.js"
import bcrypt from "bcryptjs"
import generateToken from "../utils/generateToken.js"

export const registerUser = async (req, res, next) => {

    try {
        const { name, email, password, role } = req.body

        if (!name || !email || !password || !role) {
            next(createError(400, "Missing Fields - One of the Required Fields Is Empty"))
        }

        const userExisted = await userModel.findOne({ email })

        if (userExisted) {
            next(createError(400, "User Already Existed..!!!"))
        }

        const hashedPassword = bcrypt.hashSync(password, 10)

        const user = await userModel.create({
            name,
            email,
            password: hashedPassword,
            role
        })

        const token = generateToken(user._id)

        res.status(201).json({
            success: true,
            token:token,
            user
        })

    } catch (err) {
        next(err)
    }
}