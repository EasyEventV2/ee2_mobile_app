import React, { Component } from 'react';
import {
  Text, View, TouchableOpacity, Image, ActivityIndicator,
} from 'react-native';
import { connect } from 'react-redux';
import { changeToSignupComponent, loginAPI } from 'datalayer/actions/auth.action';
import logoPath from 'assets/images/logo-fit-512x354.png';
import InputField from 'components/Authentication/InputField';
import { withNavigation } from 'react-navigation';
import styles from './index.styles';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      loading: false,
    };
  }

  onLogin = async () => {
    const { loginAPI, navigation } = this.props;
    const { username, password } = this.state;
    this.setState({ loading: true });
    await loginAPI(username, password);
    this.setState({ loading: false });
    navigation.navigate('Home');
    // } else if (!res.success) {
    //   if (res.error.message.toString() === 'Network request failed') {
    //     Alert.alert('Lỗi', 'Lỗi kết nối!');
    //   } else if (res.error.data.error.code === 40001) {
    //     Alert.alert('Lỗi', 'Tên đăng nhập không hợp lệ!');
    //   } else if (res.error.data.error.code === 40002) {
    //     Alert.alert('Lỗi', 'Sai mật khẩu!');
    //   }
    //   this.setState({ loading: false });
    // }
  }

  onChangeText = (name, text) => {
    this.setState({ [name]: text });
  }

  renderLoginButton = () => {
    const { loading } = this.state;
    if (!loading) {
      return (
        <View>
          <TouchableOpacity
            style={styles.mainButton}
            onPress={this.onLogin}
          >
            <Text style={styles.text}>ĐĂNG NHẬP</Text>
          </TouchableOpacity>
        </View>
      );
    }
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator size="large" color="#fb3" />
      </View>
    );
  }

  render() {
    const { changeToSignupComponent } = this.props;
    const { username, password } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image
            style={styles.imgLogo}
            source={logoPath}
          />
        </View>

        <View style={styles.formContainer}>
          <InputField
            placeholder="Tên đăng nhập hoặc Email..."
            name="username"
            value={username}
            onChangeText={this.onChangeText}
          />
          <InputField
            placeholder="Mật khẩu..."
            name="password"
            value={password}
            // isSecureText
            onChangeText={this.onChangeText}
          />
        </View>

        <View style={styles.buttonContainer}>
          {this.renderLoginButton()}
          <TouchableOpacity
            style={styles.subButton}
            onPress={() => changeToSignupComponent()}
          >
            <Text style={{ color: 'black' }}>Không có tài khoản? Tạo mới ở đây</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  currentComponent: state.auth.currentComponent,
  loggedIn: state.auth.loggedIn,
});

const mapDispatchToProps = {
  changeToSignupComponent,
  loginAPI,
};

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(Login));
