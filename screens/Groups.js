import React from "react";
import { StyleSheet, View, Text, FlatList, TextInput } from "react-native";
import GroupsCard from "../components/GroupsCard";
import { groupsData } from "../components/data";
import TopLogo from "../components/TopLogo.js";

export default function GroupsScreen() {
  const renderGroup = ({ item }) => (
    <GroupsCard
      title={item.title}
      members={item.members}
      onPress={() => console.log("Pressed join group:", item.title)}
      imageUrl={item.imageUrl}
    />
  );

  return (
    <View style={styles.container}>
      <TopLogo />
      <TextInput
        style={styles.input}
        placeholder="Explore groups"
        placeholderTextColor={"#dedede"}
      />
      <Text style={styles.header}>Groups for You</Text>
      <FlatList
        data={groupsData}
        renderItem={renderGroup}
        keyExtractor={(item, index) => String(index)}
        numColumns={2}
        columnWrapperStyle={styles.row}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  input: {
    margin: 12,
    borderWidth: 1,
    paddingVertical: 12,
    paddingLeft: 25,
    borderColor: "#dedede",
    borderRadius: 10,
  },
  header: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    padding: 10,
    textAlign: "center",
  },
  row: {
    justifyContent: "space-around",
  },
});
