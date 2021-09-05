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

class Wallet extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.floorText}>Wallet</Text>
                </View>
                <View style={styles.balance}>
                    <Text style={styles.balanceInfo}>Balance: <Text style={styles.value}>6700</Text></Text>
                </View>
                <View style={styles.header}>
                    <Text style={styles.floorText}>Purchase History</Text>
                </View>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.articles}>
                        <View style={styles.historyItem}>
                            <Image source={{uri: 'http://static1.squarespace.com/static/5303026de4b095e2b3b91d6b/577813f81b631b48a13a92b9/5b64a7ebaa4a999d11b194f2/1540580406212/Reebok-Logo-Decal-Sticker.jpg'}} style={styles.brandImage}/>
                            <Text style={styles.points}><Text style={styles.pointsValue}>800</Text> points</Text>
                        </View>
                        <View style={styles.historyItem}>
                            <Image source={{uri: 'https://www.sportzpower.com/sites/default/files/2018-07/Wildcraft%20logo.png'}} style={styles.brandImage}/>
                            <Text style={styles.points}><Text style={styles.pointsValue}>1200</Text> points</Text>
                        </View>
                        <View style={styles.historyItem}>
                            <Image source={{uri: 'https://miro.medium.com/max/1161/1*cJUVJJSWPj9WFIJlvf7dKg.jpeg'}} style={styles.brandImage}/>
                            <Text style={styles.points}><Text style={styles.pointsValue}>1700</Text> points</Text>
                        </View>
                        <View style={styles.historyItem}>
                            <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP5c-pcrNuvSOgjwZhYCCCmF56-Ti-UPTZfg&usqp=CAU'}} style={styles.brandImage}/>
                            <Text style={styles.points}><Text style={styles.pointsValue}>1270</Text> points</Text>
                        </View>
                        <View style={styles.historyItem}>
                            <Image source={{uri: 'https://www.logomoose.com/wp-content/uploads/2017/03/1.png'}} style={styles.brandImage}/>
                            <Text style={styles.points}><Text style={styles.pointsValue}>1300</Text> points</Text>
                        </View>
                        <View style={styles.historyItem}>
                            <Image source={{uri: 'https://hyperpix.net/wp-content/uploads/2020/05/skechers-logo-font-free-download.jpg'}} style={styles.brandImage}/>
                            <Text style={styles.points}><Text style={styles.pointsValue}>300</Text> points</Text>
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
        alignItems: 'center'
    },
    floorText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15
    },
    balance: {
        width: '100%',
        height: 200,
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center'
    },
    balanceInfo: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'blue'
    },
    value: {
        fontSize: 40,
        color: 'green'
    },
    articles: {
        paddingBottom: 10
    },
    brandImage: {
        height: 85,
        width: '40%',
        borderRadius: 6
    },
    historyItem: {
        width: 375,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10
    },
    points: {
        fontSize: 20
    },
    pointsValue: {
        fontSize: 35,
        fontWeight: 'bold',
        color: 'green'
    }
})

export default Wallet
