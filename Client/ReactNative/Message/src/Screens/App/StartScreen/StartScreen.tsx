import React, {MutableRefObject, useRef, useState} from 'react';
import {AppScreenStackNavProps} from '../../../Routes/App/AppRouteTypes';
import {
  Animated,
  ScrollView,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedbackComponent,
  TouchableWithoutFeedback,
} from 'react-native';
import Styles from './StartScreenStyles';
import SplashScreen from './SplashScreen/SplashScreen';
import IntroScreen from './IntroScreen/IntroScreen';
import LoginScreen from './LoginScreen/LoginScreen';
import PaginationAndSkip from '../../../Components/PaginationAndSkip/PaginationAndSkip';

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
    <LoginScreen key={2} />,
  ];
  return (
    <>
      <View style={Styles.body}>
        <Animated.ScrollView
          ref={scrollViewRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          bounces={false}
          centerContent
          disableIntervalMomentum
          snapToInterval={width}
          snapToAlignment={'center'}
          decelerationRate={'fast'}
          onScroll={(e: any) => {
            setIndex(e.nativeEvent.contentOffset.x / 360 + 1);
          }}
          style={Styles.ScrollView}>
          {screensList.map((screen) => {
            return screen;
          })}
        </Animated.ScrollView>
        {index <= 2 ? (
          <View style={Styles.splashBody}>
            <View style={Styles.splashData}>
              <View style={Styles.splashIconAndHeader}>
                <View style={Styles.splashIconContainer}>
                  <Image
                    style={Styles.splashIcon}
                    source={require('../../../Assets/media/images/logo-light.png')}
                  />
                </View>
                <Text style={Styles.splashHeaderText}>Message</Text>
              </View>
              <Text style={Styles.splashText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit vivamus
              </Text>
            </View>
            <View style={Styles.splashCurve} />
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
