import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    ScrollView,
  } from "react-native";
  import Ionicons from "@expo/vector-icons/Ionicons";
  import MaterialIcons from "react-native-vector-icons/MaterialIcons";
  import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
  import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
  import Setting from "../../screens/Setting.js";
  import EditProfile from "../../screens/EditProfile";
  
  export default function BusinessPlace({ navigation }) {
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
            Places
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
  
        <ScrollView style={styles.body} showsHorizontalScrollIndicator={false}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 20,
            }}
          >
            <TouchableOpacity style={styles.iconTouch}>
              <FontAwesome5 name="hotel" size={35} color={"#2196f3"} />
              <Text style={styles.txt}>Hotel</Text>
            </TouchableOpacity>
  
            <TouchableOpacity style={styles.iconTouch}>
              <MaterialIcons name="restaurant" size={35} color={"#2196f3"} />
              <Text style={styles.txt}>Restaurant</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconTouch}>
              <FontAwesome5 name="shopping-cart" size={35} color={"#2196f3"} />
              <Text style={styles.txt}>City Mart</Text>
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
              <FontAwesome5 name="car-side" size={35} color={"#2196f3"} />
              <Text style={styles.txt}>Car Service</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconTouch}>
              <MaterialCommunityIcons
                name="electron-framework"
                size={35}
                color={"#2196f3"}
              />
              <Text style={styles.txt}>Electronic Shop</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconTouch}>
              <MaterialCommunityIcons
                name="hair-dryer"
                size={35}
                color={"#2196f3"}
              />
              <Text style={styles.txt}>Beauty Salon</Text>
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
              <FontAwesome5 name="hotel" size={35} color={"#2196f3"} />
              <Text style={styles.txt}>Hotel</Text>
            </TouchableOpacity>
  
            <TouchableOpacity style={styles.iconTouch}>
              <MaterialIcons name="restaurant" size={35} color={"#2196f3"} />
              <Text style={styles.txt}>Restaurant</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconTouch}>
              <FontAwesome5 name="shopping-cart" size={35} color={"#2196f3"} />
              <Text style={styles.txt}>City Mart</Text>
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
              <FontAwesome5 name="car-side" size={35} color={"#2196f3"} />
              <Text style={styles.txt}>Car Service</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconTouch}>
              <MaterialCommunityIcons
                name="electron-framework"
                size={35}
                color={"#2196f3"}
              />
              <Text style={styles.txt}>Electronic Shop</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconTouch}>
              <MaterialCommunityIcons
                name="hair-dryer"
                size={35}
                color={"#2196f3"}
              />
              <Text style={styles.txt}>Beauty Salon</Text>
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
              <FontAwesome5 name="hotel" size={35} color={"#2196f3"} />
              <Text style={styles.txt}>Hotel</Text>
            </TouchableOpacity>
  
            <TouchableOpacity style={styles.iconTouch}>
              <MaterialIcons name="restaurant" size={35} color={"#2196f3"} />
              <Text style={styles.txt}>Restaurant</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconTouch}>
              <FontAwesome5 name="shopping-cart" size={35} color={"#2196f3"} />
              <Text style={styles.txt}>City Mart</Text>
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
              <FontAwesome5 name="car-side" size={35} color={"#2196f3"} />
              <Text style={styles.txt}>Car Service</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconTouch}>
              <MaterialCommunityIcons
                name="electron-framework"
                size={35}
                color={"#2196f3"}
              />
              <Text style={styles.txt}>Electronic Shop</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconTouch}>
              <MaterialCommunityIcons
                name="hair-dryer"
                size={35}
                color={"#2196f3"}
              />
              <Text style={styles.txt}>Beauty Salon</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
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
  