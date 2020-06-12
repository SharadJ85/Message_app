import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

export type AppStackList = {
  Start: undefined;
  Home: undefined;
};

export interface AppScreenStackNavProps<T extends keyof AppStackList> {
  navigation: StackNavigationProp<AppStackList, T>;
  route?: RouteProp<AppStackList, T>;
}
