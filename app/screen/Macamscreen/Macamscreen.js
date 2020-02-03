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
            <Title style={styles.title}>Macam</Title>
          </Body>
          <Right/>
        </Header>
        <Content>
          <ScrollView>
          <Image source={IMAGES.contentThumb4} style={styles.Img}/>
          <Text style={styles.content}>
          1. Zakat Fitrah
          Zakat Fitrah per orang = 3,5 liter x harga beras per liter. Contoh: harga beras yang biasa kamu makan sehari-hari Rp 10.000 per liter, maka zakat fitrah yang harus dibayar per orang sebesar Rp 35.000. Jika dihitung dari segi berat, maka zakat fitrah per orang = 2,5 kg x harga beras per kg.
          2. Zakat Maal
          Zakat Maal = 2,5% x jumlah harta yang tersimpan selama 1 tahun. Menghitung nisab zakat maal = 85 x harga emas pasaran per gram.
          Contoh: Umi punya tabungan Rp 100 juta, deposito Rp 200 juta, rumah kedua yang dikontrakkan senilai Rp 500 juta, dan emas perak senilai Rp 200 juta. Total harta yang dimiliki Rp 1 miliar. Semua harta sudah dimiliki sejak 1 tahun lalu.
          Misal harga 1 gram emas sebesar Rp 600 ribu, maka batas nisab zakat maal 85 x Rp 600 ribu = Rp 51 juta. Karena harta Umi lebih dari limit nisab, maka ia harus membayar zakat maal sebesar Rp 1 miliar x 2,5% = Rp 25 juta per tahun.
          3. Zakat penghasilan
          Untuk mengetahui zakat penghasilanmu, kurangi total pendapatan dengan utang. Lalu hasilnya dikali 2,5%. Nisab zakat penghasilan adalah 520 x harga makanan pokok. 
          Contoh: Irman menerima gaji bulanan Rp 7 juta. Punya utang cicilan motor sebesar Rp 1 juta. Maka sisa penghasilan tersebut masih Rp 6 juta. Di sisi lain, rata-rata harga beras 1 kg adalah Rp 10 ribu. Jadi batas nisab zakat penghasilan 520 x Rp 10 ribu = Rp 5,2 juta.
          Karena sisa gajimu sudah melebihi batas nisab, maka zakat penghasilan yang wajib dibayar adalah Rp 6 juta x 2,5% = Rp 150 ribu. 
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