import {
  Alert,
} from 'react-native';

class ErrorDialog {
  show = (error) => {
    console.log(error);
    if (error.message.toString() === 'Network request failed') {
      Alert.alert('Lỗi', 'Lỗi kết nối!');
    } else {
      const errorCode = error.data.error.code;
      switch (errorCode) {
        case 40001:
          Alert.alert('Lỗi', 'Tên đăng nhập không hợp lệ!');
          break;
        case 40002:
          Alert.alert('Lỗi', 'Sai mật khẩu!');
          break;
        default:
          break;
      }
    }
  }
}

const Dialog = new ErrorDialog();
export default Dialog;
