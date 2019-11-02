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

class EventDetail extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text>This is a Event Detail page!</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Guest')}>
          <Text>Go to Guest</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default EventDetail;
