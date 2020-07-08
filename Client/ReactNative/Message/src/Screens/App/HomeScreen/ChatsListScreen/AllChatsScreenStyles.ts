import {StyleSheet} from 'react-native';
import GlobalStyles from '../../../../Global/Styles/GlobalStyles';

const Styles = StyleSheet.create({
  navHeaderStyle: {
    backgroundColor: GlobalStyles.navHeaderStyle.backgroundColor,
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
    height: 84,
  },
  navHeaderTitleStyle: {
    color: GlobalStyles.navHeaderTitleStyle.color,
    marginBottom: 12,
  },
  navHeaderRightStyle: {
    height: 20,
    width: 20,
    marginRight: 18,
    marginBottom: 12,
  },
  body: {
    backgroundColor: GlobalStyles.body.backgroundColor,
    position: 'relative',
  },
  bodyScrollView: {
    marginVertical: 5,
  },
  messagesGroupHeader: {
    margin: 7,
  },
  messagesGroupHeaderText: {
    fontSize: 12,
    color: GlobalStyles.sectionMessage.color,
    letterSpacing: 1,
  },
});

export default Styles;
