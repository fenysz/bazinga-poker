var player = require('./player');
var express = require('express');
var app = express();

app.use(express.json());
app.use(express.urlencoded());

var request = require('request');

app.get('/', function (req, resback) {

    var cards = [
        {"rank": "5", "suit": "diamonds"},
        {"rank": "6", "suit": "diamonds"},
        {"rank": "7", "suit": "diamonds"},
        {"rank": "7", "suit": "spades"},
        {"rank": "8", "suit": "diamonds"},
        {"rank": "9", "suit": "diamonds"}
    ];


    request({
        uri: 'http://192.168.57.181:2048',
        method: "POST",
        form: {
            cards: JSON.stringify(cards)
        }
    }, function (error, response, body) {
        resback.send(200, body);
    });

});

port = 1337;
app.listen(port);
console.log('Listening at http://localhost:' + port)

