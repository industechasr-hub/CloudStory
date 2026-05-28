
import "dotenv/config"

const ENV = process.env.ENV

const errorMiddleware = (err, req, res, next) => {
    const statusCode = err.statusCode || 500

    res.status(statusCode).json({
        message: err.message,
        success: false,
        errorstack: ENV === "dev" ? err.stack : null
    })
}

export default errorMiddleware;