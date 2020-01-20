import { StyleSheet } from 'react-native';
import { scale } from '../../utils/scaling';
import METRICS from '../../constant/metrics';

const styles = StyleSheet.create({
  logoContainer: { 
    width: scale(150), 
    height: scale(150),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: METRICS.extraSection,
    marginLeft: METRICS.extraSection2},
  logo: { flex: 1, width: scale(135), height: scale(130), marginBottom: METRICS.baseMargin },
  footer: { color: '#ffffff', marginTop: METRICS.tripleSmallMargin },
  register: { color: '#ffffff', fontWeight: 'bold', marginTop: METRICS.baseMargin, marginLeft: METRICS.negTripleSmallMargin },
  input: { marginTop: METRICS.doubleBaseMargin }
});

export default styles;
