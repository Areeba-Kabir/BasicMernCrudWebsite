const express=require('express');
const app=express();
const router=require('./Router/auth-router')

app.use('/api/auth/',router)

app.listen(3000,()=>{
    console.log("app liyens on port 30000");
})