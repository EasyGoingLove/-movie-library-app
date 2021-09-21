import express from 'express';
import api from '../api/api';

const router = express.Router();

router.get('/', (req,res)=>{

    console.log("mm");

    api();


    res.send("sadasda");
    
});

export default router;