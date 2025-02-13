import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import React, { useState } from "react";
import credentials from "../credentials.json";

type SigninProps = {
  setIsLoggedIn: (isLoggedIn: boolean) => void;         
};

const Signin: React.FC<SigninProps> = ({ setIsLoggedIn }) => {
  const [username, setUserInput] = useState<string>("");  
  const [password, setPassword] = useState<string>("");  
  const passwordValidatorRegEx = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&*!])[A-Za-z\d@#$%^&*!]{8,}$/;
  const [errorMessage, setErrorMessage] = useState<string>("");
  
  const handleSubmit = () => {
    if (username && password) {
      if (passwordValidatorRegEx.test(password) === false) {
        return setErrorMessage("Password must be at least 8 characters long and contain at least one uppercase, one lowercase, one number, and one special character.");
      } else if (username.length < 5) {
        return setErrorMessage("Username must be at least 5 characters long.");
      } else {
          const user = credentials.users.find(
            (user) => user.username === username && user.password === password
          );
          if (!user) {
            return setErrorMessage("Invalid username or password.");
          } else {
            setIsLoggedIn(true);
          }
        }
      }    
    else {
      setErrorMessage("Please enter a username and password.");
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
      {errorMessage ? <Text>{errorMessage}</Text> : null}    
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
