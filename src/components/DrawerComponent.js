import React, { Component } from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity,
} from 'react-native';
import { withNavigation } from 'react-navigation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

class DrawerComponent extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text>NHAU NHAU!</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <Text>Go to Settings Page</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default withNavigation(DrawerComponent);
