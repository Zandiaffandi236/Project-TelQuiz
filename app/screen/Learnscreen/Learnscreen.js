import React, { Component } from 'react';
import { Container, Header, Title, Content, Button, Body, Icon, Text, View, Right, Left } from 'native-base';
import {StackActions} from 'react-navigation';
import styles from './styles';
import I18n from '../../i18n';

export default class Learnscreen extends Component{

  home = () => {
    const popAction = StackActions.pop({
      n: 1,
    });
    this.props.navigation.dispatch(popAction);
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
          <Text>This is content section</Text>
          <Button block onPress={this.home} style={styles.backButton}>
            <Text>{I18n.t('home')}</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}