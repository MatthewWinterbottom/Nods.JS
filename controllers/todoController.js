var bodyParser = require('body-parser');

var data = [{item: 'Get milk'}, {item: 'Walk dog'}, {item: 'Pick up Grandmother'}];
var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = (app) => {
    app.get('/todo', (req, res) => {
        res.render('todo', {todos: data});
    });

    app.post('/todo', urlencodedParser, (req, res) => {
        data.push(req.body);
        res.json(data);
    });

    app.delete('/todo/:item', (req, res) => {
        data = data.filter(function(todo){
            return todo.item.replace(/ /g, '-') !== req.params.item;
        });
        res.json(data);
    });
}