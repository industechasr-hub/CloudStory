
import JWT from 'jsonwebtoken';

import "dotenv/config";

const JWT_SECRET = process.env.JWT_SECRET

const generateToken = (id) => {
  return JWT.sign({ id }, JWT_SECRET , { expiresIn: '7d' });
};

export default generateToken;