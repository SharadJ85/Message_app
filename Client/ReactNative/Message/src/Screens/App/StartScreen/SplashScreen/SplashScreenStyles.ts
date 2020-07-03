import {Dimensions, StyleSheet} from 'react-native';
import GlobalStyles from '../../../../Global/Styles/GlobalStyles';

const {width, height} = Dimensions.get('screen');
const Styles = StyleSheet.create({
  body: {
    //    backgroundColor: GlobalStyles.startBody.backgroundColor,
    width: width,
    position: 'relative',
  },
  // splashCurve: {
  //   backgroundColor: GlobalStyles.startSplash.backgroundColor,
  //   height: 500,
  //   width: 500,
  //   alignSelf: 'center',
  //   borderRadius: 500,
  //   position: 'absolute',
  //   top: -height * 0.4,
  // },
  // splashData: {
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   alignSelf: 'center',
  //   flexDirection: 'column',
  //   width: width * 0.67,
  //   position: 'absolute',
  //   bottom: width * 0.35,
  //   borderWidth: 1,
  //   borderColor: 'red',
  // },
  // splashIconAndHeader: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   marginVertical: 10,
  //   borderWidth: 1,
  //   borderColor: 'red',
  // },
  // splashIconContainer: {
  //   borderWidth: 1,
  //   borderColor: 'red',
  // },
  // splashIcon: {
  //   height: 30,
  //   aspectRatio: 1,
  //   marginHorizontal: 5,
  //   marginTop: 5,
  //   borderWidth: 1,
  //   borderColor: 'red',
  // },
  // splashHeaderText: {
  //   color: GlobalStyles.splashHeaderText.color,
  //   fontSize: 30,
  //   marginHorizontal: 5,
  //   borderWidth: 1,
  //   borderColor: 'red',
  // },
  // splashText: {
  //   color: GlobalStyles.splashText.color,
  //   flexWrap: 'wrap',
  //   flexDirection: 'row',
  //   height: 40,
  //   width: 270,
  //   textAlign: 'center',
  //   fontSize: 14,
  //   marginVertical: 10,
  //   borderWidth: 1,
  //   borderColor: 'red',
  // },
});

export default Styles;
