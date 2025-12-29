import express, { json } from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
dotenv.config();

import authRoutes from "./route/auth.route.js";

const app = express();
const PORT = process.env.PORT;

app.use(cors({ origin: "*" }));

app.use(json());


app.listen(PORT, async () => {
    console.log(`Listening on port ${PORT}`);
    await mongoose.connect(process.env.DB_URL);
    console.log(`Database is connected.`)

})


app.use(authRoutes);