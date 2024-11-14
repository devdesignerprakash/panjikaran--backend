const mongoose = require('mongoose');

const dbconnection = mongoose.connect('mongodb://localhost:27017/Panjikaran')
.then(() => {
    console.log("Connected to MongoDB");
})
.catch((err) => {
    console.error("Error connecting to MongoDB", err);
});

module.exports=dbconnection;