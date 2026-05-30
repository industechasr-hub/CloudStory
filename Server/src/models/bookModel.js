import mongoose, { model, Schema } from "mongoose";

const bookSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    cover:{
        type:String,
        required:true
    },
    authorName:{
        type:String,
        required:true
    },
    pdf:{
        type:String,
        required:true
    }, 
    uploaded:{
        type:String,
        required:true
    }
},{timestamp:true})

export const bookModel = model("Book", bookSchema)