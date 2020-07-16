import * as React from 'react';
import {View, Text} from 'react-native';
import Styles from './ContactsSectionStyles';
import Avatar from '../Avatar/Avatar';

interface Props {
  title: string;
}

const ContactsSection = ({title}: Props) => {
  return (
    <>
      <View style={Styles.body}>
        <Avatar titleInitial={title[0]} radius={30} styles={Styles.avatar} />
        <Text style={Styles.title}>{title}</Text>
      </View>
    </>
  );
};

export default ContactsSection;
