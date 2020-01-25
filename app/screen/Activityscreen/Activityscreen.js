import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

export default class AnatomyExample extends Component {

  home = () => {
    this.props.navigation.dispatch(StackActions.popToTop());
  }

  profile = () => {
    const pushAction = StackActions.push({
      routeName: 'Profile'
    });
    this.props.navigation.dispatch(pushAction);
  }

  render() {
    return (
      <Container>
        <Header style={styles.header}>
          <Body>
            <Title style={styles.title}>Activity</Title>        
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
              <Button>
                <Icon name="clock" style={styles.iconActive} />
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