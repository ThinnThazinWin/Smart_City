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
  import MaterialIcons from "react-native-vector-icons/MaterialIcons"
  import AntDesign from "react-native-vector-icons/AntDesign"

  export default function News({ navigation }) {
    //sample datas
    const [memberlist, setmemberlist] = useState([
      { 
        title: "Technology",
        date: "01/01/2023",
        time: "01:01:00",
        author: "Mr. Richard",
        body:"Lorem ipsum dolor sit amet,",
         img: require("../../assets/event/event1.jpeg"),
      },
      {
        title: "Sport",
        date: "01/01/2023",
        time: "01:01:00",
        author: "Mr. Richard",
        body:"Lorem ipsum dolor sit amet,",
         img: require("../../assets/event/event4.jpeg"),
      },
      {
        title: "Politics",
        date: "01/01/2023",
        time: "01:01:00",
        author: "Mr. Richard",
        body:"Lorem ipsum dolor sit amet,",
         img: require("../../assets/event/event2.png"),
      },
      {
        title: "Health",
        date: "01/01/2023",
        time: "01:01:00",
        author: "Mr. Richard",
        body:"Lorem ipsum dolor sit amet,",
         img: require("../../assets/event/event3.jpeg"),
      },
      {
        title: "Technology",
        date: "01/01/2023",
        time: "01:01:00",
        author: "Mr. Richard",
        body:"Lorem ipsum dolor sit amet,",
         img: require("../../assets/event/event1.jpeg"),
      },
  
      {
        title: "Sport",
        date: "01/01/2023",
        time: "01:01:00",
        author: "Mr. Richard",
        body:"Lorem ipsum dolor sit amet,",
         img: require("../../assets/event/event4.jpeg"),
      },
      {
        title: "Politics",
        date: "01/01/2023",
        time: "01:01:00",
        author: "Mr. Richard",
        body:"Lorem ipsum dolor sit amet,",
         img: require("../../assets/event/event2.png"),
      },
      {
        title: "Health",
        date: "01/01/2023",
        time: "01:01:00",
        author: "Mr. Richard",
        body:"Lorem ipsum dolor sit amet,",
         img: require("../../assets/event/event3.jpeg"),
      },
      {
        title: "Technology",
        date: "01/01/2023",
        time: "01:01:00",
        author: "Mr. Richard",
        body:"Lorem ipsum dolor sit amet,",
         img: require("../../assets/event/event1.jpeg"),
      },
     
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
            style={
              { fontSize: 18, fontWeight: "bold",color: "#000", alignSelf: "center" }
            }
          >
            News
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
                 
                    <Text style={[styles.text, {fontWeight:'bold'}]}>{item.title}</Text>
                 
  
                
                    <Text style={[styles.text, {fontSize: 10}]}>{item.date}</Text>
                 
  
                  
                    
                    <Text style={[styles.text, {fontSize: 10}]}>{item.time}</Text>
                 
               <View style={{flexDirection:'row'}}> 
               <Text style={[styles.text, {fontStyle:'italic'}]}>{item.author}</Text>
               <AntDesign name='edit' size={17}/>
               </View>
                   
                 
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    
                    <Text style={styles.text}>{item.body}</Text>
                    <View style={{ alignItems: "flex-end" }}>
                      <TouchableOpacity
                        
                        style={{
                          borderWidth: 0.5,
                          borderColor: "gray",
                          width: 50,
                          height: 25,
                          borderRadius: 10,
                          alignItems: "center",
                          justifyContent: "center",
                          marginLeft: 5,
                        }}
                      >
                        <Text style={{ fontWeight: "bold", fontSize: 12 }}>
                          more
                        </Text>
                      </TouchableOpacity>
                    </View>
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

    text: {
      fontSize: 15,
      
    },
    
  });
  