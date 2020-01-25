import { StyleSheet } from 'react-native';
import { scale } from '../../utils/scaling';
import METRICS from '../../constant/metrics';

const styles = StyleSheet.create({
  homeButton: {
    marginTop: scale(60), 
    marginBottom: METRICS.inputMargin,
    marginHorizontal: 12, 
    backgroundColor: "#44B883", 
    height: scale(40), 
    borderRadius: 5
  },
  backArrow: {
    alignItems: 'flex-start',
    color: "#6971F7"
  },
  header: {
    backgroundColor: '#FFFFFF'
  },
  title: {
    alignSelf: 'flex-end',
    color: "#6971F7"
  },
  content: {
    fontSize: 15,
    width: scale(290),
    alignSelf: 'center',
    marginTop: METRICS.doubleBaseMargin
  },
  Img: {
    width: scale(230),
    height: scale(130),
    alignSelf: 'center',
    marginTop: METRICS.doubleBaseMargin
  }
});

export default styles;


