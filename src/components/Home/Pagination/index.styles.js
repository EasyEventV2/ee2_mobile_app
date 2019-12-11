import { StyleSheet } from 'react-native';
import { SCREEN_HEIGHT } from 'constants/sizes';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: SCREEN_HEIGHT * 0.06,
  },
  numberListContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  numberContainer: {
    backgroundColor: '#ddd',
    paddingHorizontal: 8,
    paddingVertical: 5,
    marginHorizontal: 3,
    borderRadius: 5,
  },
  numberText: {
    fontSize: SCREEN_HEIGHT * 0.03,
    color: 'black',
  },
  navigationContainer: {
    backgroundColor: '#ddd',
    paddingHorizontal: 8,
    paddingVertical: 5,
    marginHorizontal: 3,
    borderRadius: 10,
  },
  navigationText: {
    fontSize: SCREEN_HEIGHT * 0.03,
    color: 'black',
  },
});

export default styles;
