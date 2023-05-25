import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
export default function Event({ navigation }) {
  //sample datas
  const [memberlist, setmemberlist] = useState([
    {
      title: "Technology",
      date: "01/01/2023",
      time: "01:01:00",
      price: "$ 10000MMK",
      location: "Thiri City Mart",
      img: require("../../assets/event/event1.jpeg"),
    },
    {
      title: "Sport",
      date: "01/01/2023",
      time: "01:01:00",
      price: "$ 10000MMK",
      location: "Thiri City Mart",
      img: require("../../assets/event/event1.jpeg"),
    },
    {
      title: "Politics",
      date: "01/01/2023",
      time: "01:01:00",
      price: "$ 10000MMK",
      location: "Thiri City Mart",
      img: require("../../assets/event/event1.jpeg"),
    },
    {
      title: "Health",
      date: "01/01/2023",
      time: "01:01:00",
      price: "$ 10000MMK",
      location: "Thiri City Mart",
      img: require("../../assets/event/event1.jpeg"),
    },
    {
      title: "Technology",
      date: "01/01/2023",
      time: "01:01:00",
      price: "$ 10000MMK",
      location: "Thiri City Mart",
      img: require("../../assets/event/event1.jpeg"),
    },

    {
      title: "Sport",
      date: "01/01/2023",
      time: "01:01:00",
      price: "$ 10000MMK",
      location: "Thiri City Mart",
      img: require("../../assets/event/event1.jpeg"),
    },
    {
      title: "Politics",
      date: "01/01/2023",
      time: "01:01:00",
      price: "$ 10000MMK",
      location: "Thiri City Mart",
      img: require("../../assets/event/event1.jpeg"),
    },
    {
      title: "Health",
      date: "01/01/2023",
      time: "01:01:00",
      price: "$ 10000MMK",
      location: "Thiri City Mart",
      img: require("../../assets/event/event1.jpeg"),
    },
    {
      title: "Technology",
      date: "01/01/2023",
      time: "01:01:00",
      price: "$ 10000MMK",
      location: "Thiri City Mart",
      img: require("../../assets/event/event1.jpeg"),
    },
  ]);

  //custom font family

  return (
    <View style={styles.container}>
      <View style={styles.tabBar}>
        <MaterialIcons
          name="format-align-left"
          size={20}
          color={"#000"}
          style={{ marginRight: 10 }}
        />
        <Text
          style={[
            styles.txtStyle,
            { fontSize: 18, color: "#000", alignSelf: "center" },
          ]}
        >
          Events
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

      <FlatList
        showsHorizontalScrollIndicator={false}
        data={memberlist}
        renderItem={({ item, index }) => (
          <>
            <View
              style={{
                flexDirection: "row",
                borderWidth: 0.5,
                borderRadius: 10,
                borderColor: "#fff",
                marginTop: 2,
                marginLeft: 2,
                marginRight: 2,
                width: "99%",
                height: 150,
                backgroundColor: "#fff",
                elevation: 10,
              }}
            >
              <Image source={item.img} style={styles.img} />
              <View style={{ margin: 10, justifyContent: "center" }}>
                <View style={{ flexDirection: "row" }}>
                  <MaterialCommunityIcons
                    name="message-reply-text-outline"
                    size={20}
                  />
                  <Text style={[styles.text, { marginLeft:5,fontWeight: "bold" }]}>
                    {item.title}
                  </Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <MaterialCommunityIcons name="calendar" size={20} />
                  <Text style={styles.text}>{item.date}</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <MaterialCommunityIcons name="clock" size={20} />
                  <Text style={styles.text}>{item.time}</Text>
                </View>

                <View style={{ flexDirection: "row" }}>
                  <MaterialCommunityIcons name="cash-100" size={20} />
                  <Text style={styles.text}>{item.price}</Text>
                </View>

                <View style={{ flexDirection: "row" }}>
                  <MaterialCommunityIcons name="map-marker" size={20} />
                  <Text style={styles.text}>{item.location}</Text>
                </View>
              </View>
            </View>
          </>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f5f5",
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
  img: {
    width: "30%",
    height: "90%",
    //margin: 10,
    borderRadius: 10,
    alignSelf: "center",
    marginLeft: 5,
    marginRight: 5,
  },
  txtMar: {
    marginRight: 5,
  },
  text: {
    fontSize: 15,
  },
  txtStyle: {
    fontWeight: "bold",
    fontSize: 17,
    marginLeft: 5,
  },
});
