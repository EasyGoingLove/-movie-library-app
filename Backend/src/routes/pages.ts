import express from "express";
import api from "../api/api";
import Movie from "../models/movie";
import { Mongoose, Types } from "mongoose";

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

router.delete("/deleteFav", (req, res) => {
  Movie.findByIdAndRemove(req.body.source)
    .then((data) => {
      console.log(`Deleting Fav movie ${data}`);
      res.send(req.body.source);
    })
    .catch((err) => {
      console.log(err);
      res.send("Error couldn't delete");
    });
});

router.put("/checkIfinDb", (req, res) => {
  
  if (req.body.id.startsWith("614")) {
    Movie.countDocuments({ _id: req.body.id }, function (err, count) {
      if (count > 0) {
        res.send("Yes");
      } else {
        res.send("No");
      }
    });
  }else{
    Movie.countDocuments({ summarary: req.body.id }, function (err, count) {
      if (count > 0) {
        res.send("Yes");
      } else {
        res.send("No");
      }
    });
  }
});

router.put("/onChangeStar|Text", (req, res) => {
     console.log(req.body);

     let toUpdate;
     if(req.body.devider===1){
       toUpdate = {"stars": req.body.starOrtext}
     }else{
      toUpdate = {"rewiew": req.body.starOrtext};
     }
     Movie.findByIdAndUpdate(req.body.id, toUpdate, {new: true}, function(err, result){
      if(err){
          res.send(err)
      }
      else{
          res.send(result)
      }
  })
});

router.put("/getStarText", (req, res) => {
  console.log(req.body);

  Movie.findById(req.body.id,function(err: any, result: any){
   if(err){
       res.send(err)
   }
   else{
       res.send(result)
   }
})
});
export default router;
