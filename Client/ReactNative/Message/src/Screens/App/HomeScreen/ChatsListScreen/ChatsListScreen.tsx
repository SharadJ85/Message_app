import * as React from 'react';
import Styles from './ChatsListScreenStyles';
import ChatsListHeaderSearch from '../../../../Components/ChatsListHeaderSearch/ChatsListHeaderSearch';
import {HomeScreenStackNavProps} from '../../../../Routes/Home/HomeRouteTypes';
import {Text, ScrollView, View, Image, TouchableOpacity} from 'react-native';
import ChatsListSection from '../../../../Components/ChatsListSection/ChatsListSection';

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
        <ScrollView>
          <Text>this is ChatsListScreen</Text>
          <Text>this is ChatsListScreen</Text>
          <Text>this is ChatsListScreen</Text>
          <Text>this is ChatsListScreen</Text>
          <Text>this is ChatsListScreen</Text>
          <Text>this is ChatsListScreen</Text>
          <Text>this is ChatsListScreen</Text>
          <Text>this is ChatsListScreen</Text>
          <Text>this is ChatsListScreen</Text>
          <Text>this is ChatsListScreen</Text>
          <Text>this is ChatsListScreen</Text>
          <Text>this is ChatsListScreen</Text>
          <Text>this is ChatsListScreen</Text>
          <Text>this is ChatsListScreen</Text>
          <Text>this is ChatsListScreen</Text>
          <Text>this is ChatsListScreen</Text>
          <Text>this is ChatsListScreen</Text>
          <Text>this is ChatsListScreen</Text>
          <Text>this is ChatsListScreen</Text>
          <ChatsListSection
            message={{msg: 'Sharad'}}
            title={'Sharad'}
            time={'yesterday'}
          />
          <ChatsListSection
            message={{msg: 'Sharad'}}
            title={'Sharad'}
            time={'yesterday'}
          />
          <Text>this is ChatsListScreen</Text>
          <Text>this is ChatsListScreen</Text>
          <Text>this is ChatsListScreen</Text>
          <Text>this is ChatsListScreen</Text>
          <Text>this is ChatsListScreen</Text>
          <Text>this is ChatsListScreen</Text>
          <Text>this is ChatsListScreen</Text>
          <Text>this is ChatsListScreen</Text>
          <Text>this is ChatsListScreen</Text>
          <Text>this is ChatsListScreen</Text>
          <Text>this is ChatsListScreen</Text>
          <Text>this is ChatsListScreen</Text>
          <Text>this is ChatsListScreen</Text>
          <Text>this is ChatsListScreen</Text>
          <Text>this is ChatsListScreen</Text>
          <Text>this is ChatsListScreen</Text>
          <Text>this is ChatsListScreen</Text>
          <Text>this is ChatsListScreen</Text>
          <Text>this is ChatsListScreen</Text>
          <Text>this is ChatsListScreen</Text>
          <Text>this is ChatsListScreen</Text>
          <Text>this is ChatsListScreen</Text>
          <Text>this is ChatsListScreen</Text>
          <Text>this is ChatsListScreen</Text>
          <Text>this is ChatsListScreen</Text>
          <Text>this is ChatsListScreen</Text>
          <Text>this is ChatsListScreen</Text>
          <Text>this is ChatsListScreen</Text>
          <Text>this is ChatsListScreen</Text>
          <Text>this is ChatsListScreen</Text>
        </ScrollView>
      </View>
    </>
  );
};
export default ChatsListScreen;
