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

class QR extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is a QR page!</Text>
      </View>
    );
  }
}

export default QR;
