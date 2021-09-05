import React, {useState} from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Paragraph from '../components/Paragraph'
// import Button from '../components/Button'
import { View, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native'
import { Button, Block, Text, Input, theme } from 'galio-framework';
const { width } = Dimensions.get('screen');
import Carousel from 'react-native-snap-carousel';
import CustomDrawerContent from "./Menu";
import { Icon, Header, DashboardHeader } from "../components";
import Home from "./Home";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStack = (props) => {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Malls"
        component={Home}
        options={{
          header: ({ navigation, scene }) => (
            <DashboardHeader
              title="Malls"
              search
              options
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
    </Stack.Navigator>
  );
}

const Dashboard = ({ navigation }) => {

  return (
    <Drawer.Navigator
      style={{ flex: 1 }}
      drawerContent={props => <CustomDrawerContent {...props} />}
      drawerStyle={{
        backgroundColor: "white",
        width: width * 0.8
      }}
      drawerContentOptions={{
        activeTintcolor: "white",
        inactiveTintColor: "#000",
        activeBackgroundColor: "transparent",
        itemStyle: {
          width: width * 0.75,
          backgroundColor: "transparent",
          paddingVertical: 16,
          paddingHorizonal: 12,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          overflow: "hidden"
        },
        labelStyle: {
          fontSize: 18,
          marginLeft: 12,
          fontWeight: "normal"
        }
      }}
      initialRouteName="Malls"
    >
      {/* <Drawer.Screen name="Home" component={HomeStack} /> */}
      <Drawer.Screen name="Malls" component={HomeStack} />
      <Drawer.Screen name="Offers" component={HomeStack} />
      <Drawer.Screen name="Scan Bill" component={HomeStack} />
      <Drawer.Screen name="Wallet" component={HomeStack} />
    </Drawer.Navigator>
  )
}

const styles = StyleSheet.create({
  home: {
    width: width,    
  },
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 70,
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  search: {
    height: 48,
    width: width - 32,
    marginHorizontal: 16,
    borderWidth: 1,
    borderRadius: 3,
  },
  tinyLogo: {
    height: 140,
    width: 290
  },
  header: {
    textAlign: 'left'
  }
})

export default Dashboard
