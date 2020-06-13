import * as React from 'react';
import {HomeScreenStackNavProps} from '../../../../Routes/Home/HomeRouteTypes';
import {Text, View} from 'react-native';

const ContactsScreen = ({navigation}: HomeScreenStackNavProps<'Contacts'>) => {
  return (
    <>
      <View>
        <Text>this is ContactsScreen</Text>
      </View>
    </>
  );
};
export default ContactsScreen;
