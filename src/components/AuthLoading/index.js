import React from 'react';
import {
  ActivityIndicator,
  StatusBar,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import { loadAuthDispatch } from 'datalayer/actions/auth.action';
import styles from './index.styles';

class AuthLoading extends React.Component {
  componentDidMount() {
    const { loadAuthDispatch } = this.props;
    loadAuthDispatch();
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
  loadAuthDispatch,
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthLoading);
