/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import {
  Text, View, FlatList, TouchableOpacity, ActivityIndicator,
} from 'react-native';
import { connect } from 'react-redux';
import Pagination from 'components/Home/Pagination';
import {
  loadUnacceptedGuestsListDispatch,
  loadAcceptedGuestsListDispatch,
  acceptTicketDispatch,
} from 'datalayer/actions/guest.action';
import Dialog from 'utils/errorDialog';
import generateNumbersList from 'utils/array';
import styles from './index.styles';

class Unaccepted extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onLoading: false,
    };
  }

  componentDidMount() {
    this.loadPage(1);
  }

  static navigationOptions = {
    tabBarLabel: 'Chưa được chấp nhận',
  }

  loadPage = (page) => {
    const { loadUnacceptedGuestsListDispatch, navigation } = this.props;
    const eventId = navigation.getParam('eventId');
    this.setState({ onLoading: true });
    loadUnacceptedGuestsListDispatch(eventId, page)
      .then(res => {
        if (!res.success) {
          Dialog.show(res.error);
        }
        this.setState({ onLoading: false });
      });
  }

  acceptTicket = (guestId) => {
    const {
      acceptTicketDispatch,
      loadUnacceptedGuestsListDispatch,
      loadAcceptedGuestsListDispatch,
      navigation,
    } = this.props;
    const eventId = navigation.getParam('eventId');
    this.setState({ onLoading: true });
    acceptTicketDispatch(eventId, guestId)
      .then(res => {
        if (!res.success) {
          Dialog.show(res.error);
        } else {
          loadUnacceptedGuestsListDispatch(eventId, 1)
            .then(res => {
              if (!res.success) {
                Dialog.show(res.error);
              }
              loadAcceptedGuestsListDispatch(eventId, 1)
                .then(res => {
                  if (!res.success) {
                    Dialog.show(res.error);
                  }
                });
            });
        }
        this.setState({ onLoading: false });
      });
  }

  renderCondition() {
    const { unacceptedGuestsList, unacceptedPagination } = this.props;
    const { currentPage, totalPages } = unacceptedPagination;
    const numbersList = generateNumbersList(totalPages);
    const { onLoading } = this.state;
    if (onLoading) {
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator />
        </View>
      );
    }
    if (unacceptedGuestsList.length === 0) {
      return (
        <View style={styles.loadingContainer}>
          <Text>Không có khách trong danh sách này</Text>
        </View>
      );
    }
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
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
        <Pagination
          numbersList={numbersList}
          currentPage={currentPage}
          loadPage={(page) => this.loadPage(page)}
        />
      </View>

    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>
            DANH SÁCH KHÁCH ĐANG CHỜ ĐƯỢC CHẤP NHẬN ĐẾN SỰ KIỆN
          </Text>
        </View>
        {this.renderCondition()}
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  unacceptedGuestsList: state.guest.unacceptedGuestsList,
  unacceptedPagination: state.guest.unacceptedPagination,
});

const mapDispatchToProps = {
  loadUnacceptedGuestsListDispatch,
  loadAcceptedGuestsListDispatch,
  acceptTicketDispatch,
};

export default connect(mapStateToProps, mapDispatchToProps)(Unaccepted);
