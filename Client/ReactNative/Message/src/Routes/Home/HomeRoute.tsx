import 'react-native-gesture-handler';
import * as React from 'react';
import {HomeStackList} from './HomeRouteTypes';
import {createStackNavigator} from '@react-navigation/stack';
import ChatScreen from '../../Screens/App/HomeScreen/ChatScreen/ChatScreen';
import ContactsScreen from '../../Screens/App/HomeScreen/ContactsScreen/ContactsScreen';
import AllChatsScreen from '../../Screens/App/HomeScreen/AllChatsScreen/AllChatsScreen';

const HomeStack = createStackNavigator<HomeStackList>();

const HomeRoutes: React.FC = () => {
  return (
    <HomeStack.Navigator initialRouteName='ChatsList'>
      <HomeStack.Screen name='ChatsList' component={AllChatsScreen} />
      <HomeStack.Screen name='Contacts' component={ContactsScreen} />
      <HomeStack.Screen name='Chat' component={ChatScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeRoutes;
