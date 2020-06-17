import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {ChatsListSectionProps} from '../../Components/ChatsListSection/ChatsListSectionTypes';

export type HomeStackList = {
  ChatsList: undefined;
  Contacts: undefined;
  Chat: ChatsListSectionProps;
};

export interface HomeScreenStackNavProps<T extends keyof HomeStackList> {
  navigation: StackNavigationProp<HomeStackList, T>;
  route?: RouteProp<HomeStackList, T>;
}
