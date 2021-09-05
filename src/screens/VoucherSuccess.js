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

class VoucherSuccess extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.successContainer}>
                    <Image source={{uri: 'https://cdn.dribbble.com/users/129972/screenshots/3964116/75_smile.gif'}} style={styles.successImage}/>
                    <Text style={styles.successText}>Voucher Generated Successfully!!!</Text>
                    <Text style={styles.voucherText}>Voucher Code: <Text style={{fontWeight: 'bold'}}>AX56GH78SG89GT098</Text></Text>
                </View>
                <TouchableOpacity style={styles.back} onPress={() => this.props.navigation.navigate('MallInfo')}>
                    <Text style={styles.backText}>Go Back To Mall</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingTop: 30,
    },
    successContainer: {
        height: '95%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    successImage: {
        height: '30%',
        width: '50%'
    },
    successText: {
        fontSize: 20,
        textAlign: 'center'
    },
    voucherText: {
        marginTop: 27,
        fontSize: 20
    },
    back: {
        backgroundColor: '#000',
        height: '5%',
        alignItems: 'center',
        justifyContent: 'center'
    }, 
    backText: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white'
    }
})

export default VoucherSuccess
