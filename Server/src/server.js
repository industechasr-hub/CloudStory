import express from 'express'
import "dotenv/config"
import morgan from 'morgan'
import errorMiddleware from './middleware/errormiddleware.js'
import connectDB from './config/dbConfig.js'
import authRoute from './routes/authRouth.js'
import bookRoute from './routes/bookRoute.js'
import cors from 'cors'

const app = express()



const PORT = process.env.PORT || 3001

//middleware
app.use(cors())

app.use(express.json())

app.use(express.urlencoded())

app.use(morgan('dev'))

app.get("/", (req, res) => {
    res.send("hello from Cloud Story Server")
})

//Database connection
connectDB()

//Actual Route

app.use('/api/auth', authRoute)

app.use('/api/book', bookRoute )

app.get("/error", (req, res) => {
    throw new Error("error from error route")
})

app.use(errorMiddleware)

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);

}) 