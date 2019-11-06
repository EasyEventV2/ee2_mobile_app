import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import { connect } from 'react-redux';
import Login from './Login';
import SignUp from './SignUp';
import styles from './index.styles';

class Authentication extends Component {
  render() {
    const { currentComponent } = this.props;
    return (
      <View style={styles.container}>
        {currentComponent === 'Login' ? <Login /> : <SignUp />}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  currentComponent: state.auth.currentComponent,
});

export default connect(mapStateToProps, null)(Authentication);
