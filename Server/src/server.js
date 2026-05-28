import express from 'express'
import "dotenv/config"

const app = express()

const PORT = process.env.PORT || 3001

app.get("/", (req, res) => {
    res.send("hello from Cloud Story Server")
})

app.listen(PORT, () => {
    console.log(`Server is running at https://localhost:${PORT}`);


})