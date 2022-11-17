import { View, Text, StyleSheet, Dimensions, Permission } from "react-native";
import React, { useState, useEffect, useRef } from "react";
import { Camera, CameraType } from "expo-camera";
// * expo install expo-camera
import * as MediaLibrary from "expo-media-library";
// * expo install expo-media-library

export default function CameraScreen() {
  const [type, setType] = useState(CameraType.back);
  const [hasPermission, setHasPermission] = useState(null);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const [image, setImage] = useState(null);
  const cameraRef = useRef(null);

  /* const [permission, requestPermission] = Camera.useCameraPermissions(); */
  useEffect(() => {
    (async () => {
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasPermission(cameraStatus.status === "granted");
    })();

    // Er i gang med at lave kamera. Permission delen er ikke færdiggjort. Se fra 9:15 fra youtubevideoen; https://www.youtube.com/watch?v=9EoKurp6V0I
  }, []);

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  return (
    <View style={styles.container}>
      <Camera
        style={styles.camera}
        type={type}
        flashMode={flash}
        ref={cameraRef}
      ></Camera>
      <View>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    //alignItems: "center",
    justifyContent: "center",
  },
  camera: {
    flex: 1,
    borderRadius: 20,
  },
});
