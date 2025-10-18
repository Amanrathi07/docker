import express from 'express'
import mongoose from 'mongoose';
import { dbconnect } from './server.js';
import dotenv from 'dotenv';

dotenv.config();
const app = express() ;

app.get("/",(req,res)=>{
    res.json({
        "name":"aman"
    })
})

app.listen(3000,()=>{
    console.log("server is running on port 3000");
    
    dbconnect();
    
} );