import React, {useState} from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import Input from '../components/Input'
// import { Input } from "galio-framework";
import Paragraph from '../components/Paragraph'
import { StyleSheet, View, TouchableOpacity, Text, Image, StatusBar } from 'react-native'
import Icon from '../components/Icon';
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import axios from 'axios'
import * as SecureStore from 'expo-secure-store'

const StartScreen = ({ navigation }) => {
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })

  const onLoginPressed = async () => {
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)
    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      return
    }
    let res = await axios.post('https://gnzaim2g9f.execute-api.us-east-1.amazonaws.com/dev/user/login', {
      email: email.value,
      password: password.value
    })
    if(res.status === 200){
      await SecureStore.setItemAsync('secure_token',res.data.token);
      navigation.reset({
        index: 0,
        routes: [{ name: 'SelectLocation' }],
      })
    }
  }

  const inputStyles = [
    styles.input,
    styles.shadow,
    styles.success,
    styles.error
  ];

  return (
    <Background>
      <StatusBar hidden = {false} backgroundColor = "#000" translucent = {true}/>
      <Image source={require('../assets/dark_logo_transparent.png')} style={styles.logo} />
      <Image source={require('../assets/mall-cartoon-4.jpeg')} style={styles.image} />
      <Input
        placeholder="Email or Phone"
        placeholderTextColor="rgba(0,0,0,0.2)"
        style={inputStyles}
        color="rgba(0,0,0,0.8)"
        iconContent={
          <Icon
            size={14}
            color="rgba(0,0,0,0.2)"
            name="mail"
            family="AntDesign"
            style={{marginRight: 15}}
          />
        }
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        // {...this.props}
      />
      <Input
        placeholder="Password"
        placeholderTextColor="rgba(0,0,0,0.2)"
        style={inputStyles}
        color="rgba(0,0,0,0.8)"
        iconContent={
          <Icon
            size={14}
            color="rgba(0,0,0,0.2)"
            name="key"
            family="AntDesign"
            style={{marginRight: 15}}
          />
        }
        secureTextEntry
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        // {...this.props}
      />
      {/* <Input
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      /> */}
      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ForgotPasswordScreen')}
        >
          <Text style={styles.forgot}>Forgot your login details? <Text style={styles.forgotLink}>Get help signing in</Text></Text>
        </TouchableOpacity>
      </View>
      <Button mode="outlined" style={styles.loginButton} onPress={onLoginPressed}>
        Login
      </Button>
      <View style={styles.signup}>
        <TouchableOpacity
          onPress={() => navigation.navigate('RegisterScreen')}
        >
          <Text style={styles.forgot}>Don't have an account? <Text style={styles.forgotLink}>Sign Up</Text></Text>
        </TouchableOpacity>
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  header: {
    color: 'white',
    fontSize: 30
  },
  loginButton: {
    color: '#eb1547',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    shadowOpacity: 0.05,
    elevation: 17
  },
  forgot: {
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold'
  },
  forgotLink: {
    fontSize: 15,
    color: 'green',
    fontWeight: 'bold'
  },
  forgotPassword: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 13,
    marginTop: 13
  },
  signup: {
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.2)',
    width: '100%',
    alignItems: 'center',
    paddingTop: 20
  },
  input: {
    borderRadius: 4,
    borderColor: 'rgba(0,0,0,0.2)',
    height: 55,
    backgroundColor: '#FFFFFF'
  },
  success: {
    borderColor: 'rgba(0,0,0,0.2)',
  },
  error: {
    borderColor: 'rgba(0,0,0,0.2)',
  },
  shadow: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    shadowOpacity: 0.05,
    elevation: 7,
  },
  image: {
    width: 310,
    height: 310,
    marginBottom: 10,
    marginTop: 20,
    borderRadius: 10
  },
  logo: {
    width: 210,
    height: 110,
    marginBottom: -20
  }
})

export default StartScreen
