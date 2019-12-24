/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import {
  Text, View, FlatList,
} from 'react-native';
import { connect } from 'react-redux';
import styles from './index.styles';

class Accepted extends Component {
  static navigationOptions = {
    tabBarLabel: 'Đã xác nhận email',
  }

  render() {
    const { acceptedGuestsList } = this.props;
    if (acceptedGuestsList.length === 0) {
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
            DANH SÁCH KHÁCH ĐÃ ĐƯỢC XÁC NHẬN EMAIL NHƯNG CHƯA CHECK-IN
          </Text>
        </View>
        <FlatList
          style={styles.listContainer}
          data={acceptedGuestsList}
          extraData={acceptedGuestsList}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <View style={styles.listItem}>
              <Text style={styles.text}>{item.email}</Text>
              <Text style={[styles.text, { color: 'red' }]}>Chưa check-in</Text>
            </View>
          )}
          numColumns={1}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  acceptedGuestsList: state.guest.acceptedGuestsList,
});

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Accepted);
