import React, {useState, useEffect} from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import { View, StyleSheet, Text, ScrollView, Dimensions, TouchableOpacity, Image, StatusBar } from 'react-native'
import { Block, theme } from 'galio-framework';
import { Card } from '../components';
import { locations } from '../constants';
import axios from 'axios'
const { width } = Dimensions.get('screen');

const SelectLocation = ({ navigation }) => {
  const [ locations, setLocations ] = useState(null)

  useEffect(() => {
    getLocations()
  },[])

  const getLocations = async () => {
    let response = await axios.get('https://gnzaim2g9f.execute-api.us-east-1.amazonaws.com/dev/location');
    setLocations(response.data);
  }

  return (
    <View style={styles.container}>
      <StatusBar hidden = {false} backgroundColor = "#000" translucent = {true}/>
      <View style={styles.header}>
        <Text style={styles.text}>Select Location</Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}>
          {locations && locations.map((item) => {
            return (
              <TouchableOpacity key={item.createdAt} style={styles.brandImage} onPress={() => navigation.navigate('Dashboard')}>
                <Image source={{uri: item.image}} style={styles.brand}/>
                <Text style={styles.locationName}>{item.location}</Text>
              </TouchableOpacity>
            )
          })}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 10,
    height: 60,
    width: '100%',
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    shadowOpacity: 0.05,
    elevation: 17
  },
  text: {
    fontWeight: 'bold',
    fontSize: 30,
    lineHeight: 30,
    color: '#ffffff'
  },
  container: {
    flex: 1,
    paddingTop: 30,
    width: '100%',
    // maxWidth: 350,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  pickerStyle:{  
    height: 100, 
    width: "80%",  
    color: '#344953',  
    justifyContent: 'center',
    textDecorationLine: 'underline'
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  location: {
    borderRadius: 15
  },
  brandImage: {
    height: 115,
    width: '41.4%',
    borderRadius: 6,
    marginRight: 20,
    marginBottom: 20,
    marginLeft: 10
  },
  brand: {
      height: 105,
      width: '100%',
      borderRadius: 6,
  },
  locationName: {
    textAlign: 'center',
    fontWeight: 'bold'
  }
})

export default SelectLocation
