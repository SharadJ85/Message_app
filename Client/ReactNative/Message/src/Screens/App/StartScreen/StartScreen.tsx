import * as React from 'react';
import {Props} from './StartScreenTypes';
import {Text, View} from 'react-native';

const StartScreen: React.FC<Props> = () => {
  return (
    <>
      <View>
        <Text>this is Start screen</Text>
      </View>
    </>
  );
};
export default StartScreen;
