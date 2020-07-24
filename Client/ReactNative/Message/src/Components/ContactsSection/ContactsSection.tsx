import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Styles from './ContactsSectionStyles';
import Avatar from '../Avatar/Avatar';
import {useNavigation} from '@react-navigation/native';

interface Props {
  title: string;
  email: string;
  uid: string;
}

const ContactsSection = ({title, email, uid}: Props) => {
  const {navigate} = useNavigation();
  const recipient = {
    email: email,
    userId: uid,
    userName: title,
  };
  return (
    <>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => navigate('Chat', {recipient})}
        style={Styles.body}>
        <Avatar titleInitial={title[0]} radius={30} styles={Styles.avatar} />
        <View style={Styles.data}>
          <Text style={Styles.title}>
            {title[0].toUpperCase() + title.slice(1)}
          </Text>
          <Text style={Styles.dataHeader}>
            FirebaseID: <Text style={Styles.dataDetails}>{uid}</Text>
          </Text>
          <Text style={Styles.dataHeader}>
            Email: <Text style={Styles.dataDetails}>{email}</Text>
          </Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default ContactsSection;
