import React, { Component } from 'react';
import {
  Text, View, TouchableOpacity, Image, ActivityIndicator, ScrollView, BackHandler,
} from 'react-native';
import { connect } from 'react-redux';
import InputField from 'components/Authentication/InputField';
import { SCREEN_HEIGHT } from 'constants/sizes';
import logoPath from 'assets/images/logo-fit-512x354.png';
import { changeToLoginComponentDispatch, signupDispatch } from 'datalayer/actions/auth.action';
import Dialog from 'utils/errorDialog';
import styles from './index.styles';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      email: '',
      username: '',
      password: '',
      phoneNumber: '',
      confirmPassword: '',
      loading: false,
    };
  }

  componentDidMount() {
    this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }

  componentWillUnmount() {
    this.backHandler.remove();
  }

  handleBackPress = () => {
    const { changeToLoginComponentDispatch } = this.props;
    changeToLoginComponentDispatch();
    return true;
  }

  onChangeText = (name, text) => {
    this.setState({ [name]: text });
  }

  signup = () => {
    const { signupDispatch } = this.props;
    const {
      fullName, email, username, password, phoneNumber,
    } = this.state;
    const userInfo = {
      fullName,
      email,
      username,
      password,
      phoneNumber,
    };
    this.setState({ loading: true });
    signupDispatch(userInfo)
      .then(res => {
        if (!res.success) {
          Dialog.show(res.error);
        }
        this.setState({ loading: false });
      });
  }

  renderSignupButton = () => {
    const { loading } = this.state;
    if (!loading) {
      return (
        <View>
          <TouchableOpacity
            style={styles.mainButton}
            onPress={this.signup}
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
      fullName, email, username, password, confirmPassword, phoneNumber,
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
            name="fullName"
            value={fullName}
            onChangeText={this.onChangeText}
            isSecureText={false}
            marginTop={SCREEN_HEIGHT * 0.05}
          />
          <InputField
            placeholder="Email..."
            name="email"
            value={email}
            onChangeText={this.onChangeText}
            isSecureText={false}
            keyboardType="email-address"
            marginTop={SCREEN_HEIGHT * 0.05}
          />
          <InputField
            placeholder="Tên đăng nhập..."
            name="username"
            value={username}
            onChangeText={this.onChangeText}
            isSecureText={false}
            marginTop={SCREEN_HEIGHT * 0.05}
          />
          <InputField
            placeholder="Mật khẩu..."
            name="password"
            value={password}
            onChangeText={this.onChangeText}
            isSecureText
            marginTop={SCREEN_HEIGHT * 0.05}
          />
          <InputField
            placeholder="Nhập lại mật khẩu..."
            name="confirmPassword"
            value={confirmPassword}
            onChangeText={this.onChangeText}
            isSecureText
            marginTop={SCREEN_HEIGHT * 0.05}
          />
          <InputField
            placeholder="Số điện thoại..."
            name="phoneNumber"
            value={phoneNumber}
            onChangeText={this.onChangeText}
            isSecureText={false}
            keyboardType="phone-pad"
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
  signupDispatch,
};

export default connect(null, mapDispatchToProps)(SignUp);
