import React, { Component } from 'react';
import {
  View, TouchableOpacity, TextInput, Keyboard,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './index.styles';

class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: '',
    };
  }

  render() {
    const { word } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Nhập từ khóa tìm kiếm..."
            onChangeText={(text) => this.setState({ word: text })}
            onSubmitEditing={() => { }}
            value={word}
            style={styles.inputText}
          />
          <TouchableOpacity
            onPress={() => this.setState({ word: '' })}
          >
            <MaterialIcons name="cancel" size={18} color="grey" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => { Keyboard.dismiss(); }}
          style={styles.magnifierButton}
        >
          <SimpleLineIcons name="magnifier" size={20} color="black" />
        </TouchableOpacity>
      </View>
    );
  }
}

export default withNavigation(Searchbar);
