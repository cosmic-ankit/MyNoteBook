const mongoose = require('mongoose'); // Importing mongoose

const mongoURI = "mongodb://localhost:27017/"  // Its a variable that holds the value of mongodb string

const connectToMongo = () => {
    mongoose.connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected to MongoDB successfully");
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
    });
};

//This is a promise function where we have call the mongoose.connect which helps in connecting the database and when the connection is established the connected to mong will be printed else the error will be logged

// I've added options (useNewUrlParser and useUnifiedTopgy) to the mongoose.connect() method. These options are required for the latest version of Mongoose and the MongoDB driver. useNewUrlParser helps with parsing connection strings, and useUnifiedTopology enables the new topology engine.



module.exports = connectToMongo;

// The connectToMongo function is exported, making it available for other parts of your application to use



//  We have created db.js to connect with theb database through mongoose
