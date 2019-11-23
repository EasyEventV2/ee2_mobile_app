import React, { Component } from 'react';
import {
  Text, View, TouchableOpacity, Image, ActivityIndicator,
} from 'react-native';
import { connect } from 'react-redux';
import { changeToLoginComponent } from 'datalayer/actions/auth.action';
import logoPath from 'assets/images/logo-fit-512x354.png';
import InputField from 'components/Authentication/InputField';
import styles from './index.styles';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: '',
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
      loading: false,
    };
  }

  onChangeText = (name, text) => {
    this.setState({ [name]: text });
  }

  renderSignupButton = () => {
    const { loading } = this.state;
    if (!loading) {
      return (
        <View>
          <TouchableOpacity
            style={styles.mainButton}
            onPress={this.onSignup}
          >
            <Text style={styles.text}>ĐĂNG KÝ</Text>
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
    const { changeToLoginComponent } = this.props;
    const {
      fullname, email, username, password, confirmPassword,
    } = this.state;
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
            placeholder="Tên đầy đủ..."
            value={fullname}
            onChangeText={this.onChangeText}
            isSecureText={false}
          />
          <InputField
            placeholder="Email..."
            value={email}
            onChangeText={this.onChangeText}
            isSecureText={false}
          />
          <InputField
            placeholder="Tên đăng nhập..."
            value={username}
            onChangeText={this.onChangeText}
            isSecureText={false}
          />
          <InputField
            placeholder="Mật khẩu..."
            value={password}
            onChangeText={this.onChangeText}
            isSecureText
          />
          <InputField
            placeholder="Nhập lại mật khẩu..."
            value={confirmPassword}
            onChangeText={this.onChangeText}
            isSecureText
          />

        </View>

        <View style={styles.buttonContainer}>
          {this.renderSignupButton()}
          <TouchableOpacity
            style={styles.subButton}
            onPress={() => changeToLoginComponent()}
          >
            <Text style={{ color: 'black' }}>Đã có tài khoản? Đăng nhập tại đây</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = {
  changeToLoginComponent,
};

export default connect(null, mapDispatchToProps)(SignUp);
