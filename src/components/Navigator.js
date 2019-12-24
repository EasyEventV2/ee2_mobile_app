import React from 'react';
import {
  createAppContainer,
  createStackNavigator,
  createDrawerNavigator,
  createMaterialTopTabNavigator,
  createSwitchNavigator,
} from 'react-navigation';
import Home from 'components/Home';
import QR from 'components/Home/QR';
import ResultCheckin from 'components/Home/QR/ResultCheckin';
import Authentication from 'components/Authentication';
import EventDetail from 'components/Home/EventDetail';
import Accepted from 'components/Home/EventDetail/Guest/Accepted';
import Unaccepted from 'components/Home/EventDetail/Guest/Unaccepted';
import CheckedIn from 'components/Home/EventDetail/Guest/CheckedIn';
import Settings from 'components/Settings';
import AuthLoading from 'components/AuthLoading';
import Drawer from 'components/Drawer';

const GuestStack = createMaterialTopTabNavigator({
  Unaccepted: {
    screen: Unaccepted,
  },
  Accepted: {
    screen: Accepted,
  },
  CheckedIn: {
    screen: CheckedIn,
  },
}, {
  tabBarOptions: {
    activeTintColor: '#fb3',
    inactiveTintColor: 'gray',
    labelStyle: {
      fontSize: 12,
      fontWeight: 'bold',
    },
    style: {
      backgroundColor: '#F5FCFF',
    },
  },
  tabBarPosition: 'bottom',
  swipeEnabled: true,
  initialRouteName: 'Unaccepted',
});

const DrawerStack = createDrawerNavigator({
  Home: {
    screen: Home,
  },
}, {
  contentComponent: () => <Drawer />,
  drawerWidth: 230,
});

const AppStack = createStackNavigator(
  {
    DrawerStack,
    QR: {
      screen: QR,
    },
    ResultCheckin: {
      screen: ResultCheckin,
    },
    Guest: GuestStack,
    EventDetail: {
      screen: EventDetail,
    },
    Settings: {
      screen: Settings,
    },
  },
  {
    headerMode: 'none',
  }
);

const SwitchStack = createAppContainer(
  createSwitchNavigator({
    AuthLoading,
    App: AppStack,
    Auth: Authentication,
  },
  {
    initialRouteName: 'AuthLoading',
    headerMode: 'none',
  })
);

export default SwitchStack;
