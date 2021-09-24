import express from "express";
import api from "../api/api";
import Movie from "../models/movie";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("All good partner");
});

router.get("/searchedMovies", async (req, res) => {
  const searchedWord: any = req.query.searchedName;
  const searchedResults = await api(searchedWord);
  res.send(searchedResults);
});

router.put("/savingFavMovie", async (req, res) => {
  console.log(req.body);
  const myData = new Movie(req.body);
  myData.save();
});

router.get("/allFavMovies", (req, res) => {
  Movie.find({}, function (err, allDetails) {
    if (err) {
      console.log(err);
    } else {
      res.send(allDetails);
    }
  });
});
export default router;
