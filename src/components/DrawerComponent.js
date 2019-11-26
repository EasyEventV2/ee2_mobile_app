import React, { Component } from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import store from 'datalayer/store';
import { logoutDispatch } from 'datalayer/actions/auth.action';
import NavigationWithoutProps from './NavigationWithoutProps';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

class DrawerComponent extends Component {
  componentDidUpdate(prevProps) {
    const { loggedIn } = this.props;
    if (prevProps.loggedIn !== loggedIn) {
      NavigationWithoutProps.navigate('Auth');
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => store.dispatch(logoutDispatch())}>
          <Text>ĐĂNG XUẤT</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default withNavigation(DrawerComponent);
