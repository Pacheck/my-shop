import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenvConfig from 'dotenv';

const app = express();
app.use(cors());

dotenvConfig.config();
const mongoDB = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASSWORD}@myshop.sjqif.mongodb.net/test`;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;


app.get('/', (req, res) => {

})


app.listen(3333);