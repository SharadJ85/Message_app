import {Dimensions, StatusBar, StyleSheet} from 'react-native';
import GlobalStyles from '../../../../Global/Styles/GlobalStyles';

const screenWidth: number = Dimensions.get('screen').width;
const windowHeight: number = Dimensions.get('window').height;
const screenHeight: number = Dimensions.get('screen').height;
const navbarHeight: number = // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  screenHeight - windowHeight + StatusBar.currentHeight;

const Styles = StyleSheet.create({
  body: {
    backgroundColor: GlobalStyles.startBody.backgroundColor,
    width: screenWidth,
    height: screenHeight - navbarHeight,
  },
  header: {
    flex: 1.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerIcon: {
    height: 30,
    aspectRatio: 1,
    marginHorizontal: 5,
    marginTop: 5,
  },
  headerText: {
    fontSize: 30,
    color: GlobalStyles.AuthHeaderText.color,
  },
  footerText: {
    flex: 1.2,
    flexWrap: 'wrap',
    alignSelf: 'center',
    justifyContent: 'center',
    color: GlobalStyles.AuthFooterText.color,
    width: screenWidth / 1.4,
    flexDirection: 'row',
    textAlign: 'center',
    marginTop: 20,
  },
  buttons: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsLoginContainer: {
    marginVertical: 3,
  },
  buttonsSignupContainer: {
    marginVertical: 3,
  },
  buttonsLoginButton: {
    height: 50,
    width: 300,
    borderRadius: 5,
    backgroundColor: GlobalStyles.AuthButton.backgroundColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsSignupButton: {
    height: 50,
    width: 300,
    borderRadius: 5,
    backgroundColor: GlobalStyles.AuthButton.backgroundColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsLoginButtonText: {
    color: GlobalStyles.AuthButton.color,
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonsSignupButtonText: {
    color: GlobalStyles.AuthButton.color,
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonCard: {
    alignSelf: 'center',
    width: 280,
    backgroundColor: GlobalStyles.AuthCard.backgroundColor,
  },
  buttonCardAllSections: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  buttonCardSection: {
    //   borderWidth: 1,
    //   borderColor: 'red',
    flex: 1,
    flexDirection: 'row',
    marginVertical: 10,
    marginHorizontal: 10,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  buttonCardSectionIcon: {
    height: 30,
    aspectRatio: 1,
    marginHorizontal: 5,
    color: GlobalStyles.AuthCardIcons.color,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  buttonCardSectionInput: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: GlobalStyles.AuthCardInputPlaceHolder.color,
    borderBottomWidth: 1,
    marginBottom: 5,
    marginHorizontal: 5,
  },
  buttonCardSectionInputText: {
    flex: 1,
    flexDirection: 'row',
    height: 40,
    fontWeight: 'bold',
  },
  buttonCardSectionInputIconEyeON: {
    color: GlobalStyles.IconsEyeON.color,
  },
  buttonCardSectionInputIconEyeOFF: {
    color: GlobalStyles.IconsEyeOFF.color,
  },
  buttonCardSectionPlaceholderTextColor: {
    color: GlobalStyles.AuthCardInputPlaceHolder.color,
  },
  buttonCardSectionInputIconCheck: {
    color: GlobalStyles.IconCheck.color,
  },
  buttonCardSectionInputIconUncheck: {
    color: GlobalStyles.IconUncheck.color,
  },
});

export default Styles;
