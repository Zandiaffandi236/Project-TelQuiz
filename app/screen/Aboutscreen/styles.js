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
  person: {
    elevation: 3,
    position: "relative",
    backgroundColor: "#ffffff",
    width: scale(320),
    height: scale(60),
    marginLeft: METRICS.tripleSmallMargin,
    marginTop: METRICS.doubleBaseMargin,
    borderRadius: scale(5),
    flexDirection: 'row'
  },
  person2: {
    elevation: 3,
    position: "relative",
    backgroundColor: "#ffffff",
    width: scale(320),
    height: scale(60),
    marginLeft: METRICS.tripleSmallMargin,
    marginTop: METRICS.baseMargin,
    borderRadius: scale(5),
    flexDirection: 'row'
  },
  person3: {
    elevation: 3,
    position: "relative",
    backgroundColor: "#ffffff",
    width: scale(320),
    height: scale(60),
    marginLeft: METRICS.tripleSmallMargin,
    marginTop: METRICS.baseMargin,
    marginBottom: METRICS.doubleBaseMargin,
    borderRadius: scale(5),
    flexDirection: 'row'
  },
  personInfo: {
    fontSize: scale(13),
    marginTop: METRICS.baseMargin,
    marginLeft: METRICS.baseMargin,
  },
  personRole: {
    width: scale(70),
    height: scale(15),
    backgroundColor: "#44B883",
    borderRadius: scale(5),
    marginTop: METRICS.smallMargin
  },
  personRoleText: {
    fontSize: scale(8),
    color: "#ffffff",
    alignSelf: 'center',
    marginTop: scale(2)
  },
  personImg: {
    width: scale(40),
    height: scale(40),
    marginLeft: METRICS.doubleBaseMargin,
    marginTop: METRICS.baseMargin
  }
});

export default styles;