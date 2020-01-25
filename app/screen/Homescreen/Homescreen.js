import React, { Component } from 'react';
import { Image } from 'react-native'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Body, Icon, Text, View, Label } from 'native-base';
import {SwitchActions, StackActions} from 'react-navigation';
import IMAGES from '../../configs/images';
import styles from './styles';

export default class Homescreen extends Component {

  learn = () => {
    const pushAction = StackActions.push({
      routeName: 'Learn'
    });
    this.props.navigation.dispatch(pushAction);
  }

  practice = () => {
    const pushAction = StackActions.push({
      routeName: 'Learn'
    });
    this.props.navigation.dispatch(pushAction);
  }

  test = () => {
    const pushAction = StackActions.push({
      routeName: 'Learn'
    });
    this.props.navigation.dispatch(pushAction);
  }

  activity = () => {
    const pushAction = StackActions.push({
      routeName: 'Activity'
    });
    this.props.navigation.dispatch(pushAction);
  }

  profile = () => {
    const pushAction = StackActions.push({
      routeName: 'Profile'
    });
    this.props.navigation.dispatch(pushAction);
  }

  back = () => {
    this.props.navigation.dispatch(
      SwitchActions.jumpTo({routeName: 'Login'}),
    );
  }

  render() {
    return (
      <Container>
        <Header style={styles.header}>
          <Body>
            <Title style={styles.title}>Home</Title>        
          </Body>
        </Header>
        <Content padder>
          <View style={styles.greeting}>
            <Text style={styles.textGreeting}>Hi Marzandi,</Text>
            <Text style={styles.textGreeting}>It's Time to Study!</Text>
          </View>
          <View style={styles.contentOption}>
            <Button style={styles.contentButton1} onPress={this.learn} >
              <Image source={IMAGES.pic1} style={styles.pic1}/>
            </Button>
            <Button style={styles.contentButton2} onPress={this.practice} >
              <Image source={IMAGES.pic2} style={styles.pic1}/>
            </Button>
            <Button style={styles.contentButton2} onPress={this.test } >
              <Image source={IMAGES.pic3} style={styles.pic2}/>
            </Button>
          </View>
          <Button onPress={this.back} style={styles.backButton}><Text>Back</Text></Button>
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