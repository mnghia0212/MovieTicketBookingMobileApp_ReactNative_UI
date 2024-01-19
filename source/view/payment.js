import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native'

export default Payment = ({navigation}) => {
    return (
        <View style={{flex:1,alignItems:'center'}}>
            <View style={{width:'100%',height:100,padding:10,}}>
                <TouchableOpacity onPress={() => { navigation.goBack()}} style={{width:100,height:60,backgroundColor:'black',borderRadius:10,justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontSize:17,color:'white'}}>Back</Text>
                </TouchableOpacity>
            </View>

            <Text style={{fontSize:30,fontWeight:'bold',color:'black',borderBottomWidth:1}}>Payment Policy</Text>

            <Text style={{padding:20,fontSize:20,lineHeight: 30, textAlign:'center'}}>
            Successfully paid tickets cannot be canceled/returned/refunded for any reason. The application will only issue refunds in case your card has been charged but our system does not record your booking, and you do not receive confirmation of successful booking.
            </Text>

        
        </View>
    )
}