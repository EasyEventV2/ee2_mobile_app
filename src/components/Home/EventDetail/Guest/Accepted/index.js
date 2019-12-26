/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import {
  Text, View, FlatList, ActivityIndicator,
} from 'react-native';
import { connect } from 'react-redux';
import { loadAcceptedGuestsListDispatch } from 'datalayer/actions/guest.action';
import Dialog from 'utils/errorDialog';
import styles from './index.styles';

class Accepted extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onLoading: false,
    };
  }

  componentDidMount() {
    const { loadAcceptedGuestsListDispatch } = this.props;
    this.setState({ onLoading: true });
    loadAcceptedGuestsListDispatch()
      .then(res => {
        if (!res.success) {
          Dialog.show(res.error);
        }
        this.setState({ onLoading: false });
      });
  }

  static navigationOptions = {
    tabBarLabel: 'Đã chấp nhận',
  }

  render() {
    const { acceptedGuestsList } = this.props;
    const { onLoading } = this.state;
    if (acceptedGuestsList.length === 0) {
      return (
        <View style={styles.container}>
          <Text>Không có khách trong danh sách này</Text>
        </View>
      );
    }
    if (onLoading) {
      return (
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>
            DANH SÁCH KHÁCH ĐÃ ĐƯỢC CHẤP NHẬN ĐẾN SỰ KIỆN NHƯNG CHƯA CHECK-IN
            </Text>
          </View>
          <View style={styles.loadingContainer}>
            <ActivityIndicator />
          </View>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>
            DANH SÁCH KHÁCH ĐÃ ĐƯỢC CHẤP NHẬN ĐẾN SỰ KIỆN NHƯNG CHƯA CHECK-IN
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

const mapDispatchToProps = {
  loadAcceptedGuestsListDispatch,
};

export default connect(mapStateToProps, mapDispatchToProps)(Accepted);
