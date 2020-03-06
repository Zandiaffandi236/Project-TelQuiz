import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import { LoginStack,RegisterStack, RootStack, SessionStack } from './RootStack';

export default createAppContainer(
  createSwitchNavigator(
    {
      Login: LoginStack,
      Register: RegisterStack,
      Home: RootStack,
      Session: SessionStack,
    },
    {initialRouteName: 'Session'},
  ),
);
