import { useState } from 'react';
import React, { Component } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    StyleSheet,
    TextInput,
    Dimensions,
    Image,
    Alert,

} from 'react-native';

const windowHeight = Dimensions.get('window').height;


export default Signup = ({navigation}) => {
    const [getPasswordVisible, setPasswordVisible] = useState(false);
    const [getPasswordVisible1, setPasswordVisible1] = useState(false);

    const showAlert = () => {
        Alert.alert('Notifications', 'Congratulations !!! Successful to sign up.');
      };

    return (
        <ImageBackground style={styles.background} source={require('../image/bg1.jpg')} resizeMode="cover">
            <View style={styles.back}>
                <TouchableOpacity style={styles.btnBack}
                    onPress={() => {
                        navigation.goBack();
                    }}
                >
                        <Image style={styles.imgBack} source={require('../image/back.png')} resizeMode="contain"/>
                        <Text style={styles.textBack}>
                            Back
                        </Text>
                </TouchableOpacity>
            </View>
        <View style={styles.container}>
            <View style={styles.input}>
                <View style={styles.email}>
                    <Text style={styles.textEmail}>Email</Text>
                    <TextInput autoCapitalize="none" style={styles.inputEmail}/>
                </View>

                <View style={styles.pass}>
                    <Text style={styles.textPass}>Password</Text>
                    <TextInput autoCapitalize="none" style={styles.inputPass} secureTextEntry={getPasswordVisible ? false : true}/>
                    <TouchableOpacity style={styles.eyeout}
                    onPress={() => {
                        setPasswordVisible(!getPasswordVisible)
                    }}>
                    {getPasswordVisible ?
                        <Image style={styles.eyein} source={require('../image/eye2.png')} resizeMode="contain"/>
                    :
                        <Image style={styles.eyein} source={require('../image/eye1.png')} resizeMode="contain"/>
                    }

                        
                    </TouchableOpacity>
         
                </View>

                <View style={styles.pass}>
                    <Text style={styles.textPass}>Re-Password</Text>
                    <TextInput autoCapitalize="none" style={styles.inputPass} secureTextEntry={getPasswordVisible ? false : true}/>
                    <TouchableOpacity style={styles.eyeout}
                    onPress={() => {
                        setPasswordVisible1(!getPasswordVisible1)
                    }}>
                    {getPasswordVisible1 ?
                        <Image style={styles.eyein} source={require('../image/eye2.png')} resizeMode="contain"/>
                    :
                        <Image style={styles.eyein} source={require('../image/eye1.png')} resizeMode="contain"/>
                    }
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.button1}>
                <TouchableOpacity style={styles.btnDk1}
                    onPress={showAlert}
                >
                    <Text style={styles.textDk1}>Sign up</Text>
                </TouchableOpacity>
            </View>
        </View>
    </ImageBackground>
  
    );
}

const styles = StyleSheet.create ({
    background : {
        width: '100%',
        height: '100%',
    }

    ,container : {
        flex: 1,
        alignItems: 'center',
        
    }

    ,back : {
        width: '100%',
        height: 60,
        marginLeft: 15,
        marginTop: 15,
        opacity: 0.9
    }

    ,btnBack : {
        flexDirection: 'row',
        width: '26%',
        height: '100%',
        backgroundColor: '#8d6f67',
        borderRadius: 5,
        alignItems: 'center',
    }

    ,imgBack : {
        width: 40,
        height: 20
        
    }

    ,textBack : {
        fontSize : 17,
        color: 'white',
        marginRight: 10,
        fontWeight: '600'
    }

    ,input : {
        width : '92%',
        minHeight: 275,
        backgroundColor: '#8d6f67',
        marginTop : 0.18 * windowHeight,
        borderRadius: 15, 
        opacity: 0.9,
        alignItems: "center",
        borderWidth: 2,
        borderColor: "black",
        
    }

    ,email : {
        width: '80%',
        height: 40,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 57,
        
    }

    ,inputEmail : {
        width: '62%',
        height: '100%',
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        textAlign: "center",
        color: "white",
        fontSize: 17,
    }

    ,textEmail : {
        color: "white",
        fontWeight: "800",
        fontSize: 17,
    
    }

    ,pass : {
        width: '80%',
        height: 40,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 18,
    }

    ,inputPass : {
        width: '62%',
        height: '100%',
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        textAlign: "center",
        color: "white",
        paddingRight: 40,
        fontSize: 17,
    }

    ,textPass : {
        color: "white",
        fontWeight: "800",
        fontSize: 17,
    }

    ,eyeout : {
        width: 28,
        height:'100%',
        position: 'absolute',
        right: 0,  
    }

    ,eyein : {
        width: '100%',
        height: '100%',
    }

    ,button1 : {
        width: '100%',
        height: "10%",
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 40,
    }   

    ,btnDk1 : {
        width: '40%',
        minHeight: 70,
        borderWidth : 2,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        backgroundColor: '#8d6f67',
        borderColor: "black",
    }

    ,textDk1 : {
        color: 'white',
        fontWeight: "800",
        fontSize: 17,
    }

});