import { createStackNavigator } from 'react-navigation-stack';
import Loginscreen from '../screen/LoginScreen/Loginscreen';
import Registerscreen from '../screen/Registerscreen/Registerscreen';
import Homescreen from '../screen/Homescreen/Homescreen';
import Learnscreen from '../screen/Learnscreen/Learnscreen';

export const LoginStack = createStackNavigator({
  Login: {
    screen: Loginscreen,
  },
},{  headerMode: 'none', navigationOptions: { tabBarVisible: false } });

export const RegisterStack = createStackNavigator({
  Register: {
    screen: Registerscreen,
  }
},{  headerMode: 'none', navigationOptions: { tabBarVisible: false } });

export const RootStack = createStackNavigator({
  Home: {
    screen: Homescreen,
  },
  Learn: {
    screen: Learnscreen,
  }
},{ initialRouteName: 'Home' ,headerMode: 'none', navigationOptions: { tabBarVisible: false } });