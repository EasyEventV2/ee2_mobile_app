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

class Accepted extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is a Guest - Accepted page!</Text>
      </View>
    );
  }
}

export default Accepted;
