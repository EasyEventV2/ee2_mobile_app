import React, { Component } from 'react';
import {
  StyleSheet, Text, View,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

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
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text>Go to Login Page</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Text>Go to Register Page</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Authentication;
