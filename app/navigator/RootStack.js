import { createStackNavigator } from 'react-navigation-stack';
import Loginscreen from '../screen/LoginScreen/Loginscreen';
import Registerscreen from '../screen/Registerscreen/Registerscreen';
import Homescreen from '../screen/Homescreen/Homescreen';

export const LoginStack = createStackNavigator({
  Login: {
    screen: Loginscreen,
  }
},{ headerMode: 'none', navigationOptions: { tabBarVisible: false } });

export const RegisterStack = createStackNavigator({
  Register: {
    screen: Registerscreen,
  }
},{ headerMode: 'none', navigationOptions: { tabBarVisible: false } });

export const HomeStack = createStackNavigator({
  Home: {
    screen: Homescreen,
  },
},{ headerMode: 'none', navigationOptions: { tabBarVisible: false } });