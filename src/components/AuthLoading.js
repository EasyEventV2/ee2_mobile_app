import React from 'react';
import {
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import { loadAccessToken, loadUserId } from 'datalayer/actions/auth.action';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

class AuthLoading extends React.Component {
  componentDidMount() {
    const { loadAccessToken, loadUserId } = this.props;
    loadAccessToken()
      .then(() => loadUserId());
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
  loadAccessToken,
  loadUserId,
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthLoading);
