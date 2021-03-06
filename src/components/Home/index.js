/* eslint-disable no-underscore-dangle */

/* Packages */
import React, { Component } from 'react';
import {
  View, FlatList, ActivityIndicator, Text,
} from 'react-native';
import { connect } from 'react-redux';
/* Components */
import Headbar from 'components/Common/Headbar';
import Searchbar from 'components/Common/Searchbar';
import Pagination from 'components/Home/Pagination';
import EventCard from 'components/Home/EventCard';
/* Consts - Utils */
import Auth from 'utils/auth';
import Dialog from 'utils/errorDialog';
/* Redux */
import { logoutDispatch } from 'datalayer/actions/auth.action';
import { loadEventsListDispatch } from 'datalayer/actions/event.action';
/* Styles */
import styles from './index.styles';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  componentDidMount() {
    this.loadPage(1);
  }

  loadPage = (page) => {
    const { loadEventsListDispatch } = this.props;
    const userId = Auth.getUserId();
    this.setState({ loading: true });
    loadEventsListDispatch(userId, page)
      .then(res => {
        if (!res.success) {
          Dialog.show(res.error);
        }
        this.setState({ loading: false });
      });
  }

  generateNumbersList = (length) => {
    const numbersList = [];
    for (let i = 1; i <= length; i++) {
      numbersList.push(i);
    }
    return numbersList;
  }

  renderCondition() {
    const { eventList } = this.props;
    const { itemsList, currentPage, totalPages } = eventList;
    const numbersList = this.generateNumbersList(totalPages);
    const { loading } = this.state;
    console.log(itemsList);
    if (loading) {
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator />
        </View>
      );
    }
    if (eventList.length === 0) {
      return (
        <View style={styles.emptyListContainer}>
          <Text style={styles.emptyListText}>Chưa có sự kiện nào</Text>
        </View>
      );
    }
    return (
      <FlatList
        style={styles.cardListContainer}
        data={itemsList}
        extraData={itemsList}
        keyExtractor={(item) => item.event._id}
        renderItem={({ item }) => <EventCard item={item} />}
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
        <Headbar title="TRANG CHỦ" />
        <Searchbar />
        {this.renderCondition()}
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  eventList: state.event.eventList,
  loggedIn: state.auth.loggedIn,
});

const mapDispatchToProps = {
  loadEventsListDispatch,
  logoutDispatch,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
