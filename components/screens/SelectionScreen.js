import ActButton from "../actButton";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";

export default function SelectionScreen() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Tryk på den funktion du ønsker.</Text>
          <ActButton tech={"NFC"}></ActButton>
          <ActButton tech={"Kamera"}></ActButton>
          <ActButton tech={"GPS"}></ActButton>
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