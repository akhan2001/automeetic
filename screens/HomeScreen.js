import React from "react";
import { StyleSheet, Text, SafeAreaView, View, ScrollView } from "react-native";

//import components for buttons and data
import BigButton from "../components/BigButton";
import GroupsButton from "../components/GroupsButton";
import { groupsData } from "../components/data";
import DiscoverMoreGroupsButton from "../components/DiscoverMoreGroups";
import CalendarAgenda from "../components/CalendarAgenda";
import TopLogo from "../components/TopLogo.js";

//import navigation functionality
import { useNavigation } from "@react-navigation/native";

//page output for Home screen
export default function HomePage() {
  //navigation variable declaration
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <TopLogo />
      <View style={styles.section}>
        <Text style={styles.heading}>Upcoming Events</Text>
        <View style={styles.section}>
          <View style={styles.buttonContainer}>
            <BigButton title="Planned" />
            <BigButton title="Saved" />
            <BigButton title="Suggested" />
          </View>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.heading}>Your Groups</Text>
        <View style={styles.section}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles.scrollView}
          >
            {groupsData.map((group, index) => (
              <GroupsButton
                key={index}
                title={group.title}
                onPress={() => console.log("Pressed group:", group.title)}
                imageUrl={group.imageUrl}
                messages={group.messages}
              />
            ))}
            <DiscoverMoreGroupsButton
              onPress={() => navigation.navigate("Groups")}
            />
          </ScrollView>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.headingCalendar}>Your Calendar</Text>
        <CalendarAgenda />
      </View>
    </SafeAreaView>
  );
}

//Styles for Home Page
const styles = StyleSheet.create({
  //main container
  container: {
    flex: 1,
    backgroundColor: "rgba(16, 18, 18, 1)",
  },
  scrollContainer: {
    flex: 0.5,
  },
  //headings for each section
  heading: {
    color: "white",
    fontSize: 24,
  },
  headingCalendar: {
    color: "white",
    fontSize: 24,
    marginBottom: 10,
  },
  //section
  section: {
    justifyContent: "center",
    padding: 10,
    backgroundColor: "#141515",
  },
  //button container
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
