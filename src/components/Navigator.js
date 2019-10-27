import {
  createAppContainer,
  createStackNavigator,
  createDrawerNavigator,
  createMaterialTopTabNavigator,
} from 'react-navigation';
import Home from 'components/Home';
import QR from 'components/Home/QR';
import Login from 'components/Login';
import Guest from 'components/Guest';
import EventDetail from 'components/Home/EventDetail';
import Accepted from 'components/Guest/Accepted';
import Unaccepted from 'components/Guest/Unaccepted';
import CheckedIn from 'components/Guest/CheckedIn';

const StackNavigator = createAppContainer(
  createStackNavigator(
    {
      Login: {
        screen: Login,
      },
      Home: {
        screen: Home,
      },
      QR: {
        screen: QR,
      },
      Guest: {
        screen: Guest,
      },
      EventDetail: {
        screen: EventDetail,
      },
    },
    {
      initialRouteName: 'Login',
      headerMode: 'none',
    }
  )
);


export const DrawerNavigator = createAppContainer(
  createDrawerNavigator({
    StackNavigator,
  }, {
  // contentComponent: () => <View><Text>Nhau nhau</Text></View>,
    drawerWidth: 230,
  })
);


export const BottomNavigator = createAppContainer(
  createMaterialTopTabNavigator({
    Unaccepted: {
      screen: Unaccepted,
    },
    CheckedIn: {
      screen: CheckedIn,
    },
    Accepted: {
      screen: Accepted,
    },
  }, {
    tabBarOptions: {
      activeTintColor: '#fb3',
      inactiveTintColor: 'gray',
      labelStyle: {
        fontSize: 12,
      },
      style: {
        backgroundColor: 'white',
      },
    },
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    initialRouteName: 'Unaccepted',
  })
);

export default {
  StackNavigator,
  DrawerNavigator,
  BottomNavigator,
};
