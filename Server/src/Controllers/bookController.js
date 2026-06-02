import createError from 'http-errors';
import { bookModel } from '../models/bookModel.js';
import cloudinary from '../middleware/cloudinaryMiddleware.js';

export const createBook = async (req, res, next) => {

    try {

        const {title, description, authorName} = req.body

        const imagePath = req.files.cover[0].path

        const pdfPath = req.files.pdf[0].path

        const uploadCoverImage = await cloudinary.uploader.upload(imagePath, {
            folder: "book-covers"
        })

        const uploadPdf = await cloudinary.uploader.upload(pdfPath, {
            resource_type: "raw",
            folder: "book-pdfs"
        })

        const uploadedImageUrl = uploadCoverImage.secure_url

        const uploadedPdfUrl = uploadPdf.secure_url

        const uploadedBook = await bookModel.create({
            title,
            description,
            authorName,
            cover: uploadedImageUrl,
            pdf: uploadedPdfUrl,
            uploadedBy: req.user._id
        })

        res.status(201).json({
            success: true,
            uploadedBook,
            role : req.user.role
        })

    } catch (error) {
        next(error)
    }

}

export const getAllBooks = async (req, res, next) => {
    
    try {
        const books = await bookModel.find();

        if(!getAllBooks){
            next(createError(404, "No books Available."))
        }

        res.status(200).json({
            success: true,
            message: "Books Retrieved Successfully",
            books
        });
    } catch (err) {
        next(err);
    }
};

export const getSingleBook = async (req, res, next) => {
    try {
        const { bookID } = req.params._id;

        const book = await bookModel.findById(bookID);

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


