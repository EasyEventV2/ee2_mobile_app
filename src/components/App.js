/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import SwitchStack from 'components/Navigator';
import NavigationWithoutProps from 'components/NavigationWithoutProps';

console.disableYellowBox = true;

class App extends Component {
  componentDidUpdate(prevProps) {
    const { loggedIn } = this.props;
    if (prevProps.loggedIn !== loggedIn) {
      NavigationWithoutProps.navigate(loggedIn ? 'App' : 'Auth');
    }
  }

  render() {
    return (
      <SwitchStack ref={navigatorRef => {
        NavigationWithoutProps.setTopLevelNavigator(navigatorRef);
      }}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  loggedIn: state.auth.loggedIn,
});

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(App);
