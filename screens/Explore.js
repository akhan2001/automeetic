import React from "react";
import { StyleSheet, ScrollView, Text, TextInput } from "react-native";
import MapView from "react-native-maps";
import TopLogo from "../components/TopLogo.js";
import DatesData from "../components/DatesData.js";
import InterestData from "../components/InterestsData.js";

export default function ExplorePage() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TopLogo />
      <Text style={styles.header}>Explore Events</Text>
      <TextInput
        style={styles.input}
        placeholder="Explore upcoming events"
        placeholderTextColor={"#dedede"}
      />
      <Text style={styles.headerText}>Explore Upcoming Events</Text>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <Text style={styles.headerText}>Explore Events by Date</Text>
      <DatesData />
      <Text style={styles.headerText}>Explore Events by Interests</Text>
      <InterestData />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-start", // Align to the top
    backgroundColor: "#1e1e1e",
  },
  header: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    padding: 10,
    textAlign: "center",
    backgroundColor: "#222",
  },
  text: {
    fontSize: 25,
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
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginLeft: 15,
    textAlign: "left",
    color: "white",
  },
  map: {
    height: 230, // 30% of screen height
    marginVertical: 20, // Add space before and after the map
    marginHorizontal: 15,
    borderRadius: 60,
    overflow: "hidden",
  },
  input: {
    margin: 12,
    borderWidth: 1,
    paddingVertical: 12,
    paddingLeft: 25,
    borderColor: "#dedede",
    borderRadius: 10,
  },
  // Add styles for other sections
});
