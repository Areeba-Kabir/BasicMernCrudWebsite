const express=require('express');
const app=express();
const router=require('./Router/auth-router')
const connectdb=require('./utils/db')
require('dotenv').config()

//middleware--  now our applicationn will accept json data
app.use(express.json())

// api mounting
app.use('/api/auth/',router)

const port=process.env.PORT;

connectdb()
    .then(()=>
    {
    app.listen(port,() =>
    {
        console.log(`app listens on port ${port}`);
    })
    })
    .catch((error) =>
    {
    console.log(error)
    })



