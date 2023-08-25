//  Now here we will craete the api

const express = require('express');
const router= express.Router();
// express.Router() is a built-in middleware function in Express that allows you to create modular, mountable route handlers

router.get('/',(req, res) =>{
   obj = {
        a:"thos",
        number:32,
    }
    res.json(obj);

})

module.exports = router;

// router.get() is a method provided by an instance of express.Router() to define a route that handles HTTP GET requests for a specific URL path. This method is used to define the behavior of your server when a client sends a GET request to the specified path.

// Here we are using router.get instead of app.get as this code is for a particular route

