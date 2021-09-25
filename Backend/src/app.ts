import express, { Express } from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from 'body-parser';

import router from  './routes/pages';
import mongoConnect from './database/connect';


const app: Express = express();
const PORT: string | number = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
mongoConnect();


// app.use(todoRoutes)

app.use('/',router);
app.use('/searchedMovies',router);
app.use('/savingFavMovie',router);
app.use('/allFavMovies',router);
app.use('/deleteFav',router);
app.use('/checkIfinDb',router);
app.use('/onChangeStar|Text',router);
app.use('/getStarText',router);

app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
)