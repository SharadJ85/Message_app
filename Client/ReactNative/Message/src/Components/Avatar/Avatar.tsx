import * as React from 'react';
import Styles from './AvatarStyles';
import {Text, View} from 'react-native';
import {AvatarProps} from './AvatarTypes';

const Avatar = ({titleInitial, styles}: AvatarProps) => {
  return (
    <>
      <View style={styles}>
        <View style={Styles.avatarCircle}>
          <Text style={Styles.avatarCircleText}>
            {titleInitial.toUpperCase()}
          </Text>
        </View>
      </View>
    </>
  );
};

export default Avatar;
