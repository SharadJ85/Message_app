import React from 'react';
import {Image, Text, View} from 'react-native';
import Styles from './SplashScreenStyles';

const SplashScreen: React.FC = (): React.ReactElement => {
  return (
    <>
      <View style={Styles.body} />
    </>
  );
};

export default SplashScreen;
