import * as React from 'react';
import {AppScreenStackNavProps} from '../../../Routes/App/AppRouteTypes';
import {ScrollView, Text, View} from 'react-native';

const StartScreen = ({navigation}: AppScreenStackNavProps<'Start'>) => {
  navigation.setOptions({
    headerShown: false,
  });
  return (
    <>
      <View>
        <ScrollView></ScrollView>
        <View></View>
      </View>
    </>
  );
};
export default StartScreen;
