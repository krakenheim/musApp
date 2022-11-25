import { View, Text, StyleSheet, Dimensions, Permission } from "react-native";
import React, { useState, useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import BottomSheet from "../BottomSheet";

export default function NfcScreen() {
  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: "#111" }}>
      <View>
        {/*  <Text style={styles.loading}>Dette er KFC... Undskyld NFC.</Text> */}
        <BottomSheet />
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    alignItems: "center",
    justifyContent: "center",
  },
  loading: {
    //flex: 1,
    textAlign: "center",
    textAlignVertical: "center",
    justifyContent: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});
