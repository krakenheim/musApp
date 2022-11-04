import ActButton from "../actButton";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function SelectionScreen() {

  const navigation = useNavigation();

    return (
      <View style={styles.container}>
        <Text style={styles.text}>Tryk på den funktion du ønsker.</Text>
          <ActButton tech={"NFC"} onPress={() => navigation.navigate('NFC')}></ActButton>
          <ActButton tech={"Camera"} onPress={() => navigation.navigate('Camera')}></ActButton>
          <ActButton tech={"GPS"} onPress={() => navigation.navigate('GPS')}></ActButton>
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