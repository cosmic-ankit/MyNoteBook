const mongoose = require('mongoose');


// Creating the schema for user here

const UserSchema = new Schema({
    name : {
        type: String, // Declare the data type it will accept
        required: true, // The field is required else it will show error if not provided
    },
    email : {
        type: String,
        required: true,
        unique: true, // Every email in the database should be unique
    },
    password : {
        type: String,
        required: true,
    },
    date : {
        type : Date,
        default: Date.now // This function returns the current dat so that date will be the current date by default
    }


  });

  module.exports = mongoose.model('User', UserSchema)
  // To export the model         (Name of model, Name of schema)

  
  