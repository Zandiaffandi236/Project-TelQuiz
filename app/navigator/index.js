import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import { LoginStack,RegisterStack, RootStack } from './RootStack';

export default createAppContainer(
  createSwitchNavigator(
    {
      Login: LoginStack,
      Register: RegisterStack,
      Home: RootStack,
    },
    {initialRouteName: 'Login'},
  ),
);
