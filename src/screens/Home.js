import React from 'react';
import { StyleSheet, Dimensions, ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';
import { Block, theme } from 'galio-framework';

import { MallCard } from '../components';
import { articles } from '../constants';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import axios from 'axios'
const { width } = Dimensions.get('screen');

class Home extends React.Component {

  state={
    malls: null,
    entries: [],
    activeSlide: 0
  }

  _renderItem = ({item, index}) => {
    return (
        <View style={styles.slide}>
            <Image source={{uri: item.image}} style={styles.imageStyles} />
        </View>
    );
  }

  getMalls = async () => {
    let response = await axios.get('https://gnzaim2g9f.execute-api.us-east-1.amazonaws.com/dev/mall');
    this.setState({
      malls: response.data
    })
  }

  getOffers = async () => {
    let response = await axios.get('https://gnzaim2g9f.execute-api.us-east-1.amazonaws.com/dev/offer');
    this.setState({
      entries: response.data
    })
  }

  componentDidMount(){
    this.getOffers()
    this.getMalls()
  }

  renderArticles = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}>
        <Carousel
          ref={(c) => { this._carousel = c; }}
          data={this.state.entries}
          renderItem={this._renderItem}
          sliderWidth={360}
          itemWidth={360}
          onSnapToItem={(index) => this.setState({ activeSlide: index }) }
        />
        <Pagination
          dotsLength={this.state.entries.length}
          activeDotIndex={this.state.activeSlide}
          containerStyle={{ marginTop: -23, marginBottom: -15 }}
          dotStyle={{
              width: 10,
              height: 10,
              borderRadius: 5,
              marginHorizontal: 8,
              backgroundColor: 'rgba(122, 122, 112, 0.92)'
          }}
          inactiveDotStyle={{
              // Define styles for inactive dots here
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
        <View style={styles.mallsContainer}>
          {this.state.malls && this.state.malls.map((item) => {
            return (
              <TouchableOpacity key={item.createdAt} style={styles.mallImage} onPress={() => this.props.navigation.navigate('MallInfo')}>
                <Image source={{uri: item.image}} style={styles.mall}/>
                <Text style={styles.mallName}>{item.name}</Text>
              </TouchableOpacity>
            )
          })}
        </View>
      </ScrollView>
    )
  }

  render() {
    return (
      <Block flex center style={styles.home}>
        {this.renderArticles()}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,    
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
  },
  imageStyles: {
    height: 162,
    width: 'auto',
    borderRadius: 8
  },
  mallsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  mallImage: {
    height: 115,
    width: '47.2%',
    borderRadius: 6,
    marginRight: 5,
    marginLeft: 5,
    marginBottom: 20
  },
  mall: {
      height: 105,
      width: '100%',
      borderRadius: 6,
  },
  mallName: {
    textAlign: 'center',
    fontWeight: 'bold'
  }
});

export default Home;
