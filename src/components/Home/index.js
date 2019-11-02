import React, { Component } from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity,
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
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text>This is a Home page!</Text>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Text>Toggle DrawerNavigator</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('QR')}>
          <Text>Go to QR Page</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('EventDetail')}>
          <Text>Go to Event Detail Page</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Home;
