import { createStackNavigator } from 'react-navigation-stack';
import Loginscreen from '../screen/LoginScreen/Loginscreen';
import Registerscreen from '../screen/Registerscreen/Registerscreen';
import Homescreen from '../screen/Homescreen/Homescreen';
import Activityscreen from '../screen/Activityscreen/Activityscreen';
import Profilescreen from '../screen/Profilescreen/Profilescreen';
import Learnscreen from '../screen/Learnscreen/Learnscreen';
import Sejarahscreen from '../screen/Sejarahscreen/Sejarahscreen';
import Penerimaanscreen from '../screen/Penerimaanscreen/Penerimaanscreen';
import Hukumscreen from '../screen/Hukumscreen/Hukumscreen';
import Macamscreen from '../screen/Macamscreen/Macamscreen';
import { StatusBar } from 'react-native';

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
  },
  Sejarah: {
    screen: Sejarahscreen,
  },
  Penerimaan: {
    screen: Penerimaanscreen,
  },
  Hukum: {
    screen: Hukumscreen,
  },
  Macam: {
    screen: Macamscreen,
  },
  Profile: {
    screen: Profilescreen,
  },
  Activity: {
    screen: Activityscreen,
  }
},{ initialRouteName: 'Home' ,headerMode: 'none', navigationOptions: { tabBarVisible: false } });