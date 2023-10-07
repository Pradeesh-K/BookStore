import express from "express";
import {PORT, mongoDBURL} from "./config.js";
import mongoose from "mongoose";
import {Book} from './models/bookModel.js'
import booksRoute from './routes/booksRoute.js'
import cors from 'cors';

const app = express();
//Middleware to parse req body
app.use(express.json());

///CORS
app.use(cors());

//Home Page
app.get('/',(req,res) => {
    res.send("Welcome to MERN stack tutorial");
    return res.status(234).send("Welcome to mern stack tutorial");
});

app.use('/books', booksRoute);


mongoose
    .connect(mongoDBURL)
    .then(()=> {
        console.log('app connected to db succesfully');
        app.listen(PORT, () => {
        console.log(`app listening port : ${PORT}`);
        })
    })
    .catch((error) => {
        console.log(error);
    });

