import ActButton from "../actButton";
import React from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity, useEffect } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as NavigationBar from "expo-navigation-bar";

export default function SelectionScreen() {

  
  const navigation = useNavigation();


    return (
      <View style={styles.container}>
        <Text style={styles.text}>Tryk på den funktion du ønsker.</Text>
          <ActButton tech={"NFC"} onPress={() => navigation.navigate('NFC')}></ActButton>
          <ActButton tech={"Camera"} onPress={() => navigation.navigate('Camera')}></ActButton>
          <ActButton tech={"GPS"} onPress={() => navigation.navigate('GPS')}></ActButton>
          <ActButton tech={"Object"} onPress={() => navigation.navigate('Object')}> </ActButton>
      </View>
    );
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