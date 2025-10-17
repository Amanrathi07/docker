import express from 'express'

const app = express() ;

app.get("/",(req,res)=>{
    res.json({
        "name":"aman"
    })
})

app.listen(3000);