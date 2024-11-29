import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function BigButton({ title, onPress }) {
  const [isPressed, setIsPressed] = useState(false);

  const togglePress = () => {
    setIsPressed(!isPressed);
    if (onPress) onPress();
  };

  return (
    <TouchableOpacity
      style={[styles.customButton, isPressed ? styles.buttonPressed : null]}
      onPress={togglePress}
    >
      <Text style={[styles.buttonText, isPressed ? styles.textPressed : null]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  customButton: {
    backgroundColor: "rgba(16, 18, 18, 1)",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderWidth: 0.7,
    borderColor: "white",
    borderRadius: 15,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  buttonPressed: {
    borderColor: "rgba(38, 101, 147, 1)",
  },
  textPressed: {
    color: "rgba(38, 101, 147, 1)",
  },
});
