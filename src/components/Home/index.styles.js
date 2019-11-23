import { StyleSheet } from 'react-native';
import { SCREEN_HEIGHT } from 'constants/sizes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  listContainer: {
    flex: 1,
  },
  cardList: {
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'column',
    height: SCREEN_HEIGHT * 0.35,
    marginHorizontal: 20,
    marginVertical: 20,
    backgroundColor: '#ddd',
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 10,
  },
  cardText: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  cardFooter: {
    height: '35%',
    backgroundColor: '#cccccccc',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  cardFooterUpper: {
    flex: 1 / 2,
    justifyContent: 'center',
  },
  cardFooterLower: {
    flex: 1 / 2,
    justifyContent: 'flex-start',
  },
  checkInButton: {
    borderRadius: 5,
    padding: 5,
    width: '40%',
    backgroundColor: '#fb3',
    alignItems: 'center',
    alignSelf: 'flex-end',
    elevation: 10,
  },
  checkInText: {
    color: 'black',
    fontSize: 12,
  },
});

export default styles;
