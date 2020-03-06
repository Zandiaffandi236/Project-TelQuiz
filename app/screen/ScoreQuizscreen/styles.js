import { StyleSheet } from 'react-native';
import { scale } from '../../utils/scaling';
import METRICS from '../../constant/metrics';

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#FFFFFF'
  },
  title: {
    alignSelf: 'center',
    color: "#6971F7"
  },
  homeButton: {
    marginTop: METRICS.doubleInputMargin,
    marginHorizontal: 12, 
    backgroundColor: "#44B883", 
    width: scale(320),
    height: scale(40), 
    textAlign: 'center',
    marginLeft: METRICS.tripleSmallMargin,
    borderRadius: 5
  },
  button: {
    flexDirection: 'row'
  },
  img: {
    width: scale(180),
    height: scale(180),
    alignSelf: 'center',
    marginTop: METRICS.doubleInputMargin
  },
  text: {
    fontSize: scale(30),
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: METRICS.inputMargin,
    color: '#6971F7'
  },
  text1: {
    fontSize: scale(20),
    fontWeight: 'bold',
    alignSelf: 'center',
    color: '#6971F7'
  },
  text2: {
    fontSize: scale(40),
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: METRICS.baseMargin,
    color: '#6971F7'
  },
});

export default styles;
