import React from 'react';
import {
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import { loadAuth } from 'datalayer/actions/auth.action';
import NavigationWithoutProps from './NavigationWithoutProps';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

class AuthLoading extends React.Component {
  componentDidMount() {
    const { loadAuth } = this.props;
    loadAuth();
  }

  componentDidUpdate(prevProps) {
    const { loggedIn } = this.props;
    console.log(`Auth prev: ${prevProps.loggedIn}`);
    console.log(`Auth now: ${loggedIn}`);
    if (prevProps.loggedIn !== loggedIn) {
      NavigationWithoutProps.navigate(loggedIn ? 'App' : 'Auth');
    }
  }

  render() {
    return (
      <View style={styles.screen}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  loggedIn: state.auth.loggedIn,
});

const mapDispatchToProps = {
  loadAuth,
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthLoading);
