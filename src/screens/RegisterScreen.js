import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity, Image, StatusBar } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import Input from '../components/Input'
// import { Input } from "galio-framework";
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import { nameValidator } from '../helpers/nameValidator'
import { phoneValidator } from '../helpers/phoneValidator'
import Icon from '../components/Icon';
import axios from 'axios'

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState({ value: '', error: '' })
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })
  const [phone, setPhone] = useState({ value: '', error: '' })

  const onSignUpPressed = async () => {
    const nameError = nameValidator(name.value)
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)
    const phoneError = phoneValidator(phone.value)
    if (emailError || passwordError || nameError || phoneError) {
      setName({ ...name, error: nameError })
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      setPhone({ ...phone, error: phoneError })
      return
    }
    let res = await axios.post('https://gnzaim2g9f.execute-api.us-east-1.amazonaws.com/dev/user/register', {
      email: email.value,
      password: password.value,
      name: name.value,
      phone: phone.value
    })
    if(res.status === 200){
      navigation.reset({
        index: 0,
        routes: [{ name: 'StartScreen' }],
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
      {/* <BackButton goBack={navigation.goBack} /> */}
      <Image source={require('../assets/dark_logo_transparent.png')} style={styles.logo} />
      <Image source={require('../assets/mall-cartoon-7.jpeg')} style={styles.image} />
      <Input
        placeholder="Name"
        placeholderTextColor="rgba(0,0,0,0.2)"
        style={inputStyles}
        color="rgba(0,0,0,0.8)"
        iconContent={
          <Icon
            size={14}
            color="rgba(0,0,0,0.2)"
            name="edit"
            family="AntDesign"
            style={{marginRight: 15}}
          />
        }
        onChangeText={(text) => setName({ value: text, error: '' })}
        // {...this.props}
      />
      <Input
        placeholder="Phone"
        placeholderTextColor="rgba(0,0,0,0.2)"
        style={inputStyles}
        color="rgba(0,0,0,0.8)"
        iconContent={
          <Icon
            size={14}
            color="rgba(0,0,0,0.2)"
            name="phone"
            family="AntDesign"
            style={{marginRight: 15}}
          />
        }
        onChangeText={(text) => setPhone({ value: text, error: '' })}
        // {...this.props}
      />
      <Input
        placeholder="Email"
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
      <Button
        mode="outlined"
        onPress={onSignUpPressed}
        style={{ marginTop: 24, elevation: 17, color: '#eb1547', shadowColor: '#000000', shadowOffset: { width: 0, height: 1 }, shadowRadius: 2, shadowOpacity: 0.05 }}
      >
        Sign Up
      </Button>
      <View style={styles.signup}>
        <TouchableOpacity
          onPress={() => navigation.navigate('StartScreen')}
        >
          <Text style={styles.forgot}>Already have an account? <Text style={styles.forgotLink}>Login</Text></Text>
        </TouchableOpacity>
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: 'white',
  },
  header: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  image: {
    width: 310,
    height: 210,
    marginBottom: -20,
    marginTop: 10,
    borderRadius: 10
  },
  logo: {
    width: 210,
    height: 110,
    marginBottom: -20,
    marginTop: 30
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
    height: 45,
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
})

export default RegisterScreen
