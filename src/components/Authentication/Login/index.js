import React, { Component } from 'react';
import {
  Text, View, TouchableOpacity, Image, ActivityIndicator, Alert,
} from 'react-native';
import { connect } from 'react-redux';
import { changeToSignupComponent, loginAPI } from 'datalayer/actions/auth.action';
import logoPath from 'assets/images/logo-fit-512x354.png';
import InputField from 'components/Authentication/InputField';
import { withNavigation } from 'react-navigation';
import Auth from 'utils/auth';
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
    const res = await loginAPI(username, password);
    if (res.success) {
      const accessToken = res.result.data.token;
      Auth.deleteAccessToken();
      await Auth.setAccessToken(accessToken);
      console.log(Auth.getAccessToken());
      navigation.navigate('Home');
    } else if (!res.success) {
      console.log(res.error);
      if (res.error.error.code === 40402) {
        Alert.alert('Tên đăng nhập không hợp lệ!');
      } else if (res.error.error.code === 40001) {
        Alert.alert('Sai mật khẩu!');
      }
    }
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
            isSecureText={false}
          />
          <InputField
            placeholder="Mật khẩu..."
            name="password"
            value={password}
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
  payload: state.auth.payload,
  // already get payload from redux
  // every time redux change state, new data will be pass to component through this prop
  currentComponent: state.auth.currentComponent,
});

const mapDispatchToProps = {
  changeToSignupComponent,
  loginAPI,
};

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(Login));
