import * as React from 'react';
import {HomeScreenStackNavProps} from '../../../../Routes/Home/HomeRouteTypes';
import {ScrollView, Text, View} from 'react-native';
import Styles from './ChatScreenStyles';

const ChatScreen = ({navigation, route}: HomeScreenStackNavProps<'Chat'>) => {
  navigation.setOptions({
    headerStyle: Styles.navHeaderStyle,
    headerTitle: `${route?.params.recipient.userName}`,
    headerTintColor: Styles.navHeaderTitleStyle.color,
  });
  return (
    <>
      <View style={Styles.body}>
        <ScrollView>
          <Text>{route?.params.messages?.message}</Text>
        </ScrollView>
      </View>
    </>
  );
};
export default ChatScreen;
