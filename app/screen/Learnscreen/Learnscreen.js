import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Title, Content, Button, Body, Icon, Text, View, Right, Left } from 'native-base';
import {StackActions} from 'react-navigation';
import IMAGES from '../../configs/images';
import I18n from '../../i18n';
import styles from './styles';

export default class Learnscreen extends Component {

  home = () => {
    const popAction = StackActions.pop({
      n: 1,
    });
    this.props.navigation.dispatch(popAction);
  }

  sejarah = () => {
    const pushAction = StackActions.push({
      routeName: 'Sejarah'
    });
    this.props.navigation.dispatch(pushAction);
  }

  penerimaan = () => {
    const pushAction = StackActions.push({
      routeName: 'Penerimaan'
    });
    this.props.navigation.dispatch(pushAction);
  }

  hukum = () => {
    const pushAction = StackActions.push({
      routeName: 'Hukum'
    });
    this.props.navigation.dispatch(pushAction);
  }

  macam = () => {
    const pushAction = StackActions.push({
      routeName: 'Macam'
    });
    this.props.navigation.dispatch(pushAction);
  }

  render() {
    return(
      <Container>
        <Header style={styles.header}>
          <Left>
            <Button transparent onPress={this.home}>
              <Icon name="arrow-back" style={styles.backArrow}/>
            </Button>
          </Left>
          <Body>
            <Title style={styles.title}>Learn</Title>
          </Body>
          <Right/>
        </Header>
        <Content padder>
          <View style={styles.option}>
            <Button style={styles.optionButton} onPress={this.sejarah}>
              <Image source={IMAGES.pic4} style={styles.pic}/>
            </Button>
            <Button style={styles.optionButton} onPress={this.penerimaan}>
            <Image source={IMAGES.pic5} style={styles.pic}/>
            </Button>
          </View>
          <View style={styles.option2}>
            <Button style={styles.optionButton} onPress={this.hukum}>
            <Image source={IMAGES.pic6} style={styles.pic}/>
            </Button>
            <Button style={styles.optionButton} onPress={this.macam}>
            <Image source={IMAGES.pic7} style={styles.pic}/>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}