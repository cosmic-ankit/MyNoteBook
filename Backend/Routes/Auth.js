//  Now here we will craete the api

const express = require('express');
const router= express.Router();
const User = require('../Models/User');
// express.Router() is a built-in middleware function in Express that allows you to create modular, mountable route handlers

router.post('/',(req, res) =>{
   
    console.log(req.body); 
    //  To extract the data from the body of the request send by the user we use req.body, and to use req.body we have to export an express middleware called express.json that we will do in index.json

    console.log(res.send(req.body));
    const user = User(req.body);
    user.save();

})

module.exports = router;

// router.get() is a method provided by an instance of express.Router() to define a route that handles HTTP GET requests for a specific URL path. This method is used to define the behavior of your server when a client sends a GET request to the specified path.

// Here we are using router.get instead of app.get as this code is for a particular route

