const connectToMongo = require('./db'); // Here we are importing the connectToMongo from db.js
const express = require('express'); // Importing express that we downloaded here

connectToMongo(); // Calling the connectToMongo function here which connects to the database



//  Setting up the express server now

const app = express() 

const port = 3000 //defining the port on which your Express server will listen for incoming requests.


app.get('/', (req, res) => {
  res.send('Hello World!')
})

// When a GET request is made to this route, the server responds with "Hello World!".



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// You start the Express server by calling the listen method on the app instance. It listens on the specified port, and the callback function logs a message indicating that the server is running.

