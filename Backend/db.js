const mongoose = require('mongoose'); // Importing mongoose

const mongoURI = "mongodb://localhost:27017/"  // Its a variable that holds the value of mongodb string

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

//This is a function where we have call the mongoose.connect which helps in connecting the database and when the connection is established the callback function of connected to mong will be called

module.exports = connectToMongo;

// The connectToMongo function is exported, making it available for other parts of your application to use



//  We have created db.js to connect with theb database through mongoose
