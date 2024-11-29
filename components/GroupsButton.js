import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";

export default function GroupsButton({ title, onPress, imageUrl, messages }) {
  const truncatedTitle =
    title.length > 17 ? title.substring(0, 17) + "..." : title;

  return (
    <TouchableOpacity style={styles.groupButton} onPress={onPress}>
      <Image source={imageUrl} style={styles.groupImage} />
      <Text style={styles.groupText} numberOfLines={1}>
        {truncatedTitle}
      </Text>
      <View style={styles.messageContainer}>
        <Image
          source={require("../assets/icons/chat.png")}
          style={styles.messageIcon}
        />
        <Text style={styles.messagesText}>{messages}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  groupButton: {
    marginHorizontal: 10, // Add space between buttons
    alignItems: "center", // Center items in the button
    justifyContent: "center", // Center items in the button
    borderWidth: 1, // Set the border width
    borderColor: "#FFFAFF", // Set the border color
    borderRadius: 15, // Adjust the border radius as needed
    padding: 3,
    width: 110,
    height: 135,
  },
  groupText: {
    paddingVertical: 5,
    color: "#FFFAFF",
    fontSize: 12,
  },
  messageContainer: {
    flexDirection: "row", // Align icon and text horizontally
    alignItems: "center", // Center icon and text vertically
    marginTop: 4, // Add a little space above the message count
  },
  messageIcon: {
    width: 15,
    height: 15,
    marginRight: 5,
  },
  messagesText: {
    paddingVertical: 5,
    color: "#FFFAFF",
    fontSize: 12,
  },
  groupImage: {
    width: 100, // Set image width
    height: 70, // Set image height
    borderRadius: 10, // Optional: if you want rounded corners
  },
});
