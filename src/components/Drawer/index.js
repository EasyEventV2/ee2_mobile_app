import React, { Component } from 'react';
import {
  Text, View, TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { logoutDispatch } from 'datalayer/actions/auth.action';
import styles from './index.styles';

class Drawer extends Component {
  logOut = () => {
    const { logoutDispatch } = this.props;
    logoutDispatch();
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.logOut}>
          <Text>ĐĂNG XUẤT</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  loggedIn: state.auth.loggedIn,
});

const mapDispatchToProps = {
  logoutDispatch,
};

export default connect(mapStateToProps, mapDispatchToProps)(Drawer);
