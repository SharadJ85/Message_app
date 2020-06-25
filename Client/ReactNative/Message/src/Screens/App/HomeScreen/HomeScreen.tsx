import React, {useEffect} from 'react';
import {AppScreenStackNavProps} from '../../../Routes/App/AppRouteTypes';
import {View} from 'react-native';
import HomeRoutes from '../../../Routes/Home/HomeRoute';
import io from 'socket.io-client';
import defaultSocketEventsLogs from '../../../Utils/defaultSocketEventsLogs';

// Ip address-----------------------------------------
// export const socket = io('http://192.168.1.35:4444', {
//   transports: ['websocket'],
//   rejectUnauthorized: false,
// });

// Heroku address-----------------------------------------
export const socket = io('https://message-app-server.herokuapp.com/', {
  transports: ['websocket'],
});

const HomeScreen = ({navigation}: AppScreenStackNavProps<'Home'>) => {
  navigation.setOptions({
    headerShown: false,
  });

  useEffect(() => {
    defaultSocketEventsLogs();
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
