import * as React from 'react';
import {AppScreenStackNavProps} from '../../../Routes/App/AppRouteTypes';
import {Text, View} from 'react-native';

const StartScreen = ({navigation}: AppScreenStackNavProps<'Start'>) => {
  navigation.setOptions({
    headerShown: false,
  });
  return (
    <>
      <View>
        <Text>this is Start screen</Text>
      </View>
    </>
  );
};
export default StartScreen;
