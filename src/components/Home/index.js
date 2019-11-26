/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import {
  Text, View, TouchableOpacity, FlatList, ImageBackground, ActivityIndicator,
} from 'react-native';
import Headbar from 'components/Common/Headbar';
import Searchbar from 'components/Common/Searchbar';
import Auth from 'utils/auth';
import Dialog from 'utils/errorDialog';
import store from 'datalayer/store';
import { logoutDispatch } from 'datalayer/actions/auth.action';
import { loadEventsListAPI } from 'datalayer/actions/event.action';
import { connect } from 'react-redux';
import styles from './index.styles';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  componentDidMount() {
    const { loadEventsListAPI } = this.props;
    console.log(Auth.getUserId());
    this.setState({ loading: true });
    loadEventsListAPI(Auth.getUserId())
      .then(res => {
        if (!res.success) {
          Dialog.show(res.error);
        }
        this.setState({ loading: false });
      });
  }

  render() {
    const { navigation, data } = this.props;
    const { loading } = this.state;
    if (loading) {
      return (
        <View style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        >
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
          data={data}
          extraData={data}
          keyExtractor={(item) => item.event._id}
          renderItem={({ item }) => (
            <View style={styles.cardList}>
              <TouchableOpacity
                onPress={() => { store.dispatch(logoutDispatch()); }}
              >
                <ImageBackground
                  source={{ uri: 'https://cdn.flickeringmyth.com/wp-content/uploads/2018/06/Ant-Man-and-the-Wasp-intl-poster-2-600x857.jpg' }}
                  style={styles.imageBackground}
                >
                  <View style={styles.cardFooter}>
                    <View style={styles.cardFooterUpper}>
                      <Text style={styles.cardText}>
                        {item.event.description}
                      </Text>
                    </View>
                    <View style={styles.cardFooterLower}>
                      <TouchableOpacity
                        style={styles.checkInButton}
                        onPress={() => {
                          navigation.navigate('QR');
                        }}
                      >
                        <Text style={styles.checkInText}>
                            CHECK-IN
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </ImageBackground>
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
  data: state.event.data,
  loggedIn: state.auth.loggedIn,
});

const mapDispatchToProps = {
  loadEventsListAPI,
  logoutDispatch,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
