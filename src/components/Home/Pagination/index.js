/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import {
  Text, TouchableOpacity, FlatList, View,
} from 'react-native';
import { connect } from 'react-redux';
import NavigationWithoutProps from 'utils/navigationWithoutProps';
import { loadEventsListDispatch } from 'datalayer/actions/event.action';
import styles from './index.styles';

class Pagination extends Component {
  goToEventDetail = () => {

  }

  goToQR = () => {
    NavigationWithoutProps.navigate('QR');
  }

  mapCurrentPageColor = (item) => {
    const { currentPage } = this.props;
    if (currentPage === item) {
      return '#fb3';
    }
    return '#ddd';
  }

  renderHeaderComponent = () => {
    const { currentPage, loadPage } = this.props;
    if (currentPage === 1) {
      return null;
    }
    return (
      <TouchableOpacity
        onPress={() => loadPage(1)}
        style={styles.navigationContainer}
      >
        <Text style={styles.navigationText}>Trước</Text>
      </TouchableOpacity>
    );
  }

  renderFooterComponent = () => {
    const { currentPage, numbersList, loadPage } = this.props;
    if (currentPage === numbersList.length || numbersList.length === 1) {
      return null;
    }
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          onPress={() => loadPage(currentPage + 1)}
          style={styles.navigationContainer}
        >
          <Text style={styles.navigationText}>Tiếp</Text>
        </TouchableOpacity>
      </View>
    );
  }

  renderItem = ({ item }) => {
    const { loadPage, currentPage } = this.props;
    if (currentPage === item) {
      return (
        <View
          style={[
            styles.numberContainer,
            { backgroundColor: this.mapCurrentPageColor(item) },
          ]}
        >
          <Text style={styles.numberText}>{item}</Text>
        </View>
      );
    }
    return (
      <TouchableOpacity
        onPress={() => loadPage(item)}
        style={[
          styles.numberContainer,
          { backgroundColor: this.mapCurrentPageColor(item) },
        ]}
      >
        <Text style={styles.numberText}>{item}</Text>
      </TouchableOpacity>
    );
  }

  renderFirstNumbersList = (firstNumbersList) => (
    <FlatList
      style={styles.numberListContainer}
      data={firstNumbersList}
      extraData={firstNumbersList}
      listKey={(item) => item.toString()}
      keyExtractor={(item) => item.toString()}
      renderItem={this.renderItem}
      ListHeaderComponent={this.renderHeaderComponent}
      numColumns={firstNumbersList.length}
    />
  )

  renderMiddleNumbersList = (middleNumbersList) => (
    <FlatList
      style={styles.numberListContainer}
      data={middleNumbersList}
      extraData={middleNumbersList}
      listKey={(item) => item.toString()}
      keyExtractor={(item) => item.toString()}
      renderItem={this.renderItem}
      numColumns={middleNumbersList.length}
    />
  )

  renderLastNumbersList = (lastNumbersList) => (
    <FlatList
      style={styles.numberListContainer}
      data={lastNumbersList}
      extraData={lastNumbersList}
      listKey={(item) => item.toString()}
      keyExtractor={(item) => item.toString()}
      renderItem={this.renderItem}
      ListFooterComponent={this.renderFooterComponent}
      numColumns={lastNumbersList.length}
    />
  )

  renderDots = (page) => {
    const { loadPage } = this.props;
    return (
      <TouchableOpacity
        onPress={() => loadPage(page)}
        style={styles.numberContainer}
      >
        <Text style={styles.numberText}>...</Text>
      </TouchableOpacity>
    );
  }

  render() {
    const { currentPage, numbersList } = this.props;
    if (numbersList.length > 6) {
      if (currentPage <= 3) {
        const firstNumbersList = numbersList.slice(0, 4);
        const lastNumbersList = numbersList.slice(-1);
        return (
          <View style={styles.container}>
            {this.renderFirstNumbersList(firstNumbersList)}
            {this.renderDots(5)}
            {this.renderLastNumbersList(lastNumbersList)}
          </View>
        );
      }
      if (currentPage > 3 && currentPage < numbersList.length - 4) {
        const firstNumbersList = numbersList.slice(0, 1);
        const middleNumbersList = numbersList.slice(currentPage - 1, (currentPage - 1) + 2);
        const lastNumbersList = numbersList.slice(-1);
        return (
          <View style={styles.container}>
            {this.renderFirstNumbersList(firstNumbersList)}
            {this.renderDots((currentPage - 1) - 2)}
            {this.renderMiddleNumbersList(middleNumbersList)}
            {this.renderDots((currentPage - 1) + 2)}
            {this.renderLastNumbersList(lastNumbersList)}
          </View>
        );
      }
      const firstNumbersList = numbersList.slice(0, 1);
      const lastNumbersList = numbersList.slice(
        (numbersList.length - 1) - 4,
        numbersList.length - 1
      );
      return (
        <View style={styles.container}>
          {this.renderFirstNumbersList(firstNumbersList)}
          {this.renderDots((numbersList.length - 1) - 5)}
          {this.renderLastNumbersList(lastNumbersList)}
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.numberListContainer}
          data={numbersList}
          extraData={numbersList}
          keyExtractor={(item) => item.toString()}
          renderItem={this.renderItem}
          ListHeaderComponent={this.renderHeaderComponent}
          ListFooterComponent={this.renderFooterComponent}
          numColumns={numbersList.length}
        />
      </View>

    );
  }
}

const mapStateToProps = null;
const mapDispatchToProps = {
  loadEventsListDispatch,
};

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
