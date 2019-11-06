import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  imgContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1 / 3,
  },
  imgLogo: {
    width: 200,
    height: 138,
  },
  text: {
    fontSize: 15,
    color: 'black',
  },
  formContainer: {
    width: '90%',
    padding: 5,
    flex: 1 / 3,
  },
  buttonContainer: {
    justifyContent: 'center',
    flex: 1 / 3,
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
