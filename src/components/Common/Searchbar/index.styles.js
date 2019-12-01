import { StyleSheet } from 'react-native';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from 'constants/sizes';

const styles = StyleSheet.create({
  container: {
    height: SCREEN_HEIGHT * 0.1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SCREEN_WIDTH * 0.03,
  },
  inputContainer: {
    width: SCREEN_WIDTH * 0.77,
    height: SCREEN_HEIGHT * 0.085,
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputText: {
    height: SCREEN_HEIGHT * 0.085,
    width: SCREEN_WIDTH * 0.7,
  },
  magnifierButton: {
    padding: SCREEN_WIDTH * 0.044,
    borderWidth: 1,
  },
});

export default styles;
