var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// Connect to the database

mongoose.connect('mongodb+srv://test:test@todo-ws7lf.mongodb.net/test?retryWrites=true&w=majority')

// Create scheme
var todoSchema = new mongoose.Schema({
    item: String
})

var Todo = mongoose.model('Todo', todoSchema);
var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = (app) => {
    app.get('/todo', (req, res) => {

        // Get data from mongo db and pass to the view

        Todo.find({}, (err, data) => {
            if (err) throw err;
            res.render('todo', {todos: data});
        });
    });

    app.post('/todo', urlencodedParser, (req, res) => {

        // Get data from view and add it to mongo db

        var newTodo = Todo(req.body).save((err, data) => {
            if (err) throw err;
            res.json(data);
        })
    });

    app.delete('/todo/:item', (req, res) => {

        // Delete requested item from MongoDb

        Todo.find({item: req.params.item.replace(/\-/g, " ")}).remove((err, data) => {
            if (err) throw err;
            res.json(data);
        });
    });
}