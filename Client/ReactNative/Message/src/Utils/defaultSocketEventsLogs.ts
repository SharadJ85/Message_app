import {socket} from '../Screens/App/HomeScreen/HomeScreen';

const defaultSocketEventsLogs = () => {
  socket.on('connect', () => {
    console.warn('SOCKET: connected to socket server');
  });
  socket.on('disconnect', (con: string) => {
    console.warn('SOCKET: disconnected from socket server: ', con);
  });
  socket.on('connect_timeout', (timeout: string) => {
    console.warn('SOCKET: connection timeout: ', timeout);
  });
  socket.on('error', (err: object) => {
    console.warn('SOCKET: errors: ', err);
  });
  socket.on('connect_error', (err: object) => {
    console.warn('SOCKET: connect_error: ', err);
  });
  socket.on('commEvent', (data: {data: string}) => {
    console.warn(data.data);
  });
};
export default defaultSocketEventsLogs;
