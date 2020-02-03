import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Body, Icon } from 'native-base';
import { Platform, Text, View, TouchableWithoutFeedback, Picker, ProgressBarAndroid } from 'react-native';
import { StackActions } from 'react-navigation';
import Video from 'react-native-video';
import styles from './styles';


export default class Activityscreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rate: 1,
      volume: 1,
      muted: false,
      resizeMode: 'contain',
      duration: 0.0,
      currentTime: 0.0,
      paused: true,
      pickerValueHolder: '1.0',
      pausedText: 'Play',
      hideControls: false,
    };
    this.video = Video;
  }

  // load video event
  onLoad = (data) => {
    this.setState({ duration: data.duration });
  };

  // video is playing
  onProgress = (data) => {
    this.setState({ currentTime: data.currentTime });
  };

  // video ends
  onEnd = () => {
    this.setState({ paused: true, pausedText: 'Play'})
    this.video.seek(0);
  };

  getCurrentTimePercentage() {
    if (this.state.currentTime > 0) {
      return parseFloat(this.state.currentTime) / parseFloat(this.state.duration);
    }
    return 0;
  };

  onChangeRate(itemValue, itemIndex) {
    var rate = parseFloat(itemValue);
    this.setState({pickerValueHolder: itemValue, rate: rate});
  }

  // pressing on 'play' button
  onPressBtnPlay() {
    var pausedText = '';
    if(!this.state.paused){
      pausedText = 'Play';

      // always show controls
      if(this.timeoutHandle)
        clearTimeout(this.timeoutHandle);
    }
    else {
      pausedText = 'Pause';

      // hide controls after 5s
      this.timeoutHandle = setTimeout(()=>{
        this.setState({hideControls: true});
      }, 5000);
    }
    this.setState({ paused: !this.state.paused, pausedText: pausedText });
  }

  // on press video event
  onPressVideo() {
    // showing controls if they don't show
    if(this.state.hideControls){
      this.setState({hideControls: false});
      this.timeoutHandle = setTimeout(()=>{
        this.setState({hideControls: true});
      }, 8000);
    }
  }

  // parse seconds to time (hour:minute:second)
  parseSecToTime(sec) {
    var sec_num = parseInt(sec, 10); // don't forget the second param
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0" + hours;}
    if (minutes < 10) {minutes = "0" + minutes;}
    if (seconds < 10) {seconds = "0" + seconds;}

    return hours + ':' + minutes + ':' + seconds;
  }

  home = () => {
    this.props.navigation.dispatch(StackActions.popToTop());
  }

  profile = () => {
    const pushAction = StackActions.push({
      routeName: 'Profile'
    });
    this.props.navigation.dispatch(pushAction);
  }

  render() {
    const flexCompleted = this.getCurrentTimePercentage() * 100;
    return (
      <Container>
        <Header style={styles.header}>
          <Body>
            <Title style={styles.title}>Activity</Title>        
          </Body>
        </Header>
        <Content>
          <Text>
            This is Content Section
          </Text>
          <View style={styles.container}>
        <TouchableWithoutFeedback
          style={styles.fullScreen}
          onPress={() => this.onPressVideo()}>
          <Video
            ref={(ref: Video) => { this.video = ref }}
            /* For ExoPlayer */
            source={{ uri: 'https://rawgit.com/uit2712/Mp3Container/master/tom_and_jerry_31.mp4' }} 
            // source={require('./videos/tom_and_jerry_31.mp4')}
            style={styles.fullScreen}
            rate={this.state.rate}
            paused={this.state.paused}
            volume={this.state.volume}
            muted={this.state.muted}
            resizeMode={this.state.resizeMode}
            onLoad={this.onLoad}
            onProgress={this.onProgress}
            onEnd={this.onEnd}
            onAudioBecomingNoisy={this.onAudioBecomingNoisy}
            onAudioFocusChanged={this.onAudioFocusChanged}
            repeat={false}
          />
        </TouchableWithoutFeedback>
        {
          !this.state.hideControls ?
          (
            <View style={styles.controls}>
              <View style={styles.generalControls}>
                <View style={styles.rateControl}>
                  <Picker
                    style={{width: 110}}
                    selectedValue={this.state.pickerValueHolder}
                    onValueChange={(itemValue, itemIndex) => this.onChangeRate(itemValue, itemIndex)} >
                    <Picker.Item label="x1.5" value="1.5"/>
                    <Picker.Item label="x1.25" value="1.25"/>
                    <Picker.Item label="x1.0" value="1.0"/>
                    <Picker.Item label="x0.75" value="0.75"/>
                    <Picker.Item label="x0.5" value="0.5"/>
                  </Picker>
                </View>
                <View style={styles.playControl}>
                  <Text onPress={() => this.onPressBtnPlay()}>{this.state.pausedText}</Text>
                </View>
                <View style={styles.resizeModeControl}>
                  <Picker
                    style={{width: 150}}
                    selectedValue={this.state.resizeMode}
                    onValueChange={(itemValue, itemIndex) => this.setState({resizeMode: itemValue})} >
                    <Picker.Item label="none" value="none"/>
                    <Picker.Item label="cover" value="cover"/>
                    <Picker.Item label="stretch" value="stretch"/>
                    <Picker.Item label="contain" value="contain"/>
                  </Picker>
                </View>
              </View>

              <View style={styles.trackingControls}>
                <ProgressBarAndroid
                  style={styles.progress}
                  styleAttr="Horizontal"
                  indeterminate={false}
                  progress={this.getCurrentTimePercentage()}
                />
                <Text>{this.parseSecToTime(parseInt(this.state.currentTime))}/{this.parseSecToTime(parseInt(this.state.duration))}</Text>
              </View>
            </View>
          ) : (null)
        }
          </View>
        </Content>
        <Footer style={styles.shadow}>
          <FooterTab style={styles.footer}>
            <Button onPress={this.home}>
                <Icon name="home" style={styles.icon} />
              </Button>
              <Button>
                <Icon name="clock" style={styles.iconActive} />
              </Button>
              <Button onPress={this.profile}>
                <Icon name="person" style={styles.icon} />
              </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}