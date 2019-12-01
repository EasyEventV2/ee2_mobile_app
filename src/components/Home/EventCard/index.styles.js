import { StyleSheet } from 'react-native';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from 'constants/sizes';

const styles = StyleSheet.create({
  cardElement: {
    height: SCREEN_HEIGHT * 0.35,
    marginHorizontal: 20,
    marginVertical: 20,
    backgroundColor: '#ddd',
    borderRadius: 20,
    elevation: 10,
  },
  cardText: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
  },
  imageBackground: {
    position: 'relative',
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  ribbon: {
    position: 'absolute',
    top: -SCREEN_WIDTH * 0.03,
    right: -SCREEN_WIDTH * 0.02,
    height: SCREEN_HEIGHT * 0.05,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: SCREEN_WIDTH * 0.05,
    borderWidth: 1,
  },
  ribbonText: {
    fontWeight: 'bold',
  },
  cardFooter: {
    height: '35%',
    backgroundColor: '#cccccccc',
    justifyContent: 'center',
    paddingHorizontal: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  cardFooterUpper: {
    flex: 1 / 2,
    justifyContent: 'center',
  },
  cardFooterLower: {
    flex: 1 / 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  calendarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  calendarText: {
    marginLeft: SCREEN_WIDTH * 0.03,
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
  },
  checkInButton: {
    borderRadius: 5,
    padding: 5,
    width: '40%',
    backgroundColor: '#fb3',
    alignItems: 'center',
    elevation: 10,
  },
  checkInText: {
    color: 'black',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default styles;
