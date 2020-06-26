import * as React from 'react';
import Styles from './ChatsListScreenStyles';
//import ChatsListHeaderSearch from '../../../../Components/ChatsListHeaderSearch/ChatsListHeaderSearch';
import ChatsListSection from '../../../../Components/ChatsListSection/ChatsListSection';
import {HomeScreenStackNavProps} from '../../../../Routes/Home/HomeRouteTypes';
import {Text, ScrollView, View, Image, TouchableOpacity} from 'react-native';

const ChatsListScreen = ({
  navigation,
}: HomeScreenStackNavProps<'ChatsList'>) => {
  navigation.setOptions({
    headerStyle: Styles.navHeaderStyle,
    headerTitle: 'Messages',
    headerTitleAlign: 'center',
    headerTitleStyle: Styles.navHeaderTitleStyle,
    headerRight: () => (
      <TouchableOpacity>
        <Image
          style={Styles.navHeaderRightStyle}
          source={require('../../../../Assets/media/images/PencilVector.png')}
        />
      </TouchableOpacity>
    ),
  });
  return (
    <>
      <View style={Styles.body}>
        <ScrollView
          style={Styles.bodyScrollView}
          showsVerticalScrollIndicator={false}>
          <View style={Styles.messagesGroupHeader}>
            <Text style={Styles.messagesGroupHeaderText}>Recent Messages</Text>
          </View>
          <ChatsListSection
            recipient={{userName: 'Sharad'}}
            messages={{message: 'Sharad', timeStamp: '45 mins ago'}}
            newMessageCount={56}
          />
          <ChatsListSection
            recipient={{userName: 'P.C.C of Engineering, Verna-Goa'}}
            messages={{
              message:
                'oneplus 8 and galaxy note 20 are one of the top flagships of 2020',
              timeStamp: '11:49 PM',
            }}
            newMessageCount={3}
          />
          <ChatsListSection
            recipient={{userName: 'National Institution of Mechatronics'}}
            messages={{
              message:
                "anyone got two extra arduino's?? will return it by afternoon!",
              timeStamp: '6:26 AM',
            }}
            newMessageCount={6857}
          />
          <View style={Styles.messagesGroupHeader}>
            <Text style={Styles.messagesGroupHeaderText}>All Messages</Text>
          </View>
          <ChatsListSection
            recipient={{userName: 'Rahul Desai'}}
            messages={{message: 'hey there!', timeStamp: 'yesterday 4:56 pm'}}
            newMessageCount={1}
          />
          <ChatsListSection
            recipient={{userName: 'Ramesh Suresh'}}
            messages={{message: 'okay maybe.', timeStamp: 'yesterday 4:56 pm'}}
            newMessageCount={56}
          />
          <ChatsListSection
            recipient={{userName: 'Shakira'}}
            messages={{message: 'hey there!', timeStamp: 'yesterday'}}
            newMessageCount={56}
          />
          <ChatsListSection
            recipient={{userName: 'Led Zeplinn'}}
            messages={{message: 'okay maybe.', timeStamp: 'yesterday'}}
            newMessageCount={56}
          />
          <ChatsListSection
            recipient={{userName: 'Rajesh Khanna'}}
            messages={{message: 'hey there!', timeStamp: 'yesterday'}}
            newMessageCount={12445615}
          />
          <ChatsListSection
            recipient={{userName: 'Karan Arjun'}}
            messages={{message: 'okay maybe.', timeStamp: 'yesterday'}}
          />
          <ChatsListSection
            recipient={{userName: 'Manohar Parrikar'}}
            messages={{message: 'hey there!', timeStamp: 'yesterday'}}
          />
          <ChatsListSection
            recipient={{userName: 'Carry Minati'}}
            messages={{message: 'okay maybe.', timeStamp: 'yesterday'}}
          />
          <ChatsListSection
            recipient={{userName: '😁 Copper Leaf'}}
            messages={{message: 'hey there!', timeStamp: 'yesterday'}}
          />
          <ChatsListSection
            recipient={{userName: 'Dum Biryani 😍'}}
            messages={{message: 'okay maybe.', timeStamp: 'yesterday'}}
          />
          <ChatsListSection
            recipient={{userName: 'devs'}}
            messages={{message: 'okay maybe.', timeStamp: 'yesterday'}}
          />
          <ChatsListSection
            recipient={{userName: 'Wafer'}}
            messages={{message: 'hey there!', timeStamp: 'yesterday'}}
          />
          <ChatsListSection
            recipient={{userName: 'Swiggy'}}
            messages={{message: 'okay maybe.', timeStamp: 'yesterday'}}
          />
          <ChatsListSection
            recipient={{userName: 'Taj Imperial'}}
            messages={{message: 'hey there!', timeStamp: 'yesterday'}}
          />
          <ChatsListSection
            recipient={{userName: 'X-Force'}}
            messages={{message: 'okay maybe.', timeStamp: 'yesterday'}}
          />
        </ScrollView>
      </View>
    </>
  );
};
export default ChatsListScreen;
