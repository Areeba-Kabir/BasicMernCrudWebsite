
const mongoose= require('mongoose')

const bcrypt = require('bcryptjs')

const UserSchema= new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
}
)

UserSchema.pre("save", async function(next){

    const user=this;
    
    if(!this.isModified("password"))
    {
        next()
    }
    try{
        const salt_round = await bcrypt.genSalt(10)
        const hash_password= await bcrypt.hash(salt_round)
        user.password = hash_password
    }
    catch(error)
    {
        console.log("Error in creating User Schema")
        next(error)
    }
})

const userModel = new mongoose.model('User',UserSchema)

module.exports=userModel;