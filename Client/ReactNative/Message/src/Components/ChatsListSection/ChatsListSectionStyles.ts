import {StyleSheet} from 'react-native';
import GlobalStyles from '../../Global/Styles/GlobalStyles';

const Styles = StyleSheet.create({
  section: {
    backgroundColor: GlobalStyles.section.backgroundColor,
    height: 65,
    width: '97%',
    alignSelf: 'center',
    borderRadius: 2,
    marginVertical: 1,
    flex: 1,
    flexDirection: 'row',
    //borderColor: 'red',
    //borderWidth: 2,
  },
  avatar: {
    height: '100%',
    width: 65,
  },
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
  details: {
    height: '100%',
    flex: 1,
    // borderColor: 'red',
    // borderWidth: 2,
  },
});

export default Styles;
