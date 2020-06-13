import * as React from 'react';
import Styles from './ChatsListHeaderSearchStyles';
import {Text, View, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
  NumberOfChats?: number;
}

const ChatsListHeaderSearch: React.FC<Props> = ({}) => {
  return (
    <>
      <View style={Styles.body}>
        <View style={Styles.searchBlockTop} />
        <LinearGradient
          start={{x: 0.5, y: 1.0}}
          end={{x: 0.5, y: 0.0}}
          colors={['rgba(255,255,255,0)', '#e5e5e5']}
          locations={[0.1, 0.9]}>
          <View style={Styles.searchBlockBottom} />
        </LinearGradient>
        <View style={Styles.searchBlock} />
      </View>
    </>
  );
};

export default ChatsListHeaderSearch;
