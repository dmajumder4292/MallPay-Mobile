import React from 'react'
import { TouchableOpacity, StyleSheet, View, Text, Image, ScrollView } from 'react-native'
// import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import Carousel, { Pagination } from 'react-native-snap-carousel';
import axios from 'axios'
import * as SecureStore from 'expo-secure-store'

class MallInfo extends React.Component {

    state={
        brands: null,
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

    getBrands = async () => {
        let response = await axios.get('https://gnzaim2g9f.execute-api.us-east-1.amazonaws.com/dev/brand');
        this.setState({
          brands: response.data
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
        this.getBrands()
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.floorText}>Ground Floor</Text>
                    <Text style={styles.selected}>First Floor</Text>
                    <Text style={styles.floorText}>Second Floor</Text>
                    <Text style={styles.floorText}>Third Floor</Text>
                </View>
                <View style={styles.filters}>
                    <Text style={styles.selectedFilter}>All Stores</Text>
                    <Text style={styles.filter}>Fashion</Text>
                    <Text style={styles.filter}>Sports</Text>
                </View>
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
                        <View style={styles.brandContainer}>
                            {this.state.brands && this.state.brands.map((item) => {
                                return (
                                    <TouchableOpacity key={item.id} style={styles.brandImage} onPress={() => this.props.navigation.navigate('StoreVouchers')}>
                                        <Image source={{uri: item.image}} style={styles.brand}/>
                                    </TouchableOpacity>
                                )
                            })}
                        </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    header: {
        backgroundColor: '#000',
        height: 50,
        width: '100%',
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10
    },
    filters: {
        height: 40,
        width: '100%',
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 10
    },
    floorText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15
    },
    selected: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
        color: 'green'
    },
    imageStyles: {
        height: 162,
        width: 'auto',
        borderRadius: 8
    },
    brandContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    brandImage: {
        height: 85,
        width: '30.4%',
        borderRadius: 6,
        marginRight: 10,
        marginBottom: 10
    },
    brand: {
        height: 85,
        width: '100%',
        borderRadius: 6,
    },
    articles: {
        paddingLeft: 16
    },
    filter: {
        backgroundColor: 'white',
        alignSelf: 'stretch',
        width: '30%',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        fontWeight: 'bold',
        fontSize: 13,
        borderRadius: 35,
        textAlign: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        shadowOpacity: 0.8,
        elevation: 6
    },
    selectedFilter: {
        backgroundColor: '#000',
        color: '#fff',
        alignSelf: 'stretch',
        width: '30%',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        fontWeight: 'bold',
        fontSize: 13,
        borderRadius: 35,
        textAlign: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        shadowOpacity: 0.8
    }
})

export default MallInfo
