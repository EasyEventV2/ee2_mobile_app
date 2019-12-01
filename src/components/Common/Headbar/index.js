import React, { Component } from 'react';
import {
  Text, View, TouchableOpacity,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './index.styles';

class Headbar extends Component {
  openDrawer = () => {
    const { navigation } = this.props;
    navigation.openDrawer();
  }

  render() {
    const { title } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.openDrawer}>
          <MaterialCommunityIcons name="menu" size={25} color="black" />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View />
      </View>
    );
  }
}

export default withNavigation(Headbar);
