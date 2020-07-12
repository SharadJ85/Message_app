import * as React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Styles from './ChatsListSectionStyles';
import {ChatsListSectionProps} from './ChatsListSectionTypes';
import {useNavigation} from '@react-navigation/native';
import Avatar from '../Avatar/Avatar';
import Badge from '../Badge/Badge';

const ChatsListSection = ({
  recipient,
  message,
  newMessageCount,
}: ChatsListSectionProps) => {
  const {navigate} = useNavigation();
  return (
    <>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigate('Chat', {recipient})}>
        <View style={Styles.section}>
          {/* Avatar*/}
          <View style={Styles.avatar}>
            <Avatar titleInitial={recipient.userName[0]} />
          </View>

          {/* section details*/}
          <View style={Styles.details}>
            <View style={Styles.detailsTop}>
              {/* section title*/}
              <Text numberOfLines={1} style={Styles.detailsTopTitle}>
                {recipient.userName}
              </Text>

              {/* section time stamp*/}
              <Text style={Styles.detailsTopTime}>{message.timeStamp}</Text>
            </View>
            <View style={Styles.detailsBottom}>
              {/* latest message*/}
              <Text numberOfLines={1} style={Styles.detailsBottomMessage}>
                {message.message ? message.message : null}
              </Text>

              {/* new message count*/}
              {newMessageCount ? (
                <Badge count={newMessageCount} />
              ) : (
                <View style={{width: 15}} />
              )}
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default ChatsListSection;
