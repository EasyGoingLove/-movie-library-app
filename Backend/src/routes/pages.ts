import express from 'express';
import api from '../api/api';

const router = express.Router();

router.get('/', (req,res)=>{
    // console.log("pages before call log");
    //  const searchedResults = api("girls");
    res.send("sadasda");
    
});

router.get('/searchedMovies',async (req,res)=>{
    const searchedWord:any = req.query.searchedName;
    const searchedResults = await api(searchedWord);
    res.send(searchedResults) 
});

export default router;