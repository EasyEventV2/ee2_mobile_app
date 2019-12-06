/* eslint-disable no-underscore-dangle */

/* Packages */
import React, { Component } from 'react';
import {
  View, FlatList, ActivityIndicator,
} from 'react-native';
import { connect } from 'react-redux';
/* Components */
import Headbar from 'components/Common/Headbar';
import Searchbar from 'components/Common/Searchbar';
/* Consts - Utils */
import Auth from 'utils/auth';
import Dialog from 'utils/errorDialog';
import NavigationWithoutProps from 'utils/navigationWithoutProps';
/* Redux */
import { logoutDispatch } from 'datalayer/actions/auth.action';
import { loadEventsListDispatch } from 'datalayer/actions/event.action';
import EventCard from './EventCard';
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
    const { loadEventsListDispatch } = this.props;
    const userId = Auth.getUserId();
    this.setState({ loading: true });
    loadEventsListDispatch(userId)
      .then(res => {
        if (!res.success) {
          Dialog.show(res.error);
        }
        this.setState({ loading: false });
      });
  }

  goToQR = () => {
    NavigationWithoutProps.navigate('QR');
  }

  render() {
    const { list } = this.props;
    const { itemsList } = list;
    const { loading } = this.state;
    if (loading) {
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <Headbar title="TRANG CHỦ" />
        <Searchbar />

        <FlatList
          style={styles.listContainer}
          data={itemsList}
          extraData={itemsList}
          keyExtractor={(item) => item.event._id}
          renderItem={({ item }) => (
            <View style={styles.cardList}>
              <EventCard item={item} />
            </View>
          )}
          numColumns={1}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  list: state.event.list,
  loggedIn: state.auth.loggedIn,
});

const mapDispatchToProps = {
  loadEventsListDispatch,
  logoutDispatch,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
