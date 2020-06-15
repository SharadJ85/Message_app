import * as React from 'react';
import {HomeScreenStackNavProps} from '../../../../Routes/Home/HomeRouteTypes';
import {ScrollView, Text, View} from 'react-native';
import Styles from './ChatScreenStyles';

const ChatScreen = ({navigation, route}: HomeScreenStackNavProps<'Chat'>) => {
  navigation.setOptions({
    headerStyle: Styles.navHeaderStyle,
    headerTitle: `${route?.params.title}`,
    headerTintColor: Styles.navHeaderTitleStyle.color,
  });
  return (
    <>
      <View style={Styles.body}>
        <ScrollView>
          <Text>{route?.params.message?.msg}</Text>
        </ScrollView>
      </View>
    </>
  );
};
export default ChatScreen;
