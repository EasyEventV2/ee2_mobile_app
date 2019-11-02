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
import Authentication from 'components/Authentication';
import EventDetail from 'components/Home/EventDetail';
import Accepted from 'components/Home/EventDetail/Guest/Accepted';
import Unaccepted from 'components/Home/EventDetail/Guest/Unaccepted';
import CheckedIn from 'components/Home/EventDetail/Guest/CheckedIn';
import Settings from 'components/Settings';
import AuthLoading from 'components/AuthLoading';
import DrawerComponent from 'components/DrawerComponent';

const GuestStack = createMaterialTopTabNavigator({
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
});

const DrawerStack = createDrawerNavigator({
  Home: {
    screen: Home,
  },
}, {
  contentComponent: () => <DrawerComponent />,
  drawerWidth: 230,
});

const AppStack = createStackNavigator(
  {
    DrawerStack,
    QR: {
      screen: QR,
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
