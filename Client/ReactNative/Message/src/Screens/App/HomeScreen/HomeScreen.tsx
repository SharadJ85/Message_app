import * as React from 'react';
import {Props} from './HomeScreenTypes';
import {Text, View} from 'react-native';

const HomeScreen: React.FC<Props> = () => {
  return (
    <>
      <View>
        <Text>this is Home screen</Text>
      </View>
    </>
  );
};
export default HomeScreen;
