
const login= async( req,res)=>{
    try {
        console.log(req.body);
        res.status(200).send({message: req.body})
    } catch (error) {
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

module.exports={login,home}