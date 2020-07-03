import {Dimensions, StyleSheet} from 'react-native';
import GlobalStyles from '../../../../Global/Styles/GlobalStyles';

const {width} = Dimensions.get('screen');
const Styles = StyleSheet.create({
  body: {
    backgroundColor: GlobalStyles.startBody.backgroundColor,
    width: width,
  },
});

export default Styles;
