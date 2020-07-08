import {StyleSheet} from 'react-native';
import GlobalStyles from '../../Global/Styles/GlobalStyles';

const Styles = StyleSheet.create({
  body: {
    alignSelf: 'center',
    width: 280,
    backgroundColor: GlobalStyles.AuthCard.backgroundColor,
  },
  allSections: {
    borderWidth: 1,
    borderColor: 'red',
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  section: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'green',
    marginVertical: 10,
    marginHorizontal: 10,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  sectionIcon: {
    height: 30,
    aspectRatio: 1,
  },
  sectionInputText: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'blue',
    fontWeight: 'bold',
    borderBottomColor: GlobalStyles.AuthCardInputPlaceHolder.color,
    borderBottomWidth: 1,
  },
  sectionPlaceholderTextColor: {
    color: GlobalStyles.AuthCardInputPlaceHolder.color,
  },
});

export default Styles;
