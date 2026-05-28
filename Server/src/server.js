import express from 'express'
import "dotenv/config"
import morgan from 'morgan'
import errorMiddleware from './middleware/errormiddleware.js'
import connectDB from './config/dbConfig.js'

const app = express()

const PORT = process.env.PORT || 3001

//middleware
app.use(express.json())

app.use(express.urlencoded())

app.use(morgan('dev'))

app.get("/", (req, res) => {
    res.send("hello from Cloud Story Server")
})

//Database connection
connectDB()

app.get("/error", (req, res) => {
    throw new Error("error from error route")
})

app.use(errorMiddleware)

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);

})