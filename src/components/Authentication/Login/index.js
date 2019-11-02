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
        <Text>This is a login component!</Text>
        <TouchableOpacity onPress={() => navigation.navigate('App')}>
          <Text>Go to Home Page</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Login;
