import * as React from 'react';
import {HomeScreenStackNavProps} from '../../../../Routes/Home/HomeRouteTypes';
import {Text, View} from 'react-native';

const ChatsListScreen = ({
  navigation,
}: HomeScreenStackNavProps<'ChatsList'>) => {
  return (
    <>
      <View>
        <Text>this is ChatsListScreen</Text>
      </View>
    </>
  );
};
export default ChatsListScreen;
