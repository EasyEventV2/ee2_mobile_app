/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import {
  Text, View, FlatList,
} from 'react-native';
import { connect } from 'react-redux';
import styles from './index.styles';

class CheckedIn extends Component {
  static navigationOptions = {
    tabBarLabel: 'Đã check-in',
  }

  render() {
    const { checkedInGuestsList } = this.props;
    if (checkedInGuestsList.length === 0) {
      return (
        <View style={styles.container}>
          <Text>Không có khách trong danh sách này</Text>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>
            DANH SÁCH KHÁCH ĐÃ CHECK-IN
          </Text>
        </View>
        <FlatList
          style={styles.listContainer}
          data={checkedInGuestsList}
          extraData={checkedInGuestsList}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <View style={styles.listItem}>
              <Text style={styles.text}>{item.email}</Text>
              <Text style={[styles.text, { color: 'green' }]}>Đã check-in</Text>
            </View>
          )}
          numColumns={1}
        />
      </View>
    );
  }
}
const mapStateToProps = (state) => ({
  checkedInGuestsList: state.guest.checkedInGuestsList,
});

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(CheckedIn);
