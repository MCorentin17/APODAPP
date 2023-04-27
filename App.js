import React from 'react';
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context"; // import des composants pour gérer les zones sécurisées
import Screens from './components/Screens';


export default function App() {
 

  return (
    <SafeAreaProvider >
      <View style={styles.container}>
        <Screens />
      </View>
    </SafeAreaProvider>
  );
}

// Styles pour les composants
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
