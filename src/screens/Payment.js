import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import {  MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons"
import Setting from "./Setting";
import EditProfile from "./EditProfile";

export default function Payment({ navigation }) {
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
        <Text
          style={[
            styles.txtStyle,
            { fontSize: 18, color: "#000", alignSelf: "center" },
          ]}
        >
          Payment
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
        <Text style={[styles.txtStyle, { alignSelf: "flex-start" }]}>Pay</Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 5,
          }}
        >
          <View style={{ flexDirection: "column", marginHorizontal: 15 }}>
            <Image
              style={{
                width: 70,
                height: 70,
                borderWidth: 1,
                borderRadius: 12,
                borderColor: "#808080",
              }}
              source={require("../../assets/bank/kbzpay.png")}
            />
            <Text style={{ textAlign: "center" }}>KBZ Pay</Text>
          </View>

          <View
            style={{
              flexDirection: "column",
              padding: 5,
              marginHorizontal: 60,
            }}
          >
            <Image
              style={{
                width: 65,
                height: 65,
                borderWidth: 1,
                borderRadius: 12,
                borderColor: "#00008b",
              }}
              source={require("../../assets/bank/cb.png")}
            />
            <Text style={{ textAlign: "center", paddingTop: 5 }}>CB Pay</Text>
          </View>

          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              marginHorizontal: 5,
            }}
          >
            <Image
              style={{
                width: 65,
                height: 65,
                borderWidth: 1,
                borderRadius: 12,
                borderColor: "#ffd700",
              }}
              source={require("../../assets/bank/wavemoney.png")}
            />
            <Text style={{ textAlign: "center", paddingTop: 5 }}>
              Wave Money
            </Text>
          </View>
        </View>
      </View>
      <View style={{borderWidth:0.2, backgroundColor:'lightgray',width:'100%', }}></View>
      <View
        style={{
          borderWidth: 1,
          borderColor: "#fcfcff",
          backgroundColor: "#fcfcff",
          width: "100%",
          height: "30%",
          marginBottom: 5,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={[styles.txtStyle, { alignSelf: "flex-start", marginLeft: 10 }]}
        >
          Bank
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            //marginVertical: 10,
          }}
        >
          <View style={{ flexDirection: "column", marginHorizontal: 16 }}>
            <Image
              style={{
                width: 65,
                height: 65,
                borderWidth: 1,
                borderRadius: 10,
                borderColor: "#00008b",
              }}
              source={require("../../assets/bank/KBZbank.png")}
            />
            <Text style={{ textAlign: "center", paddingTop: 5 }}>KBZ Bank</Text>
          </View>

          <View
            style={{
              flexDirection: "column",
              padding: 5,
              marginHorizontal: 60,
            }}
          >
            <Image
              style={{
                width: 65,
                height: 65,
                borderWidth: 1,
                borderRadius: 12,
                borderColor: "#00008b",
              }}
              source={require("../../assets/bank/cb.png")}
            />
            <Text style={{ textAlign: "center", paddingTop: 5 }}>CB Bank</Text>
          </View>

          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              marginHorizontal: 10,
            }}
          >
            <Image
              style={{
                width: 65,
                height: 65,
                borderWidth: 1,
                borderRadius: 10,
                borderColor: "#800000",
              }}
              source={require("../../assets/bank/MAB.png")}
            />
            <Text style={{ textAlign: "center", paddingTop: 5 }}>MAB Bank</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row",  }}>
          <View style={{ flexDirection: "column", marginHorizontal: 14,  }}>
            <Image
              style={{
                width: 65,
                height: 65,
                borderWidth: 1,
                borderColor: "#b22222",
                borderRadius: 10,
              }}
              source={require("../../assets/bank/AYA.png")}
            />
            <Text style={{ textAlign: "center", paddingTop: 5 }}>AYA Bank</Text>
          </View>
          <View style={{ flexDirection: "column", marginHorizontal: 70 }}>
            <Image
              style={{
                width: 65,
                height: 65,
                borderWidth: 1,
                borderColor: "#228b22",
                borderRadius: 10,
              }}
              source={require("../../assets/bank/uab.png")}
            />
            <Text style={{ textAlign: "center", paddingTop: 5 }}>UAB Bank</Text>
          </View>
          <View style={{ flexDirection: "column", marginHorizontal: 5}}>
            <Image
              style={{
                width: 65,
                height: 65,
                borderWidth: 1,
                borderColor: "#b22222",
                borderRadius: 10,
              }}
              source={require("../../assets/bank/Yoma.png")}
            />
            <Text style={{ textAlign: "center", paddingTop: 5 }}>
              Yoma Bank
            </Text>
          </View>
        </View>
      </View>
      <View style={{borderWidth:0.2, backgroundColor:'lightgray',width:'100%', }}></View>
      <View style={styles.promote}>
        <View style={{ flexDirection: "row", paddingTop: 5, justifyContent:'space-between' }}>
          <Text style={[styles.txtStyle, { marginLeft:10, marginBottom:10 }]}>
            Promotions
          </Text>
          <TouchableOpacity>
            <Text style={{marginRight:10,marginBottom:10}}>See More</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal={true} style={{height:'10%' ,backgroundColor:'#fefefa', }}>
          <View style={{ flexDirection: "row",}}>
            <Image
              style={{
                width: 230,
                height: 150,
                marginLeft: 10,
                marginTop: 15,
                borderWidth: 1,
                borderRadius: 15,
                borderColor: "#00008b",
                
              }}
              source={require("../../assets/bank/procb.jpeg")}
            />
            <Image
              style={{
                width: 230,
                height: 150,
                marginLeft: 10,
                marginTop: 15,
                borderWidth: 1,
                borderRadius: 15,
                borderColor: "#00008b",
              }}
              source={require("../../assets/bank/prokbz.jpeg")}
            />
            <Image
              style={{
                width: 230,
                height: 150,
                marginLeft: 10,
                marginTop: 15,
                borderWidth: 1,
                borderRadius: 15,
                borderColor: "#00008b",
              }}
              source={require("../../assets/bank/prowave1.jpeg")}
            />
            <Image
              style={{
                width: 230,
                height: 150,
                marginLeft: 10,
                marginTop: 15,
                borderWidth: 1,
                borderRadius: 15,
                borderColor: "#00008b",
              }}
              source={require("../../assets/bank/procb.jpeg")}
            />
            <Image
              style={{
                width: 230,
                height: 150,
                marginLeft: 10,
                marginTop: 15,
                borderWidth: 1,
                borderRadius: 15,
                borderColor: "#00008b",
              }}
              source={require("../../assets/bank/prokbz.jpeg")}
            />
            <Image
              style={{
                width: 230,
                height: 150,
                marginLeft: 10,
                marginTop: 15,
                borderWidth: 1,
                borderRadius: 15,
                borderColor: "#00008b",
              }}
              source={require("../../assets/bank/prowave1.jpeg")}
            />
            
          </View>
        </ScrollView>
        <Text style={{fontStyle:'italic',color:'gray',alignSelf:'center'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        <Text style={{fontStyle:'italic',color:'gray',alignSelf:'center'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fcfcff",
    flex: 1,
  },
  tabBar: {
    //flex: 1/10,
    backgroundColor: "#AFEEEE",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    //marginBottom:10,
    width: "100%",
    height: 55,
  },
  header: {
    borderWidth: 1,
    borderColor: "#AFEEEE",
    backgroundColor: "#AFEEEE",
    width: "100%",
    height: 130,
  },
  font: {
    fontSize: 25,
    fontWeight: "bold",

    color: "#808080",
  },
  promote: {
    borderWidth: 1,
    borderColor: "#fcfcff",
    backgroundColor: "#fcfcff",
    width: "100%",
    height: "35%",
    
  },
  body: {
    height: "20%",
    width: "100%",
    backgroundColor: "#fcfcff",
    padding: 15,
    //marginTop:20
    marginBottom: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  txtStyle: {
    fontWeight: "bold",
    fontSize: 17,
  },
});
