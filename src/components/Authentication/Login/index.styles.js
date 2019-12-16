import { StyleSheet } from 'react-native';
import { SCREEN_HEIGHT } from 'constants/sizes';

const styles = StyleSheet.create({
  container: {
    height: SCREEN_HEIGHT * 0.95,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  imgContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: SCREEN_HEIGHT * 0.25,
  },
  imgLogo: {
    width: SCREEN_HEIGHT * 0.24,
    height: (SCREEN_HEIGHT * 0.24) * (354 / 512),
  },
  text: {
    fontSize: SCREEN_HEIGHT * 0.025,
    color: 'black',
  },
  formContainer: {
    width: '90%',
    paddingVertical: 15,
    height: SCREEN_HEIGHT * 0.32,
    justifyContent: 'space-between',
  },
  buttonContainer: {
    justifyContent: 'flex-end',
    height: SCREEN_HEIGHT * 0.22,
  },
  mainButton: {
    padding: 10,
    margin: 5,
    backgroundColor: '#fb3',
    alignItems: 'center',
    marginHorizontal: 5,
    borderRadius: 8,
  },
  subButton: {
    padding: 10,
    margin: 5,
    backgroundColor: 'transparent',
    alignItems: 'center',
    marginHorizontal: 5,
    borderRadius: 8,
  },
});

export default styles;
