import * as React from 'react';
import Styles from './ChatsListScreenStyles';
import ChatsListHeaderSearch from '../../../../Components/ChatsListHeaderSearch/ChatsListHeaderSearch';
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
        <ChatsListHeaderSearch />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Styles.messagesGroupHeader}>
            <Text style={Styles.messagesGroupHeaderText}>Recent Messages</Text>
          </View>
          <ChatsListSection
            title={'Sharad'}
            time={'45 mins ago'}
            message={{msg: 'Sharad'}}
            messageCount={56}
          />
          <ChatsListSection
            title={'P.C.C of Engineering, Verna-Goa'}
            message={{
              msg:
                'oneplus 8 and galaxy note 20 are one of the top flagships of 2020',
            }}
            time={'11:49 PM'}
            messageCount={3}
          />
          <ChatsListSection
            title={'National Institution of Mechatronics'}
            message={{
              msg:
                "anyone got two extra arduino's?? will return it by afternoon!",
            }}
            time={'6:26 AM'}
            messageCount={6857}
          />
          <View style={Styles.messagesGroupHeader}>
            <Text style={Styles.messagesGroupHeaderText}>All Messages</Text>
          </View>
          <ChatsListSection
            title={'Rahul Desai'}
            message={{msg: 'hey there!'}}
            time={'yesterday 4:56 pm'}
            messageCount={1}
          />
          <ChatsListSection
            title={'Ramesh Suresh'}
            message={{msg: 'okay maybe.'}}
            time={'yesterday 4:56 pm'}
            messageCount={56}
          />
          <ChatsListSection
            title={'Shakira'}
            message={{msg: 'hey there!'}}
            time={'yesterday'}
            messageCount={56}
          />
          <ChatsListSection
            title={'Led Zeplinn'}
            message={{msg: 'okay maybe.'}}
            time={'yesterday'}
            messageCount={56}
          />
          <ChatsListSection
            title={'Rajesh Khanna'}
            message={{msg: 'hey there!'}}
            time={'yesterday'}
            messageCount={12445615}
          />
          <ChatsListSection
            title={'Karan Arjun'}
            message={{msg: 'okay maybe.'}}
            time={'yesterday'}
          />
          <ChatsListSection
            title={'Manohar Parrikar'}
            message={{msg: 'hey there!'}}
            time={'yesterday'}
          />
          <ChatsListSection
            title={'Carry Minati'}
            message={{msg: 'okay maybe.'}}
            time={'yesterday'}
          />
          <ChatsListSection
            title={'😁 Copper Leaf'}
            message={{msg: 'hey there!'}}
            time={'yesterday'}
          />
          <ChatsListSection
            title={'Dum Biryani 😍'}
            message={{msg: 'okay maybe.'}}
            time={'yesterday'}
          />
          <ChatsListSection
            title={'devs'}
            message={{msg: 'okay maybe.'}}
            time={'yesterday'}
          />
          <ChatsListSection
            title={'Wafer'}
            message={{msg: 'hey there!'}}
            time={'yesterday'}
          />
          <ChatsListSection
            title={'Swiggy'}
            message={{msg: 'okay maybe.'}}
            time={'yesterday'}
          />
          <ChatsListSection
            title={'Taj Imperial'}
            message={{msg: 'hey there!'}}
            time={'yesterday'}
          />
          <ChatsListSection
            title={'X-Force'}
            message={{msg: 'okay maybe.'}}
            time={'yesterday'}
          />
        </ScrollView>
      </View>
    </>
  );
};
export default ChatsListScreen;
