import React from "react";
import { StyleSheet, Image, ScrollView, Text } from "react-native";
import { useState, useEffect, useRef } from "react"; // import des hooks
import { Api } from "../data/Api"; // import de la fonction Api depuis le fichier Api.js
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"; // import des composants pour gérer les zones sécurisées
import Icon from "react-native-vector-icons/MaterialCommunityIcons"; // import d'une icône

export default function Feed() {
  // Initialisation d'un tableau vide d'images, contenant trois objets pour l'exemple
  const [imgList, setImgList] = useState([
    {
      id: 0,
      url:
      "https://api.nasa.gov/planetary/apod?api_key=oSYEis9hTQWp8hcqfoR1wPqkcoAxQcQGEYUhsiO2&concept_tags=True",
      date: "",
    },
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
        title: item.title,
        date: item.date, 
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
    // Utilisez la méthode .reverse() pour inverser l'ordre des éléments dans le tableau
    const reversedImgList = [...imgList].reverse();
  
    return reversedImgList.map((img, index) => (
      <React.Fragment key={img.id}>
        <Text style={styles.title}> {img.title}</Text>
        <Image
          ref={imgRefs.current[index]}
          source={{ uri: img.url }}
          style={styles.img}
        />
        <Text style={styles.text}>Image du {img.date} :</Text>
      </React.Fragment>
    ));
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          {renderImgList()}
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

// Styles pour les composants
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: "#fff",
    alignItems: "center"
  },
  img: {
    width: "90%",
    height: 500,
  },
  title: {
    fontFamily: 'serif',
    fontSize: 20, 
    fontWeight: 'bold', 
    marginTop: 20, 
    textAlign: 'center', 
  flexWrap: 'wrap',
  },
  text: {
    fontFamily: 'serif',
    justifyContent: 'center',
    marginBottom: 20,
  },
});
