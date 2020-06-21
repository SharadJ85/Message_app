import React, {useEffect} from 'react';
import {AppScreenStackNavProps} from '../../../Routes/App/AppRouteTypes';
import {View} from 'react-native';
import HomeRoutes from '../../../Routes/Home/HomeRoute';
import io from 'socket.io-client';

export const socket = io('https://192.168.1.37:7777', {
  secure: true,
  transports: ['websocket'],
  jsonp: false,
});

const HomeScreen = ({navigation}: AppScreenStackNavProps<'Home'>) => {
  navigation.setOptions({
    headerShown: false,
  });

  useEffect(() => {
    socket.connect();
    socket.on('connect', (con: any) => {
      console.warn('SOCKET: connected to socket server', con);
    });
    socket.on('error', (err: any) => {
      console.warn('SOCKET: errors ', err);
    });
    socket.on('connect_error', (err: any) => {
      console.warn('SOCKET: connect_error ---> ', err);
    });
  }, []);

  return (
    <>
      <View style={{flex: 1}}>
        <HomeRoutes />
      </View>
    </>
  );
};
export default HomeScreen;
