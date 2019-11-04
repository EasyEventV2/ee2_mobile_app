import React, { Component } from 'react';
import {
  View, TextInput,
} from 'react-native';
import styles from './index.styles';

class InputField extends Component {
  render() {
    const { placeholder, setText, isSecureText } = this.props;
    return (
      <View style={styles.inputField}>
        <TextInput
          placeholder={placeholder}
          onChangeText={(text) => setText(text)}
          secureTextEntry={isSecureText}
        />
      </View>
    );
  }
}

export default InputField;
