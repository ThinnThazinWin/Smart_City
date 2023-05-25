import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function EditProfile({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.tabBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons
            name="chevron-back"
            size={30}
            color={"#000"}
            style={{ marginRight: 10 }}
          />
        </TouchableOpacity>
        <Text
          style={
            
            { fontWeight:'bold',fontSize: 18, color: "#000", alignSelf: "center" }}
        >
          Edit Profile
        </Text>

        <View style={{ flexDirection: "row", alignItems:'center',justifyContent:'center' }}>
          <Text style={{alignSelf:'center',marginRight:5, fontSize:17}}>Save</Text>
          <TouchableOpacity>
            <Ionicons
              name="save-outline"
              size={25}
              color={"#000"}
              style={{ marginRight: 5 }}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.profile}>
        <FontAwesome5
          name="edit"
          size={20}
          style={{ alignSelf: "flex-end", marginRight: 5 }}
        />
        <Image
          source={require("../../assets/user/user.png")}
          style={{
            width: 150,
            height: 150,
            borderRadius: 100,
            alignSelf: "center",
          }}
        />
        <Text>PROFILE PHOTO</Text>
      </View>

      <View style={{ borderWidth: 0.5, borderColor: "gray" }}></View>
      <ScrollView>
        <View style={styles.settingItemView}>
          <View style={styles.settingItem}>
            <View style={{ flexDirection: "row" }}>
              <MaterialCommunityIcons
                name="account"
                size={20}
                style={{ marginRight: 5 }}
              />
              <Text style={styles.text}>Name</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} style={styles.icon} />
          </View>
          <Text>Thinn Thazin Win</Text>
        </View>

        <View style={{ borderWidth: 0.5, borderColor: "gray" }}></View>
        <View style={styles.settingItemView}>
          <View style={styles.settingItem}>
            <View style={{ flexDirection: "row" }}>
              <MaterialCommunityIcons
                name="map-marker"
                size={20}
                style={{ marginRight: 5 }}
              />
              <Text style={styles.text}>Address</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} style={styles.icon} />
          </View>
          <Text>No18, Mahuyar Street, Yangon</Text>
        </View>
        <View style={{ borderWidth: 0.5, borderColor: "gray" }}></View>
        <View style={styles.settingItemView}>
          <View style={styles.settingItem}>
            <View style={{ flexDirection: "row" }}>
              <MaterialCommunityIcons
                name="lock"
                size={20}
                style={{ marginRight: 5 }}
              />
              <Text style={styles.text}>Change Password</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} style={styles.icon} />
          </View>
          <Text>...............................</Text>
        </View>
        <View style={{ borderWidth: 0.5, borderColor: "gray" }}></View>
        <View style={styles.settingItemView}>
          <View style={styles.settingItem}>
            <View style={{ flexDirection: "row" }}>
              <MaterialCommunityIcons
                name="email"
                size={20}
                style={{ marginRight: 5 }}
              />
              <Text style={styles.text}>Change Email Address</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} style={styles.icon} />
          </View>
          <Text>thinnthazinwin528@gmail.com</Text>
        </View>
        <View style={{ borderWidth: 0.5, borderColor: "gray" }}></View>
        <View style={styles.settingItemView}>
          <View style={styles.settingItem}>
            <View style={{ flexDirection: "row" }}>
              <MaterialCommunityIcons
                name="phone"
                size={20}
                style={{ marginRight: 5 }}
              />
              <Text style={styles.text}>Change Phone Number</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} style={styles.icon} />
          </View>
          <Text>+95 9763 073 902</Text>
        </View>
        <View style={{ borderWidth: 0.5, borderColor: "gray" }}></View>
        <View style={styles.settingItemView}>
          <View style={styles.settingItem}>
            <View style={{ flexDirection: "row" }}>
              <FontAwesome5
                name="transgender"
                size={20}
                style={{ marginRight: 5 }}
              />
              <Text style={styles.text}>Gender</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} style={styles.icon} />
          </View>
          <Text>Female</Text>
        </View>
        <View style={{ borderWidth: 0.5, borderColor: "gray" }}></View>
        <View style={styles.settingItemView}>
          <View style={styles.settingItem}>
            <View style={{ flexDirection: "row" }}>
              <FontAwesome5
                name="calendar"
                size={20}
                style={{ marginRight: 5 }}
              />
              <Text style={styles.text}>Date of Birth</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} style={styles.icon} />
          </View>
          <Text>01 / 01 / 2000</Text>
        </View>
        <View style={{ borderWidth: 0.5, borderColor: "gray" }}></View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
  tabBar: {
    //flex: 1/10,
    backgroundColor: "#AFEEEE",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,

    width: "100%",
    height: 55,
  },

  profile: {
    width: "100%",
    height: 220,
    backgroundColor: "#fcfcfa",

    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    elevation: 40,
  },

  settingItem: {
    justifyContent: "space-between",
    flexDirection: "row",

    marginBottom: 10,
  },
  icon: {
    marginRight: 5,
    fontWeight: "bold",
  },
  settingItemView: {
    backgroundColor: "#fcfcff",
    height: 90,
    paddingTop: 5,
    paddingLeft: 10,

    justifyContent: "center",
  },
  text: {
    fontWeight: "bold",
  },
});
