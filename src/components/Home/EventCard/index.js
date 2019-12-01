/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import {
  Text, View, TouchableOpacity, ImageBackground,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import NavigationWithoutProps from 'utils/navigationWithoutProps';
import CustomFormat from 'utils/customFormat';
import styles from './index.styles';

class EventCard extends Component {
  goToEventDetail = () => {

  }

  goToQR = () => {
    NavigationWithoutProps.navigate('QR');
  }

  render() {
    const { item } = this.props;
    const time = new Date(item.event.start_time);
    const calendarText = CustomFormat.formatFullDate(time);
    let ribbonColor;
    let ribbonText;
    switch (item.name) {
      case 'admin':
        ribbonColor = 'green';
        ribbonText = 'white';
        break;
      case 'operator':
        ribbonColor = 'yellow';
        ribbonText = 'black';
        break;
      case 'staff':
        ribbonColor = 'orange';
        ribbonText = 'white';
        break;
      case 'custom admin':
        ribbonColor = 'white';
        ribbonText = 'black';
        break;
      default:
        break;
    }
    return (
      <TouchableOpacity
        onPress={this.goToEventDetail}
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
