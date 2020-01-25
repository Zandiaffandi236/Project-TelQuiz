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
            <Title style={styles.title}>Sejarah</Title>
          </Body>
          <Right/>
        </Header>
        <Content>
          <ScrollView>
          <Image source={IMAGES.contentThumb} style={styles.Img}/>
          <Text style={styles.content}>
          Setiap umat muslim diwajibkan memberikan sedekah dari rezeki yang dikaruniakan Allah. Kewajiban ini tertulis di dalam Alquran. Pada awalnya, Alquran hanya memerintahkan untuk memberikan sedekah (pemberian yang sifatnya bebas, tidak wajib). Namun, pada kemudian hari, umat Islam diperintahkan untuk membayar zakat. Zakat menurut sebuah hadits ilmu dari percakapan Anas bin Malik dengan Dhamman bin Tsa'labah ditetapkan sebelum tahun ke-9 Hijriah/631 Masehi. Dikatakan ia wajib setelah hijrah Rasulullah ke Madinah. Dalil yang menjelaskan ini ialah hadits tentang zakat fitrah, riqayat Imam Ahmad dan Hakim, yang menyebut adanya zakat fitrah sebelum zakat mal, yang konsekuensinya ia ditetapkan setelah adanya perintah puasa. Nabi Muhammad melembagakan perintah zakat ini dengan menetapkan zakat bertingkat bagi mereka yang kaya untuk meringankan beban kehidupan mereka yang miskin. Sejak saat ini, zakat diterapkan dalam negara-negara Islam. Hal ini menunjukan bahwa pada kemudian hari ada pengaturan pemberian zakat, khususnya mengenai jumlah zakat tersebut.Pada zaman khilafah, zakat dikumpulkan oleh pegawai negara dan didistribusikan kepada kelompok tertentu dari masyarakat. Kelompok itu adalah orang miskin, budak yang ingin membeli kebebasan mereka, orang yang terlilit hutang dan tidak mampu membayar. Syari'ah mengatur dengan lebih detail mengenai zakat dan bagaimana zakat itu harus dibayarkan.
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