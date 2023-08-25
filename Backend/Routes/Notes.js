//  Writing notes related endpoints

const express = require('express');
const router= express.Router();

router.get('/',(req, res) =>{
   
    res.json([]);

})

module.exports = router;


// When a client makes a request to your server:

// If the request matches a route path defined in auth.js or notes.js, the corresponding route handler in the respective file is executed.
// In your current code, the route handlers simply respond with JSON data.
// For example:

// If a client makes a GET request to http://localhost:3000/api/auth, the route handler in auth.js sends an empty array as a JSON response.
// If a client makes a GET request to http://localhost:3000/api/notes, the route handler in notes.js sends an empty array as a JSON response
