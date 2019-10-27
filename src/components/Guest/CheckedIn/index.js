import React, { Component } from 'react';
import {
  StyleSheet, Text, View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

class CheckedIn extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is a Guest - CheckedIn page!</Text>
      </View>
    );
  }
}

export default CheckedIn;
