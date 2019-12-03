import React, { Component } from 'react';
import {
  Text, ScrollView, TouchableOpacity, Image,
} from 'react-native';
import styles from './index.styles';

class EventDetail extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <ScrollView style={styles.container}>
        <Image
          source={{ uri: 'https://cdn.flickeringmyth.com/wp-content/uploads/2018/06/Ant-Man-and-the-Wasp-intl-poster-2-600x857.jpg' }}
          style={styles.posterImg}
        />
        <Text>This is a Event Detail page!</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Guest')}>
          <Text>Go to Guest</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

export default EventDetail;
