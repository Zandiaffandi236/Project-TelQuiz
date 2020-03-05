import React, { Component } from 'react';
import { Image, TouchableOpacity, Linking } from 'react-native';
import { Container, Header, Title, Content, Button, Body, Icon, Text, View, Right, Left } from 'native-base';
import {StackActions} from 'react-navigation';
import IMAGES from '../../configs/images';
import I18n from '../../i18n';
import styles from './styles';

export default class Aboutscreen extends Component {
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
            <Title style={styles.title}>About Us</Title>
          </Body>
          <Right/>
        </Header>
        <Content>
          <View style={styles.about}>
            <Image source={IMAGES.loginLogo} style={styles.aboutImg} />
            <Text style={styles.aboutText}>
              TelQuiz Adalah Sebuah aplikasi belajar tentang zakat beserta quiz untuk melatih kemampuan dan pemahaman tentang zakat
            </Text>
          </View>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/boendjank.jk/')}>
            <View style={styles.person}>
              <Image source={IMAGES.jerry} style={styles.personImg} />
              <View style={styles.personInfo}>
                <Text>Jerry Kristanto</Text>
                <View style={styles.personRole}>
                  <Text style={styles.personRoleText}>UI Designer</Text>
                </View>
              </View>
              <Image source={IMAGES.arrow} style={styles.arrow3} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/marzandi_zal55/')}>
            <View style={styles.person2}>
              <Image source={IMAGES.zandi} style={styles.personImg} />
              <View style={styles.personInfo}>
                <Text>Marzandi Zahran Affandi L</Text>
                <View style={styles.personRole}>
                  <Text style={styles.personRoleText}>Front End Dev</Text>
                </View>
              </View>
              <Image source={IMAGES.arrow} style={styles.arrow} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/syahruliady_/')}>
            <View style={styles.person2}>
              <Image source={IMAGES.arul} style={styles.personImg} />
              <View style={styles.personInfo}>
                <Text>M. Maulana Syahruliadi</Text>
                <View style={styles.personRole}>
                  <Text style={styles.personRoleText}>UI Designer</Text>
                </View>
              </View>
              <Image source={IMAGES.arrow} style={styles.arrow2} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/nanyaa___/')}>
            <View style={styles.person2}>
              <Image source={IMAGES.nanda} style={styles.personImg} />
              <View style={styles.personInfo}>
                <Text>Nanda Widya Maharani</Text>
                <View style={styles.personRole}>
                  <Text style={styles.personRoleText}>Analyst</Text>
                </View>
              </View>
              <Image source={IMAGES.arrow} style={styles.arrow2} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/yaudinn_/')}>
            <View style={styles.person3}>
              <Image source={IMAGES.udin} style={styles.personImg} />
              <View style={styles.personInfo}>
                <Text>Nurrudin Rityo Salindra</Text>
                <View style={styles.personRole}>
                  <Text style={styles.personRoleText}>Front End Dev</Text>
                </View>
              </View>
              <Image source={IMAGES.arrow} style={styles.arrow2} />
            </View>
          </TouchableOpacity>
        </Content>
      </Container>
    );
  }
};