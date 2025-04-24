import express from "express";
import {PORT, mongoDBURL} from "./config.js";
import mongoose from "mongoose";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";

const app = express();

// Middleware for parsing request body
app.use(express.json());

// Middleware for CORS policy
app.use(cors()); //cors for all access
// app.use(
//     cors({
//         origin: 'http://localhost:3001',
//         methods: ['GET','POST','PUT','DELETE'],
//         allowedHeaders: ['Content-Type'],
//     })
// );

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('Welcome To MERN Stack Web');
});

app.use('/user', userRoutes);
app.use('/product', productRoutes);

app.listen(PORT, () => {
    console.log(`App is listening to port: ${PORT}`);
});

mongoose
    .connect(mongoDBURL)
    .then(() => {
        
        console.log('App Connected to Database');
    })
    .catch((error) => {
        console.log(error);
    });