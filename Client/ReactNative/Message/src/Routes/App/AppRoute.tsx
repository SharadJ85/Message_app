import 'react-native-gesture-handler';
import * as React from 'react';
import {AppStackList, Props} from './AppRouteTypes';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import StartScreen from '../../Screens/App/StartScreen/StartScreen';
import HomeScreen from '../../Screens/App/HomeScreen/HomeScreen';

const AppStack = createStackNavigator<AppStackList>();

const AppRoutes: React.FC<Props> = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator initialRouteName='Home'>
        <AppStack.Screen name='Start' component={StartScreen} />
        <AppStack.Screen name='Home' component={HomeScreen} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default AppRoutes;
