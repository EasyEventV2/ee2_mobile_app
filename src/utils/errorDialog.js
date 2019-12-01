import {
  Alert,
} from 'react-native';
import store from 'datalayer/store';
import { logoutDispatch } from 'datalayer/actions/auth.action';

class ErrorDialog {
  show = (error) => {
    if (error.message === 'Network request failed') {
      Alert.alert('Lỗi', 'Lỗi kết nối!');
      store.dispatch(logoutDispatch());
    } else {
      const errorCode = error.data.error.code;
      switch (errorCode) {
        case 40001:
          Alert.alert('Lỗi', 'Tên đăng nhập không hợp lệ!');
          break;
        case 40002:
          Alert.alert('Lỗi', 'Sai mật khẩu!');
          break;
        case 40101:
          Alert.alert('Lỗi', 'Không được cấp quyền!');
          store.dispatch(logoutDispatch());
          break;
        case 40301:
          Alert.alert('Lỗi', 'Token vô giá trị!');
          store.dispatch(logoutDispatch());
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
