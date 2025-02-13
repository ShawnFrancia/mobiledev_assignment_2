import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Signin from "../components/signin";
import Welcome from "../components/welcome";
import { useState } from "react";


export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {isLoggedIn ? (
        <Welcome />
      ) : (
        <Signin setIsLoggedIn={setIsLoggedIn}/>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
