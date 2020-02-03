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
            <Title style={styles.title}>Penerima</Title>
          </Body>
          <Right/>
        </Header>
        <Content>
          <ScrollView>
          <Image source={IMAGES.contentThumb2} style={styles.Img}/>
          <Text style={styles.content}>
          1. Fakir
          Golongan orang yang hampir tidak memiliki apapun sehingga tidak mampu memenuhi kebutuhan pokok hidupnya.
          2. Miskin
          Golongan orang yang memiliki sedikit harta, tetapi tidak bisa mencukupi kebutuhan dasar untuk hidupnya.
          3. Amil
          Orang yang mengumpulkan dan membagikan zakat.
          4. Mu'alaf
          Orang yang baru masuk atau baru memeluk agama Islam dan memerlukan bantuan untuk menyesuaikan diri dengan keadaan baru.
          5. Hamba Sahaya
          Orang yang ingin memerdekakan dirinya.
          6. Gharimin
          Orang yang berutang untuk memenuhi kebutuhannya, dengan catatan bahwa kebutuhan tersebut adalah halal. Akan tetapi tidak sanggup untuk membayar utangnya.
          7. Fisabilillah
          Orang yang berjuang di jalan Allah.
          8. Ibnus Sabil
          Orang yang kehabisan biaya dalam perjalanannya dalam ketaatan kepada Allah.
          Dengan memenuhi kewajiban sebagai umat Muslim untuk membayar zakat, tentu saja banyak kebaikan yang bisa didapat. Beberapa kebaikan tersebut di antaranya adalah:
          - Mempererat tali persaudaraan antara masyarakat yang kekurangan dengan yang berkecukupan
          - Mengusir perilaku buruk yang ada pada seseorang
          - Sebagai pembersih harta dan menjaga seseorang dari ketamakan harta
          - Ungkapan rasa syukur atas nikmat Allah SWT yang telah diberikan kepadamu
          - Untuk pengembangan potensi diri bagi umat Islam
          - Memberi dukungan moral bagi orang yang baru masuk agama Islam.
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