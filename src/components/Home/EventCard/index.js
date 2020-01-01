/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import {
  Text, View, TouchableOpacity, ImageBackground,
} from 'react-native';
import moment from 'moment';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import NavigationWithoutProps from 'utils/navigationWithoutProps';
import Rolename from 'constants/rolename';
import styles from './index.styles';

class EventCard extends Component {
  goToEventDetail = (id) => {
    NavigationWithoutProps.navigate('EventDetail', { eventId: id });
  }

  goToQR = (id) => {
    NavigationWithoutProps.navigate('QR', { eventId: id });
  }

  mapNameToColorAndText = (name) => {
    switch (name) {
      case Rolename.ADMIN:
        return {
          ribbonColor: 'green',
          ribbonText: 'white',
        };
      case Rolename.OPERATOR:
        return {
          ribbonColor: 'yellow',
          ribbonText: 'black',
        };
      case Rolename.STAFF:
        return {
          ribbonColor: 'orange',
          ribbonText: 'white',
        };
      case Rolename.CUSTOMTEAM:
        return {
          ribbonColor: 'white',
          ribbonText: 'black',
        };
      case Rolename.CUSTOMADMIN:
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
    const dummyImageUrl = 'http://dntvn.org.vn/assets/images/c30s/no-image.png';
    return (
      <TouchableOpacity
        onPress={() => this.goToEventDetail(item.event._id)}
        style={styles.cardElement}
      >
        <ImageBackground
          source={{ uri: item.image_url === undefined ? dummyImageUrl : item.image_url }}
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
                onPress={() => this.goToQR(item.event._id)}
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
