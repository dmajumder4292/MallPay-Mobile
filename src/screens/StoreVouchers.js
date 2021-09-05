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

class StoreVouchers extends React.Component {

    state={
        vouchers: null
    }

    getVouchers = async () => {
        let response = await axios.get('https://gnzaim2g9f.execute-api.us-east-1.amazonaws.com/dev/voucher');
        this.setState({
          vouchers: response.data
        })
    }
    
    componentDidMount(){
        this.getVouchers()
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.floorText}>Nike Vouchers</Text>
                </View>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.articles}>
                        <View style={styles.brandContainer}>
                            {this.state.vouchers && this.state.vouchers.map((item) => {
                                return (
                                    <TouchableOpacity key={item.id} style={styles.brandImage} onPress={() => this.props.navigation.navigate('VoucherSuccess')}>
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
        height: 150,
        width: '100%',
        borderRadius: 6,
        marginRight: 10,
        marginBottom: 10
    },
    brand: {
        height: 150,
        width: '100%',
        borderRadius: 6,
    },
    articles: {
        paddingLeft: 16,
        paddingRight: 16
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

export default StoreVouchers
