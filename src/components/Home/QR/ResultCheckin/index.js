import React, { Component } from 'react';
import {
  Text, View, ActivityIndicator,
} from 'react-native';
import { connect } from 'react-redux';
import { checkQRDispatch } from 'datalayer/actions/qr.action';
import Auth from 'utils/auth';
import CheckInEnum from 'constants/checkInEnum';
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
    const uid = Auth.getUserId();
    checkQRDispatch(barcodeResult, eventId, uid)
      .then(res => {
        if (!res.success) {
          /**
           * @todo Specific errors will be declared here.
           */
          this.setState({ checkInEnum: CheckInEnum.ALREADY_CHECKED_IN });
        } else {
          this.setState({ checkInEnum: CheckInEnum.SUCCESS_CHECKED_IN });
        }
      });
  }

  render() {
    const { checkInEnum } = this.state;
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
        <Text>Thành công!</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  checkedInResult: state.event.checkedInResult,
});

const mapDispatchToProps = {
  checkQRDispatch,
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultCheckin);
