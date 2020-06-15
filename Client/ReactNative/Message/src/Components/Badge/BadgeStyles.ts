import {StyleSheet} from 'react-native';
import GlobalStyles from '../../Global/Styles/GlobalStyles';

const Styles = StyleSheet.create({
  Badge: {
    minWidth: 21,
    borderRadius: 50,
    paddingHorizontal: 4,
    paddingVertical: 2,
    marginHorizontal: 10,
    alignItems: 'center',
    backgroundColor: GlobalStyles.navHeaderStyle.backgroundColor,
  },
  BadgeText: {
    color: GlobalStyles.navHeaderTitleStyle.color,
    fontSize: 12,
    fontFamily: 'roboto',
  },
});

export default Styles;
