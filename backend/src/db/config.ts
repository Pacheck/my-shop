import mongoose from 'mongoose';
import dotenvConfig from 'dotenv';

dotenvConfig.config();
const mongoDB = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASSWORD}@myshop.sjqif.mongodb.net/MyShop`;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

export default db;