import React, { useState } from "react";
import { StyleSheet, View, Text, ScrollView, Screen } from "react-native";
import { Appbar, BottomNavigation } from "react-native-paper"; // import des composants Appbar et BottomNavigation de react-native-paper
import Icon from "react-native-vector-icons/MaterialCommunityIcons"; // import du composant Icon de react-native-vector-icons
import Feed from "./Feed";
import { SafeAreaView } from "react-native-safe-area-context"; // import des composants pour gérer les zones sécurisées

// fonction pour l'écran d'accueil "Home"
function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={styles.title}>APODAPP</Text>
      <Appbar.Header>
        <Appbar.Content title="Home" />
      </Appbar.Header>
      <Feed style={styles.img} />
    </SafeAreaView>
  );
}

// fonction pour l'écran de liste "List"
function ListScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.title}>APODAPP</Text>
      <Appbar.Header>
        <Appbar.Content title="List" />
      </Appbar.Header>
    </SafeAreaView>
  );
}

// fonction pour l'écran de recherche "Search"
function SearchScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.title}>APODAPP</Text>
      <Appbar.Header>
        <Appbar.Content title="Search" />
      </Appbar.Header>
    </SafeAreaView>
  );
}

// fonction principale pour le composant BottomTab
export default function BottomTab() {
  const [index, setIndex] = useState(0); // utilisation de l'état avec useState pour gérer l'index de la navigation
  const [routes] = useState([
    { key: "home", title: "Home", icon: "home-outline" },
    { key: "list", title: "List", icon: "view-list-outline" },
    { key: "search", title: "Search", icon: "calendar-search" },
  ]); // utilisation de l'état avec useState pour stocker les différentes routes de navigation

  const renderScene = BottomNavigation.SceneMap({
    home: HomeScreen,
    list: ListScreen,
    search: SearchScreen,
  }); // création d'un objet avec les différentes scènes de navigation

  return (
    <BottomNavigation
      navigationState={{ index, routes }} // configuration de la navigation avec l'index et les routes
      onIndexChange={setIndex} // gestion de l'index lorsqu'il change
      renderScene={renderScene} // affichage de la scène correspondante à l'index
      barStyle={styles.bottomNavigation} // style de la barre de navigation
      renderIcon={(
        { route, color } // affichage de l'icône correspondante à la route
      ) => <Icon name={route.icon} color={color} size={26} />}
    />
  );
}

// styles pour les différents éléments du composant
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screen: {
    flex: 1,
  },
  img: {
    flex: 1,
  },
  title: {
    backgroundColor: "thistle",
    fontFamily: "serif",
    alignItems: "center",
  },
});
