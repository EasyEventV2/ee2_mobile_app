import { StyleSheet } from 'react-native';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from 'constants/sizes';

const styles = StyleSheet.create({
  container: {
    height: SCREEN_HEIGHT * 0.1,
    width: '100%',
    backgroundColor: '#f8f9fa',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SCREEN_WIDTH * 0.03,
  },
  titleContainer: {
    flexDirection: 'row',
    width: SCREEN_WIDTH * 0.78,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default styles;
