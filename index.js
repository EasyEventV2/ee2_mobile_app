/**
 * @format
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider as ReduxProvider } from 'react-redux';
import store from 'datalayer/store';
import App from './src/components/App';

class Index extends Component {
  render() {
    return (
      <ReduxProvider store={store}>
        <App />
      </ReduxProvider>
    );
  }
}
AppRegistry.registerComponent('ee2_mobile_app', () => Index);
