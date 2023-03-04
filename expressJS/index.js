const express = require('express');
const app = express();  // These two lines is used to import Express into our file

app.get('/', function(req, res){ // This func tells what to do when get the request of at given route is called.
   res.send("Hello world in me!");  //Take an object as an input and send to the client.
});
app.post('/', function(req, res){
   res.send("Post Has been successfully sent!!!");
});

const about = require('./Routers/about.js'); // Used to fetch the specific routers. 
app.use('/about',about);   // Determine the route for the Router.

// Dynamic Route

// app.get('/:id', function(req, res){
app.get('/:id([0-9]{5})', function(req, res){   // Restrict URL Parameter.
   res.send("The Id is "+ req.params.id);
});

// Any Default Route

app.get('*', function(req, res){
   res.send("Sorry! This Page Is'nt Available.");
});

app.listen(3000); // This func binds and listen for the connections on the specific host and port. 