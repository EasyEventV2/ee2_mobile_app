/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import {
  Text, View, FlatList, TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import styles from './index.styles';

class Unaccepted extends Component {
  static navigationOptions = {
    tabBarLabel: 'Chưa xác nhận email',
  }

  render() {
    const { unacceptedGuestsList } = this.props;
    if (unacceptedGuestsList.length === 0) {
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
            DANH SÁCH KHÁCH CHƯA ĐƯỢC XÁC NHẬN EMAIL
          </Text>
        </View>
        <FlatList
          style={styles.listContainer}
          data={unacceptedGuestsList}
          extraData={unacceptedGuestsList}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <View style={styles.listItem}>
              <Text style={styles.text}>{item.email}</Text>
              <TouchableOpacity onPress={() => {}} style={styles.button}>
                <Text style={styles.text}>Xác nhận</Text>
              </TouchableOpacity>
            </View>
          )}
          numColumns={1}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  unacceptedGuestsList: state.guest.unacceptedGuestsList,
});

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Unaccepted);
