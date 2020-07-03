import React from 'react';
import {Text, View} from 'react-native';
import Styles from './LoginScreenStyles';

const LoginScreen: React.FC = (): React.ReactElement => {
  return (
    <>
      <View style={Styles.body}>
        <Text>LOGIN</Text>
      </View>
    </>
  );
};

export default LoginScreen;
