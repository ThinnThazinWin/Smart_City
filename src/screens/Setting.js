import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { TouchableOpacity } from "react-native-gesture-handler";
export default function Setting({navigation}) {
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: "#FCFCFF",
          margin: 5,
          flex: 1,
          elevation: 20,
          borderWidth: 1,
          borderColor: "#FCFCFF",
          borderRadius: 15,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <View>
          <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons
              name="chevron-back"
              size={30}
              style={{ paddingLeft: 20, marginTop: 30 }}
            />
          </TouchableOpacity>
           
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 25,
                paddingLeft: 20,
                marginBottom: 20,
              }}
            >
              Settings
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#c154c5",
              width: 150,
              height: 150,
              borderRadius: 100,
              position: "absolute",
              right: 0,
              top: -110,
              zIndex:100
            }}
          ></View>
          <View
            style={{
              backgroundColor: "#1e88e5",
              width: 200,
              height: 200,
              borderRadius: 100,
              position: "absolute",
              right: -100,
              top: -100,
            }}
          ></View>
        </View>

        <View style={styles.contentView}>
          <Text style={styles.contentText}>Display</Text>
          <Ionicons name="chevron-down" size={20} style={styles.contentIcon} />
        </View>
        <View style={styles.contentView}>
          <Text style={styles.contentText}>Audio</Text>
          <Ionicons name="chevron-down" size={20} style={styles.contentIcon} />
        </View>
        <View style={styles.contentView}>
          <Text style={styles.contentText}>Account</Text>
          <Ionicons name="chevron-down" size={20} style={styles.contentIcon} />
        </View>
        <View style={styles.contentView}>
          <Text style={styles.contentText}>Network</Text>
          <Ionicons name="chevron-down" size={20} style={styles.contentIcon} />
        </View>
        <View style={styles.contentView}>
          <Text style={styles.contentText}>Report Error</Text>
        </View>
      </View>
      <View
        style={{
          zIndex: 100,
          backgroundColor: "red",
          width: 150,
          height: 150,
          borderRadius: 100,
          position: "absolute",
          left: -20,
          bottom: -100,
        }}
      ></View>
      <View
        style={{
          backgroundColor: "red",
          width: 200,
          height: 200,
          borderRadius: 100,
          position: "absolute",
          left: 60,
          bottom: -100,
          backgroundColor: "#1ac1dd",
        }}
      ></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
  },
  contentView: {
    width: "90%",
    height: 65,
    elevation: 10,
    borderWidth: 1,
    borderColor: "#FCFCFF",
    backgroundColor: "#FCFCFF",
    flexDirection: "row",
    borderRadius: 10,
    marginBottom: 15,
    justifyContent: "space-between",
    alignSelf: "center",
  },
  contentText: {
    alignSelf: "center",
    paddingLeft: 10,
    fontWeight: "bold",
    fontSize: 17,
  },
  contentIcon: {
    alignSelf: "center",
    paddingRight: 10,
  },
});
