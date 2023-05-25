import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Foundation from "react-native-vector-icons/Foundation";
import AntDesign from "react-native-vector-icons/AntDesign";
import styles from "../styles/HomeStyle";

import EditProfile from "./EditProfile";
import Setting from "./Setting.js";
import BusinessPlace from "./BusinessPlace";
import Library from "./services/Library";
import Education from "./services/Education";
import Transport from "./services/Transport";
import Ticket from "./services/Ticket";
import Sport from "./services/Sport";
import Hospital from "./services/Hospital";
import Bill from "./services/Bill";
import Bank from "./services/Bank";
import Museum from "./services/Museum";
import News from "./News";
import Event from "./Event";


export default function Home({ navigation }) {
  const [eventImg, setEventImg] = useState([
    require("../../assets/event/event1.jpeg"),
    require("../../assets/event/event2.png"),
    require("../../assets/event/event3.jpeg"),
    require("../../assets/event/event4.jpeg"),
    require("../../assets/event/event5.jpeg"),
  ]);

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
          Smart City
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

      <View style={[styles.head]}>
        <Text style={[styles.txtStyle, { margin: 10 }]}>Services</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={{ flex: 1 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 20,
              }}
            >
              <View style={styles.iconSection}>
                <TouchableOpacity
                  style={styles.iconTouch}
                  onPress={() => navigation.navigate(BusinessPlace)}
                >
                  <Foundation name="target-two" size={25} color={"#2196f3"} />
                </TouchableOpacity>
                <Text style={{ color: "gray", fontSize: 13 }}>Business</Text>
              </View>
              <View style={styles.iconSection}>
                <TouchableOpacity
                  style={styles.iconTouch}
                  onPress={() => navigation.navigate(Library)}
                >
                  <MaterialCommunityIcons
                    name="library"
                    size={25}
                    color={"#2196f3"}
                  />
                </TouchableOpacity>
                <Text style={{ color: "gray", fontSize: 13 }}>Library</Text>
              </View>
              <View style={styles.iconSection}>
                <TouchableOpacity
                  style={styles.iconTouch}
                  onPress={() => navigation.navigate(Education)}
                >
                  <MaterialIcons name="school" size={25} color={"#2196f3"} />
                </TouchableOpacity>
                <Text style={{ color: "gray", fontSize: 13 }}>Education</Text>
              </View>
              <View style={styles.iconSection}>
                <TouchableOpacity
                  style={styles.iconTouch}
                  onPress={() => navigation.navigate(Transport)}
                >
                  <MaterialCommunityIcons
                    name="car"
                    size={25}
                    color={"#2196f3"}
                  />
                </TouchableOpacity>
                <Text style={{ color: "gray", fontSize: 13 }}>Transport </Text>
              </View>
              <View style={styles.iconSection}>
                <TouchableOpacity
                  style={styles.iconTouch}
                  onPress={() => navigation.navigate(Ticket)}
                >
                  <MaterialCommunityIcons
                    name="sticker-text-outline"
                    size={25}
                    color={"#2196f3"}
                  />
                </TouchableOpacity>
                <Text style={{ color: "gray", fontSize: 13 }}>Ticket</Text>
              </View>

              <View style={styles.iconSection}>
                <TouchableOpacity
                  style={styles.iconTouch}
                  onPress={() => navigation.navigate(BusinessPlace)}
                >
                  <Foundation name="target-two" size={25} color={"#2196f3"} />
                </TouchableOpacity>
                <Text style={{ color: "gray", fontSize: 13 }}>Business</Text>
              </View>
              <View style={styles.iconSection}>
                <TouchableOpacity
                  style={styles.iconTouch}
                  onPress={() => navigation.navigate(Library)}
                >
                  <MaterialCommunityIcons
                    name="library"
                    size={25}
                    color={"#2196f3"}
                  />
                </TouchableOpacity>
                <Text style={{ color: "gray", fontSize: 13 }}>Library</Text>
              </View>
           
            </View>
            <View style={{ flex: 1 }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View style={styles.iconSection}>
                  <TouchableOpacity
                    style={styles.iconTouch}
                    onPress={() => navigation.navigate(Sport)}
                  >
                    <MaterialCommunityIcons
                      name="run"
                      size={25}
                      color={"#2196f3"}
                    />
                  </TouchableOpacity>
                  <Text style={{ color: "gray", fontSize: 13 }}>Sport</Text>
                </View>
                <View style={styles.iconSection}>
                  <TouchableOpacity
                    style={styles.iconTouch}
                    onPress={() => navigation.navigate(Hospital)}
                  >
                    <MaterialCommunityIcons
                      name="hospital-building"
                      size={25}
                      color={"#2196f3"}
                    />
                  </TouchableOpacity>
                  <Text style={{ color: "gray", fontSize: 13 }}>Hospital</Text>
                </View>
                <View style={styles.iconSection}>
                  <TouchableOpacity
                    style={styles.iconTouch}
                    onPress={() => navigation.navigate(Bill)}
                  >
                    <MaterialCommunityIcons
                      name="cash-100"
                      size={25}
                      color={"#2196f3"}
                    />
                  </TouchableOpacity>
                  <Text style={{ color: "gray", fontSize: 13 }}>Bill</Text>
                </View>
                <View style={styles.iconSection}>
                  <TouchableOpacity
                    style={styles.iconTouch}
                    onPress={() => navigation.navigate(Bank)}
                  >
                    <AntDesign name="bank" size={25} color={"#2196f3"} />
                  </TouchableOpacity>
                  <Text style={{ color: "gray", fontSize: 13 }}>Bank</Text>
                </View>

                <View style={styles.iconSection}>
                  <TouchableOpacity
                    style={styles.iconTouch}
                    onPress={() => navigation.navigate(Museum)}
                  >
                    <MaterialIcons name="museum" size={25} color={"#2196f3"} />
                  </TouchableOpacity>
                  <Text style={{ color: "gray", fontSize: 13 }}>Museum</Text>
                </View>

                <View style={styles.iconSection}>
                  <TouchableOpacity
                    style={styles.iconTouch}
                    onPress={() => navigation.navigate(Sport)}
                  >
                    <MaterialCommunityIcons
                      name="run"
                      size={25}
                      color={"#2196f3"}
                    />
                  </TouchableOpacity>
                  <Text style={{ color: "gray", fontSize: 13 }}>Sport</Text>
                </View>
                <View style={styles.iconSection}>
                  <TouchableOpacity
                    style={styles.iconTouch}
                    onPress={() => navigation.navigate(Hospital)}
                  >
                    <MaterialCommunityIcons
                      name="hospital-building"
                      size={25}
                      color={"#2196f3"}
                    />
                  </TouchableOpacity>
                  <Text style={{ color: "gray", fontSize: 13 }}>Hospital</Text>
                </View>
              

              
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={{borderWidth:0.5,borderColor:'lightgray', marginTop:5}}></View>
      </View>

      <ScrollView style={styles.scroll} alwaysBounceVertical={true}>
      <View style={{flex:1}}>
        <View style={styles.body}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text
              style={[styles.txtStyle, { marginTop: 10, marginBottom: 20 }]}
            >
              Upcoming Events
            </Text>

            <TouchableOpacity
              onPress={() => navigation.navigate(Event)}
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <AntDesign
                name="calendar"
                size={20}
                color={"gray"}
                style={{ marginRight: 5 }}
              />

              <Text style={{ color: "gray" }}>View All</Text>
            </TouchableOpacity>
          </View>

          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={eventImg}
            renderItem={({ item, index }) => (
              <Image source={item} key={index} style={styles.img} />
            )}
          />
        </View>
        <View style={{borderWidth:0.5,borderColor:'lightgray', marginTop:5}}></View>
       
        <View style={styles.foot}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" , }}
          >
            <Text
              style={[styles.txtStyle, { marginTop: 10, marginBottom: 10 }]}
            >
              Latest News & Publication
            </Text>

            <TouchableOpacity
              onPress={() => navigation.navigate(News)}
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <AntDesign
                name="calendar"
                size={20}
                color={"gray"}
                style={{ marginRight: 5 }}
              />

              <Text style={{ color: "gray" }}>View All</Text>
            </TouchableOpacity>
          </View>

          <Text>Read Our Latest News. Be Always in Trend With Daily News</Text>

          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={eventImg}
            renderItem={({ item, index }) => (
              <Image source={item} key={index} style={styles.img} />
            )}
          />
        </View>

        <View style={styles.foot}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" , }}
          >
            <Text
              style={[styles.txtStyle, { marginTop: 10, marginBottom: 10 }]}
            >
              Latest News & Publication
            </Text>

            <TouchableOpacity
              onPress={() => navigation.navigate(News)}
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <AntDesign
                name="calendar"
                size={20}
                color={"gray"}
                style={{ marginRight: 5 }}
              />

              <Text style={{ color: "gray" }}>View All</Text>
            </TouchableOpacity>
          </View>

          <Text>Read Our Latest News. Be Always in Trend With Daily News</Text>

          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={eventImg}
            renderItem={({ item, index }) => (
              <Image source={item} key={index} style={styles.img} />
            )}
          />
        </View>
        </View>
      </ScrollView>
    </View>
  );
}
