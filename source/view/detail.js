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

export default Detail = ({route, navigation}) => {

    const { value } = route.params;
    const { image } = route.params;
    const { describtion } = route.params;

    return (

        <View style={styles.container}>
            <View style={styles.view1}>
                <TouchableOpacity style={styles.btnBackHome}
                    onPress={() => {
                        navigation.navigate('HomeTabs')
                    }}
                    ><Text style={styles.textBack}>Back</Text>
                </TouchableOpacity> 
                
            </View>

            <View style={styles.view2}>
                <Text style={styles.textValue}>{value}</Text>
                <Image source={image} style={styles.imgMovie}/>
                <View style={styles.viewOV}>
                    <Text style={styles.overview}>Overview</Text>
                </View>
                <Text style={styles.textDes}>{describtion}</Text>

                <View style={styles.book}>
                    <TouchableOpacity style={styles.btnBook}
                        onPress={()=>{
                            navigation.navigate('Seat');
                        }}
                        >
                        <Text style={styles.textBook}>Book ticket</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create ({

    container : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#1E1E1C'
    }

    ,view1 : {
        flexDirection: 'row',
        width: '100%',
        height: "10%",
        alignItems: 'flex-start',
    }

    ,btnBackHome : {
        width: '28%',
        height:'70%',
        borderWidth: 1,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20,
        marginTop: 20,
        borderColor: 'white',
        backgroundColor: '#474746'
    }

    ,textBack : {
        color: 'white',
        fontSize: 15,
    }
    
    ,textValue : {
        color: 'white',
        fontSize : 30,
        fontWeight: 'bold'
    }

    ,view2 : {
        width: "100%",
        height : '80%',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 20,
    }

    ,imgMovie : {
        width: 180,
        height: 250,
        marginTop: 20,
    }

    ,textDes : {
        fontSize: 18,
        paddingHorizontal: 20,
        color: 'white',
        marginTop: 15,
        lineHeight: 27,
    }

    ,viewOV : {
        width: '93%',
        height: 40,
        marginTop:20,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: 'white',
    }

    ,overview : {
        color: 'white',
        fontSize: 22,

    }

    ,book : {
        width:'100%',
        height: 60,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',

    }

    ,btnBook : {
        width:150,
        height: 55,
        borderWidth:1,
        borderColor: 'white',
        backgroundColor: '#474746',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    }

    ,textBook : {
        color: 'white',
        fontSize: 17
    }
});