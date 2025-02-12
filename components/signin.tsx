import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import React, { useState } from "react";

type SigninProps = {
  setIsLoggedIn: (isLoggedIn: boolean) => void;  
  setUsername: (username: string) => void;       
};

const Signin: React.FC<SigninProps> = ({ setIsLoggedIn, setUsername }) => {
  const [username, setUserInput] = useState<string>("");  
  const [password, setPassword] = useState<string>("");  
  const passwordValidatorRegEx = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%^&*!])[A-Za-z\d@#$%^&*!]{8,}$/;

  
  const handleSubmit = () => {
    if (username && password) {

      if (username.length < 8) {
        return alert("Username must be at least 8 characters long.");
      }

      if (passwordValidatorRegEx.test(password) === false) {
        return (
          <Text>Password must be at least 8 characters long and contain at least one letter, one number and one special character.</Text>
        );
      }
      setUsername(username);  
      setIsLoggedIn(true);    
    } 

    else {
      alert("Please enter both username and password.");
    }
  };

  return (
    <View style={style.container}>
      <Text style={style.heading}>Log in!</Text>
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
