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
    uploadedBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "userModel"
    }
},{timestamp:true})

export const bookModel = model("Book", bookSchema)