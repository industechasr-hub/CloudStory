import createError from 'http-errors';
import { bookModel } from '../models/bookModel.js';

export const createBook = async (req, res, next) => {
    try {
        const { title, authorName, description, pdfUrl, uploadedBy} = req.body;
        const newBook = new bookModel({ title, authorName, description, pdfUrl, uploadedBy });

        if(!title || !authorName || !description || !pdfUrl || !uploadedBy){
            next(createError(400, "Missing Fields - One of the Required Fields Is Empty"))
        }   


        await newBook.save();
        res.status(201).json({
            success: true,
            message: "Book Created Successfully",
            book: newBook
        });

    }catch (err) {
        next(err)
    }
}

export const getAllBooks = async (req, res, next) => {
    try {
        const books = await bookModel.find();
        res.status(200).json({
            success: true,
            message: "Books Retrieved Successfully",
            books: books
        });
    } catch (err) {
        next(err);
    }
};  

 export const getSingleBook = async (req, res, next) => {
    try {
        const { title } = req.params;
        const book = await bookModel.findOne({ title });
        if (!book) {
            next(createError(404, "Book Not Found"))
        } else {
            res.status(200).json({
                success: true,
                message: "Book Retrieved Successfully",
                book: book
            });
        }
    } catch (err) {
        next(err);
    }
};


