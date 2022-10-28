import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MapView from "react-native-maps";
import SelectionScreen from "./components/screens/SelectionScreen";
import GpsScreen from "./components/screens/GpsScreen";
import ActButton from "./components/actButton";



const Stack = createNativeStackNavigator();

export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="GPS">
      <Stack.Screen name="Start" component={SelectionScreen} />
      <Stack.Screen name="GPS" component={GpsScreen} />
    </Stack.Navigator>
    <StatusBar style="auto" />
  </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  
});
