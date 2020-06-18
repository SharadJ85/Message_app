import express, { Application } from 'express';
import { createServer } from 'http';

const app: Application = express();
const port = 7000;
const server = createServer(app);

server.listen(port, () => {
    console.log('Message app server Listening on port:', port);
});
