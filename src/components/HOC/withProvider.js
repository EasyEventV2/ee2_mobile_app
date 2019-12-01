import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import store from 'datalayer/store';

const withProvider = (WrappedComponent) => {
  function Wrapper() {
    return (
      <ReduxProvider store={store}>
        <WrappedComponent />
      </ReduxProvider>
    );
  }

  return Wrapper;
};

export default withProvider;
