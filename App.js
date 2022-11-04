import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SelectionScreen from "./components/screens/SelectionScreen";
import GpsScreen from "./components/screens/GpsScreen";
import NfcScreen from "./components/screens/NfcScreen";
import CameraScreen from "./components/screens/CameraScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen
          name="Start"
          component={SelectionScreen}
          options={{ title: "Select" }}
        />

        <Stack.Screen name="NFC" component={NfcScreen} />
        <Stack.Screen name="Camera" component={CameraScreen} />
        <Stack.Screen name="GPS" component={GpsScreen} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
