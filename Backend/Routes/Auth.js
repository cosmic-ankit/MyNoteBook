//  Now here we will craete the api

const express = require('express');
const router= express.Router();
const User = require('../Models/User');
const { body, validationResult } = require('express-validator');
// Importing the validation here. Here we are doing the destructuring

// express.Router() is a built-in middleware function in Express that allows you to create modular, mountable route handlers

router.post('/',[
    // Here in this array we can add the validation
    body('name', 'Enter a valid name').isLength({ min: 3 }),
body('email', 'Enter a valid Email').isEmail(),
    body('password', 'Password must be atleast 8 characters').isLength({ min: 8 }),
],(req, res) =>{
   
    // console.log(req.body); 
    // //  To extract the data from the body of the request send by the user we use req.body, and to use req.body we have to export an express middleware called express.json that we will do in index.json

    // console.log(res.send(req.body));
    // const user = User(req.body);
    // user.save();

    const errors = validationResult(req); // To check if there is an error and displaying the error message
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // Creating the user
    User.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
      }).then(user => res.json(user))
      .catch(err=> {console.log(err)
        res.json({error: 'Please enter a unique value for email', message: err.message})})
    // Adding this try and error for if the name of email becomes same
    
    
},);

module.exports = router;

// router.get() is a method provided by an instance of express.Router() to define a route that handles HTTP GET requests for a specific URL path. This method is used to define the behavior of your server when a client sends a GET request to the specified path.

// Here we are using router.get instead of app.get as this code is for a particular route

/* In the validation array we are usinng the express validator

 body('name', 'Enter a valid name').isLength({ min: 3 }),

Here we are extracting the name from the body and checking if its length is more than 3 characters, if not we have added a custom message that will be displayed in response that is Enter a valid name */
