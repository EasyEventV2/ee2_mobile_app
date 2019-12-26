/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import {
  Text, View, FlatList, TouchableOpacity, ActivityIndicator,
} from 'react-native';
import { connect } from 'react-redux';
import { loadUnacceptedGuestsListDispatch, acceptTicketDispatch } from 'datalayer/actions/guest.action';
import Dialog from 'utils/errorDialog';
import styles from './index.styles';

class Unaccepted extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onLoading: false,
    };
  }

  componentDidMount() {
    const { loadUnacceptedGuestsListDispatch } = this.props;
    this.setState({ onLoading: true });
    loadUnacceptedGuestsListDispatch()
      .then(res => {
        if (!res.success) {
          Dialog.show(res.error);
        }
        this.setState({ onLoading: false });
      });
  }

  static navigationOptions = {
    tabBarLabel: 'Chưa được chấp nhận',
  }

  acceptTicket = (guestId) => {
    const { acceptTicketDispatch, loadUnacceptedGuestsListDispatch, navigation } = this.props;
    const eventId = navigation.getParam('eventId');
    this.setState({ onLoading: true });
    acceptTicketDispatch(eventId, guestId)
      .then(res => {
        if (!res.success) {
          Dialog.show(res.error);
        } else {
          loadUnacceptedGuestsListDispatch()
            .then(res => {
              if (!res.success) {
                Dialog.show(res.error);
              }
            });
        }
        this.setState({ onLoading: false });
      });
  }

  render() {
    const { unacceptedGuestsList } = this.props;
    const { onLoading } = this.state;
    if (onLoading) {
      return (
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>
              DANH SÁCH KHÁCH CHƯA CHẤP NHẬN ĐẾN SỰ KIỆN
            </Text>
          </View>
          <View style={styles.loadingContainer}>
            <ActivityIndicator />
          </View>
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
            DANH SÁCH KHÁCH CHƯA CHẤP NHẬN ĐẾN SỰ KIỆN
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
              <TouchableOpacity
                onPress={() => this.acceptTicket(item._id)}
                style={styles.button}
              >
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
  loadUnacceptedGuestsListDispatch,
  acceptTicketDispatch,
};

export default connect(mapStateToProps, mapDispatchToProps)(Unaccepted);
