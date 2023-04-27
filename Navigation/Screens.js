import React, { useState } from "react";
import { Text } from "react-native";
import { BottomNavigation } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import List from "../screens/ListScreen";
import Home from "../screens/HomeScreen";
import Search from "../screens/SearchScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../styles/Screens.styles";

// Load the icon font
Icon.loadFont();

// Function for the "Home" screen
function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={styles.title} alt="APODAPP">APODAPP 🚀</Text>
      <Home />
    </SafeAreaView>
  );
}

// Function for the "List" screen
function ListScreen() {
  return (
    <SafeAreaView style={{flex :1}}>
      <Text style={styles.title} alt="APODAPP">APODAPP 🚀</Text>
      <List />
    </SafeAreaView>
  );
}

// Function for the "Search" screen
function SearchScreen() {
  return (
    <SafeAreaView style={{flex :1}}>
      <Text style={styles.title} alt="APODAPP">APODAPP 🚀</Text>
      <Search />
    </SafeAreaView>
  );
}

// Main function for the BottomTab component
export default function BottomTab() {
  const [index, setIndex] = useState(0); // state hook to manage the index of the navigation
  const [routes] = useState([
    { key: "home", title: "Home", icon: "home-outline" },
    { key: "list", title: "List", icon: "view-list-outline" },
    { key: "search", title: "Search", icon: "calendar-search"},
  ]); // state hook to store the different navigation routes
  const renderScene = BottomNavigation.SceneMap({
    home: HomeScreen,
    list: ListScreen,
    search: SearchScreen,
  }); // create an object with the different navigation scenes

  return (
    <BottomNavigation
    navigationState={{ index, routes }}
    onIndexChange={setIndex}
    renderScene={renderScene}
    barStyle={{ backgroundColor: 'rgb(11, 61, 145)' }}
    activeColor="white"
    inactiveColor="white"
   renderIcon={({ route, focused }) => (
  <Icon
    name={route.icon}
    size={29}
    color={focused ? "black" : "white"}
  />
)}
/>)
}
