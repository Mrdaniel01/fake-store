import dotenv from 'dotenv';


dotenv.config();

export default {
  MONGODB_URL : process.env.MONGODB_URL || 'mongodb+srv://Mrdaniel01:Mrdaniel01@crud-project.bvmzn.mongodb.net/<dbname>?retryWrites=true&w=majority',
  //MONGODB_URL : process.env.MONGODB_URL || 'http://localhost:5000',
  JWT_SECRET: process.env.JWT_SECRET || 'somethingsecret',
  PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID || 'sb',
  PORT: process.env.PORT || 5000,
}