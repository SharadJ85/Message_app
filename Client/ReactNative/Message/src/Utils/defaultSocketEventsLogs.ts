import {socket} from '../Screens/App/HomeScreen/HomeScreen';
import store from '../Redux/store';

const defaultSocketEventsLogs = () => {
  const {firebaseData} = store.getState().Auth.user;
  const newUser = store.getState().Auth.user.newUser;

  socket.on('connect', () => {
    console.warn('APP-SOCKET-warn: connected to server,socID==', socket.id);
    if (newUser) {
      socket.emit('new-user', {
        email: firebaseData.email,
        uid: firebaseData.uid,
      });
    }
    console.warn('APP-SOCKET-warn: (APP-SOCKET-emit)initial-user-auth ');
  });
  socket.on('disconnect', (con: string) => {
    console.warn('APP-SOCKET-warn: disconnected from socket server: ', con);
  });
  socket.on('connect_timeout', (timeout: string) => {
    console.warn('APP-SOCKET-warn: connection timeout: ', timeout);
  });
  socket.on('error', (err: object) => {
    console.warn('APP-SOCKET-warn: errors: ', err);
  });
  socket.on('connect_error', (err: object) => {
    console.warn('APP-SOCKET-warn: connect_error: ', err);
  });
  socket.on('commEvent', (commEvent: string) => {
    console.warn('APP-SOCKET-warn: commEvent==', commEvent);
  });
};

export default defaultSocketEventsLogs;
