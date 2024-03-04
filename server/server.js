const express=require('express');
const app=express();
const router=require('./Router/auth-router')
const connextdb=require('./utils/db')

//middleware--  now our applicationn will accept json data
app.use(express.json())

// api mounting
app.use('/api/auth/',router)


connextdb().then(()=>{
    app.listen(3000,()=>{
        console.log("app listens on port 30000");
    })
}).catch((error)=>{
    console.log(error)
})



