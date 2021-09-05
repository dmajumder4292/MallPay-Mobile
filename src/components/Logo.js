import React from 'react'
import { Image, StyleSheet } from 'react-native'

const Logo = () => (
  <Image source={require('../assets/dark_logo_transparent.png')} style={styles.image} />
)

const styles = StyleSheet.create({
  image: {
    width: 210,
    height: 310,
    marginBottom: -50
  },
})

export default Logo
