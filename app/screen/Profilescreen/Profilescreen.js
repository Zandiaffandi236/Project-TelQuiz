import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { StackActions } from 'react-navigation';
import {View} from 'react-native';
import I18n from '../../i18n/index';
import styles from './styles';

export default class Profilescreen extends Component {

  home = () => {
    this.props.navigation.dispatch(StackActions.popToTop());
  }

  about = () => {
    const pushAction = StackActions.push({
      routeName: 'About'
    });
    this.props.navigation.dispatch(pushAction);
  }

  render() {
    return (
      <Container>
        <Header style={styles.header}>
          <Body>
            <Title style={styles.title}>Settings</Title>        
          </Body>
        </Header>
        <Content>
          <View style={styles.heading}>
            <Text style={styles.name}>Marzandi Zahran</Text>
            <Text style={styles.email}>marzandi.leta@gmail.com</Text>
          </View>
          <Button iconRight style={styles.iconButton} onPress={this.about}>
              <Text uppercase={false} style={styles.textButton}>
                About Us
              </Text>
              <Icon style={styles.buttonIcon} name="arrow-forward" />
            </Button>
            <Button iconRight style={styles.iconButton2} onPress={this.help}>
              <Text uppercase={false} style={styles.textButton}>
                Help
              </Text>
              <Icon style={styles.buttonIcon} name="arrow-forward" />
            </Button>
            <Button block style={styles.homeButton} onPress={this.back}>
            <Text>{I18n.t('logout')}</Text>
          </Button>
        </Content>
        <Footer style={styles.shadow}>
          <FooterTab style={styles.footer}>
            <Button onPress={this.home}>
                <Icon name="home" style={styles.icon} />
              </Button>
              <Button>
                <Icon name="person" style={styles.iconActive} />
              </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}