const express= require('express');
const controller=require('../controller/auth-controller')

const router=express.Router();

router.route('/').get(controller.home);

// router.get('/login',(req,res)=>{
//     res.status(200).send("Welcome to login")
// })

// router.get('/login',controller.login);

router.post('/login',controller.login);

module.exports=router;