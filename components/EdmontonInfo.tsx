import React from "react";
import CityInfo from "./CityInfo";

const EdmontonInfo = () => (
  <CityInfo
    cityName="Edmonton"
    cityImage={require("../assets/edmonton.jpg")}
    cityLink="https://www.edmonton.ca/"
    cityDescription="Edmonton is the capital city of the Canadian province of Alberta..."
  />
);

export default EdmontonInfo;