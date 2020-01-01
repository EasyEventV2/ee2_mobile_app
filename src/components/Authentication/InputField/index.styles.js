import { StyleSheet } from 'react-native';
import { SCREEN_HEIGHT } from 'constants/sizes';

const styles = StyleSheet.create({
  inputField: {
    backgroundColor: '#ddd',
    height: SCREEN_HEIGHT * 0.1,
    justifyContent: 'center',
    borderRadius: 10,
    paddingHorizontal: 5,
  },
  inputText: {
    fontSize: SCREEN_HEIGHT * 0.03,
  },
});

export default styles;
