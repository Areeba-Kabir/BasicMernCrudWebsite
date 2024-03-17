const mongoose=require('mongoose');
require('dotenv').config()

const URI=process.env.URI_DB;

const connectdb=async()=>{
    try
    {
        await mongoose.connect(URI);
        console.log("successfully connected to database");
    }
    catch(error)
    {
        console.log("Connection failed to database")
        process.exit(0);
    }
}

module.exports=connectdb;