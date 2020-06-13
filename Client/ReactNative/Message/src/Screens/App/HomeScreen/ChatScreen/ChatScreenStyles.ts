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
});

export default Styles;
