import React, { Component } from 'react';
import { AsyncStorage, TouchableOpacity, ToastAndroid, Image } from 'react-native';
import { Container, Content, Form, Item, Input, Button,Text, View, Footer, Icon} from 'native-base';
import axios from 'axios';
import IMAGES from '../../configs/images';
import I18n from '../../i18n';
import styles from './styles';
import {SwitchActions} from 'react-navigation';
import { scale } from '../../utils/scaling';
import METRICS from '../../constant/metrics';

export default class loginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isLoading: false,
    };
    this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);
  }

  login = async () => {
    const {email, password} = this.state;
    const payload = {
      email: email,
      password: password,
    };
    axios
      .post('http://34.238.41.114:8080/api/users/login', payload)
      .then(async value => {
        await AsyncStorage.setItem('token', value.data.token);
        if (value.data.code === 200 ) {
          this.props.navigation.dispatch(
            SwitchActions.jumpTo({routeName: 'Home'}),
            );
          ToastAndroid.show('Success', ToastAndroid.SHORT);
        } else {
          ToastAndroid.show('email or password wrong', ToastAndroid.SHORT);
        }
      })
      .catch(err => {
        ToastAndroid.show('Error', ToastAndroid.SHORT);
        console.log(err);
      });
  };

  signup = () => {
    this.props.navigation.dispatch(
      SwitchActions.jumpTo({routeName: 'Register'}),
    );
  }

  render() {
    const {email, password} = this.state;
    return (
      <Container>
        <Content padder>
          <View style={styles.logoContainer}>
            <Image source={IMAGES.loginLogo} resizeMode="contain" style={styles.logo} />
          </View>
          <Form>
            <Item>
              <Icon name="mail" style={{ color: "#c4c4c4", marginTop: METRICS.doubleBaseMargin }}/>
              <Input
                style={styles.input}
                placeholder={I18n.t('email')}
                value={email}
                onChangeText={value => this.setState({email: value})}
              />
            </Item>
            <Item>
              <Icon name="lock" style={{ color: "#c4c4c4" , marginTop: METRICS.doubleBaseMargin}}/> 
              <Input
                style={styles.input}
                placeholder={I18n.t('password')}
                value={password}
                secureTextEntry={true}
                onChangeText={value => this.setState({password: value})}
              />
            </Item>
            <Button
              block
              style={{marginTop: scale(60), marginHorizontal: 12, backgroundColor: "#44B883", height: scale(40), borderRadius: 5}}
              onPress={this.login}>
                <Text>{I18n.t('signin')}</Text>
            </Button>
          </Form>
        </Content>
        <Footer style={{ backgroundColor: "#6971F7" }}>
          <Text style={styles.footer}>{I18n.t('register')}</Text>
          <Button transparent onPress={this.signup}><Text style={styles.register}> {I18n.t('register2')}</Text></Button>
        </Footer>
      </Container>
    );
  }
}
