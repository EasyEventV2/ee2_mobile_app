/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import {
  Text, View, FlatList, TouchableOpacity, ActivityIndicator,
} from 'react-native';
import { connect } from 'react-redux';
import { loadGuestsListDispatch, acceptTicketDispatch } from 'datalayer/actions/guest.action';
import Dialog from 'utils/errorDialog';
import styles from './index.styles';

class Unaccepted extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onLoadingAcceptTicket: false,
    };
  }

  static navigationOptions = {
    tabBarLabel: 'Chưa được chấp nhận',
  }

  acceptTicket = (guestId) => {
    const { acceptTicketDispatch, loadGuestsListDispatch } = this.props;
    this.setState({ onLoadingAcceptTicket: true });
    acceptTicketDispatch(guestId)
      .then(res => {
        if (!res.success) {
          Dialog.show(res.error);
        } else {
          loadGuestsListDispatch()
            .then(res => {
              if (!res.success) {
                Dialog.show(res.error);
              }
            });
        }
        this.setState({ onLoadingAcceptTicket: false });
      });
  }

  render() {
    const { unacceptedGuestsList } = this.props;
    const { onLoadingAcceptTicket } = this.state;
    if (onLoadingAcceptTicket) {
      return (
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
      );
    }
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
            DANH SÁCH KHÁCH CHƯA ĐƯỢC CHẤP NHẬN ĐẾN SỰ KIỆN
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
              <TouchableOpacity onPress={() => this.acceptTicket(item._id)} style={styles.button}>
                <Text style={styles.text}>Chấp nhận</Text>
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

const mapDispatchToProps = {
  loadGuestsListDispatch,
  acceptTicketDispatch,
};

export default connect(mapStateToProps, mapDispatchToProps)(Unaccepted);
