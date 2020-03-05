import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Body, Icon, Text, View, Label } from 'native-base';
import {SwitchActions, StackActions} from 'react-navigation';
import YouTube from 'react-native-youtube'; 
import IMAGES from '../../configs/images';
import { scale } from '../../utils/scaling';
import styles from './styles';
import I18n from '../../i18n/index';

export default class Homescreen extends Component {
  videoPlayer;
  constructor(props){
    super(props);
    this.state = {
      currentTime: 0,
      duration: 0,
      isFullScreen: false,
      paused: false,
      video: true,
      isReady: false,
      status: '',
      quality: '',
    };
  }

  onSeek = seek => {
    this.videoPlayer.seek(seek);
  };

  onPaused = playerState => {
    this.setState({
      paused: !this.state.paused,
      playerState
    });
  };

  onLoad = data => this.setState({ duration: data.duration, isLoading: false });

  onLoadStart = () => this.setState({ isLoading: true });

  exitFullScreen = () => {};

  enterFullScreen = () => {};

  onFullScreen = () => this.setState({ isFullScreen: true });

  onSeeking = currentTime => this.setState({ currentTime });

  learn = () => {
    const pushAction = StackActions.push({
      routeName: 'Learn'
    });
    this.props.navigation.dispatch(pushAction);
  }

  practice = () => {
    const pushAction = StackActions.push({
      routeName: 'Subpractice'
    });
    this.props.navigation.dispatch(pushAction);
  }

  test = () => {
    const pushAction = StackActions.push({
      routeName: 'Subquiz'
    });
    this.props.navigation.dispatch(pushAction);
  }

  profile = () => {
    const pushAction = StackActions.push({
      routeName: 'Profile'
    });
    this.props.navigation.dispatch(pushAction);
  }

  back = () => {
    this.props.navigation.dispatch(
      SwitchActions.jumpTo({routeName: 'Login'}),
    );
  }

  render() {
    return (
      <Container>
        <Header style={styles.header}>
          <Body>
            <Title style={styles.title}>Home</Title>        
          </Body>
        </Header>
        <Content padder>
          <View style={styles.greeting}>
            <Text style={styles.textGreeting}>Hi Marzandi,</Text>
            <Text style={styles.textGreeting}>{I18n.t('greeting')}</Text>
          </View>
          <View style={styles.contentTitle}>
            <Image source={IMAGES.video} style={styles.contentImage} />
            <Text style={styles.contentText}>{I18n.t('video')}</Text>
          </View>
          <View style={{width: scale(320),height: scale(180),marginLeft: scale(8),marginTop: scale(10),marginBottom: scale(20)}}>
          <YouTube 
            apiKey= "AIzaSyAN5XuwDeAnf9qZXYLf7GKaYDqpPflOxSk"
            videoId="4sj5f2aTm4o" // The YouTube video ID
            play // control playback of video with true/false
            //fullscreen// control whether the video should play in fullscreen or inline
            loop // control whether the video should loop when ended
            onReady={() => this.setState({ isReady: true })}
            onChangeState={e => this.setState({ status: e.state })}
            onChangeQuality={e => this.setState({ quality: e.quality })}
            onError={e => this.setState({ error: e.error })}
            style={{ width: scale(320), height: scale(180) }}
          />
          </View>
          <View style={styles.contentTitle}>
            <Image source={IMAGES.content} style={styles.contentImage} />
            <Text style={styles.contentText}>{I18n.t('content')}</Text>
          </View>
          <View style={styles.contentOption}>
            <Button style={styles.contentButton1} onPress={this.learn} >
              <Image source={IMAGES.pic1} style={styles.pic1}/>
            </Button>
            <Button style={styles.contentButton2} onPress={this.practice} >
              <Image source={IMAGES.pic2} style={styles.pic1}/>
            </Button>
            <Button style={styles.contentButton2} onPress={this.test } >
              <Image source={IMAGES.pic3} style={styles.pic2}/>
            </Button>
          </View>
        </Content>
        <Footer style={styles.shadow}>
          <FooterTab style={styles.footer}>
            <Button>
                <Icon name="home" style={styles.iconActive} />
              </Button>
              <Button onPress={this.profile}>
                <Icon name="settings" style={styles.icon} />
              </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}