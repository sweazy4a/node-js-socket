// Declare 

var express = require('express');
var socket = require ('socket.io');

// App setup 

var app = express();

var server = app.listen(8000, function (){

console.log ('listening to requests on port 8000');

});

// Static files /  

app.use(express.static('public'));


// Socket setup 

var io = socket(server);

/* Wiadomosc  - polonczenie udalo */ 

io.on('connection', function (socket){
    console.log('made socket conntection')

});