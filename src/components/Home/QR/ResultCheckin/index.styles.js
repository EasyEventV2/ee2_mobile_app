import { StyleSheet } from 'react-native';

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
  titleContainer: {
    marginVertical: 20,
  },
  titleText: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
  },
  infoContainer: {
    flex: 1,
    paddingHorizontal: 20,
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
    marginVertical: 20,
  },
  buttonText: {
    fontSize: 20,
    color: 'black',
  },
});

export default styles;
