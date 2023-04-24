import React from 'react';
import { StyleSheet, View, Button, Image, ScrollView } from "react-native";
import { useState, useEffect, useRef } from "react"; // import des hooks
import BottomTab from "./components/BottomTab"; // import du composant BottomTab
import { Api } from "./data/Api"; // import de la fonction Api depuis le fichier Api.js
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"; // import des composants pour gérer les zones sécurisées
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // import d'une icône

export default function App() {
  // Initialisation d'un tableau vide d'images, contenant trois objets pour l'exemple
  const [imgList, setImgList] = useState([
    { id: 0, url: "https://api.nasa.gov/planetary/apod?api_key=oSYEis9hTQWp8hcqfoR1wPqkcoAxQcQGEYUhsiO2", date: "" },
  ]);
  // Initialisation d'une référence pour chaque image, afin de pouvoir mesurer leur taille une fois chargées
  const imgRefs = useRef([]);
  // Chargement de l'icône utilisée dans le composant BottomTab
  Icon.loadFont();

  // Utilisation du hook useEffect pour exécuter la fonction getPict au montage du composant
  useEffect(() => {
    getPict();
  }, []);

  // Fonction pour récupérer les données depuis l'API et mettre à jour le tableau d'images
  const getPict = () => {
    Api().then((data) => {
      const newImgList = data.map((item, index) => ({
        id: index,
        url: item.url,
      }));
      setImgList(newImgList);
      // Création d'une référence pour chaque image
      newImgList.forEach(() => {
        imgRefs.current.push(React.createRef());
      });
    });
  };


  // Fonction pour afficher la liste d'images
  const renderImgList = () => {
    return imgList.map((img, index) => (
      <Image
        ref={imgRefs.current[index]} // Utilisation de la référence pour chaque image
        source={{ uri: img.url }}
        key={img.id}
        style={styles.img}
      />
    ));
  };

  return (
    <SafeAreaProvider >
      <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {renderImgList()}
      </ScrollView>
      <BottomTab />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

// Styles pour les composants
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgrey",
    alignItems: "center",
    justifyContent: "center",
  },
  scrollView: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: "80%",
    height: 200,
    marginBottom: 20,
    marginTop: 40,
  }
});
