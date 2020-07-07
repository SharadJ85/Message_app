import {Animated, Dimensions} from 'react-native';

const {height} = Dimensions.get('screen');

// translate
export const splashCurveValueTop = new Animated.Value(0);
export const SplashCurveTranslate = () => {
  return Animated.spring(splashCurveValueTop, {
    toValue: height / 3,
    speed: 0.2,
    bounciness: 5,
    useNativeDriver: true,
  }).start();
};

// fade in
export const splashCurveValueOpacity = new Animated.Value(0);
export const splashCurveOpacity = () => {
  return Animated.timing(splashCurveValueOpacity, {
    toValue: 1,
    duration: 600,
    useNativeDriver: true,
  }).start();
};
