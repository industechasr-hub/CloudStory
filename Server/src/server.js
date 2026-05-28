import express from 'express'
import "dotenv/config"
import morgan from 'morgan'

const app = express()

const PORT = process.env.PORT || 3001

//middleware
app.use(express.json)

app.use(express.urlencoded)

app.use(morgan('dev'))

app.get("/", (req, res) => {
    res.send("hello from Cloud Story Server")
})

app.listen(PORT, () => {
    console.log(`Server is running at https://localhost:${PORT}`);

})