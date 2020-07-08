import {Animated} from 'react-native';

// fade in
export const startHeaderTitleOpacityValue = new Animated.Value(0);
export const startHeaderDescriptionOpacityValue = new Animated.Value(0);
export const startHeaderTitleOpacity = () => {
  return Animated.timing(startHeaderTitleOpacityValue, {
    toValue: 1,
    delay: 500,
    duration: 800,
    useNativeDriver: true,
  });
};

export const startHeaderDescriptionOpacity = () => {
  return Animated.timing(startHeaderDescriptionOpacityValue, {
    toValue: 1,
    delay: 500,
    duration: 1500,
    useNativeDriver: true,
  });
};

export const startHeaderOpacity = () => {
  return Animated.parallel([
    startHeaderTitleOpacity(),
    startHeaderDescriptionOpacity(),
  ]).start();
};
