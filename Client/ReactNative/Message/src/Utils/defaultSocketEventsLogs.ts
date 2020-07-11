import {socket} from '../Screens/App/HomeScreen/HomeScreen';
import store from '../Redux/store';

const defaultSocketEventsLogs = () => {
  const firebaseId = store.getState().Auth.user.firebaseData.user?.uid;
  const newUser = store.getState().Auth.user.firebaseData?.additionalUserInfo
    ?.isNewUser;

  socket.on('connect', () => {
    console.warn('APP-SOCKET-warn: connected to server,socID==', socket.id);
    if (firebaseId) {
      socket.emit('initial-user-auth', {userFirebaseID: firebaseId});
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
