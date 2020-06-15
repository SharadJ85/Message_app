import {StyleSheet} from 'react-native';
import GlobalStyles from '../../Global/Styles/GlobalStyles';

const Styles = StyleSheet.create({
  avatarCircle: {
    height: 40,
    aspectRatio: 1,
    borderRadius: 50,
    margin: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: GlobalStyles.navHeaderStyle.backgroundColor,
  },
  avatarCircleText: {
    color: GlobalStyles.navHeaderTitleStyle.color,
    fontSize: 20,
  },
});

export default Styles;
