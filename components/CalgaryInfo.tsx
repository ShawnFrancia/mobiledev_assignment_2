import React from "react";
import CityInfo from "./CityInfo";

const CalgaryInfo = () => (
  <CityInfo
    cityName="Calgary"
    cityImage={require("../assets/calgary.jpg")}
    cityLink="https://www.calgary.ca/home.html"
    cityDescription="Calgary is a city in the western Canadian province of Alberta..."
  />
);

export default CalgaryInfo;