import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ImageBackground,
  } from "react-native";
  import React, { useState } from "react";
  import Login from "./Login";
  import Register from "./RegisterOld";
  
  export default function AppHome({ navigation }) {
  
    return (
      <View style={styles.container}>
        <View
          style={{
            flex: 1 / 3 + 0.7,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 25,
            borderWidth: 0.5,
            borderColor: "#fff",
            width: "95%",
            backgroundColor: "#FCFCFF",
            height: "100%",
            elevation: 20,
            marginTop:10,
         
          }}
        >
          <ImageBackground
            source={require("../../assets/city/smcity3.jpg")}
            resizeMode="contain"
            style={{ width: "100%", height: "100%" }}
          />
        </View>
  
        <View
          style={{ flex: 2 / 3, alignItems: "flex-start", justifyContent: "flex-start", paddingTop: 70,  }}
        >
          <View style={{ marginBottom: 20 }}>
            <Text
              style={[styles.textalign, { fontWeight: "bold", fontSize: 20 }]}
            >
              Reliable, Professional and Trusted{" "}
            </Text>
            <Text
              style={[styles.textalign, { fontWeight: "bold", fontSize: 20 }]}
            >
              Service Providers at your Convenience
            </Text>
          </View>
          <View style={{alignSelf:'center'}}>
            <Text style={[styles.textalign, { color: "gray" }]}>
              Select from the services we currently offer or{" "}
            </Text>
            <Text style={[styles.textalign, { color: "gray" }]}>
              suggest a service that you would like to add.
            </Text>
          </View>
        </View>
  
        <View style={{ flexDirection: "row", position: "absolute", bottom: 50 }}>
          <TouchableOpacity
            onPress={() => navigation.navigate(Register)}
            style={[styles.button]}
          >
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate(Login)}
            style={[styles.button]}
          >
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#fff",
      flex: 1,
    },
    textalign: {
      alignSelf: "center",
      justifyContent: "center",
      alignItems: "center",
    },
    button: {
      backgroundColor: "red",
      borderRadius: 10,
      elevation: 10,
      borderRadius: 15,
      padding: 15,
      width: 180,
      height: 50,
      margin: 5,
    },
    buttonText: {
      fontSize: 17,
      color: "#FFF",
      fontWeight: "bold",
      letterSpacing: 3,
      textTransform: "uppercase",
      alignSelf: "center",
    },
  });
  