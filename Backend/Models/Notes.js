// To create the databse in mongoi db :-

// Create the database -> Create the Collection -> In collection u can create the document (.json files) -> adding Data 
//  We will create the modules in the mdels folder and mongodb will manage it
//  Model name should always start with capital letter ex:- Notes.js




const mongoose = require('mongoose'); // Importing the mongoose here

const NotesSchema = new Schema({
    title : {
        type: String, // Declare the data type it will accept
        required: true, // The field is required else it will show error if not provided
    },
    description : {
        type: String,
        required: true,
     // Every email in the database should be unique
    },
    type : {
        type: String,
        default: "Genertal",
    },
    date : {
        type : Date,
        default: Date.now // This function returns the current dat so that date will be the current date by default
    }


  });

  module.exports = mongoose.model('Nser', NotesSchema)
  // To export the model         (Name of model, Name of schema)

  
  

