import React, { Component } from 'react';
import {
  Text, View, TouchableOpacity, Image, ActivityIndicator,
} from 'react-native';

// Import redux
import { connect } from 'react-redux';
import { changeToLoginComponent } from 'datalayer/actions/auth.action';
import logoPath from 'assets/images/Easy-Event.png';
import InputField from 'components/Authentication/InputField';
import styles from './index.styles';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: '',
      email: '',
      password: '',
      confirmPassword: '',
      loading: false,
    };
  }

  // If I remove this method it will make error of "Unused text fields" on the inputForm
  getInitialState = () => {
    const {
      fullname, email, password, confirmPassword,
    } = this.state;
    return {
      fullname,
      email,
      password,
      confirmPassword,
    };
  }

  renderSignupButton = () => {
    const { loading } = this.state;
    if (!loading) {
      return (
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={this.onLogin}
          >
            <Text style={styles.text}>SIGN UP</Text>
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
            placeholder="Fullname..."
            setText={(text) => this.setState({ email: text })}
            isSecureText={false}
          />
          <InputField
            placeholder="Email..."
            setText={(text) => this.setState({ email: text })}
            isSecureText={false}
          />
          <InputField
            placeholder="Password..."
            setText={(text) => this.setState({ password: text })}
            isSecureText
          />
          <InputField
            placeholder="Confirm password..."
            setText={(text) => this.setState({ password: text })}
            isSecureText
          />

        </View>

        <View style={styles.buttonContainer}>
          {this.renderSignupButton()}
          <TouchableOpacity
            style={[styles.button, { backgroundColor: 'transparent' }]}
            onPress={() => changeToLoginComponent()}
          >
            <Text style={{ color: 'black' }}>Already have an account? Login here</Text>
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
