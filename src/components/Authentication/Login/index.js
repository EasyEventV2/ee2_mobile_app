import React, { Component } from 'react';
import {
  Text, View, TouchableOpacity, Image, ActivityIndicator, Alert,
} from 'react-native';
import { connect } from 'react-redux';
import { changeToSignupComponent } from 'datalayer/actions/auth.action';
import logoPath from 'assets/images/logo-fit-512x354.png';
import InputField from 'components/Authentication/InputField';
import styles from './index.styles';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loading: false,
    };
  }

  onLogin = () => {
    const { email, password } = this.state;
    Alert.alert(`${email} + ${password}`);
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
            <Text style={styles.text}>LOGIN</Text>
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
    const { email, password } = this.state;
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
            placeholder="Email..."
            name="email"
            value={email}
            onChangeText={this.onChangeText}
            isSecureText={false}
          />
          <InputField
            placeholder="Password..."
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
            <Text style={{ color: 'black' }}>Don't have account? Create here</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = {
  changeToSignupComponent,
};

export default connect(null, mapDispatchToProps)(Login);
