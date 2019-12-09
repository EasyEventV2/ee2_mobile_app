/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import {
  Text, View, TouchableOpacity, ImageBackground,
} from 'react-native';
import moment from 'moment';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import NavigationWithoutProps from 'utils/navigationWithoutProps';
import styles from './index.styles';

class EventCard extends Component {
  goToEventDetail = (id) => {
    NavigationWithoutProps.navigate('EventDetail', { eventId: id });
  }

  goToQR = () => {
    NavigationWithoutProps.navigate('QR');
  }

  mapNameToColorAndText = (name) => {
    console.log(name);
    switch (name) {
      case 'admin':
        return {
          ribbonColor: 'green',
          ribbonText: 'white',
        };
      case 'operator':
        return {
          ribbonColor: 'yellow',
          ribbonText: 'black',
        };
      case 'staff':
        return {
          ribbonColor: 'orange',
          ribbonText: 'white',
        };
      case 'custom team':
        return {
          ribbonColor: 'white',
          ribbonText: 'black',
        };
      case 'custom admin':
        return {
          ribbonColor: 'white',
          ribbonText: 'black',
        };
      default:
        return null;
    }
  }

  render() {
    const { item } = this.props;
    const time = new Date(item.event.start_time);
    const calendarText = moment(time).format('DD/MM/YYYY');
    const { ribbonColor, ribbonText } = this.mapNameToColorAndText(item.name);
    return (
      <TouchableOpacity
        onPress={() => this.goToEventDetail(item.event._id)}
        style={styles.cardElement}
      >
        <ImageBackground
          source={{ uri: 'https://cdn.flickeringmyth.com/wp-content/uploads/2018/06/Ant-Man-and-the-Wasp-intl-poster-2-600x857.jpg' }}
          style={styles.imageBackground}
          imageStyle={{ borderRadius: 20 }}
        >
          <View style={[styles.ribbon, { backgroundColor: ribbonColor }]}>
            <Text style={[styles.ribbonText, { color: ribbonText }]}>
              {item.name.toUpperCase()}
            </Text>
          </View>
          <View style={styles.cardFooter}>
            <View style={styles.cardFooterUpper}>
              <Text style={styles.cardText}>
                {item.event.name}
              </Text>
            </View>
            <View style={styles.cardFooterLower}>
              <View style={styles.calendarContainer}>
                <FontAwesome name="calendar" size={23} color="black" />
                <Text style={styles.calendarText}>{calendarText}</Text>
              </View>
              <TouchableOpacity
                style={styles.checkInButton}
                onPress={this.goToQR}
              >
                <Text style={styles.checkInText}>
                  CHECK-IN
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  }
}

export default EventCard;
