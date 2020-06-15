import * as React from 'react';
import Styles from './AvatarStyles';
import {Text, View} from 'react-native';
import {AvatarProps} from './AvatarTypes';

const Avatar = ({titleInitial}: AvatarProps) => {
  return (
    <>
      <View style={Styles.avatarCircle}>
        <Text style={Styles.avatarCircleText}>{titleInitial}</Text>
      </View>
    </>
  );
};

export default Avatar;
