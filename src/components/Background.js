import React from 'react'
import { ImageBackground, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { theme } from '../core/theme'
import {LinearGradient} from 'expo-linear-gradient';

const Background = ({ children }) => (
  <ImageBackground
    // source={require('../assets/background_3.jpeg')}
    // resizeMode="repeat"
    style={styles.background}
  >
    {/* <LinearGradient
      colors={['#eb1547', '#cc7287']}
      style={styles.linearGradient}
    > */}
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        {children}
      </KeyboardAvoidingView>
    {/* </LinearGradient> */}
  </ImageBackground>
)

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
  },
  container: {
    // flex: 1,
    padding: 20,
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    height: '100%',
    width: '100%',
    opacity: 0.8
  }
})

export default Background
