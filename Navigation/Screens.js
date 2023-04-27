import React, { useState } from "react";
import { Text } from "react-native";
import { Appbar, BottomNavigation } from "react-native-paper"; // import des composants Appbar et BottomNavigation de react-native-paper
import Icon from "react-native-vector-icons/MaterialCommunityIcons"; // import du composant Icon de react-native-vector-icons
import List from "../screens/ListScreen";
import Home from "../screens/HomeScreen";
import Search from "../screens/SearchScreen";
import { SafeAreaView } from "react-native-safe-area-context"; // import des composants pour gérer les zones sécurisées
import styles from "../styles/Screens.styles";

Icon.loadFont();

// fonction pour l'écran d'accueil "Home"
function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={styles.title} alt="APODAPP">APODAPP 🚀</Text>
      <Home />
    </SafeAreaView>
  );
}

// fonction pour l'écran de liste "List"
function ListScreen() {
  return (
    <SafeAreaView style={{flex :1}}>
      <Text style={styles.title} alt="APODAPP">APODAPP 🚀</Text>
      <List />
    </SafeAreaView>
  );
}

// fonction pour l'écran de recherche "Search"
function SearchScreen() {
  return (
    <SafeAreaView style={{flex :1}}>
      <Text style={styles.title} alt="APODAPP">APODAPP 🚀</Text>
      <Search />
    </SafeAreaView>
  );
}

// fonction principale pour le composant BottomTab
export default function BottomTab() {
  const [index, setIndex] = useState(0); // utilisation de l'état avec useState pour gérer l'index de la navigation
  const [routes] = useState([
    { key: "home", title: "Home", icon: "home-outline" },
    { key: "list", title: "List", icon: "view-list-outline" },
    { key: "search", title: "Search", icon: "calendar-search"},
  ]); 
  // utilisation de l'état avec useState pour stocker les différentes routes de navigation
  const renderScene = BottomNavigation.SceneMap({
    home: HomeScreen,
    list: ListScreen,
    search: SearchScreen,
  }); // création d'un objet avec les différentes scènes de navigation

  return (
    <BottomNavigation
    navigationState={{ index, routes }}
    onIndexChange={setIndex}
    renderScene={renderScene}
    barStyle={{ backgroundColor: 'rgb(11, 61, 145)' }}
    activeColor="white"
    inactiveColor="white"
    renderIcon={({ route }) => (
      <Icon name={route.icon} size={28} color="white" />
    )}
  />
  );
}


