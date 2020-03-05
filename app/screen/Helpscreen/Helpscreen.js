import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Title, Content, Button, Body, Icon, Text, View, Right, Left } from 'native-base';
import {StackActions} from 'react-navigation';
import IMAGES from '../../configs/images';
import I18n from '../../i18n';
import styles from './styles';

export default class Helpscreen extends Component {
  back = () => {
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
            <Button transparent onPress={this.back}>
              <Icon name="arrow-back" style={styles.backArrow}/>
            </Button>
          </Left>
          <Body>
            <Title style={styles.title}>Help</Title>
          </Body>
          <Right/>
        </Header>
        <Content>
          <View style={styles.about}>
            <Image source={IMAGES.loginLogo} style={styles.aboutImg} />
            <Text style={styles.aboutText}>
              Jika anda butuh bantuan, silahkan kirim pertanyaan anda ke service@telquiz.com.
            </Text>
          </View>
        </Content>
      </Container>
    );
  }
};