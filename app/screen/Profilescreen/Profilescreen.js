import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { StackActions } from 'react-navigation';
import styles from './styles';

export default class Profilescreen extends Component {

  home = () => {
    this.props.navigation.dispatch(StackActions.popToTop());
  }

  activity = () => {
    const pushAction = StackActions.push({
      routeName: 'Activity'
    });
    this.props.navigation.dispatch(pushAction);
  }

  render() {
    return (
      <Container>
        <Header style={styles.header}>
          <Body>
            <Title style={styles.title}>Profile</Title>        
          </Body>
        </Header>
        <Content>
          <Text>
            This is Content Section
          </Text>
        </Content>
        <Footer style={styles.shadow}>
          <FooterTab style={styles.footer}>
            <Button onPress={this.home}>
                <Icon name="home" style={styles.icon} />
              </Button>
              <Button onPress={this.activity}>
                <Icon name="clock" style={styles.icon} />
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