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

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is a Home page!</Text>
      </View>
    );
  }
}

export default Home;
