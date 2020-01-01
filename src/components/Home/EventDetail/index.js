/* eslint-disable camelcase */
import React, { Component } from 'react';
import {
  Text, ScrollView, TouchableOpacity, Image, View, ActivityIndicator,
} from 'react-native';
import { connect } from 'react-redux';
import MapView, { Marker } from 'react-native-maps';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import moment from 'moment';
import { loadEventDetailDispatch } from 'datalayer/actions/event.action';
import Dialog from 'utils/errorDialog';
import NavigationWithoutProps from 'utils/navigationWithoutProps';
import { isEmptyObject } from 'utils/object';
import styles from './index.styles';

class EventDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onLoadingGuests: false,
    };
  }

  componentDidMount() {
    const { navigation, loadEventDetailDispatch } = this.props;
    const eventId = navigation.getParam('eventId');
    loadEventDetailDispatch(eventId)
      .then(res => {
        if (!res.success) {
          Dialog.show(res.error);
        }
      });
  }

  goToGuestsList = () => {
    const { navigation } = this.props;
    const eventId = navigation.getParam('eventId');
    this.setState({ onLoadingGuests: true });
    NavigationWithoutProps.navigate('Guest', {
      eventId,
    });
    this.setState({ onLoadingGuests: false });
  }

  renderGuestsListButton = () => {
    const { onLoadingGuests } = this.state;
    if (onLoadingGuests) {
      return (
        <View style={styles.button}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <TouchableOpacity onPress={this.goToGuestsList} style={styles.button}>
        <Text style={styles.buttonText}>Danh sách khách tham gia</Text>
      </TouchableOpacity>
    );
  }

  render() {
    const { eventDetail } = this.props;
    if (isEmptyObject(eventDetail)) {
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator />
        </View>
      );
    }
    const {
      name, description, start_time, end_time, contact, location, image_url,
    } = eventDetail;
    const {
      website, facebook, phone_number, email,
    } = contact;
    const {
      latitude, longitude, place, address,
    } = location;
    const dummyImageUrl = 'http://dntvn.org.vn/assets/images/c30s/no-image.png';
    return (
      <ScrollView style={styles.container}>
        <Image
          source={{ uri: image_url === undefined ? dummyImageUrl : image_url }}
          style={styles.posterImg}
        />
        <View style={styles.descriptionContainer}>
          <Text style={styles.titleText}>{name}</Text>
          <View style={styles.iconAndTextContainer}>
            <FontAwesome name="calendar" size={23} color="black" />
            <View style={styles.textContainer}>
              <Text style={styles.text}>{`Bắt đầu: ${moment(start_time).format('HH:MM - DD/MM/YYYY')}`}</Text>
              <Text style={styles.text}>{`Kết thúc: ${moment(end_time).format('HH:MM - DD/MM/YYYY')}`}</Text>
            </View>
          </View>
          <View style={styles.iconAndTextContainer}>
            <FontAwesome name="phone-square" size={25} color="black" />
            <View style={styles.textContainer}>
              <Text style={styles.text}>{phone_number}</Text>
            </View>
          </View>
          <View style={styles.iconAndTextContainer}>
            <MaterialCommunityIcons name="email" size={23} color="black" />
            <View style={styles.textContainer}>
              <Text style={styles.text}>{email}</Text>
            </View>
          </View>
          <View style={styles.iconAndTextContainer}>
            <Entypo name="facebook" size={23} color="black" />
            <View style={styles.textContainer}>
              <Text style={styles.text}>{facebook}</Text>
            </View>
          </View>
          <View style={styles.iconAndTextContainer}>
            <AntDesign name="chrome" size={23} color="black" />
            <View style={styles.textContainer}>
              <Text style={styles.text}>{website}</Text>
            </View>
          </View>
          <View style={styles.guestsIconAndTextContainer}>
            <FontAwesome name="users" size={23} color="black" />
            <View style={styles.buttonContainer}>
              {this.renderGuestsListButton()}
            </View>
          </View>
          <View style={styles.iconAndTextContainer}>
            <FontAwesome name="map-marker" size={34} color="black" />
            <View style={styles.mapContainer}>
              <Text style={styles.text}>{place}</Text>
              <Text style={styles.text}>{address}</Text>
              <MapView
                style={styles.map}
                region={{
                  latitude,
                  longitude,
                  latitudeDelta: 0.01,
                  longitudeDelta: 0.01,
                }}
              >
                <Marker
                  coordinate={{
                    latitude,
                    longitude,
                  }}
                  title="1900 La Theatre"
                />
              </MapView>
            </View>
          </View>
          <View style={styles.iconAndTextContainer}>
            <FontAwesome name="book" size={23} color="black" />
            <View style={styles.textContainer}>
              <Text style={styles.text}>{description}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => ({
  eventDetail: state.event.eventDetail,
});

const mapDispatchToProps = {
  loadEventDetailDispatch,
};

export default connect(mapStateToProps, mapDispatchToProps)(EventDetail);
