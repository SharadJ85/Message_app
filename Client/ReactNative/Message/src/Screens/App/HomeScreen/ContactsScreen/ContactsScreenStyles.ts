import {Dimensions, StyleSheet} from 'react-native';
import GlobalStyles from '../../../../Global/Styles/GlobalStyles';

const Styles = StyleSheet.create({
  navHeaderStyle: {
    backgroundColor: GlobalStyles.navHeaderStyle.backgroundColor,
  },
  navHeaderTitleStyle: {
    color: GlobalStyles.navHeaderTitleStyle.color,
  },
  body: {
    marginVertical: 5,
  },
  headerIcon: {
    padding: 15,
    alignSelf: 'center',
    color: 'white',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  modal: {
    height: 300,
    width: '100%',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: GlobalStyles.ContactModal.backgroundColor,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  modalHeader: {
    marginVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalHeaderIcon: {
    color: GlobalStyles.ContactModal.color,
  },
  modalHeaderText: {
    color: GlobalStyles.ContactModal.color,
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 15,
  },
  modalForm: {
    width: '80%',
  },
  modalFormInput: {
    borderRadius: 10,
    backgroundColor: GlobalStyles.ContactModalInput.backgroundColor,
    color: GlobalStyles.ContactModalInput.color,
    margin: 3,
    paddingHorizontal: 15,
    height: 40,
    elevation: 10,
  },
  modalErrors: {
    width: '80%',
    margin: 3,
    paddingHorizontal: 10,
    fontSize: 15,
    color: 'red',
  },
  modalButton: {
    marginRight: 50,
    paddingVertical: 8,
    paddingHorizontal: 40,
    alignSelf: 'flex-end',
    fontSize: 17,
    borderRadius: 10,
    backgroundColor: GlobalStyles.ContactModalButton.backgroundColor,
    color: GlobalStyles.ContactModalButton.color,
    elevation: 10,
  },
  modalButtonText: {
    color: GlobalStyles.ContactModal.color,
  },
  scrollView: {},
});

export default Styles;
