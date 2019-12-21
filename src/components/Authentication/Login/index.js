import React, { Component } from 'react';
import {
  Text, View, TouchableOpacity, Image, ActivityIndicator,
} from 'react-native';
import { connect } from 'react-redux';
import InputField from 'components/Authentication/InputField';
import Dialog from 'utils/errorDialog';
import logoPath from 'assets/images/logo-fit-512x354.png';
import { changeToSignupComponentDispatch, loginDispatch } from 'datalayer/actions/auth.action';
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

  login = () => {
    const { loginDispatch } = this.props;
    const { username, password } = this.state;
    this.setState({ loading: true });
    loginDispatch(username, password)
      .then(res => {
        if (!res.success) {
          Dialog.show(res.error);
        }
        this.setState({ loading: false });
      });
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
            onPress={this.login}
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
    const { changeToSignupComponentDispatch } = this.props;
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
            isSecureText
            onChangeText={this.onChangeText}
          />
        </View>

        <View style={styles.buttonContainer}>
          {this.renderLoginButton()}
          <TouchableOpacity
            style={styles.subButton}
            onPress={() => changeToSignupComponentDispatch()}
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
  changeToSignupComponentDispatch,
  loginDispatch,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
