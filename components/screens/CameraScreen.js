import { View, Text, StyleSheet, Dimensions, Permission } from "react-native";
import React, {useState, useEffect} from "react";

export default function CameraScreen() {
  return (
    <View>
        <Text>
            Dette er Kamera.
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
