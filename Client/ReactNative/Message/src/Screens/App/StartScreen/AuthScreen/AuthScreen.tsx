import React, {useState} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Styles from './AuthScreenStyles';
import {Signup, Login} from './AuthScreenTypes';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ComIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const AuthScreen: React.FC = (): React.ReactElement => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  // signup functions
  const [signUpActive, setSignUpActive] = useState(false);
  const [signUpForm, setSignUpForm] = useState<Signup>({
    email: ``,
    password: ``,
    repeatPassword: ``,
  });
  const handleSignUp = () => {
    if (
      signUpForm.email === `` &&
      signUpForm.repeatPassword === `` &&
      signUpForm.password === ``
    ) {
      setSignUpActive(!signUpActive);
    } else {
      console.warn('Signing up');
    }
  };

  // login functions
  const [logInActive, setLogInActive] = useState(false);
  const [loginForm, setLoginForm] = useState<Login>({
    email: ``,
    password: ``,
  });
  const handleLogIn = () => {
    if (loginForm.email === `` && loginForm.password === ``) {
      setLogInActive(!logInActive);
    } else {
      console.warn('Signing up');
    }
  };
  return (
    <>
      <View style={Styles.body}>
        <View style={Styles.header}>
          <View>
            <Image
              style={Styles.headerIcon}
              source={require('../../../../Assets/media/images/logo-light.png')}
            />
          </View>
          <Text style={Styles.headerText}>Message</Text>
        </View>
        <View style={Styles.buttons}>
          {logInActive ? null : (
            <View style={Styles.buttonsSignupContainer}>
              <TouchableOpacity
                activeOpacity={0.7}
                style={Styles.buttonsLoginButton}
                onPressOut={() => handleSignUp()}>
                <Text style={Styles.buttonsLoginButtonText}>Sign Up</Text>
              </TouchableOpacity>
              {signUpActive ? (
                <View
                  style={[
                    Styles.buttonCard,
                    {
                      height: 60 * 3 + 20,
                      borderBottomRightRadius: 5,
                      borderBottomLeftRadius: 5,
                    },
                  ]}>
                  <View style={Styles.buttonCardAllSections}>
                    <View style={Styles.buttonCardSection}>
                      <Icon
                        name={'email'}
                        style={Styles.buttonCardSectionIcon}
                        size={30}
                        onPress={() =>
                          setSignUpForm({...signUpForm, email: ``})
                        }
                      />
                      <View style={Styles.buttonCardSectionInput}>
                        <TextInput
                          autoCompleteType={'email'}
                          numberOfLines={1}
                          style={Styles.buttonCardSectionInputText}
                          placeholder={'Email'}
                          placeholderTextColor={
                            Styles.buttonCardSectionPlaceholderTextColor.color
                          }
                          value={signUpForm.email}
                          clearButtonMode={'always'}
                          onChangeText={(text) =>
                            setSignUpForm({...signUpForm, email: text})
                          }
                        />
                      </View>
                    </View>
                    <View style={Styles.buttonCardSection}>
                      <Icon
                        name={'lock'}
                        style={Styles.buttonCardSectionIcon}
                        size={30}
                        onPress={() =>
                          setSignUpForm({...signUpForm, password: ``})
                        }
                      />
                      <View style={Styles.buttonCardSectionInput}>
                        <TextInput
                          secureTextEntry={secureTextEntry}
                          autoCompleteType={'password'}
                          numberOfLines={1}
                          style={Styles.buttonCardSectionInputText}
                          placeholder={'Password'}
                          placeholderTextColor={
                            Styles.buttonCardSectionPlaceholderTextColor.color
                          }
                          value={signUpForm.password}
                          clearButtonMode={'always'}
                          onChangeText={(text) =>
                            setSignUpForm({...signUpForm, password: text})
                          }
                        />
                        {secureTextEntry ? (
                          <TouchableOpacity
                            onPressOut={() => setSecureTextEntry(false)}
                            style={{padding: 3}}>
                            <ComIcon
                              name={'eye'}
                              size={20}
                              color={
                                Styles.buttonCardSectionInputIconEyeON.color
                              }
                            />
                          </TouchableOpacity>
                        ) : (
                          <TouchableOpacity
                            onPressOut={() => setSecureTextEntry(true)}
                            style={{padding: 3}}>
                            <ComIcon
                              name={'eye-off'}
                              size={20}
                              color={
                                Styles.buttonCardSectionInputIconEyeOFF.color
                              }
                            />
                          </TouchableOpacity>
                        )}
                      </View>
                    </View>
                    <View style={Styles.buttonCardSection}>
                      <Icon
                        name={'lock'}
                        style={Styles.buttonCardSectionIcon}
                        size={30}
                        onPress={() =>
                          setSignUpForm({...signUpForm, repeatPassword: ``})
                        }
                      />
                      <View style={Styles.buttonCardSectionInput}>
                        <TextInput
                          secureTextEntry={secureTextEntry}
                          autoCompleteType={'password'}
                          numberOfLines={1}
                          style={Styles.buttonCardSectionInputText}
                          placeholder={'Repeat Password'}
                          placeholderTextColor={
                            Styles.buttonCardSectionPlaceholderTextColor.color
                          }
                          value={signUpForm.repeatPassword}
                          clearButtonMode={'always'}
                          onChangeText={(text) =>
                            setSignUpForm({...signUpForm, repeatPassword: text})
                          }
                        />
                        {signUpForm.repeatPassword !== `` ? (
                          signUpForm.repeatPassword === signUpForm.password ? (
                            <TouchableOpacity
                              onPressOut={() => setSecureTextEntry(false)}
                              style={{padding: 3}}>
                              <Icon
                                name={'check'}
                                size={20}
                                color={
                                  Styles.buttonCardSectionInputIconCheck.color
                                }
                              />
                            </TouchableOpacity>
                          ) : (
                            <TouchableOpacity
                              onPressOut={() => setSecureTextEntry(true)}
                              style={{padding: 3}}>
                              <Icon
                                name={'clear'}
                                size={20}
                                color={
                                  Styles.buttonCardSectionInputIconUncheck.color
                                }
                              />
                            </TouchableOpacity>
                          )
                        ) : null}
                      </View>
                    </View>
                  </View>
                </View>
              ) : null}
            </View>
          )}
          {signUpActive ? null : (
            <View style={Styles.buttonsLoginContainer}>
              {logInActive ? (
                <View
                  style={[
                    Styles.buttonCard,
                    {
                      height: 60 * 2 + 20,
                      borderTopRightRadius: 5,
                      borderTopLeftRadius: 5,
                    },
                  ]}>
                  <View style={Styles.buttonCardAllSections}>
                    <View style={Styles.buttonCardSection}>
                      <Icon
                        name={'email'}
                        style={Styles.buttonCardSectionIcon}
                        size={30}
                        onPress={() => setLoginForm({...loginForm, email: ``})}
                      />
                      <View style={Styles.buttonCardSectionInput}>
                        <TextInput
                          autoCompleteType={'email'}
                          numberOfLines={1}
                          style={Styles.buttonCardSectionInputText}
                          placeholder={'Email'}
                          placeholderTextColor={
                            Styles.buttonCardSectionPlaceholderTextColor.color
                          }
                          value={loginForm.email}
                          clearButtonMode={'always'}
                          onChangeText={(text) =>
                            setLoginForm({...loginForm, email: text})
                          }
                        />
                      </View>
                    </View>
                    <View style={Styles.buttonCardSection}>
                      <Icon
                        name={'lock'}
                        style={Styles.buttonCardSectionIcon}
                        size={30}
                        onPress={() =>
                          setLoginForm({...loginForm, password: ``})
                        }
                      />
                      <View style={Styles.buttonCardSectionInput}>
                        <TextInput
                          secureTextEntry={secureTextEntry}
                          autoCompleteType={'password'}
                          numberOfLines={1}
                          style={Styles.buttonCardSectionInputText}
                          placeholder={'Password'}
                          placeholderTextColor={
                            Styles.buttonCardSectionPlaceholderTextColor.color
                          }
                          value={loginForm.password}
                          clearButtonMode={'always'}
                          onChangeText={(text) =>
                            setLoginForm({...loginForm, password: text})
                          }
                        />
                        {secureTextEntry ? (
                          <TouchableOpacity
                            onPressOut={() => setSecureTextEntry(false)}
                            style={{padding: 3}}>
                            <ComIcon
                              name={'eye'}
                              size={20}
                              color={
                                Styles.buttonCardSectionInputIconEyeON.color
                              }
                            />
                          </TouchableOpacity>
                        ) : (
                          <TouchableOpacity
                            onPressOut={() => setSecureTextEntry(true)}
                            style={{padding: 3}}>
                            <ComIcon
                              name={'eye-off'}
                              size={20}
                              color={
                                Styles.buttonCardSectionInputIconEyeOFF.color
                              }
                            />
                          </TouchableOpacity>
                        )}
                      </View>
                    </View>
                  </View>
                </View>
              ) : null}
              <TouchableOpacity
                activeOpacity={0.7}
                style={Styles.buttonsSignupButton}
                onPressOut={() => handleLogIn()}>
                <Text style={Styles.buttonsSignupButtonText}>Login</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
        <Text style={Styles.footerText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit vivamus
        </Text>
      </View>
    </>
  );
};

export default AuthScreen;
