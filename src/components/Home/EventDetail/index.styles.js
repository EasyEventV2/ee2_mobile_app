import { StyleSheet } from 'react-native';
import { SCREEN_HEIGHT } from 'constants/sizes';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  posterImg: {
    width: '100%',
    height: SCREEN_HEIGHT * 0.35,
  },
  descriptionContainer: {
    padding: SCREEN_HEIGHT * 0.015,
  },
  titleText: {
    fontSize: 30,
    color: 'black',
    marginBottom: SCREEN_HEIGHT * 0.02,
  },
  iconAndTextContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: SCREEN_HEIGHT * 0.02,
  },
  textContainer: {
    marginHorizontal: SCREEN_HEIGHT * 0.015,
  },
  text: {
    marginBottom: SCREEN_HEIGHT * 0.015,
    color: 'black',
    fontSize: 20,
  },
  guestsIconAndTextContainer: {
    flexDirection: 'row',
    marginBottom: SCREEN_HEIGHT * 0.02,
    alignItems: 'center',
    marginTop: -SCREEN_HEIGHT * 0.01,
  },
  buttonContainer: {
    marginHorizontal: SCREEN_HEIGHT * 0.015,
  },
  button: {
    height: SCREEN_HEIGHT * 0.065,
    padding: SCREEN_HEIGHT * 0.01,
    backgroundColor: '#fb3',
    borderRadius: 8,
    elevation: 10,
  },
  mapContainer: {
    marginHorizontal: SCREEN_HEIGHT * 0.015,
    width: '90%',
  },
  map: {
    width: '100%',
    height: SCREEN_HEIGHT * 0.4,
  },
});

export default styles;
