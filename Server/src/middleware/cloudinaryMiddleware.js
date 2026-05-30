import { v2 as cloudinary } from 'cloudinary';

import 'dotenv/config'

const CLOUDINARY_CLOUD_NAME =  process.env.CLOUD_NAME

const CLOUDINARY_API_KEY = process.env.API_Key

const CLOUDINARY_API_SECRET = process.env.API_SECRET

cloudinary.config({

  cloud_name: CLOUDINARY_CLOUD_NAME,

  api_key: CLOUDINARY_API_KEY,

  api_secret: CLOUDINARY_API_SECRET,

});

export default cloudinary;