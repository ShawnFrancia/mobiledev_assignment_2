import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Signin from "../components/signin";
import Welcome from "../components/welcome";
import { useState } from "react";


export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {isLoggedIn ? (
        <Welcome username={username} />
      ) : (
        <Signin setIsLoggedIn={setIsLoggedIn} setUsername={setUsername} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  link: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#007bff',
    color: '#fff',
    borderRadius: 5,
    textAlign: 'center',
  },
});
