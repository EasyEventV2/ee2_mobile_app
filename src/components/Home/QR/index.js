/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import {
  Text, View, TouchableOpacity, BackHandler,
} from 'react-native';
import { connect } from 'react-redux';
import { RNCamera } from 'react-native-camera';
import { checkQRDispatch } from 'datalayer/actions/qr.action';
import NavigationWithoutProps from 'utils/navigationWithoutProps';
import styles from './index.styles';

class QR extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBarcodeInvalid: false,
    };
  }

  componentDidMount() {
    this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }

  componentWillUnmount() {
    this.backHandler.remove();
  }

  handleBackPress = () => {
    const { isBarcodeInvalid } = this.state;
    if (!isBarcodeInvalid) {
      NavigationWithoutProps.back();
      return true;
    }
    this.setState({ isBarcodeInvalid: false });
    return true;
  }

  handleBarcodeRead = (data) => {
    const { navigation } = this.props;
    const eventId = navigation.getParam('eventId');
    let barcodeResult = null;
    try {
      barcodeResult = JSON.parse(data);
    } catch (err) {
      this.setState({ isBarcodeInvalid: true });
      return;
    }
    if (eventId === barcodeResult.eventId) {
      NavigationWithoutProps.navigate('ResultCheckin', {
        barcodeResult,
      });
    } else {
      this.setState({ isBarcodeInvalid: true });
    }
  }

  render() {
    const { isBarcodeInvalid } = this.state;
    if (isBarcodeInvalid) {
      return (
        <View style={styles.invalidContainer}>
          <Text style={styles.titleText}>Barcode không hợp lệ. Vui lòng quét barcode khác!</Text>
          <TouchableOpacity
            onPress={() => this.setState({ isBarcodeInvalid: false })}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Quét lại</Text>
          </TouchableOpacity>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Đặt mã QR vào giữa hình vuông</Text>
        </View>
        <View style={styles.cameraContainer}>
          <RNCamera
            style={styles.camera}
            onBarCodeRead={result => this.handleBarcodeRead(result.data)}
            ratio="1:1"
          />
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

export default connect(mapStateToProps, mapDispatchToProps)(QR);
