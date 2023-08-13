const mongoose  = require('mongoose')

const connectDB = async() =>{
    try{
        const connect = await mongoose.connect(process.env.MONGO_URI)
        console.log("DB connection successfull!!")
    }
    catch(err){
        console.log(err.message);
    }
}

module.exports  = connectDB