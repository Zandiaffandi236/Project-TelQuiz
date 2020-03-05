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
  greeting: {
    marginLeft: METRICS.baseMargin, 
    marginTop: METRICS.baseMargin
  },
  textGreeting: {
    color: "#6971F7", 
    fontSize: 17,
    fontWeight: 'bold',
  },
  contentOption: {
    flexDirection: 'row', 
    marginTop: METRICS.baseMargin
  },
  contentButton1: {
    width: METRICS.extraSection2, 
    height: METRICS.extraSection2, 
    borderRadius: 5, 
    marginLeft: METRICS.baseMargin, 
    backgroundColor: "#6971F7"
  },
  contentButton2: {
    width: METRICS.extraSection2, 
    height: METRICS.extraSection2, 
    borderRadius: 5, 
    marginLeft: METRICS.doubleBaseMargin, 
    backgroundColor: "#6971F7"
  },
  backButton: {
    marginTop: METRICS.doubleBaseMargin
  },
  pic1: {
    marginLeft: METRICS.section,
    marginBottom: METRICS.tripleSmallMargin,
    width: METRICS.doubleBaseMargin2,
    height: METRICS.doubleInputMargin
  },
  pic2: {
    marginLeft: METRICS.inputMargin,
    marginBottom: METRICS.tripleSmallMargin,
    width: METRICS.doubleBaseMargin2,
    height: METRICS.doubleInputMargin
  },
  contentTitle: {
    flexDirection: 'row',
    height: scale(20),
    width: scale(75),
    marginTop: METRICS.doubleBaseMargin
  },
  contentImage: {
    width: scale(15),
    height: scale(15),
    marginLeft: METRICS.baseMargin
  },
  contentText: {
    fontSize: scale(15),
    fontWeight: 'bold',
    color: '#6971F7',
    alignSelf: 'center',
    marginLeft: METRICS.smallMargin,
    marginBottom: METRICS.smallMargin
  }
});

export default styles;
