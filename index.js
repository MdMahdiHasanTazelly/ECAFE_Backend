import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.listen(PORT, async () => {
    console.log(`Listening on port ${PORT}`);
    await mongoose.connect(process.env.DB_URL);
    console.log(`Database is connected.`)

})