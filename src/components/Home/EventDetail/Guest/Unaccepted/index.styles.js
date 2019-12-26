import { StyleSheet } from 'react-native';
import { SCREEN_WIDTH, SCREEN_HEIGHT } from 'constants/sizes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainer: {
    flex: 1,
    width: SCREEN_WIDTH * 0.95,
    marginBottom: SCREEN_HEIGHT * 0.03,
  },
  text: {
    fontSize: SCREEN_HEIGHT * 0.032,
    color: 'black',
  },
  titleContainer: {
    marginHorizontal: SCREEN_WIDTH * 0.02,
    marginVertical: SCREEN_HEIGHT * 0.03,
    paddingHorizontal: SCREEN_WIDTH * 0.015,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  titleText: {
    fontSize: SCREEN_HEIGHT * 0.04,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
    marginBottom: SCREEN_HEIGHT * 0.015,
  },
  button: {
    backgroundColor: '#fb3',
    padding: SCREEN_WIDTH * 0.02,
    borderRadius: 8,
  },
});

export default styles;
