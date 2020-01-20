import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import { LoginStack, RegisterStack, HomeStack } from './RootStack';

export default createAppContainer(
  createSwitchNavigator(
    {
      Login: LoginStack,
      Register: RegisterStack,
      Home: HomeStack,
    },
    {initialRouteName: 'Login'},
  ),
);
