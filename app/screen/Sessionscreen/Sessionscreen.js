import React, {Component} from 'react';
import {View, ActivityIndicator, AsyncStorage} from 'react-native';
import {SwitchActions} from 'react-navigation';

export default class Sessionscreen extends Component {
  componentDidMount() {
    this.checkAuth();
  }

  checkAuth = async () => {
    const auth = await AsyncStorage.getItem('token');
    if (auth === null) {
      // this.props.navigation.navigate('Menu', { category: 'Drink' });
      this.props.navigation.dispatch(
        SwitchActions.jumpTo({routeName: 'Login'}),
      );
    } else {
      this.props.navigation.dispatch(SwitchActions.jumpTo({routeName: 'Home'}));
    }
  };

  render() {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }
}
