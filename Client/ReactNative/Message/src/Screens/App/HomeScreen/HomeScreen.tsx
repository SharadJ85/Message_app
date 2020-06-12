import * as React from 'react';
import {AppScreenStackNavProps} from '../../../Routes/App/AppRouteTypes';
import {View} from 'react-native';
import HomeRoutes from '../../../Routes/Home/HomeRoute';

const HomeScreen = ({navigation}: AppScreenStackNavProps<'Home'>) => {
  navigation.setOptions({
    headerShown: false,
  });
  return (
    <>
      <View style={{flex: 1}}>
        <HomeRoutes />
      </View>
    </>
  );
};
export default HomeScreen;
