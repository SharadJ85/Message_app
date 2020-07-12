import React, {useEffect, useRef, useState} from 'react';
import {
  MapStateToPropsReturnType,
  MapDispatchToPropsReturnType,
  FromServerTypes,
  ChatScreenPropsTypes,
} from './ChatScreenTypes';
import {ScrollView, Text, TextInput, View} from 'react-native';
import Styles from './ChatScreenStyles';
import {socket} from '../HomeScreen';
import {AppState} from '../../../../Redux/Reducers';
import {connect} from 'react-redux';
import {Action} from 'redux';
import {firestoreRecipientMessages} from '../../../../Redux/Services/Database/FirestoreRecipientMessages';
import {firestoreNewMessage} from '../../../../Redux/Services/Database/FirestoreNewMessage';
import {ThunkDispatch} from 'redux-thunk';
import {AppAction} from '../../../../Redux/Actions/AppActionTypes';

const ChatScreen = ({
  navigation,
  route,
  DispatchNewMessage,
  DispatchFetchRecipient,
  ReduxStateFirebase,
  ReduxStateRecipient,
}: ChatScreenPropsTypes) => {
  navigation.setOptions({
    headerStyle: Styles.navHeaderStyle,
    headerTitle: `${route?.params.recipient?.userName}`,
    headerTintColor: Styles.navHeaderTitleStyle.color,
  });
  // console.warn('firebaseId==', firebase.uid);
  // Todo remove log

  const [currentMessage, setCurrentMessage] = useState('');
  const onMessageSubmit = () => {
    const timestamp = 1594435500;
    if (currentMessage !== '') {
      socket.emit('APP:new-message', {
        userFirebaseID: ReduxStateFirebase.uid,
        recipientFirebaseID: '123xyz',
        timeStamp: timestamp.toString(),
        message: currentMessage,
      });
      DispatchNewMessage(
        ReduxStateFirebase.uid,
        route.params.recipient.userId,
        currentMessage,
        timestamp,
        'sent',
      );
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
      if (fromServer.userFirebaseID === ReduxStateFirebase.uid) {
        DispatchNewMessage(
          fromServer.recipientFirebaseID,
          fromServer.userFirebaseID,
          fromServer.message,
          fromServer.timeStamp,
          'received',
        );
      }
    });
  };

  useEffect(() => {
    receiveMessages();
    DispatchFetchRecipient(
      ReduxStateFirebase.uid,
      route.params.recipient.userId,
    );
  }, []);

  return (
    <>
      <View style={Styles.body}>
        <ScrollView ref={chatScreenScrollViewRef} style={Styles.scrollview}>
          {ReduxStateRecipient?.uid === route?.params.recipient.userId
            ? ReduxStateRecipient?.messages.map((each, index) => (
                <View key={index} style={{margin: 5}}>
                  {each.type === 'sent' ? (
                    <Text>
                      [{each.timestamp._seconds}] Sent: {each.message}
                    </Text>
                  ) : (
                    <Text>
                      [{each.timestamp._seconds}] Received: {each.message}
                    </Text>
                  )}
                </View>
              ))
            : null}
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

const mapDispatchToProps = (
  dispatch: ThunkDispatch<AppState, void, Action<AppAction>>,
  ownProps: ChatScreenPropsTypes,
): MapDispatchToPropsReturnType => {
  return {
    DispatchFetchRecipient: (userUid, recipientUid) =>
      dispatch(firestoreRecipientMessages(userUid, recipientUid)),
    DispatchNewMessage: (userUid, recipientUid, message, timestamp, type) =>
      dispatch(
        firestoreNewMessage(userUid, recipientUid, message, timestamp, type),
      ),
  };
};
const mapStateToProps = (
  state: AppState,
  ownProps: ChatScreenPropsTypes,
): MapStateToPropsReturnType => {
  return {
    ReduxStateFirebase: state.Auth.user.firebaseData,
    ReduxStateRecipient: state.Firestore.recipient.recipient,
  };
};

export const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(ChatScreen);
