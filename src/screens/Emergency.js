import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons"
import Setting from "./Setting";
import EditProfile from "./EditProfile";

export default function Emergency({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.tabBar}>
       
      <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons
              name="chevron-back"
              size={30}
              color={'#000'}
              style={{marginRight: 10 }}
            />
          </TouchableOpacity>
          <Text style={[styles.txtStyle, { fontSize: 18, color: "#000", alignSelf:'center' }]}>
            Emergency
          </Text>
        
        <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={() => navigation.navigate(Setting)}>
        <MaterialIcons
            name="settings"
            size={25}
            color={"#000"}
            style={{ marginRight: 10 }}
          />
        </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate(EditProfile)}>
          <MaterialIcons name="account-circle" size={25} color={"#000"} />
          </TouchableOpacity>
          
        </View>
      </View>
      
      <View style={styles.body}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 20,
          }}
        >
          <TouchableOpacity style={styles.iconTouch}>
            <MaterialCommunityIcons
              name="police-station"
              size={35}
              color={"#2196f3"}
            />
            <Text style={styles.txt}>Police</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconTouch}>
            <MaterialCommunityIcons
              name="blood-bag"
              size={35}
              color={"#2196f3"}
            />
            <Text style={styles.txt}>Blood Bank</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconTouch}>
            <MaterialCommunityIcons
              name="fire-truck"
              size={35}
              color={"#2196f3"}
            />
            <Text style={styles.txt}>Fire-Brigade</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableOpacity style={styles.iconTouch}>
            <FontAwesome5 name="ambulance" size={35} color={"#2196f3"} />
            <Text style={styles.txt}>Ambulance</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconTouch}>
            <FontAwesome name="hospital-o" size={35} color={"#2196f3"} />
            <Text style={styles.txt}>Hospital</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconTouch}>
            <MaterialCommunityIcons
              name="account-group"
              size={35}
              color={"#2196f3"}
            />
            <Text style={styles.txt}>ERT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e2e7ea",
  },
  tabBar: {
    flex: 1 / 25,
    backgroundColor: "#AFEEEE",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
  },
  txtStyle: {
    fontWeight: "bold",
    fontSize: 17,
  },
  body: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 15,
    //marginBottom: 5,
  },
  iconTouch: {
    borderWidth: 0.5,
    borderColor: "#fff",
    backgroundColor: "#f0f4f8",
    borderRadius: 10,
    width: 110,
    height: 110,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 3,
  },
  txt: {
    fontWeight: "500",
    marginTop: 5,
    fontSize: 13,
  },
});
