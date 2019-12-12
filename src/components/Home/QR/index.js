import React, { Component } from 'react';
import {
  Text, View,
} from 'react-native';
import { connect } from 'react-redux';
import { RNCamera } from 'react-native-camera';
import { checkQRDispatch } from 'datalayer/actions/qr.action';
import NavigationWithoutProps from 'utils/navigationWithoutProps';
import styles from './index.styles';

class QR extends Component {
  goToResult = (barcodeResult) => {
    const { navigation } = this.props;
    const eventId = navigation.getParam('eventId');
    NavigationWithoutProps.navigate('ResultCheckin', {
      eventId,
      barcodeResult,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Đặt mã QR vào giữa hình vuông</Text>
        </View>
        <View style={styles.cameraContainer}>
          <RNCamera
            style={styles.camera}
            onBarCodeRead={result => this.goToResult(result)}
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
