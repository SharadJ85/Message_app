import {StyleSheet} from 'react-native';
import GlobalStyles from '../../../../Global/Styles/GlobalStyles';

const Styles = StyleSheet.create({
  navHeaderStyle: {
    backgroundColor: GlobalStyles.navHeaderStyle.backgroundColor,
  },
  navHeaderTitleStyle: {
    color: GlobalStyles.navHeaderTitleStyle.color,
  },
  body: {
    backgroundColor: GlobalStyles.body.backgroundColor,
    flex: 1,
    position: 'relative',
    flexDirection: 'column-reverse',
  },
  scrollview: {
    marginBottom: 55,
    height: 'auto',
  },
  inputText: {
    borderColor: 'blue',
    borderWidth: 1,
    minHeight: 55,
    width: '100%',
    backgroundColor: '#dedede',
    color: 'red',
    fontSize: 20,
    position: 'absolute',
    bottom: 0,
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
});

export default Styles;
