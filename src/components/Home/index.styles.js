import { StyleSheet } from 'react-native';
import { SCREEN_WIDTH } from 'constants/sizes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyListContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyListText: {
    fontSize: SCREEN_WIDTH * 0.07,
  },
  cardListContainer: {
    flex: 1,
    flexDirection: 'column',
  },
});

export default styles;
