import React, {useState} from 'react';
import {HomeScreenStackNavProps} from '../../../../Routes/Home/HomeRouteTypes';
import {ScrollView, Text, TextInput, View} from 'react-native';
import Styles from './ChatScreenStyles';
import {socket} from '../HomeScreen';

const ChatScreen = ({navigation, route}: HomeScreenStackNavProps<'Chat'>) => {
  navigation.setOptions({
    headerStyle: Styles.navHeaderStyle,
    headerTitle: `${route?.params.recipient.userName}`,
    headerTintColor: Styles.navHeaderTitleStyle.color,
  });

  const [currentMessage, setCurrentMessage] = useState('');
  const [messageData, setMessageData] = useState(['']);
  const onMessageSubmit = () => {
    if (currentMessage !== '') {
      const messageArray: Array<string> = [...messageData];
      messageArray.push(currentMessage);
      setMessageData(messageArray);
      setCurrentMessage('');
    }
  };

  return (
    <>
      <View style={Styles.body}>
        <ScrollView style={Styles.scrollview} scrollsToTop={true}>
          <Text>{route?.params.messages?.message}</Text>
          {messageData.map((msg, index) => (
            <Text key={index}>{msg}</Text>
          ))}
        </ScrollView>
        <TextInput
          style={Styles.inputText}
          value={currentMessage}
          clearButtonMode={'always'}
          onChangeText={(text) => setCurrentMessage(text)}
          onSubmitEditing={() => onMessageSubmit()}
        />
      </View>
    </>
  );
};
export default ChatScreen;
