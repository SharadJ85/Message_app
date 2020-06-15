import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

export type HomeStackList = {
  ChatsList: undefined;
  Contacts: undefined;
  Chat: {
    title: string;
    message?: {
      msg: string;
    };
  };
};
export interface HomeScreenStackNavProps<T extends keyof HomeStackList> {
  navigation: StackNavigationProp<HomeStackList, T>;
  route?: RouteProp<HomeStackList, T>;
}
