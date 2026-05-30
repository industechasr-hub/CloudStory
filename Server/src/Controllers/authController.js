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

export const loginUser = async (req, res ,next)=>{

    try {
        const {email, password} =  req.body

        const userExisted = await userModel.findOne({email})

        if(!userExisted){
            next(createError(400, "Invalid Credentials"))
        }
        const isPasswordMatched = bcrypt.compareSync(password, userExisted.password)

        if(!isPasswordMatched){
            next(createError(400, "Invalid Credentials"))
        }

        const token = generateToken(userExisted._id)

        res.status(200).json({
            success: true,
            token: token,
            user: userExisted
        })
    } catch (error) {
        next(error)
        
    }

}


export const authorOnly = (req, res, next) => {

    if (req.user.role !== "author"){
        return next(createError(403, "Access Dennied - Authors Only"))
    }
    
    next()
}