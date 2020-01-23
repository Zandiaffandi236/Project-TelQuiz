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
  }
});

export default styles;