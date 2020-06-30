import 'react-native-gesture-handler';
import * as React from 'react';
import {AppRouteProps, AppStackList} from './AppRouteTypes';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import StartScreen from '../../Screens/App/StartScreen/StartScreen';
import HomeScreen from '../../Screens/App/HomeScreen/HomeScreen';
import {connect} from 'react-redux';
import {AppState} from '../../Redux/Reducers';

const AppStack = createStackNavigator<AppStackList>();

const AppRoutes = ({
  isAuthenticated,
}: AppRouteProps): React.ReactElement<typeof NavigationContainer> => {
  return (
    <NavigationContainer>
      <AppStack.Navigator initialRouteName='Home'>
        {isAuthenticated ? (
          <AppStack.Screen name='Home' component={HomeScreen} />
        ) : (
          <AppStack.Screen name='Start' component={StartScreen} />
        )}
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

const mapStateToProps = (state: AppState) => {
  return {isAuthenticated: state.Auth.verify.isAuthenticated};
};

export default connect(mapStateToProps)(AppRoutes);
