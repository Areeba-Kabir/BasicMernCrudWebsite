const mongoose=require('mongoose');

const URI='mongodb://localhost:27017'

const connectdb=async()=>{
    try{
        await mongoose.connect(URI);
        console.log("successfully connected to database");
    }catch(error){
        console.log("Connection failed to database")
        process.exit(0);
    }
}

module.exports=connectdb;