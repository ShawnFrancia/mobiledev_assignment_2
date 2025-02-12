import React from "react";
import { View, Text, StyleSheet } from "react-native";

type WelcomeProps = {
  username: string;  
};

const Welcome: React.FC<WelcomeProps> = ({ username }) => {
  return (
    <View>
      <Text style={styles.text}>Welcome to My New App</Text>  
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
});

export default Welcome;
