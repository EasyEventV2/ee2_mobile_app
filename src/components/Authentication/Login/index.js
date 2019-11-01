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

class Login extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text>This is a login page!</Text>
        <TouchableOpacity onPress={() => navigation.navigate('QR')}>
          <Text>Go to QR Page</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text>Go to Home Page</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Guest')}>
          <Text>Go to Guest</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Login;
