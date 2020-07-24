import * as React from 'react';
import Styles from './ContactsScreenStyles';
import {
  Modal,
  ScrollView,
  TextInput,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import ContactsSection from '../../../../Components/ContactsSection/ContactsSection';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {useEffect, useState} from 'react';
import {ThunkDispatch} from 'redux-thunk';
import {AppState} from '../../../../Redux/Reducers';
import {Action} from 'redux';
import {AppAction} from '../../../../Redux/Actions/AppActionTypes';
import {connect} from 'react-redux';
import {firestoreAllContactsList} from '../../../../Redux/Services/Database/FirestoreAllContactsList';
import {
  MapStateToPropsReturnType,
  MapDispatchToPropsReturnType,
  ContactsScreenPropsTypes,
} from './ContactsScreenTypes';

const ContactsScreen = ({
  navigation,
  ReduxDispatchFetchAllContactsList,
  ReduxReducerAllContactsList,
}: ContactsScreenPropsTypes) => {
  const [addContactVisible, setAddContactVisible] = useState(false);
  const [addContactForm, setAddContactForm] = useState({
    email: ``,
    firebaseUid: ``,
    name: ``,
  });

  navigation.setOptions({
    headerStyle: Styles.navHeaderStyle,
    headerTitle: 'Contacts',
    headerTintColor: Styles.navHeaderTitleStyle.color,
    // eslint-disable-next-line react/display-name
    headerRight: () => (
      <TouchableOpacity
        onPress={() => setAddContactVisible(true)}
        style={Styles.headerIcon}>
        <MaterialIcon
          name={'person-add'}
          size={30}
          color={Styles.headerIcon.color}
        />
      </TouchableOpacity>
    ),
  });

  const modalClose = () => {
    setAddContactVisible(false);
    setAddContactForm({
      email: ``,
      firebaseUid: ``,
      name: ``,
    });
  };
  const modalSubmit = () => {
    setAddContactVisible(false);
  };

  useEffect(() => {
    ReduxDispatchFetchAllContactsList;
  }, []);

  return (
    <>
      <View style={Styles.body}>
        <Modal
          transparent={true}
          animationType={'slide'}
          onDismiss={() => modalClose()}
          onRequestClose={() => modalClose()}
          visible={addContactVisible}>
          <View style={Styles.modalContainer}>
            <View style={Styles.modal}>
              <View style={Styles.modalHeader}>
                <TouchableOpacity onPress={() => modalClose()}>
                  <MaterialIcon
                    name={'arrow-back'}
                    size={30}
                    color={Styles.modalHeaderIcon.color}
                  />
                </TouchableOpacity>
                <Text style={Styles.modalHeaderText}>Add Existing User</Text>
              </View>
              <View style={Styles.modalForm}>
                <TextInput
                  placeholder={'*Email'}
                  onChangeText={(text) =>
                    setAddContactForm({...addContactForm, email: text})
                  }
                  value={addContactForm.email}
                  style={Styles.modalFormInput}
                />
                <TextInput
                  placeholder={'*Firebase UID'}
                  onChangeText={(text) =>
                    setAddContactForm({...addContactForm, firebaseUid: text})
                  }
                  value={addContactForm.firebaseUid}
                  style={Styles.modalFormInput}
                />
                <TextInput
                  placeholder={'Name'}
                  onChangeText={(text) =>
                    setAddContactForm({...addContactForm, name: text})
                  }
                  value={addContactForm.name}
                  style={Styles.modalFormInput}
                />
              </View>
              <Text style={Styles.modalErrors}>if Errors show this text</Text>
              <TouchableOpacity
                onPress={() => modalSubmit()}
                style={Styles.modalButton}>
                <Text style={Styles.modalButtonText}>Add</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <ScrollView style={Styles.scrollView}>
          {ReduxReducerAllContactsList?.map((contact, index) => (
            <ContactsSection
              key={index}
              title={contact.name}
              uid={contact.uid}
              email={contact.email}
            />
          ))}
        </ScrollView>
      </View>
    </>
  );
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<AppState, void, Action<AppAction>>,
  ownProps: ContactsScreenPropsTypes,
): MapDispatchToPropsReturnType => {
  return {
    ReduxDispatchFetchAllContactsList: (userUid) =>
      dispatch(firestoreAllContactsList(userUid)),
  };
};
const mapStateToProps = (
  state: AppState,
  ownProps: ContactsScreenPropsTypes,
): MapStateToPropsReturnType => {
  return {
    ReduxReducerAllContactsList: state.Firestore.allContactsList.list,
  };
};

export const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(ContactsScreen);
