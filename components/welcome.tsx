import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CalgaryInfo from "../components/CalgaryInfo";
import EdmontonInfo from "../components/EdmontonInfo";


const Tab = createBottomTabNavigator();

const Welcome: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Welcome to My New App!</Text>
      <View style={styles.tabContainer}>
        <Tab.Navigator>
          <Tab.Screen name="Calgary" component={CalgaryInfo} />
          <Tab.Screen name="Edmonton" component={EdmontonInfo} />
        </Tab.Navigator>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: '100%',
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginTop: 20,
    textAlign: "center",
  },
  tabContainer: {
    flex: 1,

  },
});

export default Welcome;