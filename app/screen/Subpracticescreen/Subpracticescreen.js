import React, { Component } from 'react';
import { Container, Header, Title, Content, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { Image } from 'react-native';
import { scale } from '../../utils/scaling';
import { StackActions } from 'react-navigation';
import {View} from 'react-native';
import IMAGES from '../../configs/images';
import I18n from '../../i18n/index';
import styles from './styles';

export default class Subpracticescreen extends Component {
  back = () => {
    const popAction = StackActions.pop({
      n: 1,
    });
    this.props.navigation.dispatch(popAction);
  }

  start = () => {
    const pushAction = StackActions.push({
      routeName: 'Practice'
    });
    this.props.navigation.dispatch(pushAction);
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
            <Title style={styles.title}>Practice</Title>
          </Body>
          <Right/>
        </Header>
        <Content>
          <Text style={styles.subTitle}>Keterangan & Aturan</Text>
          <View style={styles.rules}> 
            <Image source={IMAGES.soal} style={styles.imgRules} />
            <Text style={styles.txtRules}>10 Soal</Text>
          </View>
          <View style={styles.rules2}>
            <Image source={IMAGES.jam} style={styles.imgRules} />
            <Text style={styles.txtRules}>30 Menit</Text>
          </View>
          <View style={styles.rules2}>
            <Image source={IMAGES.pilih} style={styles.imgRules} />
            <Text style={styles.txtRules}>Pilih A, B, C atau D</Text>
          </View>
          <Button
              block
              style={{marginTop: scale(120), marginHorizontal: 12,marginLeft: scale(40) , backgroundColor: "#44B883",width: scale(280), height: scale(40), borderRadius: 5}}
              onPress={this.start}>
                <Text>{I18n.t('start')}</Text>
            </Button>
        </Content>
      </Container>
    );
  }
};
