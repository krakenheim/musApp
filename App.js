import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SelectionScreen from "./components/screens/SelectionScreen";
import GpsScreen from "./components/screens/GpsScreen";
import NfcScreen from "./components/screens/NfcScreen";
import CameraScreen from "./components/screens/CameraScreen";
import ObjectRec from "./components/screens/ObjectRec";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen
          name="Start"
          component={SelectionScreen}
          options={{
            title: "Select",
            headerTransparent: true,
            headerTitleAlign: "center",
            headerTintColor: "#111",
          }}
        />

        <Stack.Screen
          name="NFC"
          component={NfcScreen}
          options={{
            title: "NFC",
            headerTransparent: true,
            headerTitleAlign: "center",
            headerTintColor: "#111",
          }}
        />
        <Stack.Screen
          name="Camera"
          component={CameraScreen}
          options={{
            title: "Camera",
            headerTransparent: true,
            headerTitleAlign: "center",
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="GPS"
          component={GpsScreen}
          options={{
            title: "",
            headerTransparent: true,
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="Object"
          component={ObjectRec}
          options={{
            title: "Object",
            headerTransparent: true,
            headerTitleAlign: "center",
            headerTintColor: "#fff",
          }}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
