import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppStack from "./src/screens/AppStack";
import Login from "./src/screens/Login"
import Register from "./src/screens/Register"
import AppHomeUI from "./src/screens/AppHomeUI"
import BottomTab from "./src/screens/BottomTab"
import EditProfile from "./src/screens/EditProfile"
import Event from "./src/screens/Event"
import Setting from "./src/screens/Setting"
import BusinessPlace from "./src/screens/BusinessPlace";
import News from "./src/screens/News";

import Library from "./src/screens/services/Library"
import  Education from "./src/screens/services/Education"
import  Transport from "./src/screens/services/Transport"
import  Ticket from "./src/screens/services/Ticket"
import  Sport from "./src/screens/services/Sport"
import  Hospital from "./src/screens/services/Hospital"
import  Bill from "./src/screens/services/Bill"
import  Bank from "./src/screens/services/Bank"
import  Museum from "./src/screens/services/Museum"

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AppHomeUI" component={AppHomeUI} />
        
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="BottomTab" component={BottomTab} />
        <Stack.Screen name="AppStack" component={AppStack} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="Setting" component={Setting} />
        <Stack.Screen name="BusinessPlace" component={BusinessPlace} />
        <Stack.Screen name="Library" component={Library} />
        <Stack.Screen name="Education" component={Education} />
        <Stack.Screen name="Transport" component={Transport} />
        <Stack.Screen name="Ticket" component={Ticket} />
        <Stack.Screen name="Sport" component={Sport} />
        <Stack.Screen name="Hospital" component={Hospital} />
        <Stack.Screen name="Bill" component={Bill} />
        <Stack.Screen name="Bank" component={Bank} />
        <Stack.Screen name="Museum" component={Museum} />
        <Stack.Screen name="News" component={News} />
        <Stack.Screen name="Event" component={Event} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


