import React from "react";
import { View, Text, StyleSheet, Image, Button, Linking, SafeAreaView } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

type WelcomeProps = {
  username: string;
};

const Tab = createBottomTabNavigator();

type CityInfoProps = {
  cityName: string;
  cityImage: any;
  cityLink: string;
  cityDescription: string;
};

const CityInfo: React.FC<CityInfoProps> = ({ cityName, cityImage, cityLink, cityDescription }) => (
  <View style={styles.cityContainer}>
    <Image source={cityImage} style={styles.cityImage} />
    <Text style={styles.cityName}>{cityName}</Text>
    <Text style={styles.cityDescription}>{cityDescription}</Text>
    <Button title="Visit Website" onPress={() => Linking.openURL(cityLink)} />
  </View>
);

const CalgaryInfo = () => (
  <CityInfo
    cityName="Calgary"
    cityImage={require("../assets/calgary.jpg")}
    cityLink="https://www.calgary.ca/home.html"
    cityDescription="Calgary is a city in the western Canadian province of Alberta..."
  />
);

const EdmontonInfo = () => (
  <CityInfo
    cityName="Edmonton"
    cityImage={require("../assets/edmonton.jpg")}
    cityLink="https://www.edmonton.ca/"
    cityDescription="Edmonton is the capital city of the Canadian province of Alberta..."
  />
);

const Welcome: React.FC<WelcomeProps> = ({ username }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Welcome, {username}!</Text>
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
    marginTop: 20,
  },
  cityContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  cityImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  cityName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  cityDescription: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
});

export default Welcome;