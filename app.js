var express = require('express');
var todoController = require('./controllers/todoController');

// Set up the app using express
var app = express();

// Set up template engine
app.set('view engine', 'ejs');

// static files
app.use(express.static('./public'));

// Fire Controllers
todoController(app);

// listen to a port
app.listen(3000);

console.log('Port 3000 listening');