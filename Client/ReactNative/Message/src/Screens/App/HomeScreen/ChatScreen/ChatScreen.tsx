import React, {useEffect, useRef, useState} from 'react';
import {HomeScreenStackNavProps} from '../../../../Routes/Home/HomeRouteTypes';
import {MapStateToPropsReturnType, FromServerTypes} from './ChatScreenTypes';
import {ScrollView, Text, TextInput, View} from 'react-native';
import Styles from './ChatScreenStyles';
import {socket} from '../HomeScreen';
import {AppState} from '../../../../Redux/Reducers';
import {connect} from 'react-redux';

const ChatScreen = ({
  navigation,
  route,
  firebase,
}: HomeScreenStackNavProps<'Chat'> & MapStateToPropsReturnType) => {
  navigation.setOptions({
    headerStyle: Styles.navHeaderStyle,
    headerTitle: `${route?.params.recipient.userName}`,
    headerTintColor: Styles.navHeaderTitleStyle.color,
  });
  console.warn('firebaseId==', firebase.uid);

  const [currentMessage, setCurrentMessage] = useState('');
  const [messageData, setMessageData] = useState<Array<string>>([``]);
  const onMessageSubmit = () => {
    if (currentMessage !== '') {
      socket.emit('APP:new-message', {
        userFirebaseID: firebase.uid,
        recipientFirebaseID: '123xyz',
        timeStamp: 'userTimeStamp',
        message: currentMessage,
      });
      setMessageData([...messageData, `Sent: ${currentMessage}`]);
      setCurrentMessage('');
    }
  };
  const chatScreenScrollViewRef = useRef(null);
  // useEffect(() => {
  //   chatScreenScrollViewRef.snapToEnd;
  //   if (chatScreenScrollViewRef && chatScreenScrollViewRef.current) {
  //     chatScreenScrollViewRef.current.scrollToEnd({animated: false});
  //   }
  // }, [chatScreenScrollViewRef]);

  const receiveMessages = () => {
    socket.on('SERVER:new-message', (fromServer: FromServerTypes) => {
      //if (fromServer.From_FirebaseID === firebaseId) {
      console.warn('APP:new-message=', fromServer.message);
      setMessageData([...messageData, `Received: ${fromServer.message}`]);
      //}
    });
  };

  useEffect(() => {
    receiveMessages();
  }, []);

  return (
    <>
      <View style={Styles.body}>
        <ScrollView ref={chatScreenScrollViewRef} style={Styles.scrollview}>
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

const mapStateToProps = (state: AppState): MapStateToPropsReturnType => {
  return {
    firebase: state.Auth.user.firebaseData,
  };
};

export const connector = connect(mapStateToProps);

export default connector(ChatScreen);
