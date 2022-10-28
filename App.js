import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MapView from "react-native-maps";
import ActButton from "./components/actButton";

function SelectionScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tryk på den funktion du ønsker.</Text>
        <ActButton tech={"NFC"}></ActButton>
        <ActButton tech={"Kamera"}></ActButton>
        <ActButton tech={"GPS"}></ActButton>
        <StatusBar style="auto" />
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Selection" component={SelectionScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  text: {
    paddingBottom: 10,
  },
});
