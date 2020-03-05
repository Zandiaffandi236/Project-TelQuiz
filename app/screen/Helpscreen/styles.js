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
  backArrow: {
    alignItems: 'flex-start',
    color: "#6971F7"
  },
  about: {
    elevation: 3,
    position: "relative",
    backgroundColor: "#ffffff",
    width: scale(320),
    height: scale(100),
    marginTop: METRICS.doubleBaseMargin,
    marginLeft: METRICS.tripleSmallMargin,
    marginBottom: METRICS.doubleBaseMargin,
    flexDirection: 'row',
    borderRadius: scale(5),
  },
  aboutImg: {
    width: scale(50),
    height: scale(50),
    marginLeft: METRICS.doubleBaseMargin,
    marginTop: scale(25)
  },
  aboutText: {
    fontSize: scale(11),
    width: scale(210),
    height: scale(60),
    marginTop: METRICS.doubleBaseMargin,
    marginLeft: METRICS.doubleBaseMargin
  },
});

export default styles;