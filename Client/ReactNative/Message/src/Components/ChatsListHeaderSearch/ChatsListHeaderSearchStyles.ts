import {StyleSheet} from 'react-native';
import GlobalStyles from '../../Global/Styles/GlobalStyles';

const Styles = StyleSheet.create({
  body: {
    width: '100%',
    flexDirection: 'column',
    position: 'relative',
    // borderColor: 'red',
    // borderWidth: 2,
  },
  searchBlockTop: {
    height: 36,
    backgroundColor: GlobalStyles.navHeaderStyle.backgroundColor,
  },
  searchBlock: {
    height: 48,
    width: '90%',
    position: 'absolute',
    top: '10%',
    alignSelf: 'center',
    borderRadius: 2,
    backgroundColor: GlobalStyles.navHeaderTitleStyle.color,
  },
  searchBlockBottom: {
    height: 24,
    //borderColor: 'red',
    //borderWidth: 2,
  },
});

export default Styles;
