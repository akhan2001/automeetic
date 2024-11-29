import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import datesData from '../components/dates.json';

const DateButton = ({ text, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default function DateButtons() {
  return (
    <View style={styles.container}>
      {datesData.interests.map((item, index) => (
        <DateButton key={index} text={item.interest} onPress={() => console.log(item.interest)} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    padding: 10,
  },
  button: {
    backgroundColor: '#4D4D4D',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start', // This makes the button only as wide as its content
  },
  buttonText: {
    color: 'white',
  },
});
