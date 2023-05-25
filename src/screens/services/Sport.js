import { StyleSheet, ScrollView,Text, View , TouchableOpacity, TextInput} from 'react-native'
import React from 'react'
import Ionicons from "react-native-vector-icons/Ionicons"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

export default function Sport({navigation}) {
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
          Sports
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

      <ScrollView   style={styles.body} showsHorizontalScrollIndicator={false}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 20,
          }}
        >
          <TouchableOpacity style={styles.iconTouch}>
            <Ionicons
              name="football"
              size={35}
              color={"#2196f3"}
            />
            <Text style={styles.txt}>Football</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconTouch}>
            <MaterialCommunityIcons
              name="golf-tee"
              size={35}
              color={"#2196f3"}
            />
            <Text style={styles.txt}>Golf</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconTouch}>
            <Ionicons
              name="basketball"
              size={35}
              color={"#2196f3"}
            />
            <Text style={styles.txt}>Basketball </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between",  marginBottom: 20, }}>
          <TouchableOpacity style={styles.iconTouch}>
            <Ionicons name="bicycle" size={35} color={"#2196f3"} />
            <Text style={styles.txt}>Cycling</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconTouch}>
            <MaterialCommunityIcons name="swim" size={35} color={"#2196f3"} />
            <Text style={styles.txt}>Swimming</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconTouch}>
            <MaterialCommunityIcons
              name="badminton"
              size={35}
              color={"#2196f3"}
            />
            <Text style={styles.txt}>Badminton</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 20,
          }}
        >
          <TouchableOpacity style={styles.iconTouch}>
            <Ionicons
              name="football"
              size={35}
              color={"#2196f3"}
            />
            <Text style={styles.txt}>Football</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconTouch}>
            <MaterialCommunityIcons
              name="golf-tee"
              size={35}
              color={"#2196f3"}
            />
            <Text style={styles.txt}>Golf</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconTouch}>
            <Ionicons
              name="basketball"
              size={35}
              color={"#2196f3"}
            />
            <Text style={styles.txt}>Basketball </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between",  marginBottom: 20, }}>
          <TouchableOpacity style={styles.iconTouch}>
            <Ionicons name="bicycle" size={35} color={"#2196f3"} />
            <Text style={styles.txt}>Cycling</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconTouch}>
            <MaterialCommunityIcons name="swim" size={35} color={"#2196f3"} />
            <Text style={styles.txt}>Swimming</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconTouch}>
            <MaterialCommunityIcons
              name="badminton"
              size={35}
              color={"#2196f3"}
            />
            <Text style={styles.txt}>Badminton</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 20,
          }}
        >
          <TouchableOpacity style={styles.iconTouch}>
            <Ionicons
              name="football"
              size={35}
              color={"#2196f3"}
            />
            <Text style={styles.txt}>Football</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconTouch}>
            <MaterialCommunityIcons
              name="golf-tee"
              size={35}
              color={"#2196f3"}
            />
            <Text style={styles.txt}>Golf</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconTouch}>
            <Ionicons
              name="basketball"
              size={35}
              color={"#2196f3"}
            />
            <Text style={styles.txt}>Basketball </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between",  marginBottom: 20, }}>
          <TouchableOpacity style={styles.iconTouch}>
            <Ionicons name="bicycle" size={35} color={"#2196f3"} />
            <Text style={styles.txt}>Cycling</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconTouch}>
            <MaterialCommunityIcons name="swim" size={35} color={"#2196f3"} />
            <Text style={styles.txt}>Swimming</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconTouch}>
            <MaterialCommunityIcons
              name="badminton"
              size={35}
              color={"#2196f3"}
            />
            <Text style={styles.txt}>Badminton</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
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
    },
    body: {
      flex: 1,
      backgroundColor: "#fff",
      padding: 15,
      //marginBottom: 5,
    },
    txt: {
      fontWeight: "500",
      marginTop: 5,
      fontSize: 13,
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
  });
  