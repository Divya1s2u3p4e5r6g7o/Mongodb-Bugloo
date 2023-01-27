const mongoose=require('mongoose');
const db = require('../models/index')
//MONGODB CONNECTION
module.exports = {
    mongoose: db.mongoose.connect(process.env.MONGODB_URL_API, {
       
        useNewUrlParser: true,
    }) .then(()=>
    {
        console.log("Database Connected Successfully");
    }).catch(error=>{
        console.log("Could not connect to Database",error);
        process.exit();
    })
}