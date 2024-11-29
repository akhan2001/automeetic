import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";

export default function GroupsCard({ title, onPress, members, imageUrl }) {
  return (
    <View style={styles.card}>
      <Image source={imageUrl} style={styles.image} />
      <Text style={styles.groupTitle}>{title}</Text>
      <Text style={styles.members}>{members} members</Text>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Join Group</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#333",
    borderRadius: 10,
    margin: 5,
    flex: 1,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  groupTitle: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 5,
  },
  members: {
    color: "#aaa",
    marginBottom: 5,
  },
  button: {
    backgroundColor: "#e62117",
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 5,
    alignSelf: "stretch",
    marginHorizontal: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
});
