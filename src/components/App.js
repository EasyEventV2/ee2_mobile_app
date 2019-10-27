/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import store from 'datalayer/store';
import Navigator from 'components/Navigator';

console.disableYellowBox = true;

class App extends Component {
  render() {
    return (
      <ReduxProvider store={store}>
        <Navigator.DrawerNavigator />
      </ReduxProvider>
    );
  }
}

export default App;
