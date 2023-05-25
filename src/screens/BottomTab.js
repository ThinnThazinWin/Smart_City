import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Home from "./Home";
import News from "./News";
import BusinessPlace from "./BusinessPlace";
import Payment from "./Payment";
import Emergency from "./Emergency";

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = "home-outline";
            } else if (route.name === "News") {
              iconName = "newspaper-variant-outline";
            } else if (route.name === "Place") {
              iconName = "map-marker-outline";
            } else if (route.name === "Payment") {
              iconName = "cash-100";
            } else if (route.name === "Emergency") {
              iconName = "bell-alert-outline";
            }
            return (
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={color}
              />
            );
          },
          tabBarActiveTintColor: "#2196f3",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="News"
          component={News}
          options={{ headerShown: false }}
        />
        
        <Tab.Screen
          name="Place"
          component={BusinessPlace}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Payment"
          component={Payment}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Emergency"
          component={Emergency}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </>
  );
}
