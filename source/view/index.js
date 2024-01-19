import React from "react";
import {
    Image,
    StyleSheet,
} from 'react-native'

import Login from './login'
import Signup from './signup'
import Home from './home'
import voucher from "./voucher";
import favorite from "./favorite";
import setting from "./setting";
import detail from "./detail";
import term from "./term";
import payment from "./payment";
import privacy from "./privacy";
import seat from "./seat";
import bill from "./bill";


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} options={{
            tabBarIcon : () => (
                <Image style={styles.barIcon} source={require('../image/home.png')} resizeMode="stretch"/>
            ),

            tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold' },
            headerTitle: 'Movie list',
            headerTitleStyle: {color:'black', fontWeight:'bold', fontSize: 22, letterSpacing:2},
            headerTitleAlign: 'center',
            headerStyle: {backgroundColor:'#f2e9e4'}
        }}/>


        <Tab.Screen name="Favorite" component={favorite} options={{
             tabBarIcon : () => (
                <Image style={styles.barIcon} source={require('../image/favorite.png')} resizeMode="stretch"/>
            ),

            tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold' },
            headerTitleAlign: 'center',
            headerTitleStyle: {color:'black', fontWeight:'bold', fontSize: 22, letterSpacing:2},
            headerStyle: {backgroundColor:'#f2e9e4'}
        }}/>


        <Tab.Screen name="Voucher" component={voucher} options={{
            tabBarIcon : () => (
                <Image style={styles.barIcon} source={require('../image/voucher.png')} resizeMode="stretch"/>
            ),

            tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold' },
            headerTitleAlign: 'center',
            headerTitleStyle: {color:'black', fontWeight:'bold', fontSize: 22, letterSpacing:2},
            headerStyle: {backgroundColor:'#f2e9e4'}
        }}/>


        <Tab.Screen name="Setting" component={setting} options={{
            tabBarIcon : () => (
                <Image style={styles.barIconSetting} source={require('../image/setting.png')} resizeMode="stretch"/>
            ),

            tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold' },
            headerTitleAlign: 'center',
            headerTitleStyle: {color:'black', fontWeight:'bold', fontSize: 22, letterSpacing:2},
            headerStyle: {backgroundColor:'#f2e9e4'}
        }}/>
      </Tab.Navigator>
    );
  }

export default RootComponent = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown:false}}>
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Signup" component={Signup}/>
                <Stack.Screen name="Detail" component={detail}/>
                <Stack.Screen name="HomeTabs" component={HomeTabs}/>
                <Stack.Screen name="Term" component={term}/>
                <Stack.Screen name="Payment" component={payment}/>
                <Stack.Screen name="Privacy" component={privacy}/>
                <Stack.Screen name="Seat" component={seat}/>
                <Stack.Screen name="Bill" component={bill}/>
                
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create ({
    barIcon: {
        width: 32,
        height: 32,
    }
    
    ,barIconSetting : {
        width: 22,
        height: 22,
    }
});