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

      socket.emit('new-message', {message: currentMessage});
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

// import React, {Component} from 'react';
// import {ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
// import io from 'socket.io-client';
//
// const styles = StyleSheet.create({
//   container: {
//     height: 400,
//     flex: 1,
//     backgroundColor: '#F5FCFF',
//   },
// });
// class ChatScreen extends Component<any, any> {
//   private socket: SocketIOClient.Socket | undefined;
//   constructor(props: any) {
//     super(props);
//     this.state = {
//       chatMessage: '',
//       chatMessages: [],
//     };
//   }
//   componentDidMount() {
//     this.socket = io('http://192.168.1.37:7777');
//     this.socket.on('chat message', (msg: any) => {
//       this.setState({chatMessages: [...this.state.chatMessages, msg]});
//     });
//   }
//   submitChatMessage() {
//     this.socket.emit('chat message', this.state.chatMessage);
//     this.setState({chatMessage: ''});
//   }
//   render() {
//     const chatMessages = this.state.chatMessages.map((chatMessage) => (
//       <Text style={{borderWidth: 2, top: 500}}>{chatMessage}</Text>
//     ));
//
//     return (
//       <View style={styles.container}>
//         {chatMessages}
//         <TextInput
//           style={{height: 40, borderWidth: 2, top: 600}}
//           autoCorrect={false}
//           value={this.state.chatMessage}
//           onSubmitEditing={() => this.submitChatMessage()}
//           onChangeText={(chatMessage) => {
//             this.setState({chatMessage});
//           }}
//         />
//       </View>
//     );
//   }
// }
// export default ChatScreen;
