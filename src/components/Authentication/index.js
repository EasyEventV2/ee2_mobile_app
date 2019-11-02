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

class Authentication extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text>This is an authentication page!</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text>Go to Home Page</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Authentication;
