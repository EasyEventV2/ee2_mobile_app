/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import {
  Text, View, FlatList, ActivityIndicator,
} from 'react-native';
import { connect } from 'react-redux';
import Pagination from 'components/Home/Pagination';
import { loadCheckedInGuestsListDispatch } from 'datalayer/actions/guest.action';
import Dialog from 'utils/errorDialog';
import generateNumbersList from 'utils/array';
import styles from './index.styles';

class CheckedIn extends Component {
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
    tabBarLabel: 'Đã check-in',
  }

  loadPage = (page) => {
    const { loadCheckedInGuestsListDispatch, navigation } = this.props;
    const eventId = navigation.getParam('eventId');
    this.setState({ onLoading: true });
    loadCheckedInGuestsListDispatch(eventId, page)
      .then(res => {
        if (!res.success) {
          Dialog.show(res.error);
        }
        this.setState({ onLoading: false });
      });
  }

  renderCondition() {
    const { checkedInGuestsList, checkedInPagination } = this.props;
    const { currentPage, totalPages } = checkedInPagination;
    const numbersList = generateNumbersList(totalPages);
    const { onLoading } = this.state;
    if (onLoading) {
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator />
        </View>
      );
    }
    if (checkedInGuestsList.length === 0) {
      return (
        <View style={styles.loadingContainer}>
          <Text>Không có khách trong danh sách này</Text>
        </View>
      );
    }
    return (
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
        ListFooterComponent={(
          <Pagination
            numbersList={numbersList}
            currentPage={currentPage}
            loadPage={(page) => this.loadPage(page)}
          />
        )}
      />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>
            DANH SÁCH KHÁCH CHƯA CHẤP NHẬN ĐẾN SỰ KIỆN
          </Text>
        </View>
        {this.renderCondition()}
      </View>
    );
  }
}
const mapStateToProps = (state) => ({
  checkedInGuestsList: state.guest.checkedInGuestsList,
  checkedInPagination: state.guest.checkedInPagination,
});

const mapDispatchToProps = {
  loadCheckedInGuestsListDispatch,
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckedIn);
