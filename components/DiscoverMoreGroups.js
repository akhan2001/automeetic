import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function DiscoverMoreGroupsButton({ onPress }) {
  return (
    <TouchableOpacity style={styles.groupButton} onPress={onPress}>
      <Text style={styles.text}>Discover More</Text>
      <Text style={styles.text}>Groups</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  groupButton: {
    marginHorizontal: 10,
    alignItems: "center", // Center items in the button
    justifyContent: "center", // Center items in the button
    borderWidth: 1, // Set the border width
    borderColor: "#FFFAFF", // Set the border color
    borderRadius: 15, // Adjust the border radius as needed
    padding: 3,
    backgroundColor: "#30343F",
    width: 110,
    height: 135,
  },
  text: {
    paddingVertical: 5,
    color: "#FFFAFF",
    fontSize: 12,
  },
});
