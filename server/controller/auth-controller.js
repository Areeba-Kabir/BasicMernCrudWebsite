const user= require('../Models/userModel')

const register= async( req,res)=>{
    try {
        //console.log(req.body);

        const {
            username,
            phone,
            email,
            password
        } = req.body;

        const userExists= await user.findOne({email});
        
        if (userExists)
        {
            return res.status(400).json({msg:"email already exists"})
        }

        const createUser= await user.create({
            username,
            phone,
            email,
            password
        })

        res.status(200).send({message: createUser})

    } catch (error)
    {
        res.status(500).send("page not found")
    }
}

const home=async( req,res)=>{
    try {
        res.status(200).send("Welcome to home page!")
    } catch (error) {
        res.status(500).send("page not found")
    }
}

module.exports={register,home}