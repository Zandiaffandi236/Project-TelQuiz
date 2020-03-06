import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { StackActions } from 'react-navigation';
import {View, Image} from 'react-native';
import IMAGES from '../../configs/images';
import I18n from '../../i18n/index';
import styles from './styles';

export default class Scorescreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      benar: 0,
      jumlah: 0
    }
  }

  componentDidMount() {
    this.getParams()
  }
  getParams = async () => {
    const {params} = this.props.navigation.state;
    const AllTrueAnswer = params ? params.AllTrueAnswer : 'random';
    const AllAnswer = params ? params.AllAnswer : 'random';
    let benar = 0
    for ( let i = 0; i < AllTrueAnswer.length; i++) {
      if(AllTrueAnswer[i] === AllAnswer[i]) {
        benar = benar + 1
      }
    }
    this.setState({benar: benar, jumlah: AllTrueAnswer.length})
    console.log(AllAnswer);
    console.log(AllTrueAnswer);
  }

  home = () => {
    this.props.navigation.dispatch(StackActions.popToTop());
  }

  pembahasan = () => {
    const pushAction = StackActions.push({
      routeName: 'Pembahasan',
    });
    this.props.navigation.dispatch(pushAction);
  }

  render() {
    return (
      <Container>
        <Header style={styles.header}>
          <Body>
            <Title style={styles.title}>Score</Title>        
          </Body>
        </Header>
        <Content>
          <Image source={IMAGES.piala} style={styles.img} />
          <Text style={styles.text}>Yey Selamat!</Text>
          <Text style={styles.text1}>Skor Kamu</Text>
          <Text style={styles.text2}>{this.state.benar} / {this.state.jumlah}</Text>
          <View style={styles.button}>
            <Button block style={styles.homeButton} onPress={this.home}>
              <Text>{I18n.t('home')}</Text>
            </Button>
            <Button block style={styles.homeButton} onPress={this.pembahasan}>
              <Text>{I18n.t('pembahasan')}</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}