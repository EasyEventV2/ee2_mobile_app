import { StyleSheet } from 'react-native';
import { SCREEN_WIDTH } from 'constants/sizes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  titleText: {
    fontSize: SCREEN_WIDTH * 0.1,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: SCREEN_WIDTH * 0.06,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: SCREEN_WIDTH * 0.05,
  },
  infoText: {
    fontSize: 20,
    color: 'black',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#fb3',
    alignSelf: 'center',
    padding: 10,
    borderRadius: 8,
    marginTop: SCREEN_WIDTH * 0.06,
  },
  buttonText: {
    fontSize: 20,
    color: 'black',
  },
});

export default styles;
