import {StyleSheet} from 'react-native';
import GlobalStyles from '../../Global/Styles/GlobalStyles';

const Styles = StyleSheet.create({
  body: {
    minHeight: 30,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: GlobalStyles.ContactsSection.backgroundColor,
    marginHorizontal: 5,
    marginVertical: 2,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: GlobalStyles.ContactsSection.borderColor,
  },
  avatar: {
    padding: 12,
    height: '100%',
  },
  title: {
    flex: 1,
    padding: 5,
    fontSize: 15,
    letterSpacing: 1,
    color: GlobalStyles.ContactsSection.color,
  },
});

export default Styles;
