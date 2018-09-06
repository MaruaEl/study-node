// var events = require('events'); // create custom events

// var util = require('util'); // to inherit things

// var fs = require('fs'); // fs read files

// var myEmitter = new events.EventEmitter();

// console.log(__dirname);

// console.log(__filename);

// Custom events exemples

// myEmitter.on('anEvent', (msg) => {
    // console.log(msg);
// });

// myEmitter.emit('anEvent', 'The event was emitted');

// Util Example

// var Person = function(name) {
    // this.name = name;
// };

// util.inherits(Person, events.EventEmitter);

// var Mary = new Person('Mary');
// var Maru = new Person('Maru');
// var people = [Mary, Maru];

// people.forEach(function(person) {
    // person.on('speak', function(msg) {
        // console.log(person.name + ' said ' + msg);
    // });
// });

// Maru.emit('speak', 'ciao');

// Fs read and write files example

// var readMe = fs.readFileSync('readMe.txt', 'utf8'); // syncronous version that block the code
// console.log(readMe);

// fs.writeFileSync('writeMe.txt', readMe);

// fs.readFile('readMe.txt', 'utf8', function (err, data) {
    // console.log(data);
    // fs.writeFile('writeMe.txt', data);
// }); // Asyncronous version just removed "sync" we need a calback function for when the async operation is done - tis is not blocking the code. While is resolving the async operation is going to carry on with reading the other code

// fs.mkdirSync('cose'); // creae a new folder synchronously - run node app
// fs.rmdirSync('cose'); // deletes a directory synchronously - run node app

// fs.mkdir('altrecose', function () {
    // fs.readFile('readMe.txt', 'utf8', function (err, data) {
        // fs.writeFile('./altrecose/writeMeAgain.txt', data);
    // });
// }); // creae a new folder synchronously - run node app - always add a callback functio to do something once finished with the task
// fs.rmdir('altrecose'); // deletes a directory synchronously - run node app


// Make a server

var http = require('http');

var server = http.createServer(function (request, response) {
    console.log('request was made: ' + request.url);
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('Hey Sacchettini');
});

server.listen(3000, '127.0.0.1');
console.log('ascoltando to port 3000');