import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//importing the pages from ./screens/
import SettingsPage from "./screens/Settings";
import LoadingScreen from "./screens/LoadingScreen";
import HomePage from "./screens/HomeScreen";
import ExplorePage from "./screens/Explore";
import MessagesPage from "./screens/Messages";
import GroupsPage from "./screens/Groups";

//bottom navigation bar
const Tab = createBottomTabNavigator();

//functions that call the screens to be displayed
function HomeScreen() {
  return (
    <View style={styles.container}>
      <HomePage />
    </View>
  );
}
function SettingsScreen() {
  return (
    <View style={styles.container}>
      <SettingsPage />
    </View>
  );
}
function ExploreScreen() {
  return (
    <View style={styles.container}>
      <ExplorePage />
    </View>
  );
}
function GroupsScreen() {
  return (
    <View style={styles.container}>
      <GroupsPage />
    </View>
  );
}
function MessagesScreen() {
  return (
    <View style={styles.container}>
      <MessagesPage />
    </View>
  );
}

//main app created
export default function App() {
  const iconBaseSize = 30;
  const circleSize = iconBaseSize * 1.5;

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Simulate a loading delay of 3 seconds
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    //navigation bar container that calls the screens when chosen. Default is Home Screen
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconImage;

            if (route.name === "Home") {
              iconImage = require("./assets/icons/home-icon.png"); // Replace with your actual image path
            } else if (route.name === "Groups") {
              iconImage = require("./assets/icons/groups-icon.png");
            } else if (route.name === "Explore") {
              iconImage = require("./assets/icons/explore-icon.png");
            } else if (route.name === "Settings") {
              iconImage = require("./assets/icons/settings-icon.png");
            } else if (route.name === "Messages") {
              iconImage = require("./assets/icons/messages-icon.png");
            }
            const backgroundColor = focused ? "#B31E43" : "transparent"; // Change the color when focused

            // returns icon with circle around
            return (
              <View
                style={{
                  width: circleSize,
                  height: circleSize,
                  borderRadius: circleSize / 2,
                  backgroundColor,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={iconImage}
                  resizeMode="contain"
                  style={{
                    width: iconBaseSize * 0.7, // Adjust the size of the icon inside the circle
                    height: iconBaseSize * 0.7, // Adjust the size of the icon inside the circle
                    tintColor: focused ? "#FFFAFF" : "#FFFAFF", // Change the icon color when focused
                  }}
                />
              </View>
            );
          },
          tabBarActiveTintColor: "#FFFAFF",
          tabBarInactiveTintColor: "#FFFAFF",
          tabBarStyle: {
            backgroundColor: "#30343F", // Tab bar background color
            paddingTop: 5,
            height: 60,
          },
          tabBarLabelStyle: {
            fontSize: 12,
          },
          tabBarShowLabel: false,
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Groups" component={GroupsScreen} />
        <Tab.Screen name="Explore" component={ExploreScreen} />
        <Tab.Screen name="Messages" component={MessagesScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  //main screen container
  container: {
    flex: 1,
  },
});
