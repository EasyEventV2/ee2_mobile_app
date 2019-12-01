import React, { Component } from 'react';
import {
  View, TextInput,
} from 'react-native';
import styles from './index.styles';

class InputField extends Component {
  render() {
    const {
      placeholder, name, value, onChangeText, isSecureText,
      marginTop, marginBottom, marginLeft, marginRight,
    } = this.props;
    return (
      <View style={[styles.inputField, {
        marginTop,
        marginRight,
        marginBottom,
        marginLeft,
      }]}
      >
        <TextInput
          placeholder={placeholder}
          name={name}
          value={value}
          autoCapitalize="none"
          onChangeText={(text) => onChangeText(name, text)}
          secureTextEntry={isSecureText}
          style={styles.inputText}
        />
      </View>
    );
  }
}

export default InputField;
