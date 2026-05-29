

import express from 'express'
import { getAllBooks, getSingleBook, createBook } from '../Controllers/bookController.js'


const bookRoute = express.Router()

bookRoute.post('/create', createBook)

bookRoute.get('/', getAllBooks)

bookRoute.get('/:_title', getSingleBook)

export default bookRoute
