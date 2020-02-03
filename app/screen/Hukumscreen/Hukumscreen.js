import React, { Component } from 'react';
import { Image, ScrollView } from 'react-native';
import { Container, Header, Title, Content, Button, Body, Icon, Text, View, Right, Left } from 'native-base';
import {StackActions} from 'react-navigation';
import IMAGES from '../../configs/images';
import I18n from '../../i18n';
import styles from './styles';

export default class Sejarahscreen extends Component {

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
            <Title style={styles.title}>Hukum</Title>
          </Body>
          <Right/>
        </Header>
        <Content>
          <ScrollView>
          <Image source={IMAGES.contentThumb3} style={styles.Img}/>
          <Text style={styles.content}>
          Zakat merupakan salah satu rukun Islam, dan menjadi salah satu unsur pokok bagi tegaknya syariat Islam. Hal ini ditegaskan dalam sebuah hadits dari Ibnu Umar, bahwa Rasulullah menyebutkan bahwa "Islam dibangun di atas 5 tiang pokok, yaitu kesaksian bahwa tiada Tuhan selain Allah dan Muhammad Rasulullah, mendirikan shalat, menunaikan zakat, berpuasa pada bulan Ramaduan, dan naik haji bagi yang mampu." Oleh sebab itu hukum zakat adalah wajib fardhu atas setiap muslim yang telah memenuhi syarat-syarat tertentu. Abdullah bin Mas'ud RA menyebutkan: "Anda sekalian diperintahkan menegakkan shalat dan membayar zakat. Siapa yang tidak mengeluarkan zakat, maka shalatnya tidak diterima. Zakat termasuk dalam kategori ibadah seperti salat, haji, dan puasa yang telah diatur secara rinci berdasarkan Alquran dan Sunah. Zakat juga merupakan sebuah kegiatan sosial kemasyarakatan dan kemanusiaan yang dapat berkembang sesuai dengan perkembangan umat manusia di mana pun.
          </Text>
          <Button block style={styles.homeButton} onPress={this.back}>
            <Text>{I18n.t('back')}</Text>
          </Button>
          </ScrollView>
        </Content>
      </Container>
    );
  }
}