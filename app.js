var stuff = require('./stuff');
var events = require('events');
var fs = require('fs');


// Testing using imported modules
var res = stuff.counter(['Matt', 'Aaron', 'Ned']);

//console.log(res);

// Testing event emitting
var myEmitter = new events.EventEmitter();

myEmitter.on('someEvent', function(msg){
    console.log(msg);
});

//myEmitter.emit('someEvent', 'The event was emitted.');

// Testing event emitting on custom objects

// Person class
class Person extends events.EventEmitter{
    constructor(name) {
        super();
        this.name = name;
    }
}

// Create Person objects
let james = new Person('James');
let mary = new Person('Mary');

// Create arroy of Person Objects
let people = [james, mary]

// Attach event emitter to each person
people.forEach(element => {
    element.on('speak', msg => {
        console.log(element.name + 'said: ' + msg)
    })
});

// Emit a speak event for James
//james.emit('speak', 'hey dudes');

// Reading and writing files using fs

// This is synchronous method to read the file
// Meaning the file will be read before any code beneath
// Is exucuted

// async read a file, 
fs.readFile('./readMe.txt', 'utf8', (err, data) => {
    //fs.writeFile('writeMe.txt', data)
    fs.writeFileSync('./writeMe.txt', data);
    console.log('File has been written');
});

console.log('this is logged before the function above executes')

//sync
//readMe = fs.readFileSync('./readMe.txt', 'utf8')

// Writing a file, again synchronous

//fs.writeFileSync('writeMe.txt', readMe)





