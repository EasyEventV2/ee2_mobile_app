import { StyleSheet } from 'react-native';
import { SCREEN_WIDTH, SCREEN_HEIGHT } from 'constants/sizes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    height: SCREEN_HEIGHT * 0.25,
    paddingHorizontal: SCREEN_WIDTH * 0.1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: SCREEN_WIDTH * 0.1,
    color: '#fb3',
    textAlign: 'center',
  },
  cameraContainer: {
    height: SCREEN_HEIGHT * 0.75,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  camera: {
    width: SCREEN_WIDTH * 0.95,
    height: SCREEN_WIDTH * 0.95,
  },
});

export default styles;
