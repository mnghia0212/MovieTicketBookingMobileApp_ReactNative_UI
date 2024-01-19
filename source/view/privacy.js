import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native'

export default Privacy = ({navigation}) => {
    return (
        <View style={{flex:1,alignItems:'center'}}>
            <View style={{width:'100%',height:100,padding:10,}}>
                <TouchableOpacity onPress={() => { navigation.goBack()}} style={{width:100,height:60,backgroundColor:'black',borderRadius:10,justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontSize:17,color:'white'}}>Back</Text>
                </TouchableOpacity>
            </View>

            <Text style={{fontSize:30,fontWeight:'bold',color:'black',borderBottomWidth:1}}>Privacy Policy</Text>

            <Text style={{padding:20,fontSize:20,lineHeight: 30, textAlign:'center'}}>
            The main data collection on the application includes: email, phone, identity card/citizen identification number, login password, customer address (member). This is the information that the application needs members to provide mandatory when registering to use the service and for the contact application to confirm when customers register to use the service on the application to ensure the interests of consumers.
            </Text>

        
        </View>
    )
}