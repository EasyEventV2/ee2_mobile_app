import React, { Component } from 'react';
import {
  Text, View, TouchableOpacity, Image, ActivityIndicator, ScrollView,
} from 'react-native';
import { connect } from 'react-redux';
import InputField from 'components/Authentication/InputField';
import { SCREEN_HEIGHT } from 'constants/sizes';
import logoPath from 'assets/images/logo-fit-512x354.png';
import { changeToLoginComponentDispatch } from 'datalayer/actions/auth.action';
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
    const { changeToLoginComponentDispatch } = this.props;
    const {
      fullname, email, username, password, confirmPassword,
    } = this.state;
    return (
      <ScrollView style={styles.container}>
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
            marginTop={SCREEN_HEIGHT * 0.05}
          />
          <InputField
            placeholder="Email..."
            value={email}
            onChangeText={this.onChangeText}
            isSecureText={false}
            marginTop={SCREEN_HEIGHT * 0.05}
          />
          <InputField
            placeholder="Tên đăng nhập..."
            value={username}
            onChangeText={this.onChangeText}
            isSecureText={false}
            marginTop={SCREEN_HEIGHT * 0.05}
          />
          <InputField
            placeholder="Mật khẩu..."
            value={password}
            onChangeText={this.onChangeText}
            isSecureText
            marginTop={SCREEN_HEIGHT * 0.05}
          />
          <InputField
            placeholder="Nhập lại mật khẩu..."
            value={confirmPassword}
            onChangeText={this.onChangeText}
            isSecureText
            marginTop={SCREEN_HEIGHT * 0.05}
          />

        </View>

        <View style={styles.buttonContainer}>
          {this.renderSignupButton()}
          <TouchableOpacity
            style={styles.subButton}
            onPress={() => changeToLoginComponentDispatch()}
          >
            <Text style={{ color: 'black' }}>Đã có tài khoản? Đăng nhập tại đây</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const mapDispatchToProps = {
  changeToLoginComponentDispatch,
};

export default connect(null, mapDispatchToProps)(SignUp);
