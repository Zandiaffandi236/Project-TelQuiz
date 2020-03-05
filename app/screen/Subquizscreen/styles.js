import { StyleSheet } from 'react-native';
import { scale } from '../../utils/scaling';
import METRICS from '../../constant/metrics';

const styles = StyleSheet.create({
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
  subTitle: {
    fontSize: scale(18),
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: METRICS.doubleBaseMargin2,
  },
  rules: {
    width: scale(280),
    height: scale(50),
    backgroundColor: "#ffffff",
    elevation: 2,
    position: "relative",
    marginTop: METRICS.inputMargin,
    marginLeft: METRICS.doubleBaseMargin2,
    flexDirection: 'row',
    borderRadius: scale(5),
  },
  rules2: {
    width: scale(280),
    height: scale(50),
    backgroundColor: "#ffffff",
    elevation: 2,
    position: "relative",
    marginTop: METRICS.doubleBaseMargin,
    marginLeft: METRICS.doubleBaseMargin2,
    flexDirection: 'row',
    borderRadius: scale(5),
  },
  imgRules: {
    width: scale(32),
    height: scale(32),
    marginLeft: METRICS.tripleSmallMargin,
    marginTop: scale(9),
  },
  txtRules: {
    fontSize: scale(18),
    fontWeight: 'bold',
    color: '#6971F7',
    marginLeft: METRICS.doubleBaseMargin,
    marginTop: scale(13)
  }
});

export default styles;
