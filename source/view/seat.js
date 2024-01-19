import React, {useState} from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native'



export default Seat = ({navigation}) => {

    return (
        <View style={{flex:1,alignItems:'center'}}>

                <TouchableOpacity style={styles.btnBackHome}
                    onPress={() => {
                        navigation.goBack();
                    }}
                    >
                    <Text style={{color:'white'}}>Back</Text>
                </TouchableOpacity> 
            <View style={styles.v1}>
                <View style={styles.screen}>
                    <Text style={{fontSize:30, color:'white'}}>Screen</Text>
                </View>
            </View>

            <View style={styles.v2}>
                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity style={styles.Seat} 
                        onPress={() => {
                        navigation.navigate('Bill');
                    }} 
                    >
                        <Text>1</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.Seat} onPress={() => {
                        navigation.navigate('Bill');
                    }} >
                        <Text>2</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.Seat} onPress={() => {
                        navigation.navigate('Bill');
                    }} >
                        <Text>3</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.Seat} onPress={() => {
                        navigation.navigate('Bill');
                    }} >
                        <Text>4</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.Seat} onPress={() => {
                        navigation.navigate('Bill');
                    }} >
                        <Text>5</Text>
                    </TouchableOpacity>
                </View>
               
                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity style={styles.Seat} onPress={() => {
                        navigation.navigate('Bill');
                    }} >
                        <Text>6</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.Seat} onPress={() => {
                        navigation.navigate('Bill');
                    }} >
                        <Text>7</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.Seat} onPress={() => {
                        navigation.navigate('Bill');
                    }} >
                        <Text>8</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.Seat} onPress={() => {
                        navigation.navigate('Bill');
                    }} >
                        <Text>9</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.Seat} onPress={() => {
                        navigation.navigate('Bill');
                    }} >
                        <Text>10</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        </View>
    );
}

const styles = StyleSheet.create ({

    btnBackHome: {
        width: '28%',
        height:70,
        borderWidth: 1,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20,
        marginTop: 20,
        borderColor: 'white',
        backgroundColor: '#474746',
        marginRight : 235,
    }
    
    ,v1 : {
        width: '80%',
        height:100,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#494943',
        borderRadius: 10,
        marginTop: 100,
        
    
    }

    ,v2: {
        width:'80%',
        height:300,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#8d6f67",
        marginTop: 20,
        borderRadius: 10,
    }

    ,Seat : {
        width:30,
        height:30,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
        backgroundColor: "white",
    }

    
});