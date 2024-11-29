import { StyleSheet, SafeAreaView, Text } from "react-native";
import SettingsData from "../components/SettingsData.js";
import TopLogo from "../components/TopLogo.js";

//Simple page output for settings
export default function SettingsPage() {
  return (
    <SafeAreaView style={styles.container}>
      <TopLogo />
      <Text style={styles.header}>Settings</Text>
      <SettingsData />
    </SafeAreaView>
  );
}

//Styles for Settings Page
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "left",
    alignItems: "left",
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
});
