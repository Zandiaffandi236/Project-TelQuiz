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
});

export default styles;