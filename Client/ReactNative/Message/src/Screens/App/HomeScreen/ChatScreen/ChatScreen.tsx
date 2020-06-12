import * as React from 'react';
import {HomeScreenStackNavProps} from '../../../../Routes/Home/HomeRouteTypes';
import {Text, View} from 'react-native';

const ChatScreen = ({navigation}: HomeScreenStackNavProps<'Chat'>) => {
  return (
    <>
      <View>
        <Text>this is ChatScreen</Text>
      </View>
    </>
  );
};
export default ChatScreen;
