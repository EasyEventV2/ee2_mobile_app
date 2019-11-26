import {
  Alert,
} from 'react-native';
import { Component } from 'react';
import store from 'datalayer/store';
import { logoutDispatch } from 'datalayer/actions/auth.action';

class ErrorDialog extends Component {
  show = (error) => {
    // if (error.error.message === 'Network request failed') {
    if (error.message === 'Network request failed') {
      Alert.alert('Lỗi', 'Lỗi kết nối!');
    } else {
      const errorCode = error.data.error.code;
      // const errorCode = error.error.code;
      console.log(`errorCode: ${errorCode}`);
      switch (errorCode) {
        case 40001:
          Alert.alert('Lỗi', 'Tên đăng nhập không hợp lệ!');
          break;
        case 40002:
          Alert.alert('Lỗi', 'Sai mật khẩu!');
          break;
        case 40302:
          Alert.alert('Lỗi', 'Phiên đăng nhập đã hết hạn!');
          store.dispatch(logoutDispatch());
          break;
        default:
          break;
      }
    }
  }
}

const Dialog = new ErrorDialog();
export default Dialog;
