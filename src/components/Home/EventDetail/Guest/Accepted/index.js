/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import {
  Text, View, FlatList, ActivityIndicator,
} from 'react-native';
import { connect } from 'react-redux';
import Pagination from 'components/Home/Pagination';
import { loadAcceptedGuestsListDispatch } from 'datalayer/actions/guest.action';
import Dialog from 'utils/errorDialog';
import generateNumbersList from 'utils/array';
import styles from './index.styles';

class Accepted extends Component {
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
    tabBarLabel: 'Đã chấp nhận',
  }

  loadPage = (page) => {
    const { loadAcceptedGuestsListDispatch, navigation } = this.props;
    const eventId = navigation.getParam('eventId');
    this.setState({ onLoading: true });
    loadAcceptedGuestsListDispatch(eventId, page)
      .then(res => {
        if (!res.success) {
          Dialog.show(res.error);
        }
        this.setState({ onLoading: false });
      });
  }

  renderCondition() {
    const { acceptedGuestsList, acceptedPagination } = this.props;
    const { currentPage, totalPages } = acceptedPagination;
    const numbersList = generateNumbersList(totalPages);
    const { onLoading } = this.state;
    if (onLoading) {
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator />
        </View>
      );
    }
    if (acceptedGuestsList.length === 0) {
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
          data={acceptedGuestsList}
          extraData={acceptedGuestsList}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <View style={styles.listItem}>
              <Text style={styles.text}>{item.email}</Text>
              <Text style={[styles.text, { color: 'red', alignSelf: 'flex-end' }]}>Chưa check-in</Text>
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
            DANH SÁCH KHÁCH ĐÃ ĐƯỢC CHẤP NHẬN ĐẾN SỰ KIỆN NHƯNG CHƯA CHECK-IN
          </Text>
        </View>
        {this.renderCondition()}
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  acceptedGuestsList: state.guest.acceptedGuestsList,
  acceptedPagination: state.guest.acceptedPagination,
});

const mapDispatchToProps = {
  loadAcceptedGuestsListDispatch,
};

export default connect(mapStateToProps, mapDispatchToProps)(Accepted);
