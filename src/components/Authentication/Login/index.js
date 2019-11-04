import React, { Component } from 'react';
import {
  Text, View, TouchableOpacity, Image, ActivityIndicator,
} from 'react-native';
import { connect } from 'react-redux';
import { changeToSignupComponent } from 'datalayer/actions/auth.action';
import logoPath from 'assets/images/Easy-Event.png';
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

  // If I remove this method it will make error of "Unused text fields" on the inputForm
  getInitialState = () => {
    const { email, password } = this.state;
    return {
      email,
      password,
    };
  }

  onLogin = () => {

  }

  renderLoginButton = () => {
    const { loading } = this.state;
    if (!loading) {
      return (
        <View>
          <TouchableOpacity
            style={styles.button}
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
            setText={(text) => this.setState({ email: text })}
            isSecureText={false}
          />
          <InputField
            placeholder="Password..."
            setText={(text) => this.setState({ password: text })}
          />
        </View>

        <View style={styles.buttonContainer}>
          {this.renderLoginButton()}
          <TouchableOpacity
            style={[styles.button, { backgroundColor: 'transparent' }]}
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
