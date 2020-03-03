import { StyleSheet } from 'react-native';
import { scale } from '../../utils/scaling';
import METRICS from '../../constant/metrics';

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#FFFFFF'
  },
  footer: {
    backgroundColor: '#FFFFFF',
  },
  shadow: {
    elevation: 30,
    position: "relative"
  },
  iconActive: {
    color: "#6971F7"
  },
  icon: {
    color: "#c4c4c4"
  },
  title: {
    alignSelf: 'center',
    color: "#6971F7"
  },
  heading: {
    elevation: 2,
    position: "relative",
    backgroundColor: "#ffffff",
    width: scale(320),
    height: scale(70),
    marginTop: METRICS.doubleBaseMargin,
    marginLeft: METRICS.tripleSmallMargin,
    borderRadius: scale(5)
  },
  iconButton: {
    backgroundColor: '#ffffff',
    width: scale(320),
    height: scale(60),
    borderRadius: 5,
    marginLeft: METRICS.tripleSmallMargin,
    marginTop: METRICS.doubleBaseMargin2,
  },
  iconButton2: {
    backgroundColor: '#ffffff',
    width: scale(320),
    height: scale(60),
    borderRadius: 5,
    marginLeft: METRICS.tripleSmallMargin,
    marginTop: METRICS.doubleBaseMargin,
  },
  homeButton: {
    marginTop: METRICS.extraSection3,
    marginHorizontal: 12, 
    backgroundColor: "#44B883", 
    height: scale(40), 
    textAlign: 'center',
    borderRadius: 5
  },
  textButton: {
    color: '#6971F7',
  },
  buttonIcon: {
    color: '#6971F7',
  },
  name: {
    fontSize: scale(22),
    alignSelf: 'center',
    marginTop: METRICS.baseMargin
  },
  email: {
    fontSize: scale(11),
    color: "#6971F7",
    alignSelf: 'center',
    marginTop: METRICS.smallMargin
  },
});

export default styles;