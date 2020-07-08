import React from 'react';
import {Text, View} from 'react-native';
import Styles from './IntroScreenStyles';

const IntroScreen: React.FC = (): React.ReactElement => {
  return (
    <>
      <View style={Styles.body} />
    </>
  );
};

export default IntroScreen;
