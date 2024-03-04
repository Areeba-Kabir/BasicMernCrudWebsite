
const login= async( req,res)=>{
    try {
        res.status(200).send("Welcome to login page!")
    } catch (error) {
        console.log(error)
    }
}

const home=async( req,res)=>{
    try {
        res.status(200).send("Welcome to home page!")
    } catch (error) {
        console.log(error)
    }
}

module.exports={login,home}