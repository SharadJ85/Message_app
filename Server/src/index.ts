import express, { Application } from 'express';
import { createServer } from 'http';
import { listen, Server } from 'socket.io';
import { fromAppTypes, newUser } from './indexTypes';

// set port number
const port = process.env.PORT || 4444;

// set express
const app: Application = express();

// set express server
const server = createServer(app);

// listen express server updates on socket.io
const io: Server = listen(server, {
    transports: ['websocket'],
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/index.html');
});

const firebaseUserList: Array<newUser> = [];

// on connect
io.on('connection', (socket) => {
    // user connected
    console.log('SERVER-LOG: user connected,socketID==', socket.id);

    // emit communication event saying user connected
    socket.emit('commEvent', { commEvent: 'SERVER-EMIT: connection successful' });

    // on disconnect
    socket.on('disconnect', () => {
        // user disconnected
        console.log('SERVER-LOG: user disconnected');

        // emit communication event saying user disconnected
        socket.emit('commEvent', { data: 'SERVER-EMIT: disconnected' });
    });

    // new firebase user
    socket.on('new-user', (newUser: newUser) => {
        // log firebase id
        console.log('SERVER-LOG: initial-user-auth-firebaseID==', newUser);

        // push to firebase userID list
        firebaseUserList.push(newUser);

        // firebase userID list
        console.log('updated firebaseUserIdList==', firebaseUserList);
    });

    socket.on('APP:new-message', (fromApp: fromAppTypes) => {
        // log new message data from app
        console.log('SERVER-LOG: fromAPP==', fromApp);

        // emit new message
        socket.emit('SERVER:new-message', {
            userFirebaseID: fromApp.userFirebaseID,
            recipientFirebaseID: fromApp.recipientFirebaseID,
            timeStamp: fromApp.timeStamp,
            message: fromApp.message,
        });
        console.log('emit from server');
    });
});

// listen server updates on specified port
server.listen(port, () => {
    console.log('SERVER-LOG: Message app server listening on port:', port);
});
