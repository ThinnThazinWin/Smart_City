import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import Register from "./Register";

import AppStack from "./AppStack";
export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <View
        style={{ flex: 1 / 4, alignItems: "center", justifyContent: "center" }}
      >
        <Text
          style={[
            styles.textalign,
            { fontWeight: "bold", fontSize: 20, marginBottom: 20 },
          ]}
        >
          Hello Again!
        </Text>
        <Text style={[styles.textalign, { fontSize: 17 }]}>
          Welcome back you've
        </Text>
        <Text style={[styles.textalign, { fontSize: 17 }]}>been missed!</Text>
      </View>
      <View style={{ width: "95%", flex: 3 / 4, justifyContent: "flex-start" }}>
        <TextInput
          placeholder="Enter user name"
          style={{
            width: "100%",
            height: 60,
            borderRadius: 10,
            borderWidth: 0.5,
            borderColor: "#FCFCFF",
            backgroundColor: "#FCFCFF",
            paddingLeft: 20,
            elevation: 20,
          }}
        />

        <View
          style={{
            flexDirection: "row",
            width: "100%",
            height: 60,
            borderRadius: 10,
            borderWidth: 0.5,
            borderColor: "#FCFCFF",
            backgroundColor: "#FCFCFF",
            alignItems: "center",
            justifyContent: "center",
            elevation: 20,
            marginTop: 20,
          }}
        >
          <TextInput
            placeholder="Password"
            style={{ width: "90%", paddingLeft: 20 }}
          />
          <MaterialCommunityIcons
            name="eye-off-outline"
            size={20}
            style={{ width: "10%" }}
          />
        </View>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            width: "100%",
            height: 60,
            borderRadius: 10,
            borderWidth: 0.5,
            //borderColor: "#FCFCFF",
            backgroundColor: "red",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 60,
          }}
          onPress={() => navigation.navigate(AppStack)}
        >
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            marginTop: 20,
            marginBottom: 20,
          }}
        >
          <View
            style={{
              borderWidth: 0.5,
              width: "30%",
              height: 1,
            }}
          ></View>
          <Text
            style={[
              styles.textalign,
              { width: "30%", marginLeft: 10, marginRight: 10 },
            ]}
          >
            Or continue with
          </Text>
          <View style={{ borderWidth: 0.5, width: "30%", height: 1 }}></View>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View style={styles.icon}>
            <MaterialCommunityIcons name="google" size={35} color={"#66ff00"} />
          </View>
          <View style={styles.icon}>
            <Ionicons name="ios-logo-apple" size={35} color={"#000"} />
          </View>
          <View style={styles.icon}>
            <MaterialCommunityIcons
              name="facebook"
              size={35}
              color={"#1e88e5"}
            />
          </View>
        </View>
        <View
          style={{
            marginTop: 60,
            alignItems: "center",
            justifyContent: "center",
           
            flexDirection:'row'
          }}
        >
          <Text style={{marginRight:10}}>
            You don't have an account ?
           
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate(Register)}>
              <Text style={{color:'#1e88e5'}}>
                Register
              </Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    flex: 1,
  },
  textalign: {
    alignSelf: "center",
    //justifyContent: "center",
    //alignItems: "center",
  },
  buttonText: {
    fontSize: 17,
    color: "#FFF",
    fontWeight: "bold",
    letterSpacing: 3,
    textTransform: "uppercase",
    alignSelf: "center",
  },
  icon: {
    width: 80,
    height: 50,
    borderRadius: 10,
    borderWidth: 5,
    borderColor: "#FCFCFF",
    marginRight: 20,
    //padding: 20,
    alignItems: "center",
    justifyContent: "center",
    elevation: 80,
    backgroundColor: "#F2F2F0",
  },
});
