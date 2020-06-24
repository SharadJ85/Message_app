import express, { Application } from 'express';
import { createServer } from 'http';
import { listen, Server } from 'socket.io';

/////////////////////////////////////////////////
// set port number
const port = 7777;

// set express
const app: Application = express();

// set express server
const server = createServer(app);

// listen express server updates on socket.io
const io: Server = listen(server, {
    transports: ['polling', 'websocket'],
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/index.html');
});

io.on('connection', (socket) => {
    console.log('user connected');
    socket.emit('commEvent', { data: 'connectionSuccessful' });
    socket.on('disconnect', () => {
        console.log('connection disconnected');
    });
    socket.on('new-message', (data) => {
        console.log(data.message);
    });
});

// listen server updates on specified port
server.listen(port, () => {
    console.log('Message app server listening on port:', port);
});
