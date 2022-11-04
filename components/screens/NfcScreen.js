import { View, Text, StyleSheet, Dimensions, Permission } from "react-native";
import MapView, {Marker} from "react-native-maps";
import * as Location from "expo-location";
import React, {useState, useEffect} from "react";

export default function NfcScreen() {
  return (
    <View>
        <Text>
            Dette er KFC... Undskyld NFC.
        </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
