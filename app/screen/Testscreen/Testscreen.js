import React, { Component } from 'react';
import {Images} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import styles from './styles';
import {SwitchActions, StackActions} from 'react-navigation';
import IMAGES from '../../configs/images';

export default class Tetsscreen extends Component {
  render() {
    return (
      <Container>
        <Header style={style.header}>
          <Body>
            <Titl style={styles.title}>Test</Titl>
          </Body>
        </Header>
        <Content>
          
        </Content>
        <Footer style={styles.shadow}>
          <FooterTab style={styles.footer}>
            <Button>
                <Icon name="home" style={styles.iconActive} />
              </Button>
              <Button onPress={this.activity}>
                <Icon name="clock" style={styles.icon} />
              </Button>
              <Button onPress={this.profile}>
                <Icon name="person" style={styles.icon} />
              </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}