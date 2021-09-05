import React from 'react'
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { theme } from './src/core/theme'
import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  Dashboard,
  SelectLocation,
  MallInfo,
  StoreVouchers,
  VoucherSuccess,
  ScanBill,
  Wallet
} from './src/screens'

const Stack = createStackNavigator()

const App = () => {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="StartScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="SelectLocation" component={SelectLocation} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="MallInfo" component={MallInfo} />
          <Stack.Screen name="StoreVouchers" component={StoreVouchers} />
          <Stack.Screen name="VoucherSuccess" component={VoucherSuccess} />
          <Stack.Screen name="Balance" component={Wallet} />
          <Stack.Screen name="ScanBill" component={ScanBill} />
          <Stack.Screen
            name="ForgotPasswordScreen"
            component={ForgotPasswordScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App
