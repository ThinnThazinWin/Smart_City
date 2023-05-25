import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Dimensions
} from "react-native";
import React from "react";
import Login from "./Login";
  import Register from "./RegisterOld";

export default function AppHomeUI({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{width:'100%',height:'100%',backgroundColor:'#AFEEEE'}}>
        <View
          style={{
            flex: 1 / 3 + 0.2,
            justifyContent: "flex-end",
            alignItems: "center",
            //borderBottomRightRadius: 50,
            //borderWidth: 0.5,
            //borderColor: "#fff",
            width: "100%",
            backgroundColor: "#AFEEEE",

            elevation: 20,
            //marginTop: 10,
          }}
        >
        <View style={{zIndex:200,position:'absolute',top:20,width:'100%',height:70,}}>
        <Text style={{fontSize:30,fontWeight:'bold', alignSelf:'center',fontStyle:'italic',letterSpacing:5}}>Welcome To</Text>
        </View>
       
          <ImageBackground
            source={require("../../assets/city/smcity3.jpg")}
            resizeMode="contain"
            style={{ width: "100%", height: "100%" }}
          />
        </View>
      
      <View style={{ flex: 2 / 3  }}>
        <View
          style={{
            flex: 1,
            paddingTop: 70,
            borderWidth: 1,
            backgroundColor: "#fcfcff",
            borderColor: "#fcfcff",
            borderTopLeftRadius: 100,
            alignItems: "flex-start",
            zIndex:100
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginLeft:10,
              width: "100%",
            }}
          >
        
          <ImageBackground
              source={require("../../assets/pine/pine2.jpg")}
              resizeMode="contain"
              style={{ width: 70, height: 70 , }}
            />
         
            
            <View
              style={{
                alignItems: "flex-start",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <Text
                style={[styles.textalign, { fontWeight: "bold", fontSize: 17 }]}
              >
                Reliable, Professional and Trusted
              </Text>
              <Text
                style={[styles.textalign, { fontWeight: "bold", fontSize: 17 }]}
              >
                Service Providers at your Convenience
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
                marginLeft:10,
              width: "100%",
            }}
          >
            <ImageBackground
              source={require("../../assets/pine/pine2.jpg")}
              resizeMode="contain"
              style={{ width: 70, height: 70 }}
            />
            <View
              style={{
                alignItems: "flex-start",
                justifyContent: "center",
                width: "100%",

              }}
            >
              <Text style={[styles.textalign, { color: "gray" }]}>
                Select from the services we currently offer or
              </Text>
              <Text style={[styles.textalign, { color: "gray" }]}>
                suggest a service that you would like to add.
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
                marginLeft:10,
              width: "100%",
            }}
          >
            <ImageBackground
              source={require("../../assets/pine/pine2.jpg")}
              resizeMode="contain"
              style={{ width: 70, height: 70 }}
            />
            <View
              style={{
                alignItems: "flex-start",
                justifyContent: "center",
                width: "100%",

              }}
            >
              <Text style={[styles.textalign, { color: "gray" }]}>
                Select from the services we currently offer or
              </Text>
              <Text style={[styles.textalign, { color: "gray" }]}>
                suggest a service that you would like to add.
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",

              alignSelf: "center",

              marginTop: 30,
            }}
          >
            <TouchableOpacity style={[styles.button]}  onPress={() => navigation.navigate(Register)}>
              <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate(Login)}>
              <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
        
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fcfcff'
  },
  imgView: {
    alignItems: "flex-start",
  },
  textalign: {
    //alignSelf: "center",
    //justifyContent: "center",
    //alignItems: "center",
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
