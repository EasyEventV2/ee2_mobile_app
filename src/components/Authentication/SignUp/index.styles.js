import { StyleSheet } from 'react-native';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from 'constants/sizes';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: SCREEN_HEIGHT * 0.03,
  },
  imgContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  imgLogo: {
    width: SCREEN_WIDTH * 0.36,
    height: SCREEN_HEIGHT * 0.15,
  },
  text: {
    fontSize: SCREEN_HEIGHT * 0.025,
    color: 'black',
  },
  formContainer: {

  },
  buttonContainer: {
    marginTop: SCREEN_HEIGHT * 0.05,
  },
  mainButton: {
    padding: 10,
    backgroundColor: '#fb3',
    alignItems: 'center',
    marginHorizontal: 10,
    borderRadius: 8,
  },
  subButton: {
    padding: 10,
    marginTop: 10,
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
});

export default styles;
