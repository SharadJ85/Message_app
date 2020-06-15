import * as React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Styles from './ChatsListSectionStyles';
import {Props} from './ChatsListSectionTypes';
import {useNavigation} from '@react-navigation/native';
import Avatar from '../Avatar/Avatar';
import Badge from '../Badge/Badge';

const ChatsListSection = ({title, message, time, messageCount}: Props) => {
  const {navigate} = useNavigation();
  return (
    <>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigate('Chat', {title, message})}>
        <View style={Styles.section}>
          {/* Avatar*/}
          <View style={Styles.avatar}>
            <Avatar titleInitial={title[0]} />
          </View>

          {/* section details*/}
          <View style={Styles.details}>
            <View style={Styles.detailsTop}>
              {/* section title*/}
              <Text numberOfLines={1} style={Styles.detailsTopTitle}>
                {title}
              </Text>

              {/* section time stamp*/}
              <Text style={Styles.detailsTopTime}>{time}</Text>
            </View>
            <View style={Styles.detailsBottom}>
              {/* latest message*/}
              <Text numberOfLines={1} style={Styles.detailsBottomMessage}>
                {message?.msg}
              </Text>

              {/* new message count*/}
              {messageCount ? (
                <Badge count={messageCount} />
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
