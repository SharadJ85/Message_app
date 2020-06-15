import * as React from 'react';
import Styles from './BadgeStyles';
import {BadgeProps} from './BadgeTypes';
import {Text, View} from 'react-native';

const Badge = ({count}: BadgeProps) => {
  return (
    <>
      <View style={Styles.Badge}>
        <Text style={Styles.BadgeText}>{count}</Text>
      </View>
    </>
  );
};

export default Badge;
