import React, {Component} from 'react';
import { Container, Header, Title, Content, Button, Left, Right, Body, Icon, Text } from 'native-base';
import CountDown from 'react-native-countdown-component';
import { scale } from '../../utils/scaling';
import { StackActions } from 'react-navigation';
import {View, TouchableOpacity, ScrollView} from 'react-native';
import styles from './styles';
import I18n from '../../i18n/index';
import Quizdata from '../../../assets/raw/gamelist.json';

export default class Practicescreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Quiz: Quizdata.games[1].quizzes,
      Num: 0,
      MyAnswer: '',
      TrueAnswer: [],
      Answer: []
    }
  }

  componentDidMount() {
    let jawaban = []
    for (let index = 0; index < this.state.Quiz.length; index++) {
      jawaban.push(this.state.Quiz[index].quiz_true);
    }
    this.setState({
      TrueAnswer: jawaban
    })
  }

  next = async () => {
    if (this.state.Num + 1 === this.state.Quiz.length){
      await this.setState({Answer : [...this.state.Answer, this.state.MyAnswer]})
      const AllAnswer = this.state.Answer
      const AllTrueAnswer = this.state.TrueAnswer
      const pushAction = StackActions.push({
        routeName: 'Score',
        params: {AllAnswer, AllTrueAnswer}
      });
      this.props.navigation.dispatch(pushAction);
    } else {
      this.setState({Num: this.state.Num + 1, Answer : [...this.state.Answer, this.state.MyAnswer]})
    }
  }

  selected = (answer) => {
    this.setState({MyAnswer: answer})
  }

  render() {
    return(
      <Container>
        <Header style={styles.header}>
          <Left />
          <Body>
            <Title style={styles.title}>Test</Title>        
          </Body>
          <Right>
          <CountDown
            until={60 * 30}
            size={15}
            onFinish={() => alert('Finished')}
            digitStyle={{backgroundColor: '#FFF'}}
            digitTxtStyle={{color: '#1CC625'}}
            timeToShow={['M', 'S']}
          />
          </Right>
        </Header>
        <Content>
          <ScrollView>
            <Text style={styles.number}>
              Question {this.state.Num + 1} / 10
            </Text>
            <Text style={styles.question}>
              {this.state.Quiz[this.state.Num].description}
            </Text>
            <TouchableOpacity onPress={()=> this.selected(this.state.Quiz[this.state.Num].options[0].description)}>
              <View style={this.state.MyAnswer === this.state.Quiz[this.state.Num].options[0].description ? (styles.optionSelect) : (styles.option)}>
                <Text style={this.state.MyAnswer === this.state.Quiz[this.state.Num].options[0].description ? (styles.optionTxtSelect) : (styles.optionTxt)}>
                  A. { this.state.Quiz[this.state.Num].options[0].description}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> this.selected(this.state.Quiz[this.state.Num].options[1].description)} >
              <View style={this.state.MyAnswer === this.state.Quiz[this.state.Num].options[1].description ? (styles.optionSelect) : (styles.option)}>
                <Text style={this.state.MyAnswer === this.state.Quiz[this.state.Num].options[1].description ? (styles.optionTxtSelect) : (styles.optionTxt)}>
                  B. { this.state.Quiz[this.state.Num].options[1].description}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> this.selected(this.state.Quiz[this.state.Num].options[2].description)}>
              <View style={this.state.MyAnswer === this.state.Quiz[this.state.Num].options[2].description ? (styles.optionSelect) : (styles.option)}>
                <Text style={this.state.MyAnswer === this.state.Quiz[this.state.Num].options[2].description ? (styles.optionTxtSelect) : (styles.optionTxt)}>
                  C. { this.state.Quiz[this.state.Num].options[2].description}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> this.selected(this.state.Quiz[this.state.Num].options[3].description)}>
              <View style={this.state.MyAnswer === this.state.Quiz[this.state.Num].options[3].description ? (styles.optionSelect) : (styles.option)}>
                <Text style={this.state.MyAnswer === this.state.Quiz[this.state.Num].options[3].description ? (styles.optionTxtSelect) : (styles.optionTxt)}>
                  D. { this.state.Quiz[this.state.Num].options[3].description}
                </Text>
              </View>
            </TouchableOpacity>
            <Button
              block
              style={{marginTop: scale(30), marginHorizontal: 12,marginLeft: scale(30) , backgroundColor: "#44B883",width: scale(300), height: scale(40), borderRadius: 5}}
              onPress={this.next}>
              {this.state.Num + 1 === this.state.Quiz.length ? (<Text>{I18n.t('end')}</Text>) : (<Text>{I18n.t('next')}</Text>) }
            </Button>
            </ScrollView>
        </Content>
      </Container>
    );
  }
};