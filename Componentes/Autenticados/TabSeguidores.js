//import liraries
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Seguidores from "./Seguidores";

const Tab = createMaterialTopTabNavigator();

// create a component
const TabSeguidores = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Seguidos" component={Seguidores} />
      <Tab.Screen name="Seguidores" component={Seguidores} />
    </Tab.Navigator>
  );
};

//make this component available to the app
export default TabSeguidores;
