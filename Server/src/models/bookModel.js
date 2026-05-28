import mongoose, { model, Schema } from "mongoose";

const bookSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    decription:{
        type:String,
        required:true
    },
    authorName:{
        type:String,
        required:true
    },
    pdfUrl:{
        type:String,
        required:true
    },
    uploadedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
},{timestamp:true})

export const bookModel = model("Book", bookSchema)