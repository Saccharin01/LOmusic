import mongoose from "mongoose";

export default async function connectDB() {
  try {
    if (mongoose.connection.readyState === 1) {
      return; 
    }
    
    if (!process.env.DATABASE_URL) {
      throw new Error('DATABASE_URL is not defined');
    }

    await mongoose.connect(process.env.DATABASE_URL);
    
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Database connection error:', error);
    throw error;
  }
}