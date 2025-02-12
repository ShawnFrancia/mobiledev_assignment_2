import React from "react";
import { View, Text, StyleSheet, Image, Linking, TouchableOpacity } from "react-native";

type CityInfoProps = {
  cityName: string;
  cityImage: any;
  cityLink: string;
  cityDescription: string;
};

const CityInfo: React.FC<CityInfoProps> = ({ cityName, cityImage, cityLink, cityDescription }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{cityName}</Text>
      <Image source={cityImage} style={styles.image} />
      <TouchableOpacity onPress={() => Linking.openURL(cityLink)}>
        <Text style={styles.link}>Go to city page</Text>
      </TouchableOpacity>
      <Text style={styles.description}>{cityDescription}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  image: {
    width: 300,
    height: 200,
    marginBottom: 10,
  },
  link: {
    fontSize: 18,
    color: "blue",
    textDecorationLine: "underline",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
  },
});

export default CityInfo;