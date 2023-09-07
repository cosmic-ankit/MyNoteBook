const connectToMongo = require('./db'); // Here we are importing the connectToMongo from db.js
const express = require('express'); // Importing express that we downloaded here

connectToMongo(); // Calling the connectToMongo function here which connects to the database



//  Setting up the express server now

const app = express() 

const port = 5000 //defining the port on which your Express server will listen for incoming requests.

app.use(express.json());
//  It is a middleware that helps us in fetching the dat from the request send by the client.



// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// Now instead of doing routing here we will create the route for them seprately and we will use app.use to link these routes

// In Express.js, the app.use() function is a middleware function that is used to specify middleware functions or routers that should be invoked for every incoming HTTP request to your application. Middleware functions are functions that have access to the request (req), response (res), and the next middleware function in the application’s request-response cycle.

// app.use([path], middlewareFunction)

app.use('/api/auth', require('./Routes/Auth'));
app.use('/api/notes', require('./Routes/Notes'));















app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// You start the Express server by calling the listen method on the app instance. It listens on the specified port, and the callback function logs a message indicating that the server is running.



// app.get('/api/v1/login', (req, res) => {
//   res.send('Hello U are logged in!')
// })

// app.get('/api/v1/signup', (req, res) => {
//   res.send('Hello Signing in!')
// })

// Now when we go to http://localhost:3000/api/v1/signup (localhost3000 + path) we will see the result of sign up page, and that is same with the login page. So we can create all the page here in index.js as well but putting all the code here will make the code hard to manage. Thus to follow the practics of clean coding we wont do it

// When a GET request is made to this route, the server responds with "Hello World!".