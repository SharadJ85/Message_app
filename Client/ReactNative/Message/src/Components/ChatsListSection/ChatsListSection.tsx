import * as React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Styles from './ChatsListSectionStyles';
import {Props} from './ChatsListSectionTypes';
import {useNavigation} from '@react-navigation/native';

const ChatsListSection = ({title, message, time, messageCount}: Props) => {
  const {navigate} = useNavigation();
  return (
    <>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigate('Chat', {title, message})}>
        <View style={Styles.section}>
          <View style={Styles.avatar}>
            <View style={Styles.avatarCircle}>
              <Text style={Styles.avatarCircleText}>{title[0]}</Text>
            </View>
          </View>
          <View style={Styles.details}>
            <View style={Styles.detailsTop}>
              <Text numberOfLines={1} style={Styles.detailsTopTitle}>
                {title}
              </Text>
              <Text style={Styles.detailsTopTime}>{time}</Text>
            </View>
            <View style={Styles.detailsBottom}>
              <Text numberOfLines={1} style={Styles.detailsBottomMessage}>
                {message?.msg}
              </Text>
              {messageCount ? (
                <View style={Styles.detailsBottomBadge}>
                  <Text style={Styles.detailsBottomBadgeText}>
                    {messageCount}
                  </Text>
                </View>
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
