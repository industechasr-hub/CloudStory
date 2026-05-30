
import express from 'express'
import upload from '../middleware/multerUploader.js'
import { getAllBooks, getSingleBook, createBook } from '../Controllers/bookController.js'
import authMiddleware from '../middleware/authMiddleware.js'
import { authorOnly } from '../Controllers/authController.js'




const bookRoute = express.Router()

bookRoute.post('/create-book', authMiddleware, authorOnly, upload.fields([
    { name: "cover", maxCount: 1 },
    { name: "pdf", maxCount: 1 }]),
    createBook)

bookRoute.get('/', getAllBooks)

bookRoute.get('/:_title', getSingleBook)

export default bookRoute;
