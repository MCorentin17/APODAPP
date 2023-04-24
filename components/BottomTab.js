import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
}

function ListPict() {
  return (
    <View style={styles.container}>
      <Text>List</Text>
    </View>
  );
}

export default function BottomTab(name) {
  const tab = createBottomTabNavigator();
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <tab.Navigator>
          <tab.Screen name="Home" component={HomeScreen} />
          <tab.Screen name="List" component={ListPict} />
        </tab.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection:'row'
  },
});
