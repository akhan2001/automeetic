// LoadingScreen.js
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function LoadingScreen() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/logo.png")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1e1e1e",
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 5,
    aspectRatio: 1,
    resizeMode: "contain",
  },
  text: {
    fontSize: 20,
  },
});
