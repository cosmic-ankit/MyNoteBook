//  Now here we will craete the api

const express = require('express');
const router= express.Router();
const User = require('../Models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const JWT_secret = "#23!23%688`0";



// Importing the validation here. Here we are doing the destructuring

// express.Router() is a built-in middleware function in Express that allows you to create modular, mountable route handlers

router.post('/createuser',[
    // Here in this array we can add the validation
    body('name', 'Enter a valid name').isLength({ min: 3 }),
body('email', 'Enter a valid Email').isEmail(),
    body('password', 'Password must be atleast 8 characters').isLength({ min: 8 }),
], async (req, res) =>{
   
    // console.log(req.body); 
    // //  To extract the data from the body of the request send by the user we use req.body, and to use req.body we have to export an express middleware called express.json that we will do in index.json

    // console.log(res.send(req.body));
    // const user = User(req.body);
    // user.save();



    const errors = validationResult(req); // To check if there is an error and displaying the error message
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Checking if the user with same email already exists

    try {
    let user = await User.findOne({ email: req.body.email });
    if(user) {
     return res.status(200).json({ error: "A user with the same email already exists"})
    //  If user will exist then it will return the error and code will breakdown over here
    }
    // Creating the user


    // Storing Password in Hash and creating Salt
    let salt =  await bcrypt.genSaltSync(10); //Creating salt here using bycrypt function
    let secPass =  await bcrypt.hashSync(req.body.password, salt); //Creating hash here

    

   user = await User.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email,
        
      }
      
      )

      // Now creating token to send tokens instead of req.body

      let AuthData = await user.id; // Using id in data as it is unique for every user and we can easily search for users throygh there IDs


      
      var Authtoken =  jwt.sign(AuthData, JWT_secret);
      // jwt.sign is a function that takes data and a signature and create a token, JWT_secret creates a unique signature and store it.


      console.log(res.send({"Token": Authtoken}));
    // Adding this try and error for if the name of email becomes same
    }
    catch(error) {
      console.error(error.message);
      res.status(500).send("Some Error occured");
    }
    
},);





// Creating another endpoint for login

router.post('/login',[
  // Here in this array we can add the validation

body('email', 'Enter correct credentials').isEmail(), 
body('password', 'Password should not be blank').exists(), // To check if passord field is not empty
], async (req, res) =>{

  const errors = validationResult(req); // To check if there is an error and displaying the error message
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  
  // Checking if the user with same credentials exists
  
  try {

    const {email, password} = req.body; // Using destructuring to extract email and password fron the body

  let user = await User.findOne({ email });

  if(!user) {

   return res.status(400).json({ error: "Please enter correct credentials" });
  //  If user will exist then it will return the error and code will breakdown over here
  }

  else
   {
let comparePasswords = await bcrypt.compare(password, user.password);

    if(comparePasswords)
    {
      let AuthData = await user.id; // Using id in data as it is unique for every user and we can easily search for users throygh there IDs


      
      var Authtoken =  jwt.sign(AuthData, JWT_secret);
      // jwt.sign is a function that takes data and a signature and create a token, JWT_secret creates a unique signature and store it.


      console.log(res.send({"Token": Authtoken}));



    }
    else {
      return res.status(400).json({ error: "Please enter correct credentials" });

    }
  }
}

catch(error) {
  console.error(error.message);
  res.status(500).send("Error : Internal Server Failure");
}

},);


module.exports = router;


// router.get() is a method provided by an instance of express.Router() to define a route that handles HTTP GET requests for a specific URL path. This method is used to define the behavior of your server when a client sends a GET request to the specified path.

// Here we are using router.get instead of app.get as this code is for a particular route

/* In the validation array we are usinng the express validator

 body('name', 'Enter a valid name').isLength({ min: 3 }),

Here we are extracting the name from the body and checking if its length is more than 3 characters, if not we have added a custom message that will be displayed in response that is Enter a valid name */
