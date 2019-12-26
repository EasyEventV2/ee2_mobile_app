/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import {
  Text, View, ActivityIndicator, TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { checkQRDispatch } from 'datalayer/actions/qr.action';
import CheckInEnum from 'constants/checkInEnum';
import moment from 'moment';
import NavigationWithoutProps from 'utils/navigationWithoutProps';
import styles from './index.styles';

class ResultCheckin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkInEnum: null,
    };
  }

  componentWillMount() {
    const { navigation, checkQRDispatch } = this.props;
    const eventId = navigation.getParam('eventId');
    const barcodeResult = navigation.getParam('barcodeResult');
    checkQRDispatch(barcodeResult, eventId, barcodeResult._id, barcodeResult.ticket.code)
      .then(res => {
        if (!res.success) {
          /**
           * @todo Specific errors will be declared here.
           */
          this.setState({ checkInEnum: CheckInEnum.ALREADY_CHECKED_IN });
        } else {
          console.log(res);
          this.setState({ checkInEnum: CheckInEnum.SUCCESS_CHECKED_IN });
        }
      });
  }

  render() {
    const { checkInEnum } = this.state;
    const { checkedInResult } = this.props;
    const { updatedGuest } = checkedInResult;
    if (checkInEnum === null) {
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator />
        </View>
      );
    }
    if (checkInEnum === CheckInEnum.NOT_IN_DB) {
      return (
        <View style={styles.container}>
          <Text>Vé không tồn tại!</Text>
        </View>
      );
    }
    if (checkInEnum === CheckInEnum.ALREADY_CHECKED_IN) {
      return (
        <View style={styles.container}>
          <Text>Vé đã được sử dụng trước đó!</Text>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>
            THÀNH CÔNG
          </Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>{`Email: ${updatedGuest.email}`}</Text>
          <Text style={styles.infoText}>{`Giới tính: ${updatedGuest.info.gender}`}</Text>
          <Text style={styles.infoText}>{`Ngành học: ${updatedGuest.info.major}`}</Text>
          <Text style={styles.infoText}>{`Điện thoại: ${updatedGuest.info.phone_number}`}</Text>
          <Text style={styles.infoText}>{`Check-in vào lúc: ${moment(updatedGuest.checkedInAt).format('HH:MM:SS - DD/MM/YYYY')}`}</Text>
          <TouchableOpacity
            onPress={() => NavigationWithoutProps.back()}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Quét lại</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  checkedInResult: state.qr.checkedInResult,
});

const mapDispatchToProps = {
  checkQRDispatch,
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultCheckin);
