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
  backButton: {
    marginTop: scale(60), 
    marginHorizontal: 12, 
    backgroundColor: "#44B883", 
    height: scale(40), 
    borderRadius: 5
  },
  option: {
    flexDirection: 'row',
    marginTop: scale(110)
  },
  option2: {
    flexDirection: 'row',
  },  
  optionButton: {
    width: scale(120),
    height: scale(170),
    marginLeft: scale(30),
    marginBottom: scale(30),
    borderRadius: 5,
    backgroundColor: "#6971F7"
  },
  pic: {
    width: scale(100),
    height: scale(120),
    marginLeft: scale(10)
  }
});

export default styles;