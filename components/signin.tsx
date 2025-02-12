import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import React, { useState } from "react";

type SigninProps = {
  booleanToggle: (isLoggedIn: boolean) => void;  
  setUsername: (username: string) => void;       
};

const Signin: React.FC<SigninProps> = ({ booleanToggle, setUsername }) => {
  const [username, setUserInput] = useState<string>("");  
  const [password, setPassword] = useState<string>("");  
  const passwordValidatorRegEx = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%^&*!])[A-Za-z\d@#$%^&*!]{8,}$/;

  
  const handleSubmit = () => {
    if (username && password) {

      if (username.length < 5) {
        return alert("Username must be at least 5 characters long.");
      }
      setUsername(username);  
      booleanToggle(true);    
    } 

    else {
      alert("Please enter both username and password.");
    }
  };

  return (
    <View style={style.container}>
      <Text style={style.heading}>Welcome to the App</Text>
      <TextInput
        style={style.input}
        placeholder="Username"
        value={username}
        onChangeText={setUserInput}  
      />
      <TextInput
        style={style.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}  
        secureTextEntry  
      />
      <Button color="purple" title="Login" onPress={handleSubmit}/>  
    </View>
  );
};

const style = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  heading: { fontSize: 20, fontWeight: "bold" },
  input: {
    width: 200,
    padding: 10,
    borderColor: "purple",
    borderWidth: 1,
    marginVertical: 10,
    borderRadius: 5,
  },
});

export default Signin;
