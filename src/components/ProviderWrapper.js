import React, { Component } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import store from 'datalayer/store';
import App from 'components/App';

export default class ProviderWrapper extends Component {
  render() {
    return (
      <ReduxProvider store={store}>
        <App />
      </ReduxProvider>
    );
  }
}
