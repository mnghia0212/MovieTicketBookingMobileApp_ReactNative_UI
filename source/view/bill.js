import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";

export default Bill = ({ navigation }) => {
  const [showAlert, setShowAlert] = useState(false);

  const handlePress = () => {
    setShowAlert(true);
  };

  const handleOK = () => {
    setShowAlert(false);
    navigation.navigate("HomeTabs"); 
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.btnBackBill}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Text style={{ fontSize: 17, color: "white" }}>Back</Text>
      </TouchableOpacity>
      <View
        style={{
          width: "100%",
          height: 100,
          alignItems: "center",
          marginTop: 100,
        }}
      >
        <Text style={{ fontSize: 50 }}>Price : 20$</Text>
      </View>

      <TouchableOpacity style={styles.btnPay} onPress={handlePress}>
        <Text style={{ fontSize: 17, color: "white" }}>Pay</Text>
      </TouchableOpacity>

      {showAlert && (
        <View style={styles.alertContainer}>
          <Text style={{fontSize:20}}>Successful to book ticket !!!</Text>
          <TouchableOpacity style={styles.btnOk} onPress={handleOK}>
            <Text style={{color:'white'}}>Ok</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  btnBackBill: {
    width: "28%",
    height: 70,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
    marginTop: 20,
    borderColor: "white",
    backgroundColor: "#474746",
    marginRight: 235,
  },

  btnPay: {
    width: "28%",
    height: 70,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 150,
    marginTop: 100,
    borderColor: "white",
    backgroundColor: "#474746",
  },

  alertContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    width: 300,
    height:170,
    backgroundColor: 'white',
    marginLeft: 50,
    marginTop: 300,
    position: 'absolute',
  },

  btnOk: {
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 10,
    padding: 20,
    backgroundColor: "#474746",
  },

});
