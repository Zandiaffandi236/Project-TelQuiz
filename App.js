/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import {Platform, Text, View, StyleSheet} from 'react-native';
import Navigator from './app/navigator';

export default class App extends Component {
  render() {
    // eslint-disable-next-line prettier/prettier
    return (
      <Navigator/>
    );
  }
}