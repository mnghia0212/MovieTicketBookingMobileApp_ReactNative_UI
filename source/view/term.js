import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native'

export default Term = ({navigation}) => {
    return (
        <View style={{flex:1,alignItems:'center'}}>
            <View style={{width:'100%',height:100,padding:10,}}>
                <TouchableOpacity onPress={() => { navigation.goBack()}} style={{width:100,height:60,backgroundColor:'black',borderRadius:10,justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontSize:17,color:'white'}}>Back</Text>
                </TouchableOpacity>
            </View>

            <Text style={{fontSize:30,fontWeight:'bold',color:'black',borderBottomWidth:1}}>Terms of Use</Text>

            <Text style={{padding:20,fontSize:20,lineHeight: 30, textAlign:'center'}}>
            The application reserves the right to terminate, change any service, information provided by the application at any time, at the discretion of the company without prior notice. In order to access and use the company's services and information, you may be required to provide certain registration information when you register as a member/ subscribe to the newsletter. 

            You warrant that all information you provide to the application is accurate, complete and up to date. You agree that all information that you provide to the application is governed by the company's privacy policy.
            </Text>

           
        </View>
    )
}