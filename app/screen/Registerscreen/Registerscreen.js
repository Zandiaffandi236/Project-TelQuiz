import React, { Component } from 'react';
import { AsyncStorage, TouchableOpacity, ToastAndroid, Image, ScrollView} from 'react-native';
import { Container, Content, Form, Item, Input, Button,Text, View, Footer, Toast, Icon } from 'native-base';
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
      username: '',
      fullname: '',
      isLoading: false,
    };
    this.login = this.login.bind(this);
    this.register = this.register.bind(this);
  }

  register = async () => {
    const {email, password, username, fullname} = this.state;
    const payload = {
      email: email,
      password: password,
      username: username,
      fullname: fullname,
    };
    axios
      .post('http://34.238.41.114:8080/api/users/register', payload)
      .then(async value => {
        console.log(value.data.code);
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

  login = () => {
    this.props.navigation.dispatch(
      SwitchActions.jumpTo({routeName: 'Login'}),
    );
  }

  render() {
    const {email, password, username, fullname} = this.state;
    return (
      <Container>
        <Content padder>
          <ScrollView>
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
              <Icon name="lock" style={{ color: "#c4c4c4", marginTop: METRICS.doubleBaseMargin }}/>
              <Input
                style={styles.input}
                placeholder={I18n.t('password')}
                value={password}
                secureTextEntry={true}
                onChangeText={value => this.setState({password: value})}
              />
            </Item>
            <Item>
              <Icon name="person" style={{ color: "#c4c4c4", marginTop: METRICS.doubleBaseMargin }}/>
              <Input
                style={styles.input}
                placeholder={I18n.t('username')}
                value={username}
                onChangeText={value => this.setState({username: value})}
              />
            </Item>
            <Item>
              <Icon name="person" style={{ color: "#c4c4c4", marginTop: METRICS.doubleBaseMargin }}/>
              <Input
                style={styles.input}
                placeholder={I18n.t('fullname')}
                value={fullname}
                onChangeText={value => this.setState({fullname: value})}
              />
            </Item>
            <Button
              block
              style={{marginTop: scale(60), marginHorizontal: 12, backgroundColor: "#44B883", height: scale(40), borderRadius: 5}}
              onPress={this.register}>
                <Text>{I18n.t('signup')}</Text>
            </Button>
          </Form>
          </ScrollView>
        </Content>
        <Footer style={{ backgroundColor: "#6971F7" }}>
            {/* {I18n.t('register')} <TouchableOpacity style={styles.register}><Text>{I18n.t('register2')}</Text></TouchableOpacity> */}
          <Text style={styles.footer}>{I18n.t('login')}</Text>
          <Button transparent onPress={this.login}><Text style={styles.register}> {I18n.t('login2')}</Text></Button>
        </Footer>
      </Container>
    );
  }
}
