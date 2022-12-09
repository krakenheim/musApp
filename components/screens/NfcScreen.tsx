import { View, Text, StyleSheet, Dimensions, Permission, TouchableOpacity } from "react-native";
import React, { useState, useEffect, useCallback, useRef } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import BottomSheet, { BottomSheetRefProps } from "../BottomSheet";

export default function NfcScreen() {
  const ref = useRef<BottomSheetRefProps>(null)

  const onPress = useCallback(() => {
    const isActive = ref?.current?.isActive()
    if (isActive) {
      ref?.current?.scrollTo(0);
    } else {
      ref?.current?.scrollTo(-150);
    }

    
  }, [])

  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: "#111" }}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={onPress}/>
        {/*  <Text style={styles.loading}>Dette er KFC... Undskyld NFC.</Text> */}
        <BottomSheet ref={ref} >
          <View style={{flex: 1, backgroundColor: 'orange'}}>
            <Text style={{flex: 1, textAlign: 'center', textAlignVertical: 'center'}}>
                 Her kommer ting ind i bottomsheet!
            </Text>
          </View>
        </BottomSheet>
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
  button: {
    height: 60,
    borderRadius: 30,
    aspectRatio: 1,
    backgroundColor: 'white',
    opacity: 0.6,
  }
});
