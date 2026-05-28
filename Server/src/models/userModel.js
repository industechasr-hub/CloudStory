import { Schema, Types } from "mongoose";

const userSchema = new Schema({
    name:{
        Types:String,
        required: true 
    },
    email:{
        Types:String,
        required:true,
        unique : true
    },
    password:{
        Types:String,
        required:true
    },
    role:{
        Types:String,
        Enum:["User","auther" ],
        default: "user"
    }
    
}, {timestamps: true})

export const userModel = model("User", userSchema)