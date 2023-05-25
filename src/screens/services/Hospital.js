import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import React from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

export default function Hospital({ navigation }) {
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
          Hospitals
        </Text>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={() => navigation.navigate(SettingUpdate)}>
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
      <View style={styles.head}>
        <View style={{ flexDirection: "row" }}>
          <TextInput
            style={{
              height: 40,
              width: "85%",
              borderWidth: 0.5,
              paddingLeft: 5,
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
            }}
            placeholder="Search"
          />
          <Ionicons
            name="search-outline"
            size={32}
            color="green"
            style={{
              borderWidth: 0.5,
              borderTopRightRadius: 10,
              borderBottomRightRadius: 10,
              height: 40,
              padding: 5,
            }}
          />
        </View>
      </View>

      {/* governmental hospital-building image */}
      <View style={[styles.body,]}>
        <Text style={[styles.txtStyle, { marginBottom: 10 }]}>
         
          National Hospital
        </Text>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={{ flex: 1 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 20,
              }}
            >
              <TouchableOpacity style={styles.iconTouch}>
                <MaterialCommunityIcons name="hospital-building" size={35} color={"#2196f3"} />
                <Text style={styles.txt}>hospital (1)</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.iconTouch}>
                <MaterialCommunityIcons name="hospital-building" size={35} color={"#2196f3"} />
                <Text style={styles.txt}>hospital (2)</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconTouch}>
                <MaterialCommunityIcons name="hospital-building" size={35} color={"#2196f3"} />
                <Text style={styles.txt}>hospital (3)</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconTouch}>
                <MaterialCommunityIcons name="hospital-building" size={35} color={"#2196f3"} />
                <Text style={styles.txt}>hospital (1)</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.iconTouch}>
                <MaterialCommunityIcons name="hospital-building" size={35} color={"#2196f3"} />
                <Text style={styles.txt}>hospital (2)</Text>
              </TouchableOpacity>
            </View>

            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <TouchableOpacity style={styles.iconTouch}>
                <MaterialCommunityIcons name="hospital-building" size={35} color={"#2196f3"} />
                <Text style={styles.txt}>hospital (4)</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconTouch}>
                <MaterialCommunityIcons name="hospital-building" size={35} color={"#2196f3"} />
                <Text style={styles.txt}>hospital (5)</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconTouch}>
                <MaterialCommunityIcons name="hospital-building" size={35} color={"#2196f3"} />
                <Text style={styles.txt}>hospital (6)</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconTouch}>
                <MaterialCommunityIcons name="hospital-building" size={35} color={"#2196f3"} />
                <Text style={styles.txt}>hospital (4)</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconTouch}>
                <MaterialCommunityIcons name="hospital-building" size={35} color={"#2196f3"} />
                <Text style={styles.txt}>hospital (5)</Text>
              </TouchableOpacity>
            </View>
            
          </View>

        </ScrollView>
        <View
              style={{
                borderWidth: 0.5,
                borderColor: "lightgray",
                marginTop: 10,
              }}
            ></View>
      </View>

      {/* private hospital-building image */}
      <View style={[styles.body]}>
        <Text style={[styles.txtStyle, { marginBottom: 10 }]}>
          
          Private Hospital
        </Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={{ flex: 1 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 20,
              }}
            >
              <TouchableOpacity style={styles.iconTouch}>
                <MaterialCommunityIcons name="hospital-building" size={35} color={"#2196f3"} />
                <Text style={styles.txt}>hospital (1)</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.iconTouch}>
                <MaterialCommunityIcons name="hospital-building" size={35} color={"#2196f3"} />
                <Text style={styles.txt}>hospital (2)</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconTouch}>
                <MaterialCommunityIcons name="hospital-building" size={35} color={"#2196f3"} />
                <Text style={styles.txt}>hospital (3)</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconTouch}>
                <MaterialCommunityIcons name="hospital-building" size={35} color={"#2196f3"} />
                <Text style={styles.txt}>hospital (1)</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.iconTouch}>
                <MaterialCommunityIcons name="hospital-building" size={35} color={"#2196f3"} />
                <Text style={styles.txt}>hospital (2)</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <TouchableOpacity style={styles.iconTouch}>
                <MaterialCommunityIcons name="hospital-building" size={35} color={"#2196f3"} />
                <Text style={styles.txt}>hospital (4)</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconTouch}>
                <MaterialCommunityIcons name="hospital-building" size={35} color={"#2196f3"} />
                <Text style={styles.txt}>hospital (5)</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconTouch}>
                <MaterialCommunityIcons name="hospital-building" size={35} color={"#2196f3"} />
                <Text style={styles.txt}>hospital (6)</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconTouch}>
                <MaterialCommunityIcons name="hospital-building" size={35} color={"#2196f3"} />
                <Text style={styles.txt}>hospital (4)</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconTouch}>
                <MaterialCommunityIcons name="hospital-building" size={35} color={"#2196f3"} />
                <Text style={styles.txt}>hospital (5)</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fcfcff",
    height: "100%",
    //alignItems: 'center',
    //justifyContent: "center",
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
  head: {
    backgroundColor: "#fff",
    //flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10,
    paddingBottom: 10,
  },
  body: {
    width: "100%",
    height: "40%",
    backgroundColor:'#fcfcff',
    //justifyContent:'center',
    //alignItems:'center',
    padding: 10,
    //marginBottom: 10,
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
    marginRight: 10,
  },
  txtStyle: {
    fontSize: 15,
    fontWeight: "bold",
  },
});
