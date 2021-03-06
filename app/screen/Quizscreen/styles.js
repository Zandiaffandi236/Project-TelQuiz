import { StyleSheet } from 'react-native';
import { scale } from '../../utils/scaling';
import METRICS from '../../constant/metrics';

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#FFFFFF'
  },
  title: {
    alignSelf: 'flex-end',
    color: "#6971F7"
  },
  number: {
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    fontSize: scale(30),
    alignSelf: 'center',
    marginTop: METRICS.doubleBaseMargin
  },
  question: {
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    fontSize: scale(25),
    width: scale(310),
    // height: scale(70),
    alignSelf: 'baseline',
    marginTop: METRICS.doubleBaseMargin,
    marginLeft: scale(30)
  },
  option: {
    width: scale(300),
    height: scale(60),
    borderColor: "#6971F7",
    borderWidth: scale(1),
    borderRadius: scale(5),
    marginLeft: METRICS.inputMargin,
    marginTop: METRICS.doubleBaseMargin
  },
  optionTxt: {
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    color: "#6971F7",
    fontSize: scale(18),
    marginLeft: METRICS.doubleBaseMargin,
    marginTop: scale(16)
  },
  optionSelect: {
    width: scale(300),
    height: scale(60),
    borderColor: "#6971F7",
    backgroundColor: "#6971F7",
    borderWidth: scale(1),
    borderRadius: scale(5),
    marginLeft: METRICS.inputMargin,
    marginTop: METRICS.doubleBaseMargin
  },
  optionTxtSelect: {
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    color: "#ffffff",
    fontSize: scale(18),
    marginLeft: METRICS.doubleBaseMargin,
    marginTop: scale(16)
  },
});

export default styles;
