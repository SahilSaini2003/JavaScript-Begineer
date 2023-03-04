//Routers help to maintain the code smartly and reduce lines of main file.
const express = require('express');
const app = express.Router();

app.get('/', function(req, res){
    res.send("Its all about Me");
});

module.exports = app;