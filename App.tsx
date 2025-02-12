import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Welcome from "./components/welcome";

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Welcome username="User" />
    </NavigationContainer>
  );
};

export default App;