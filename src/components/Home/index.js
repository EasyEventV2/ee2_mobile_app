import React, { Component } from 'react';
import {
  Text, View, TouchableOpacity, FlatList, ImageBackground,
} from 'react-native';
import Headbar from 'components/Common/Headbar';
import Searchbar from 'components/Common/Searchbar';
import styles from './index.styles';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: '1',
          description: 'Ant-man and the Wasp',
          tag: 'Action',
          hasVideo: 'yes',
          videoURI: 'https://www.youtube.com/embed/UUkn-enk2RU',
          content: 'In the aftermath of "Captain America: Civil War", Scott Lang grapples with the consequences of his choices as both a Super Hero and a father. \n\nAs he struggles to re-balance his home life with his responsibilities as Ant-Man, he\'s confronted by Hope van Dyne and Dr. Hank Pym with an urgent new mission. \n\nScott must once again put on the suit and learn to fight alongside The Wasp as the team works together to uncover secrets from their past.',
          dataURI: 'https://cdn.flickeringmyth.com/wp-content/uploads/2018/06/Ant-Man-and-the-Wasp-intl-poster-2-600x857.jpg',
        },
        {
          id: '2',
          description: 'Hotel Transylvania 3',
          tag: 'Adventure',
          hasVideo: 'yes',
          videoURI: 'https://www.youtube.com/embed/Ku52zNnft8k',
          content: 'In Hotel Transylvania 3: Summer Vacation, join our favorite monster family as they embark on a vacation on a luxury monster cruise ship so Drac can take a summer vacation from providing everyone else\'s vacation at the hotel. \n\nIt’s smooth sailing for Drac’s Pack as the monsters indulge in all of the shipboard fun the cruise has to offer, from monster volleyball to exotic excursions, and catching up on their moon tans. \n\nBut the dream vacation turns into a nightmare when Mavis realizes Drac has fallen for the mysterious captain of the ship, Ericka, who hides a dangerous secret that could destroy all of monsterkind.',
          dataURI: 'https://pmcvariety.files.wordpress.com/2018/06/htr3_summercruise_0001_lm_v9_flat.jpg?w=1000&h=563&crop=1',
        },
      ],
    };
  }

  render() {
    const { navigation } = this.props;
    const { data } = this.state;
    return (
      <View style={styles.container}>
        <Headbar title="TRANG CHỦ" />
        <Searchbar />

        <FlatList
          style={styles.listContainer}
          data={data}
          extraData={data}
          keyExtractor={(item) => item.toString()}
          renderItem={({ item }) => (
            <View style={styles.cardList}>
              <TouchableOpacity
                onPress={() => {}}
              >
                <ImageBackground
                  source={{ uri: item.dataURI }}
                  style={styles.imageBackground}
                >
                  <View style={styles.cardFooter}>
                    <View style={styles.cardFooterUpper}>
                      <Text style={styles.cardText}>
                        {item.description}
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

export default Home;
