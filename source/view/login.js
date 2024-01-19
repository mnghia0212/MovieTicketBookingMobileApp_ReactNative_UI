import { useState, Component } from 'react';
import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    StyleSheet,
    TextInput,
    Dimensions,
    Image,

} from 'react-native';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default Login = ({navigation}) => {
    const [getPasswordVisible, setPasswordVisible] = useState(false);
    return (
       
        <ImageBackground style={styles.background} source={require('../image/bg1.jpg')} resizeMode="cover">
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

                </View>

                <View style={styles.button}>
                    <TouchableOpacity style={styles.btnDn}
                    onPress={() => {
                        navigation.navigate('HomeTabs');
                    }}
                    >
                        <Text style={styles.textDn}>Log in</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.btnDk}
                    onPress={() => {
                        navigation.navigate('Signup');
                    }}
                    >
                        <Text style={styles.textDk}>Sign up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background : {
        width: '100%',
        height: '100%',
    }

    ,container : {
        flex: 1,
        alignItems: 'center',
        
    }

    ,input : {
        width : '90%',
        minHeight: 215,
        backgroundColor: '#8d6f67',
        marginTop : 0.25 * windowHeight,
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
        width: '67%',
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
        width: '67%',
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

    ,button : {
        width: '100%',
        height: "10%",
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 50,

    }   

    ,btnDn : {
        width: '40%',
        minHeight: 70,
        borderWidth : 2,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        backgroundColor: '#8d6f67',
        borderColor: "black",

    }

    ,textDn : {
        color: 'white',
        fontWeight: "800",
        fontSize: 17,
    }

    ,btnDk : {
        width: '40%',
        minHeight: 70,
        borderWidth : 2,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        backgroundColor: '#8d6f67',
        borderColor: "black",

    }

    ,textDk : {
        color: 'white',
        fontWeight: "800",
        fontSize: 17,
    }

  });