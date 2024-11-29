import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function ExplorePage() {
  return (
    <View style={styles.logoTop}>
      <Text style={styles.logo}>
        <Text>AUTO</Text>
        <Text style={styles.logo2}>MEETIC</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  logoTop: {
    backgroundColor: '#1e1e1e',
    paddingBottom: 10,
    marginTop: 30,
  },
  logo: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    fontStyle: "italic",
    textAlign: "center",
    marginTop: 10,
  },
  logo2: {
    fontSize: 20,
    color: "white",
    fontStyle: "italic",
    textAlign: "center",
  },
});
