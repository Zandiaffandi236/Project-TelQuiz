import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { StackActions, SwitchActions } from 'react-navigation';
import {View, AsyncStorage} from 'react-native';
import I18n from '../../i18n/index';
import styles from './styles';

export default class Profilescreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      fullname: '',
      email: '',
    };
  }

  componentDidMount() {
    this.getParams();
  }

  getParams = async() => {
    this.setState({fullname: await AsyncStorage.getItem('fullname')});
    this.setState({email: await AsyncStorage.getItem('email')});
  }

  home = () => {
    this.props.navigation.dispatch(StackActions.popToTop());
  }

  about = () => {
    const pushAction = StackActions.push({
      routeName: 'About'
    });
    this.props.navigation.dispatch(pushAction);
  }

  help = () => {
    const pushAction = StackActions.push({
      routeName: 'Help'
    });
    this.props.navigation.dispatch(pushAction);
  }

  logout = async() => {
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('email');
    await AsyncStorage.removeItem('fullname');
    await AsyncStorage.removeItem('username');
    this.props.navigation.dispatch(SwitchActions.jumpTo({routeName: 'Login'}));
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
            <Text style={styles.name}>{this.state.fullname}</Text>
            <Text style={styles.email}>{this.state.email}</Text>
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
            <Button block style={styles.homeButton} onPress={this.logout}>
            <Text>{I18n.t('logout')}</Text>
          </Button>
        </Content>
        <Footer style={styles.shadow}>
          <FooterTab style={styles.footer}>
            <Button onPress={this.home}>
                <Icon name="home" style={styles.icon} />
              </Button>
              <Button>
                <Icon name="settings" style={styles.iconActive} />
              </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}