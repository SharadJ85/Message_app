import React, {useEffect, useRef, useState} from 'react';
import {AppScreenStackNavProps} from '../../../Routes/App/AppRouteTypes';
import {
  Animated,
  ScrollView,
  View,
  Dimensions,
  Text,
  Image,
} from 'react-native';
import Styles from './StartScreenStyles';
import SplashScreen from './SplashScreen/SplashScreen';
import IntroScreen from './IntroScreen/IntroScreen';
import AuthScreen from './AuthScreen/AuthScreen';
import PaginationAndSkip from '../../../Components/PaginationAndSkip/PaginationAndSkip';
import {
  splashCurveValueTop,
  SplashCurveTranslate,
  splashCurveValueOpacity,
  splashCurveOpacity,
} from '../../../Animations/SplashCurve';
import {
  startHeaderDescriptionOpacityValue,
  startHeaderTitleOpacityValue,
  startHeaderOpacity,
} from '../../../Animations/SplashDescription';

const StartScreen = ({navigation}: AppScreenStackNavProps<'Start'>) => {
  navigation.setOptions({
    headerShown: false,
  });
  const {width} = Dimensions.get('screen');
  const scrollViewRef = useRef(null);
  const [index, setIndex] = useState(1);
  const screensList: React.ReactElement[] = [
    <SplashScreen key={0} />,
    <IntroScreen key={1} />,
    <AuthScreen key={2} />,
  ];
  const [scrollEnable, setScrollEnable] = useState(true);

  useEffect(() => {
    SplashCurveTranslate();
    splashCurveOpacity();
    startHeaderOpacity();
    if (index > 2) {
      setScrollEnable(false);
    }
  }, [index]);

  return (
    <>
      <View style={Styles.body}>
        <ScrollView
          ref={scrollViewRef}
          scrollEnabled={scrollEnable}
          horizontal
          showsHorizontalScrollIndicator={false}
          bounces={false}
          centerContent
          disableIntervalMomentum
          snapToInterval={width}
          snapToAlignment={'center'}
          decelerationRate={'fast'}
          onScroll={(e: any): void => {
            setIndex(e.nativeEvent.contentOffset.x / width + 1);
            // console.warn('index:', index);
          }}
          style={Styles.ScrollView}>
          {screensList.map((screen) => {
            return screen;
          })}
        </ScrollView>
        {index <= 2 ? (
          <View style={Styles.splashBody}>
            <View style={Styles.splashData}>
              <View style={Styles.splashIconAndHeader}>
                <Animated.View
                  style={[
                    Styles.splashIconContainer,
                    {opacity: startHeaderTitleOpacityValue},
                  ]}>
                  <Image
                    style={Styles.splashIcon}
                    source={require('../../../Assets/media/images/logo-light.png')}
                  />
                </Animated.View>
                <Animated.Text
                  style={[
                    Styles.splashHeaderText,
                    {opacity: startHeaderTitleOpacityValue},
                  ]}>
                  Message
                </Animated.Text>
              </View>
              <Animated.Text
                style={[
                  Styles.splashText,
                  {opacity: startHeaderDescriptionOpacityValue},
                ]}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit vivamus
              </Animated.Text>
            </View>
            <Animated.View
              style={[
                Styles.splashCurve,
                {
                  transform: [{translateY: splashCurveValueTop}],
                  opacity: splashCurveValueOpacity,
                },
              ]}
            />
          </View>
        ) : null}
        <PaginationAndSkip
          index={index}
          scrollViewRef={scrollViewRef}
          styles={Styles.SkipAndPagination}
          arrayOfScreens={screensList}
        />
      </View>
    </>
  );
};
export default StartScreen;
