import * as React from 'react';
import Styles from './AllChatsScreenStyles';
//import ChatsListHeaderSearch from '../../../../Components/ChatsListHeaderSearch/ChatsListHeaderSearch';
import ChatsListSection from '../../../../Components/ChatsListSection/ChatsListSection';
import {
  Text,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
import {firebaseLogOut} from '../../../../Redux/Services/Auth/FirebaseLogOut';
import {connect, useDispatch} from 'react-redux';
import {Action} from 'redux';
import {firestoreAllContactsList} from '../../../../Redux/Services/Database/FirestoreAllContactsList';
import {AppState} from '../../../../Redux/Reducers';
import {useEffect} from 'react';
import {
  AllChatsScreenPropsTypes,
  MapDispatchToPropsReturnType,
  MapStateToPropsReturnType,
} from './AllChatsScreenTypes';
import store from '../../../../Redux/store';
import {ThunkDispatch} from 'redux-thunk';
import {AppAction} from '../../../../Redux/Actions/AppActionTypes';

const AllChatsScreen = ({
  navigation,
  route,
  DispatchFetchList,
  ReduxStateFirebase,
  ReduxStateList,
}: AllChatsScreenPropsTypes) => {
  const dispatch = useDispatch();
  navigation.setOptions({
    headerStyle: Styles.navHeaderStyle,
    headerTitle: 'Messages',
    headerTitleAlign: 'center',
    headerTitleStyle: Styles.navHeaderTitleStyle,
    // eslint-disable-next-line react/display-name
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Contacts')}>
        <Image
          style={Styles.navHeaderRightStyle}
          source={require('../../../../Assets/media/images/PencilVector.png')}
        />
      </TouchableOpacity>
    ),
    // eslint-disable-next-line react/display-name
    headerLeft: () => (
      <TouchableOpacity>
        <Button title={'LogOut'} onPress={() => dispatch(firebaseLogOut())} />
      </TouchableOpacity>
    ),
  });
  useEffect(() => {
    DispatchFetchList(ReduxStateFirebase.uid);
  }, []);
  return (
    <>
      <View style={Styles.body}>
        <ScrollView
          style={Styles.bodyScrollView}
          showsVerticalScrollIndicator={false}>
          <View style={Styles.messagesGroupHeader}>
            <Text style={Styles.messagesGroupHeaderText}>Recent Messages</Text>
          </View>

          {ReduxStateList?.filter((each, index) => index <= 2).map(
            (each, index) => (
              <ChatsListSection
                key={index}
                recipient={{
                  userName: each.name ? each.name : each.email,
                  userId: each.uid,
                }}
                message={{
                  message: each.messages.reverse()[0].message,
                  timeStamp: 'timestamp',
                }}
                newMessageCount={56}
              />
            ),
          )}
          <View style={Styles.messagesGroupHeader}>
            <Text style={Styles.messagesGroupHeaderText}>All Messages</Text>
          </View>

          {ReduxStateList?.filter((each, index) => index > 2).map(
            (each, index) => (
              <ChatsListSection
                key={index}
                recipient={{
                  userName: each.name ? each.name : each.email,
                  userId: each.uid,
                }}
                message={{
                  message: each.messages.reverse()[0].message,
                  timeStamp: 'timestamp',
                }}
                newMessageCount={56}
              />
            ),
          )}
        </ScrollView>
      </View>
    </>
  );
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<AppState, void, Action<AppAction>>,
  ownProps: AllChatsScreenPropsTypes,
): MapDispatchToPropsReturnType => {
  const userID = store.getState().Auth.user.firebaseData.uid;
  return {
    DispatchFetchList: () => dispatch(firestoreAllContactsList(userID)),
  };
};

const mapStateToProps = (
  state: AppState,
  ownProps: AllChatsScreenPropsTypes,
): MapStateToPropsReturnType => {
  return {
    ReduxStateFirebase: state.Auth.user.firebaseData,
    ReduxStateList: state.Firestore.allContactsList.list,
  };
};

export const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(AllChatsScreen);
