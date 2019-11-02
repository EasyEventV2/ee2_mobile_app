import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

class Settings extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is settings page.</Text>
      </View>
    );
  }
}

export default Settings;
