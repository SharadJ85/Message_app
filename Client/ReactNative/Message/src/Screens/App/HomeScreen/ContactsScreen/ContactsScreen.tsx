import * as React from 'react';
import {HomeScreenStackNavProps} from '../../../../Routes/Home/HomeRouteTypes';
import {ScrollView} from 'react-native';
import ContactsSection from '../../../../Components/ContactsSection/ContactsSection';
import Styles from './ContactsScreenStyles';

const ContactsScreen = ({navigation}: HomeScreenStackNavProps<'Contacts'>) => {
  navigation.setOptions({
    headerStyle: Styles.navHeaderStyle,
    headerTitle: 'Contacts',
    headerTintColor: Styles.navHeaderTitleStyle.color,
  });
  return (
    <>
      <ScrollView style={Styles.scrollView}>
        <ContactsSection title={'Sharad'} />
        <ContactsSection title={'sharad.jadhav1506@gmail.com'} />
        <ContactsSection title={'wafer electronics'} />
        <ContactsSection
          title={
            'juisagfljasbgfla hkash;kadhf;aksdfjh ;asdjhf ;ah hkash;kadhf;aksdfjh ;asdjhf ;ah'
          }
        />
      </ScrollView>
    </>
  );
};
export default ContactsScreen;
