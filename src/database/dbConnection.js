const mongoose = require('mongoose');
const dotenv= require('dotenv')
dotenv.config()
const dbconnection = mongoose.connect(`${process.env.MONGO_URI}/Panjikaran`)
.then(() => {
    console.log("Connected to MongoDB");
})
.catch((err) => {
    console.error("Error connecting to MongoDB", err);
});

module.exports=dbconnection;