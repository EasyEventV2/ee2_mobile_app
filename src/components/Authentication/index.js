import React, { Component } from 'react';
import {
  View,
} from 'react-native';

// Import redux
import { connect } from 'react-redux';

import Login from './Login';
import SignUp from './SignUp';
import styles from './index.styles';

class Authentication extends Component {
  render() {
    const { isLoginComponent } = this.props;
    return (
      <View style={styles.container}>
        {isLoginComponent ? <Login /> : <SignUp />}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  isLoginComponent: state.auth.isLoginComponent,
});

export default connect(mapStateToProps, null)(Authentication);
