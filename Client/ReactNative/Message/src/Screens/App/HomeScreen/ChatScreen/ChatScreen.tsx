import React, {useEffect, useRef, useState} from 'react';
import {
  MapStateToPropsReturnType,
  MapDispatchToPropsReturnType,
  FromServerTypes,
  ChatScreenPropsTypes,
} from './ChatScreenTypes';
import Styles from './ChatScreenStyles';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {socket} from '../HomeScreen';
import {AppState} from '../../../../Redux/Reducers';
import {connect} from 'react-redux';
import {Action} from 'redux';
import {firestoreNewMessage} from '../../../../Redux/Services/Database/FirestoreNewMessage';
import {ThunkDispatch} from 'redux-thunk';
import {AppAction} from '../../../../Redux/Actions/AppActionTypes';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Avatar from '../../../../Components/Avatar/Avatar';
import MessageAttachments from '../../../../Components/MessageAttachments/MessageAttachments';
import {ContactDetails} from '../../../../Redux/Reducers/Database/DatabaseReducerTypes';

const ChatScreen = ({
  navigation,
  route,
  ReduxDispatchNewMessage,
  ReduxReducerFirebase,
  ReduxStateList,
}: ChatScreenPropsTypes) => {
  navigation.setOptions({
    headerStyle: Styles.navHeaderStyle,
    headerTitle: `${route?.params.recipient?.userName}`,
    headerTintColor: Styles.navHeaderTitleStyle.color,
    // eslint-disable-next-line react/display-name
    headerLeft: () => (
      <TouchableOpacity
        // eslint-disable-next-line react/prop-types
        onPress={() => navigation.navigate('AllChatsList')}
        style={Styles.navHeaderStyleLeft}>
        <MaterialIcon
          name={'arrow-back'}
          size={28}
          color={Styles.navHeaderTitleStyle.color}
        />
      </TouchableOpacity>
    ),
  });

  const [showAttachments, setShowAttachments] = useState<boolean>(false);
  const [currentMessage, setCurrentMessage] = useState<string>('');
  const [messageSendViewHeight, setMessageSendViewHeight] = useState<number>(0);
  const [contactDetails, setContactDetails] = useState<
    ContactDetails | undefined
  >([]);
  const [sendMessageHeight, setSendMessageHeight] = useState<number>(0);
  const chatScreenScrollViewRef = useRef(null);

  const onMessageSubmit = () => {
    const timestamp = 1594435500;
    if (currentMessage !== '') {
      socket.emit('APP:new-message', {
        userFirebaseID: ReduxReducerFirebase.uid,
        recipientFirebaseID: route?.params.recipient?.userId,
        timeStamp: timestamp.toString(),
        message: currentMessage,
        // message: currentMessage.replace(/\s/g, ` `),
      });
      ReduxDispatchNewMessage(
        ReduxReducerFirebase.uid,
        route?.params.recipient?.userId,
        currentMessage,
        // currentMessage.replace(/\s/g, ` `),
        timestamp,
        'sent',
      );
      setCurrentMessage('');
    }
  };

  const receiveMessages = () => {
    socket.on('SERVER:new-message', (fromServer: FromServerTypes) => {
      if (fromServer.userFirebaseID === ReduxReducerFirebase.uid) {
        ReduxDispatchNewMessage(
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
    // ReduxDispatchFetchRecipient(
    //   ReduxReducerFirebase.uid,
    //   route?.params.recipient.userId,
    // );
    setContactDetails(
      ReduxStateList?.filter(
        (contact) => contact.uid === route?.params.recipient.userId,
      )[0],
    );
  }, []);

  return (
    <>
      <View style={Styles.body}>
        <ScrollView
          ref={chatScreenScrollViewRef}
          onLayout={(layout) => {
            setSendMessageHeight(layout.nativeEvent.layout.height);
          }}
          style={[Styles.scrollView, {marginBottom: messageSendViewHeight}]}>
          {contactDetails?.messages?.map((each, index) => (
            <View key={index} style={{margin: 8}}>
              {each.type === 'sent' ? (
                <View>
                  <Text style={Styles.messageTimestamp}>
                    {each.timestamp._seconds}
                  </Text>
                  <View
                    style={[Styles.messageSection, {alignSelf: 'flex-end'}]}>
                    <View style={Styles.messageSectionMessage}>
                      <Text style={Styles.messageSectionMessageText}>
                        {each.message}
                      </Text>
                    </View>
                  </View>
                  <Text style={Styles.messageDelivered}>Delivered</Text>
                </View>
              ) : (
                <View>
                  <Text style={Styles.messageTimestamp}>
                    {each.timestamp._seconds}
                  </Text>
                  <View
                    style={[Styles.messageSection, {alignSelf: 'flex-start'}]}>
                    <Avatar
                      titleInitial={route?.params.recipient?.userName[0]}
                      styles={Styles.messageSectionAvatar}
                    />
                    <View style={Styles.messageSectionMessage}>
                      <Text style={Styles.messageSectionMessageText}>
                        {each.message}
                      </Text>
                    </View>
                  </View>
                </View>
              )}
            </View>
          ))}
        </ScrollView>
        <View
          onLayout={(event) => {
            setMessageSendViewHeight(event.nativeEvent.layout.height);
          }}
          style={Styles.messageSend}>
          <View style={Styles.messageSendInput}>
            <TouchableOpacity
              onPressOut={() => {
                setShowAttachments(!showAttachments);
              }}
              style={Styles.messageSendInputIcons}>
              <MaterialIcon
                name={'add'}
                size={30}
                color={Styles.messageSectionMessage.backgroundColor}
              />
            </TouchableOpacity>
            <TextInput
              style={Styles.messageSendInputText}
              multiline={true}
              placeholder={'Add text to this message'}
              placeholderTextColor={
                Styles.messageSendInputTextPlaceHolder.color
              }
              value={currentMessage}
              clearButtonMode={'always'}
              onChangeText={(text) => setCurrentMessage(text)}
              onSubmitEditing={() => onMessageSubmit()}
            />
            <TouchableOpacity
              onPress={() => onMessageSubmit()}
              style={Styles.messageSendInputIcons}>
              <MaterialIcon
                name={'send'}
                size={30}
                color={Styles.messageSectionMessage.backgroundColor}
              />
            </TouchableOpacity>
          </View>
          {showAttachments ? <MessageAttachments /> : null}
        </View>
      </View>
    </>
  );
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<AppState, void, Action<AppAction>>,
  ownProps: ChatScreenPropsTypes,
): MapDispatchToPropsReturnType => {
  return {
    ReduxDispatchNewMessage: (
      userUid,
      recipientUid,
      message,
      timestamp,
      type,
    ) =>
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
    ReduxReducerFirebase: state.Auth.user.firebaseData,
    ReduxStateList: state.Firestore.allContactsList.list,
  };
};

export const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(ChatScreen);
