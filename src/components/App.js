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
import SwitchStack from 'components/Navigator';

console.disableYellowBox = true;

class App extends Component {
  render() {
    return (
      <ReduxProvider store={store}>
        <SwitchStack />
      </ReduxProvider>
    );
  }
}

export default App;
