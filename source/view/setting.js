import { useState } from 'react';
import React, { Component } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    StyleSheet,
    TextInput,
    Image,

} from 'react-native';

export default Setting = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={{flexDirection:'row', width:'90%',height:60,backgroundColor:'#D2D2C0',justifyContent:'center',alignItems:'center',marginTop:20}}>
                <Text style={{fontSize:17,}}>Version</Text>
                <Text style={{fontSize:17,marginLeft:220}}>0.0.1</Text>
            </View>

            <TouchableOpacity onPress={()=>{navigation.navigate('Term')}} style={{flexDirection:'row', width:'90%',height:60,backgroundColor:'#D2D2C0',justifyContent:'center',alignItems:'center',marginTop:20}}>
                <Text style={{fontSize:17}}>Terms of Use</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{navigation.navigate('Payment')}} style={{flexDirection:'row', width:'90%',height:60,backgroundColor:'#D2D2C0',justifyContent:'center',alignItems:'center',marginTop:20}}>
                <Text style={{fontSize:17}}>Payment Policy</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{navigation.navigate('Privacy')}} style={{flexDirection:'row', width:'90%',height:60,backgroundColor:'#D2D2C0',justifyContent:'center',alignItems:'center',marginTop:20}}>
                <Text style={{fontSize:17}}>Privacy Policy</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnLO}
            onPress={() => {
                navigation.navigate('Login');
            }}
            >
                <Text style={styles.textLO}>Log out</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create ({

    container : {
        flex:1,
        alignItems: 'center'
    }   

    ,btnLO : {
        width: 150,
        height: 70,
        backgroundColor: 'black',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:330
    }

    ,textLO : {
        fontSize: 18,
        color: 'white'
    }
});