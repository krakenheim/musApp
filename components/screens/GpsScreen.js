import { View, Text, StyleSheet, Dimensions, Permission } from "react-native";
import MapView, {Marker} from "react-native-maps";
import * as Location from "expo-location";
import React, {useState, useEffect} from "react";

export default function GpsScreen() {
    const [location, setLocation] = useState(null);
    

  React.useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let GeoLocation = await Location.getCurrentPositionAsync({});
      setLocation({
         latitude: GeoLocation.coords.latitude,
         longitude: GeoLocation.coords.longitude,
        });
      /* console.log(location.coords.latitude, " ", location.coords.longitude); */
      /* console.log(GeoLocation.coords.latitude, "+", GeoLocation.coords.longitude) */
      console.log(location)
    })();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 56.15818103431764,
          longitude: 10.18489837599552,
         /*  latitude: location.latitude,
          longitude: location.longitude, */
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}
      >
        {/* <Marker 
          title="Locations"
          description="Dette er testen med locations"
          coordinate={{
            latitude: 56.15818103431764,
            longitude: 10.18489837599552,
            latitude: location.latitude,
            longitude: location.longitude}}
        /> */}
      </MapView>
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
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
