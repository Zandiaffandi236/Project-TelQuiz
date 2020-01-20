import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import {SwitchActions} from 'react-navigation';
export default class Homescreen extends Component {

  back = () => {
    this.props.navigation.dispatch(
      SwitchActions.jumpTo({routeName: 'Login'}),
    );
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Text>
            This is Content Section
          </Text>
          <Button onPress={this.back}><Text>Back</Text></Button>
        </Content>
        <Footer>
          <FooterTab>
            <Button active>
                <Icon name="home" />
              </Button>
              <Button>
                <Icon name="clock" />
              </Button>
              <Button>
                <Icon active name="person" />
              </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}