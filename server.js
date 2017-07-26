const express = require('express');
const http = require('http');
const socket = require('socket.io');

const app = express();
const server = http.Server(app);
const io = socket(server);

var count = 0;

app.get('/', (req, res) => {
      res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', (data) => {
      count++;
      data.send(count + " Active sockets");
});

server.listen(3000);