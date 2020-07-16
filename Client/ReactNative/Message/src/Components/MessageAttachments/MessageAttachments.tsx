import * as React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Styles from './MessageAttachmentsStyles';

interface Props {}

const MessageAttachments: React.FC<Props> = ({}) => {
  return (
    <>
      <View style={Styles.messageSendAttachments}>
        <TouchableOpacity style={Styles.messageSendAttachmentsEach}>
          <MaterialIcon
            name={'attach-file'}
            size={30}
            color={Styles.messageSendAttachmentsIconsText.color}
          />
          <Text style={Styles.messageSendAttachmentsIconsText}>File</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.messageSendAttachmentsEach}>
          <MaterialIcon
            name={'photo-camera'}
            size={30}
            color={Styles.messageSendAttachmentsIconsText.color}
          />
          <Text style={Styles.messageSendAttachmentsIconsText}>Picture</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.messageSendAttachmentsEach}>
          <MaterialIcon
            name={'mic'}
            size={30}
            color={Styles.messageSendAttachmentsIconsText.color}
          />
          <Text style={Styles.messageSendAttachmentsIconsText}>Audio</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.messageSendAttachmentsEach}>
          <MaterialIcon
            name={'videocam'}
            size={30}
            color={Styles.messageSendAttachmentsIconsText.color}
          />
          <Text style={Styles.messageSendAttachmentsIconsText}>Video</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default MessageAttachments;
