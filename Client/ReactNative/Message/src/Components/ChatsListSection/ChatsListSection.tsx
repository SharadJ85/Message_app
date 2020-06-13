import * as React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Styles from './ChatsListSectionStyles';

interface Props {
  title: string;
  message: object | undefined;
  time: string;
}

const ChatsListSection: React.FC<Props> = ({title, message, time}) => {
  return (
    <>
      <TouchableOpacity activeOpacity={0.6} style={Styles.section}>
        <View style={Styles.avatar}>
          <View style={Styles.avatarCircle}>
            <Text style={Styles.avatarCircleText}>{title[0]}</Text>
          </View>
        </View>
        <View style={Styles.details}></View>
      </TouchableOpacity>
    </>
  );
};

export default ChatsListSection;
