import express from "express";
import router from "./routes/router";
import morgan from 'morgan'
import cors from 'cors'
import axios from 'axios';
import { protect } from "./middlewares/authMiddleware";
import { createNewUser, signin } from "./controllers/authController";
import useragent from 'express-useragent';
const app =express()
app.use(cors())
app.use(morgan('combined'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.get('/',async(req,res)=>{
  
    res.json({message:'hello'})
   
})
app.use("/user",createNewUser)
app.use("/signin",signin)
app.use("/api",protect,router)
// error handler
app.use((err,req,res,next)=>{
    if(err.type==='auth'){
        res.status(401).json({message:'unauthorized'})
    }
    else if(err.type==='input'){
        res.status(400).json({message:'invalid input'});

    }else{
        res.status(500).json({message:'server error'});
    }
})
export default app;


