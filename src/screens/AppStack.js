import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import CustomDrawer from "../components/CustomDrawer";

import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Foundation from "react-native-vector-icons/Foundation";
import BottomTab from "./BottomTab"
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
import Setting from "./Setting";
import EditProfile from "./EditProfile";

const Drawer = createDrawerNavigator();

const AppStack = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: "#AFEEEE",
        drawerActiveTintColor: "#2196f3ff",
        //drawerInactiveTintColor: '#333',
        drawerLabelStyle: {
          marginLeft: -25,
          //fontFamily: 'Roboto-Medium',
          fontSize: 15,
        },
      }}
    >
      <Drawer.Screen
        name="Smart City"
        component={BottomTab}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
      />
     
      <Drawer.Screen
        name="Profile"
        component={EditProfile}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="person-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Business"
        component={BusinessPlace}
        options={{
          drawerIcon: ({ color }) => (
            <Foundation name="target-two" size={25} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Library"
        component={Library}
        options={{
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="library" size={25} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Education"
        component={Education}
        options={{
          drawerIcon: ({ color }) => (
            <MaterialIcons name="school" size={25} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Transport"
        component={Transport}
        options={{
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="car" size={25} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Ticket"
        component={Ticket}
        options={{
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="sticker-text-outline"
              size={25}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Sport"
        component={Sport}
        options={{
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="run" size={25} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Hospital"
        component={Hospital}
        options={{
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="hospital-building"
              size={25}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Bill"
        component={Bill}
        options={{
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="cash-100" size={25} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Bank"
        component={Bank}
        options={{
          drawerIcon: ({ color }) => (
            <AntDesign name="bank" size={25} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Museum"
        component={Museum}
        options={{
          drawerIcon: ({ color }) => (
            <MaterialIcons name="museum" size={25} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Setting"
        component={Setting}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="settings-outline" size={22} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default AppStack;
