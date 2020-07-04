import {StyleSheet, Dimensions} from 'react-native';
import GlobalStyles from '../../../Global/Styles/GlobalStyles';

const {width, height}: {width: number; height: number} = Dimensions.get(
  'screen',
);
const Styles = StyleSheet.create({
  body: {
    backgroundColor: GlobalStyles.startBody.backgroundColor,
    flex: 1,
    position: 'relative',
  },
  ScrollView: {
    backgroundColor: GlobalStyles.startBody.backgroundColor,
    height: height,
    flexDirection: 'row',
    position: 'absolute',
  },
  SkipAndPagination: {
    position: 'absolute',
    bottom: width * 0.1,
    alignSelf: 'center',
  },
  splashBody: {
    flex: 1,
    width: width,
    position: 'relative',
  },
  splashCurve: {
    backgroundColor: GlobalStyles.startSplashCurve.backgroundColor,
    height: 500,
    width: 500,
    alignSelf: 'center',
    borderRadius: 500,
    position: 'absolute',
    top: -500 + height / 3,
  },
  splashData: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'column',
    width: width * 0.67,
    position: 'absolute',
    bottom: width * 0.35,
  },
  splashIconAndHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  splashIconContainer: {},
  splashIcon: {
    height: 30,
    aspectRatio: 1,
    marginHorizontal: 5,
    marginTop: 5,
  },
  splashHeaderText: {
    color: GlobalStyles.startSplashHeaderText.color,
    fontSize: 30,
    marginHorizontal: 5,
  },
  splashText: {
    color: GlobalStyles.startSplashText.color,
    flexWrap: 'wrap',
    flexDirection: 'row',
    height: 40,
    width: width / 1.4,
    textAlign: 'center',
    fontSize: 14,
    marginVertical: 10,
  },
});

export default Styles;
