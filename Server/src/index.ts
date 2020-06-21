import express, { Application } from 'express';
import { createServer } from 'http';
import { listen, Server } from 'socket.io';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import https_localhost from 'https-localhost';

/////////////////////////////////////////////////
// set port number
const port = 7777;
// set express
const app: Application = express();
//const app = https_localhost();
// set express server
const server = createServer(app);
// listen express server updates on socket.io
const io: Server = listen(server);

io.on('connection', (socket) => {
    console.log('connection is made');
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
