import mongoose from 'mongoose'
import "dotenv/config"

const URI  = process.env.MONGO_URI

const connectDB = async ()=>{

    try {
        const conn = await mongoose.connect(URI)
        console.log(`DB Connected successfully to ${conn.connection.host}`);
        
    } catch (error) {
        console.log(error.message);
       process.exit(1) 
    }
   
    
}
export default connectDB