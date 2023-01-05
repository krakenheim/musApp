/**
 * ! The nfc-native-nfc-manager does apparently not work on Expo go. 
 * ! Therefore et is necessary to build the application.
 * ! This could be a reason to separate each application part. Especially for this NFC part.
 * TODO 1. Separate this part only another project.
 * TODO 2. Build the app using eas build.
 * TODO 3. install the application on an android device
 * TODO 4. Test if the NFC module works.
*/
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Permission,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect, useCallback, useRef } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import NfcManager, {NfcTech} from 'react-native-nfc-manager'
import { Entypo } from "@expo/vector-icons";

import BottomSheet, { BottomSheetRefProps } from "../BottomSheet";

NfcManager.start();

export default function NfcScreen() {
  const ref = useRef<BottomSheetRefProps>(null);

  async function readNdef() {
    try {
      await NfcManager.requestTechnology(NfcTech.Ndef);

      const tag = await NfcManager.getTag();
      console.warn('tag found', tag);
    } catch (e) {
      console.warn('Something went wrong', e);
    } finally {
      NfcManager.cancelTechnologyRequest();
    }
  }

  const onPress = useCallback(() => {
    const isActive = ref?.current?.isActive();
    if (isActive) {
      ref?.current?.scrollTo(0);
    } else {
      ref?.current?.scrollTo(-150);
    }
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: "#111" }}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text
            style={{
              flex: 1,
              textAlign: "center",
              textAlignVertical: "center",
              alignItems: "center",
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Scan {"\n"} NFC
          </Text>
        </TouchableOpacity>
        {/*  <Text style={styles.loading}>Dette er KFC... Undskyld NFC.</Text> */}
        <BottomSheet ref={ref}>
          <View style={{ flex: 1, backgroundColor: "orange" }}>
            <Text
              style={{
                flex: 1,
                textAlign: "center",
                textAlignVertical: "center",
              }}
            >
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
    height: 100,
    borderRadius: 50,
    aspectRatio: 1,
    backgroundColor: "white",
    opacity: 0.6,
    justifyContent: "center",
    alignItems: "center",
  },
});
